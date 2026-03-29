/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCENARIOS, TRANSLATIONS, BENCHMARKS } from './constants';
import { generateStrategicReport } from './lib/gemini';
import { 
  User, 
  Target, 
  BarChart3, 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  FileText, 
  Download, 
  Eye, 
  RefreshCw,
  AlertTriangle,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

// --- Types ---
type Lang = 'en' | 'zh';
interface Profile {
  role: string;
  focus: string;
  selfMaturity: string;
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [profile, setProfile] = useState<Profile>({ role: '', focus: '', selfMaturity: '' });
  const [answers, setAnswers] = useState<Record<string, { level: number; label: string }>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportContent, setReportContent] = useState('');
  const [editableReport, setEditableReport] = useState('');
  const [selectedUni, setSelectedUni] = useState<string | null>(null);
  const [whatif, setWhatif] = useState<Record<string, number | null>>({ p1: null, p2: null, p3: null, p4: null });

  const t = (key: string) => {
    const keys = key.split('.');
    let obj: any = TRANSLATIONS[lang];
    for (const k of keys) obj = obj?.[k];
    return obj ?? key;
  };

  // --- Derived State ---
  const scores = useMemo(() => {
    const pillarSums: number[][] = [[], [], [], []];
    SCENARIOS.forEach(s => {
      const ans = answers[s.id];
      if (ans) pillarSums[s.pillar].push(ans.level);
    });
    return pillarSums.map(arr =>
      arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length) : 0
    );
  }, [answers]);

  const overallScore = useMemo(() => {
    return scores.reduce((a, b) => a + b, 0) / 4;
  }, [scores]);

  const maturityLevel = useMemo(() => {
    const s = overallScore;
    if (s < 1.5) return 0;
    if (s < 2.5) return 1;
    if (s < 3.5) return 2;
    if (s < 4.5) return 3;
    return 4;
  }, [overallScore]);

  // --- Handlers ---
  const handleNext = () => {
    if (currentStep === 1) {
      if (!profile.role || !profile.focus || !profile.selfMaturity) {
        alert(lang === 'zh' ? '請完成所有選項後再繼續。' : 'Please complete all selections before proceeding.');
        return;
      }
    }
    if (currentStep === 2) {
      const unanswered = SCENARIOS.filter(s => !answers[s.id]);
      if (unanswered.length > 0) {
        alert(lang === 'zh' ? `尚有 ${unanswered.length} 個情境題未作答。` : `${unanswered.length} scenario(s) not answered.`);
        return;
      }
    }
    
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    try {
      const data = { profile, scores, overallScore };
      const report = await generateStrategicReport(data, lang);
      setReportContent(report);
      setEditableReport(report);
    } catch (error) {
      alert(lang === 'zh' ? '報告生成失敗，請重試。' : 'Failed to generate report. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    const content = editableReport || reportContent;
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `NCHU_AI_Governance_Report_${new Date().toISOString().split('T')[0]}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- Render Helpers ---
  const renderHeader = () => (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center text-xl">
            🎓
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold tracking-tight leading-tight">
              {t('headerTitle')}
            </h1>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
              {t('headerSub')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full">
          <button 
            onClick={() => setLang('zh')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${lang === 'zh' ? 'bg-gold text-ink' : 'text-white/60 hover:text-white'}`}
          >
            中文
          </button>
          <button 
            onClick={() => setLang('en')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all ${lang === 'en' ? 'bg-gold text-ink' : 'text-white/60 hover:text-white'}`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );

  const renderStepNav = () => (
    <nav className="bg-white border-b border-black/10 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-6 flex">
        {t('stepLabels').map((label: string, i: number) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isCompleted = completedSteps.includes(step);
          return (
            <button 
              key={step}
              onClick={() => (isCompleted || step < currentStep) && setCurrentStep(step)}
              className={`flex-1 min-w-[140px] py-4 px-2 flex flex-col items-center gap-1.5 border-b-3 transition-all ${isActive ? 'border-gold opacity-100' : isCompleted ? 'border-jade opacity-80' : 'border-transparent opacity-40'}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono border-2 ${isActive ? 'bg-gold border-gold text-ink' : isCompleted ? 'bg-jade border-jade text-white' : 'bg-fog border-black/10 text-slate'}`}>
                {isCompleted ? <CheckCircle2 size={14} /> : step}
              </div>
              <div className="text-center">
                <div className={`text-[11px] font-bold ${isActive ? 'text-ink' : 'text-slate'}`}>{label}</div>
                <div className="text-[9px] text-slate-light font-medium">{t('stepDescs')[i]}</div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {renderHeader()}
      {renderStepNav()}
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <Step1Profile 
                profile={profile} 
                setProfile={setProfile} 
                lang={lang} 
                t={t} 
                onNext={handleNext} 
              />
            )}
            {currentStep === 2 && (
              <Step2Assessment 
                answers={answers} 
                setAnswers={setAnswers} 
                lang={lang} 
                t={t} 
                onNext={handleNext} 
                onBack={handleBack} 
              />
            )}
            {currentStep === 3 && (
              <Step3Maturity 
                scores={scores} 
                overallScore={overallScore} 
                maturityLevel={maturityLevel}
                whatif={whatif}
                setWhatif={setWhatif}
                lang={lang} 
                t={t} 
                onNext={handleNext} 
                onBack={handleBack} 
              />
            )}
            {currentStep === 4 && (
              <Step4GapAnalysis 
                scores={scores}
                selectedUni={selectedUni}
                setSelectedUni={setSelectedUni}
                lang={lang} 
                t={t} 
                onNext={handleNext} 
                onBack={handleBack} 
              />
            )}
            {currentStep === 5 && (
              <Step5Report 
                profile={profile}
                scores={scores}
                overallScore={overallScore}
                maturityLevel={maturityLevel}
                reportContent={reportContent}
                editableReport={editableReport}
                setEditableReport={setEditableReport}
                isGenerating={isGenerating}
                onGenerate={handleGenerateReport}
                onDownload={handleDownload}
                lang={lang} 
                t={t} 
                onBack={handleBack} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {isGenerating && (
        <div className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl max-w-sm w-full">
            <RefreshCw className="w-12 h-12 text-gold animate-spin mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-ink mb-2">{t('loading.main')}</h3>
            <p className="text-sm text-slate-light">{t('loading.sub')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Sub-components (could be in separate files) ---

function Step1Profile({ profile, setProfile, lang, t, onNext }: any) {
  const isZH = lang === 'zh';
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-slate-light mb-2">{isZH ? '第一步' : 'Step 1 of 5'}</p>
        <h2 className="font-serif text-4xl font-bold text-ink mb-4">{isZH ? '用戶資料與情境設定' : 'User Profile & Context Setting'}</h2>
        <p className="text-slate-light max-w-xl mx-auto">{isZH ? '請提供您的職位與主要關注領域，以便系統產生量身訂製的治理分析。' : 'Provide your role and strategic focus to receive a tailored governance analysis.'}</p>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center text-2xl">👤</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '職位與角色' : 'Role & Position'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '選擇最能代表您在中興大學職責的角色' : 'Select the role that best represents your responsibilities at NCHU'}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {t('roles').map((r: any) => (
            <div 
              key={r.val}
              onClick={() => setProfile({ ...profile, role: r.val })}
              className={`radio-card ${profile.role === r.val ? 'selected' : ''}`}
            >
              <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${profile.role === r.val ? 'border-gold bg-gold' : 'border-black/10'}`}>
                {profile.role === r.val && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <div>
                <div className="text-sm font-bold text-ink">{r.label}</div>
                <div className="text-xs text-slate-light mt-0.5">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-jade-pale rounded-xl flex items-center justify-center text-2xl">🎯</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '主要關注領域' : 'Primary Strategic Focus'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '在 AI 治理背景下，您最關注的領域為何？' : 'What is your primary area of concern in the context of AI governance?'} </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {t('focuses').map((f: any) => (
            <div 
              key={f.val}
              onClick={() => setProfile({ ...profile, focus: f.val })}
              className={`radio-card ${profile.focus === f.val ? 'selected' : ''}`}
            >
              <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${profile.focus === f.val ? 'border-gold bg-gold' : 'border-black/10'}`}>
                {profile.focus === f.val && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <div className="text-sm font-bold text-ink">{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-amber-pale rounded-xl flex items-center justify-center text-2xl">📊</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '自我評估：目前 AI 成熟度' : 'Self-Assessment: Current AI Maturity'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '根據您的觀察，貴校目前的 AI 治理成熟度大致屬於哪個層級？' : 'Based on your observation, where would you place NCHU\'s AI governance maturity?'}</p>
          </div>
        </div>
        <div className="space-y-3">
          {t('selfMaturityOpts').map((opt: string, i: number) => (
            <div 
              key={i}
              onClick={() => setProfile({ ...profile, selfMaturity: String(i + 1) })}
              className={`radio-card ${profile.selfMaturity === String(i + 1) ? 'selected' : ''}`}
            >
              <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${profile.selfMaturity === String(i + 1) ? 'border-gold bg-gold' : 'border-black/10'}`}>
                {profile.selfMaturity === String(i + 1) && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <div className="text-sm font-bold text-ink">{opt}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button onClick={onNext} className="btn btn-primary px-10 py-4 text-lg rounded-2xl">
          {t('next')} <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Step2Assessment({ answers, setAnswers, lang, t, onNext, onBack }: any) {
  const isZH = lang === 'zh';
  const pillars = t('pillars');
  const pillarIcons = ['🏛', '🤝', '⚙️', '🚀'];
  const pillarColors = ['gold', 'jade', 'amber', 'crimson'];

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-slate-light mb-2">{isZH ? '第二步' : 'Step 2 of 5'}</p>
        <h2 className="font-serif text-4xl font-bold text-ink mb-4">{isZH ? '情境式評估' : 'Scenario-Based Assessment'}</h2>
        <p className="text-slate-light max-w-xl mx-auto">{isZH ? '針對 4 大治理支柱，評選最接近中興大學現況的選項。' : 'For each of the 4 governance pillars, select the option that best reflects NCHU\'s current state.'}</p>
      </div>

      {[0, 1, 2, 3].map(pIdx => (
        <div key={pIdx} className="card">
          <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
            <div className={`w-12 h-12 bg-${pillarColors[pIdx]}-pale rounded-xl flex items-center justify-center text-2xl`}>{pillarIcons[pIdx]}</div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? `支柱 ${pIdx + 1}：` : `Pillar ${pIdx + 1}: `}{pillars[pIdx]}</h3>
              <p className="text-xs text-slate-light mt-1">{SCENARIOS.filter(s => s.pillar === pIdx).length} {isZH ? '個情境題' : 'scenarios'}</p>
            </div>
          </div>
          
          <div className="space-y-10">
            {SCENARIOS.filter(s => s.pillar === pIdx).map(s => {
              const sd = (s as any)[lang];
              const ans = answers[s.id];
              return (
                <div key={s.id} className="bg-fog/50 border border-black/5 border-l-4 border-l-gold rounded-xl p-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider mb-4">
                    {pillarIcons[pIdx]} {pillars[pIdx]}
                  </div>
                  <div className="text-xs italic text-slate-light mb-2">🔍 {isZH ? '情境：' : 'Context: '}{sd.context}</div>
                  <div className="text-base font-bold text-ink mb-6">❓ {sd.question}</div>
                  <div className="grid grid-cols-1 gap-3">
                    {sd.options.map((opt: any) => (
                      <div 
                        key={opt.level}
                        onClick={() => setAnswers({ ...answers, [s.id]: { level: opt.level, label: opt.label } })}
                        className={`radio-card ${ans?.level === opt.level ? 'selected' : ''}`}
                      >
                        <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${ans?.level === opt.level ? 'border-gold bg-gold' : 'border-black/10'}`}>
                          {ans?.level === opt.level && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-bold text-ink">{opt.label}</div>
                          <div className="inline-block mt-2 px-2 py-0.5 bg-fog rounded-lg text-[9px] font-mono font-bold text-slate">Lv.{opt.level}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="btn btn-secondary px-8 py-4 text-lg rounded-2xl">
          <ArrowLeft size={20} /> {t('back')}
        </button>
        <button onClick={onNext} className="btn btn-primary px-10 py-4 text-lg rounded-2xl">
          {t('next')} <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Step3Maturity({ scores, overallScore, maturityLevel, whatif, setWhatif, lang, t, onNext, onBack }: any) {
  const isZH = lang === 'zh';
  const pillars = t('pillars');
  const maturityNames = t('maturityLevels');
  const scoreColors = ['#c0392b', '#d68910', '#c9a84c', '#2d7d67', '#1a1a2e'];
  const pillarClasses = ['p1', 'p2', 'p3', 'p4'];

  const simulatedScores = [0, 1, 2, 3].map(i => whatif[`p${i+1}`] ?? scores[i]);
  const simulatedOverall = simulatedScores.reduce((a, b) => a + b, 0) / 4;
  const simulatedLvl = useMemo(() => {
    const s = simulatedOverall;
    if (s < 1.5) return 0;
    if (s < 2.5) return 1;
    if (s < 3.5) return 2;
    if (s < 4.5) return 3;
    return 4;
  }, [simulatedOverall]);

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-slate-light mb-2">{isZH ? '第三步' : 'Step 3 of 5'}</p>
        <h2 className="font-serif text-4xl font-bold text-ink mb-4">{isZH ? '成熟度模型評量' : 'Maturity Model Evaluation'}</h2>
        <p className="text-slate-light max-w-xl mx-auto">{isZH ? '根據您的情境選擇，以下為中興大學各支柱的 AI 治理成熟度評分。' : 'Based on your scenario selections, here is NCHU\'s AI governance maturity across all pillars.'}</p>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center text-2xl">📊</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '整體成熟度評分' : 'Overall Maturity Score'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '四大支柱綜合計算結果' : 'Composite score across all four governance pillars'}</p>
          </div>
        </div>
        <div className="text-center py-8">
          <div className="font-serif text-8xl font-bold leading-none mb-4" style={{ color: scoreColors[maturityLevel] }}>
            {overallScore.toFixed(2)}
          </div>
          <div className="text-slate-light mb-6">{isZH ? '滿分 5.00' : '/ 5.00'}</div>
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg shadow-sm ${
            maturityLevel === 0 ? 'bg-crimson-pale text-crimson' :
            maturityLevel === 1 ? 'bg-amber-pale text-amber' :
            maturityLevel === 2 ? 'bg-gold-pale text-ink' :
            maturityLevel === 3 ? 'bg-jade-pale text-jade' :
            'bg-ink text-gold'
          }`}>
            {['🔴', '🟡', '🟠', '🟢', '⭐'][maturityLevel]} {maturityNames[maturityLevel]}
          </div>
        </div>
        <div className="h-px bg-black/10 my-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {scores.map((s: number, i: number) => (
            <div key={i} className="bg-fog rounded-xl p-5 text-center border border-black/5 relative overflow-hidden group">
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                i === 0 ? 'bg-gold' : i === 1 ? 'bg-jade' : i === 2 ? 'bg-amber' : 'bg-crimson'
              }`} />
              <div className="font-serif text-3xl font-bold text-ink">{s.toFixed(1)}</div>
              <div className="text-[10px] text-slate-light uppercase tracking-wider mt-1">{isZH ? '滿分 5.0' : '/ 5.0'}</div>
              <div className="text-xs font-bold text-slate mt-3 leading-tight">{pillars[i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-ink rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-gold" size={24} />
          <h3 className="font-serif text-2xl font-bold text-gold">{t('whatifTitle')}</h3>
        </div>
        <p className="text-sm text-white/60 mb-8">{t('whatifDesc')}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-white/80">{pillars[i]}</span>
                  <span className="text-gold font-mono">{(whatif[`p${i+1}`] ?? scores[i]).toFixed(1)}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  step="0.5"
                  value={whatif[`p${i+1}`] ?? scores[i]}
                  onChange={(e) => setWhatif({ ...whatif, [`p${i+1}`]: parseFloat(e.target.value) })}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-gold"
                />
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-6">
            <div className="text-xs text-white/50 mb-1">{isZH ? '模擬後整體成熟度' : 'Simulated Overall Score'}</div>
            <div className="font-serif text-5xl font-bold text-gold mb-2">{simulatedOverall.toFixed(2)}</div>
            <div className="text-xs font-medium">
              {isZH ? '較現況' : 'vs current'} {overallScore.toFixed(2)} 
              <span className={`ml-2 ${simulatedOverall > overallScore ? 'text-jade-light' : simulatedOverall < overallScore ? 'text-crimson' : 'text-white/40'}`}>
                {simulatedOverall > overallScore ? `▲ +${(simulatedOverall - overallScore).toFixed(2)}` : simulatedOverall < overallScore ? `▼ ${(simulatedOverall - overallScore).toFixed(2)}` : '（持平）'}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-white/40 uppercase tracking-widest">
              {isZH ? '模擬成熟度等級：' : 'Simulated Level: '}{maturityNames[simulatedLvl]}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-pale to-crimson-pale border border-amber/30 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber rounded-lg flex items-center justify-center text-white shadow-sm">
            <AlertTriangle size={20} />
          </div>
          <h3 className="font-serif text-xl font-bold text-ink">{t('insightTitle')}</h3>
        </div>
        <p className="text-sm text-slate font-medium mb-4">{t('insightText')}</p>
        <div className="bg-crimson-pale border-l-4 border-crimson p-4 rounded-r-xl text-sm text-crimson font-bold leading-relaxed">
          {maturityLevel === 0 && (isZH ? '若不介入，AI 零散採用將加深孤島效應，隨著教育部法規收緊，合規風險將顯著上升。' : 'Without intervention, fragmented AI adoption will deepen silos, creating compliance risks as MOE regulations tighten.')}
          {maturityLevel === 1 && (isZH ? '非正式 AI 計畫將帶來技術債務與政策缺口。若高層缺乏明確治理訊號，教師對 AI 系統的信任可能逐漸流失。' : 'Informal AI initiatives risk creating technical debt and policy gaps. Faculty trust in AI may erode without clear governance.')}
          {maturityLevel === 2 && (isZH ? '中度整合若未正式化治理，隨著教師輪替，有退回零散狀態的風險。同儕機構屆時將大幅領先。' : 'Moderate integration without formalization risks reverting to fragmented practices. Peer institutions will advance ahead.')}
          {maturityLevel === 3 && (isZH ? '治理框架完善，但若未持續投資能力發展，中興大學將面臨「治理劇場」風險。' : 'Strong governance exists, but without continuous investment, NCHU risks "governance theater" — policies without adoption.')}
          {maturityLevel === 4 && (isZH ? '定位優異。主要風險為治理自滿——靜態框架在動態 AI 環境中，18 個月內將導致退步。' : 'Excellent positioning. Primary risk is governance complacency — static frameworks will cause regression within 18 months.')}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="btn btn-secondary px-8 py-4 text-lg rounded-2xl">
          <ArrowLeft size={20} /> {t('back')}
        </button>
        <button onClick={onNext} className="btn btn-primary px-10 py-4 text-lg rounded-2xl">
          {t('next')} <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Step4GapAnalysis({ scores, selectedUni, setSelectedUni, lang, t, onNext, onBack }: any) {
  const isZH = lang === 'zh';
  const pillars = t('pillars');
  const usBenchmarkByPillar = [4.5, 4.3, 4.4, 4.2];
  const gapLabels = t('gapLabel');
  const pillarColors = ['#c9a84c', '#2d7d67', '#d68910', '#c0392b'];

  const getGapStatus = (nchu: number, us: number) => {
    const gap = us - nchu;
    if (gap < 0.8) return 0;
    if (gap < 1.5) return 1;
    return 2;
  };

  const activeUni = BENCHMARKS.find(u => u.id === selectedUni);

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-slate-light mb-2">{isZH ? '第四步' : 'Step 4 of 5'}</p>
        <h2 className="font-serif text-4xl font-bold text-ink mb-4">{isZH ? '差距分析：對標美國大學' : 'Gap Analysis vs. U.S. Universities'}</h2>
        <p className="text-slate-light max-w-xl mx-auto">{isZH ? '將中興大學各支柱成熟度與美國標竿大學進行比較。' : 'Compare NCHU\'s pillar scores against best practices from leading U.S. universities.'}</p>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-crimson-pale rounded-xl flex items-center justify-center text-2xl">📐</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '支柱差距比較' : 'Pillar Gap Comparison'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '實線 = 中興大學 | 虛線標記 = 美國標竿水準' : 'Solid bar = NCHU | Dashed marker = U.S. benchmark'}</p>
          </div>
        </div>

        <div className="space-y-8">
          {scores.map((s: number, i: number) => {
            const us = usBenchmarkByPillar[i];
            const gap = getGapStatus(s, us);
            const nchuPct = (s / 5) * 100;
            const usPct = (us / 5) * 100;
            return (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-ink">{pillars[i]}</div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    gap === 0 ? 'bg-jade-pale text-jade' : gap === 1 ? 'bg-amber-pale text-amber' : 'bg-crimson-pale text-crimson'
                  }`}>
                    {gapLabels[gap]}
                  </div>
                </div>
                <div className="relative h-10 bg-fog rounded-full border border-black/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${nchuPct}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 flex items-center pl-4 text-[10px] font-bold text-white shadow-inner"
                    style={{ backgroundColor: pillarColors[i] }}
                  >
                    NCHU {s.toFixed(1)}
                  </motion.div>
                  <div className="absolute top-1 bottom-1 w-0.5 bg-crimson/60 z-10" style={{ left: `${usPct}%` }} />
                  <div className="absolute top-1/2 -translate-y-1/2 text-[9px] font-bold text-crimson font-mono whitespace-nowrap" style={{ left: `calc(${usPct}% + 8px)` }}>
                    US {us.toFixed(1)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-gold-pale rounded-xl flex items-center justify-center text-2xl">🏫</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '美國標竿大學' : 'U.S. Benchmark Universities'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '點擊各大學了解其 AI 治理最佳實踐' : 'Click each university to explore AI governance practices'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BENCHMARKS.map(u => {
            const ud = (u as any)[lang];
            const isActive = selectedUni === u.id;
            return (
              <div 
                key={u.id}
                onClick={() => setSelectedUni(isActive ? null : u.id)}
                className={`group relative p-6 border-[1.5px] rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'border-gold bg-gold-pale/30 shadow-md' : 'border-black/10 bg-white hover:border-gold-light hover:shadow-sm'}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="text-base font-bold text-ink">{u.emoji} {ud.shortName}</div>
                  <div className="font-mono text-xs font-bold px-2 py-1 bg-jade-pale text-jade rounded-lg">{u.score} / 5.0</div>
                </div>
                <div className="text-xs text-slate-light leading-relaxed mb-4">{ud.summary}</div>
                <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-jade' : 'text-gold'}`}>
                  {isActive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  {isActive ? (isZH ? '收起詳情' : 'Collapse') : (isZH ? '點擊深入了解' : 'Explore')}
                </div>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {activeUni && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-6 bg-ink rounded-3xl p-8 text-white border border-gold/20 shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-gold mb-1">{activeUni.emoji} {(activeUni as any)[lang].name}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{(activeUni as any)[lang].focus}</p>
                  </div>
                  <button onClick={() => setSelectedUni(null)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <ChevronUp size={18} />
                  </button>
                </div>
                
                <div className="text-sm text-white/80 leading-loose mb-8">
                  {(activeUni as any)[lang].details}
                </div>

                <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 mb-8">
                  <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-3">💡 {isZH ? '中興大學可學習之處' : 'What NCHU Can Learn'}</div>
                  <div className="text-sm text-white/90 leading-relaxed italic">
                    {(activeUni as any)[lang].insight}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={activeUni.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary text-xs px-6 py-2.5 rounded-xl"
                  >
                    <ExternalLink size={14} /> {isZH ? '查看完整報告' : 'View Full Report'}
                  </a>
                  <button onClick={() => setSelectedUni(null)} className="btn bg-white/10 text-white text-xs px-6 py-2.5 rounded-xl hover:bg-white/20">
                    {isZH ? '收起' : 'Collapse'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="btn btn-secondary px-8 py-4 text-lg rounded-2xl">
          <ArrowLeft size={20} /> {t('back')}
        </button>
        <button onClick={onNext} className="btn btn-primary px-10 py-4 text-lg rounded-2xl">
          {t('next')} <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Step5Report({ profile, scores, overallScore, maturityLevel, reportContent, editableReport, setEditableReport, isGenerating, onGenerate, onDownload, lang, t, onBack }: any) {
  const isZH = lang === 'zh';
  const pillars = t('pillars');
  const maturityNames = t('maturityLevels');
  const roleLabel = t('roles').find((r: any) => r.val === profile.role)?.label || profile.role;

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-slate-light mb-2">{isZH ? '第五步' : 'Step 5 of 5'}</p>
        <h2 className="font-serif text-4xl font-bold text-ink mb-4">{isZH ? 'AI 策略報告生成' : 'AI-Generated Strategic Report'}</h2>
        <p className="text-slate-light max-w-xl mx-auto">{isZH ? '根據您的完整評估結果，系統將生成量身訂製的行政策略報告。' : 'Based on your complete assessment, the system will generate a tailored executive strategic report.'}</p>
      </div>

      <div className="card">
        <div className="flex items-start gap-4 mb-8 pb-5 border-b border-black/10">
          <div className="w-12 h-12 bg-jade-pale rounded-xl flex items-center justify-center text-2xl">📋</div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '報告操作面板' : 'Report Control Panel'}</h3>
            <p className="text-xs text-slate-light mt-1">{isZH ? '生成、預覽並下載您的完整 AI 治理策略報告' : 'Generate, preview, and download your complete AI governance strategic report'}</p>
          </div>
        </div>

        <div className="bg-gold-pale/40 border border-gold/20 rounded-2xl p-6 mb-8">
          <div className="text-[10px] font-bold text-slate uppercase tracking-widest mb-4">{isZH ? '評估摘要' : 'Assessment Summary'}</div>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="px-3 py-1.5 bg-white rounded-full text-xs font-bold text-ink shadow-sm border border-black/5 flex items-center gap-2">
              <User size={14} className="text-gold" /> {roleLabel}
            </div>
            <div className="px-3 py-1.5 bg-white rounded-full text-xs font-bold text-ink shadow-sm border border-black/5 flex items-center gap-2">
              <BarChart3 size={14} className="text-jade" /> {isZH ? '整體分數' : 'Overall'}: {overallScore.toFixed(2)}/5
            </div>
            <div className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border border-black/5 flex items-center gap-2 ${
              maturityLevel === 0 ? 'bg-crimson-pale text-crimson' :
              maturityLevel === 1 ? 'bg-amber-pale text-amber' :
              maturityLevel === 2 ? 'bg-gold-pale text-ink' :
              maturityLevel === 3 ? 'bg-jade-pale text-jade' :
              'bg-ink text-gold'
            }`}>
              {['🔴', '🟡', '🟠', '🟢', '⭐'][maturityLevel]} {maturityNames[maturityLevel]}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {scores.map((s: number, i: number) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-black/5 text-center">
                <div className="font-mono text-xl font-bold text-ink">{s.toFixed(1)}</div>
                <div className="text-[9px] text-slate-light uppercase tracking-tighter mt-1">{pillars[i]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={onGenerate} 
            disabled={isGenerating}
            className="btn btn-ink w-full sm:w-auto px-10 py-4 text-lg rounded-2xl shadow-lg"
          >
            <Zap size={20} className="text-gold" /> {isZH ? '生成 AI 策略報告' : 'Generate AI Strategic Report'}
          </button>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={() => {
                const el = document.getElementById('reportEditor');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={!reportContent}
              className="btn btn-secondary flex-1 sm:flex-none px-6 py-4 rounded-2xl"
            >
              <Eye size={18} /> {isZH ? '預覽' : 'Preview'}
            </button>
            <button 
              onClick={onDownload}
              disabled={!reportContent}
              className="btn btn-jade flex-1 sm:flex-none px-6 py-4 rounded-2xl shadow-md"
            >
              <Download size={18} /> {isZH ? '下載' : 'Download'}
            </button>
          </div>
        </div>
      </div>

      {reportContent && (
        <motion.div 
          id="reportEditor"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-ink">{isZH ? '報告預覽與編輯' : 'Report Preview & Edit'}</h3>
            <p className="text-xs text-slate-light">{isZH ? '您可以直接編輯以下內容後再下載' : 'You can edit the content below before downloading'}</p>
          </div>
          <textarea 
            value={editableReport}
            onChange={(e) => setEditableReport(e.target.value)}
            className="w-full min-h-[600px] p-10 bg-ink text-white/90 font-mono text-sm leading-relaxed rounded-3xl border-none shadow-2xl focus:ring-2 focus:ring-gold/50 outline-none resize-y"
          />
          <div className="flex justify-center">
            <button onClick={onDownload} className="btn btn-jade px-12 py-5 text-xl rounded-2xl shadow-xl">
              <Download size={24} /> {isZH ? '下載最終報告 (.txt)' : 'Download Final Report (.txt)'}
            </button>
          </div>
        </motion.div>
      )}

      <div className="flex justify-start pt-6">
        <button onClick={onBack} className="btn btn-secondary px-8 py-4 text-lg rounded-2xl">
          <ArrowLeft size={20} /> {t('back')}
        </button>
      </div>
    </div>
  );
}
