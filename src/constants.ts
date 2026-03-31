export interface Scenario {
  id: string;
  pillar: number;
  en: {
    context: string;
    question: string;
    options: { level: number; label: string }[];
  };
  zh: {
    context: string;
    question: string;
    options: { level: number; label: string }[];
  };
  ja: {
    context: string;
    question: string;
    options: { level: number; label: string }[];
  };
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'S1', pillar: 0,
    en: {
      context: 'Your institution is undergoing a strategic planning cycle for the next 5 years.',
      question: 'How does your university currently establish and communicate its AI strategy?',
      options: [
        { level: 1, label: 'No formal AI strategy exists; individual departments act independently' },
        { level: 2, label: 'Leadership has discussed AI informally, but no written strategy or mandate' },
        { level: 3, label: 'A draft AI strategy document exists but lacks executive ownership or funding' },
        { level: 4, label: 'A formal AI governance charter endorsed by the President and Board exists' },
        { level: 5, label: 'AI strategy is fully embedded in university mission, KPIs, and annual reporting' }
      ]
    },
    zh: {
      context: '貴校正在進行未來五年的策略規劃週期。',
      question: '貴校目前如何制定並傳達 AI 發展策略？',
      options: [
        { level: 1, label: '尚無正式 AI 策略，各院系各自為政' },
        { level: 2, label: '領導層曾非正式討論 AI，但無書面策略或授權' },
        { level: 3, label: '已有 AI 策略草稿，但缺乏高層認可或預算支持' },
        { level: 4, label: '已有校長與校務會議正式背書的 AI 治理憲章' },
        { level: 5, label: 'AI 策略已全面融入大學使命、KPI 及年度報告' }
      ]
    },
    ja: {
      context: '貴校は今後5年間の戦略計画サイクルに入っています。',
      question: '貴校は現在、AI戦略をどのように策定し、周知していますか？',
      options: [
        { level: 1, label: '正式なAI戦略は存在せず、各部署が独自に動いています' },
        { level: 2, label: 'リーダー層で非公式に議論されていますが、書面による戦略や権限委譲はありません' },
        { level: 3, label: 'AI戦略案は存在しますが、経営層の関与や予算が不足しています' },
        { level: 4, label: '学長および理事会によって承認された正式なAIガバナンス憲章が存在します' },
        { level: 5, label: 'AI戦略は大学のミッション、KPI、年次報告に完全に組み込まれています' }
      ]
    }
  },
  {
    id: 'S2', pillar: 0,
    en: {
      context: 'The Ministry of Education requires universities to designate AI leadership roles.',
      question: 'How is AI governance leadership structured at your institution?',
      options: [
        { level: 1, label: 'No designated AI leader; responsibility is unclear' },
        { level: 2, label: 'IT Director handles all AI decisions without academic input' },
        { level: 3, label: 'An informal AI committee meets occasionally but lacks authority' },
        { level: 4, label: 'A Chief AI Officer (or equivalent) co-leads with an academic governance committee' },
        { level: 5, label: 'Dual leadership model: CAIO + Academic AI Council with clear mandates and budgets' }
      ]
    },
    zh: {
      context: '教育部要求各大學指定 AI 領導角色。',
      question: '貴校的 AI 治理領導架構為何？',
      options: [
        { level: 1, label: '無指定 AI 負責人，責任歸屬不清' },
        { level: 2, label: '資訊長主導所有 AI 決策，缺乏學術面意見' },
        { level: 3, label: '非正式 AI 委員會偶爾開會，但缺乏決策權' },
        { level: 4, label: '設有首席 AI 官（或同等職位），與學術治理委員會共同領導' },
        { level: 5, label: '雙首長模式：CAIO + 學術 AI 委員會，有明確授權與預算' }
      ]
    },
    ja: {
      context: '文部科学省（または相当機関）は、大学にAIリーダーシップの役割を指名することを求めています。',
      question: '貴校のAIガバナンスのリーダーシップ体制はどのようになっていますか？',
      options: [
        { level: 1, label: '指名されたAIリーダーはおらず、責任の所在が不明確です' },
        { level: 2, label: 'IT責任者が学術的な意見を取り入れずにすべてのAI決定を下しています' },
        { level: 3, label: '非公式なAI委員会が時折開催されますが、権限が不足しています' },
        { level: 4, label: '最高AI責任者（CAIO）または相当職が、学術ガバナンス委員会と共同で主導しています' },
        { level: 5, label: '二頭体制：CAIOと明確な権限・予算を持つ学術AI評議会が主導しています' }
      ]
    }
  },
  {
    id: 'S3', pillar: 1,
    en: {
      context: 'Multiple departments have independently procured AI tools this year.',
      question: 'How does your institution coordinate AI tool adoption across departments?',
      options: [
        { level: 1, label: 'Each department chooses tools independently with no central oversight' },
        { level: 2, label: 'IT recommends tools, but departments are free to ignore recommendations' },
        { level: 3, label: 'Partial coordination: some shared tools exist but procurement is still fragmented' },
        { level: 4, label: 'Central governance platform with approved vendor list and procurement policy' },
        { level: 5, label: 'Fully integrated AI ecosystem with cross-unit data sharing and interoperability standards' }
      ]
    },
    zh: {
      context: '今年多個院系各自採購 AI 工具。',
      question: '貴校如何協調各院系的 AI 工具採用？',
      options: [
        { level: 1, label: '各院系自行選擇工具，無中央監管' },
        { level: 2, label: '資訊組推薦工具，但各院系可自行決定是否採用' },
        { level: 3, label: '部分協調：有共用工具，但採購仍零散' },
        { level: 4, label: '中央治理平台，有核准廠商清單與採購政策' },
        { level: 5, label: '完全整合的 AI 生態系，具跨單位資料共享與互通標準' }
      ]
    },
    ja: {
      context: '今年、複数の部署が独自にAIツールを導入しました。',
      question: '貴校は部署間でのAIツール導入をどのように調整していますか？',
      options: [
        { level: 1, label: '各部署が中央の監視なしに独立してツールを選択しています' },
        { level: 2, label: 'IT部門がツールを推奨していますが、各部署はそれを無視することができます' },
        { level: 3, label: '部分的な調整：一部の共有ツールは存在しますが、調達は依然として断片的です' },
        { level: 4, label: '承認済みベンダーリストと調達ポリシーを持つ中央ガバナンスプラットフォームがあります' },
        { level: 5, label: 'ユニット間のデータ共有と相互運用性標準を備えた、完全に統合されたAIエコシステムがあります' }
      ]
    }
  },
  {
    id: 'S4', pillar: 1,
    en: {
      context: 'A student raises concerns about AI-generated academic work during a faculty senate meeting.',
      question: 'How does your institution handle cross-unit policy development for AI academic integrity?',
      options: [
        { level: 1, label: 'No policy exists; individual faculty handle it case-by-case' },
        { level: 2, label: 'The provost has issued a memo but no enforcement mechanism exists' },
        { level: 3, label: 'Academic affairs and IT are collaborating on a draft policy' },
        { level: 4, label: 'A university-wide AI integrity policy is approved with appeals process' },
        { level: 5, label: 'Policy is continuously updated with student, faculty, and ethics board input' }
      ]
    },
    zh: {
      context: '一名學生在院務會議上提出 AI 生成學術作業的疑慮。',
      question: '貴校如何跨單位制定 AI 學術誠信政策？',
      options: [
        { level: 1, label: '無政策，各教師自行裁量' },
        { level: 2, label: '教務長已發布備忘錄，但無執行機制' },
        { level: 3, label: '教務處與資訊組正在合作起草政策' },
        { level: 4, label: '全校 AI 誠信政策已核准，並設有申訴程序' },
        { level: 5, label: '政策持續更新，納入學生、教師及倫理委員會意見' }
      ]
    },
    ja: {
      context: '教授会で、学生がAI生成物による学術的誠実性への懸念を表明しました。',
      question: '貴校はAIの学術的誠実性に関する部署横断的なポリシー策定をどのように行っていますか？',
      options: [
        { level: 1, label: 'ポリシーは存在せず、各教員がケースバイケースで対応しています' },
        { level: 2, label: '教務担当理事がメモを発行しましたが、強制力のあるメカニズムはありません' },
        { level: 3, label: '教務部門とIT部門がポリシー案の策定で協力しています' },
        { level: 4, label: '不服申し立てプロセスを含む全学的なAI誠実性ポリシーが承認されています' },
        { level: 5, label: '学生、教員、倫理委員会の意見を取り入れ、ポリシーが継続的に更新されています' }
      ]
    }
  },
  {
    id: 'S5', pillar: 2,
    en: {
      context: 'Your institution is planning its next digital infrastructure investment cycle.',
      question: 'What is the current state of AI infrastructure at your institution?',
      options: [
        { level: 1, label: 'No dedicated AI computing resources; faculty use personal accounts' },
        { level: 2, label: 'Limited GPU resources available, primarily for CS/engineering departments' },
        { level: 3, label: 'Shared HPC cluster exists but lacks AI-optimized management and data pipelines' },
        { level: 4, label: 'Dedicated AI computing environment with data governance and security policies' },
        { level: 5, label: 'Cloud-hybrid AI infrastructure with institution-wide access, observability, and compliance' }
      ]
    },
    zh: {
      context: '貴校正在規劃下一期數位基礎設施投資。',
      question: '貴校目前的 AI 基礎設施現況為何？',
      options: [
        { level: 1, label: '無專屬 AI 運算資源，教師使用個人帳戶' },
        { level: 2, label: '有限 GPU 資源，主要供資工與工程系所使用' },
        { level: 3, label: '有共用 HPC 叢集，但缺乏 AI 最佳化管理與資料管線' },
        { level: 4, label: '專屬 AI 運算環境，具資料治理與資安政策' },
        { level: 5, label: '雲端混合 AI 基礎設施，全校可存取，具可觀測性與法規遵循機制' }
      ]
    },
    ja: {
      context: '貴校は次期のデジタルインフラ投資サイクルを計画しています。',
      question: '貴校のAIインフラの現在の状況はどうなっていますか？',
      options: [
        { level: 1, label: '専用のAIコンピューティングリソースはなく、教員は個人アカウントを使用しています' },
        { level: 2, label: '主に情報工学系学部向けに、限定的なGPUリソースが利用可能です' },
        { level: 3, label: '共有HPCクラスターは存在しますが、AIに最適化された管理やデータパイプラインが不足しています' },
        { level: 4, label: 'データガバナンスとセキュリティポリシーを備えた専用のAIコンピューティング環境があります' },
        { level: 5, label: '全学的なアクセス、観測可能性、コンプライアンスを備えたクラウドハイブリッドAIインフラがあります' }
      ]
    }
  },
  {
    id: 'S6', pillar: 2,
    en: {
      context: 'The Ministry has released new AI budget allocation guidelines for universities.',
      question: 'How does your institution allocate and track AI-related budgets?',
      options: [
        { level: 1, label: 'AI spending is embedded in general IT budget with no separate tracking' },
        { level: 2, label: 'Some AI line items exist but are distributed across departments without coordination' },
        { level: 3, label: 'Central AI budget exists, but ROI measurement and reporting are informal' },
        { level: 4, label: 'Formal AI investment plan with annual review and performance metrics' },
        { level: 5, label: 'AI investment portfolio managed strategically with value realization reporting to Board' }
      ]
    },
    zh: {
      context: '教育部已發布新的大學 AI 預算配置指引。',
      question: '貴校如何配置與追蹤 AI 相關預算？',
      options: [
        { level: 1, label: 'AI 支出埋入一般資訊預算，無獨立追蹤' },
        { level: 2, label: '部分 AI 項目存在，但分散各院系，缺乏協調' },
        { level: 3, label: '有中央 AI 預算，但 ROI 衡量與報告仍非正式' },
        { level: 4, label: '正式 AI 投資計畫，有年度審查與績效指標' },
        { level: 5, label: 'AI 投資組合由策略層面管理，向校務會議報告價值實現成果' }
      ]
    },
    ja: {
      context: '省庁から大学向けの新しいAI予算配分ガイドラインが発表されました。',
      question: '貴校はAI関連の予算をどのように配分し、追跡していますか？',
      options: [
        { level: 1, label: 'AI支出は一般的なIT予算に組み込まれており、個別の追跡は行われていません' },
        { level: 2, label: '一部のAI予算項目は存在しますが、調整なしに各部署に分散しています' },
        { level: 3, label: '中央AI予算は存在しますが、ROIの測定や報告は非公式です' },
        { level: 4, label: '年次レビューとパフォーマンス指標を備えた正式なAI投資計画があります' },
        { level: 5, label: 'AI投資ポートフォリオが戦略的に管理され、価値実現状況が理事会に報告されています' }
      ]
    }
  },
  {
    id: 'S7', pillar: 3,
    en: {
      context: 'Your institution is launching a new AI literacy initiative for faculty and staff.',
      question: 'How does your institution develop AI capabilities across the institution?',
      options: [
        { level: 1, label: 'No formal AI training programs; individuals self-learn' },
        { level: 2, label: 'Occasional workshops exist but attendance is optional and untracked' },
        { level: 3, label: 'Annual AI training program exists for some roles, with basic competency tracking' },
        { level: 4, label: 'Role-based AI competency framework with mandatory training and certification' },
        { level: 5, label: 'Continuous learning ecosystem with AI-personalized upskilling paths for all staff' }
      ]
    },
    zh: {
      context: '貴校正在啟動針對教職員的 AI 素養提升計畫。',
      question: '貴校如何在全校推動 AI 能力發展？',
      options: [
        { level: 1, label: '無正式 AI 培訓計畫，個人自學' },
        { level: 2, label: '偶爾舉辦工作坊，出席為自願且未追蹤' },
        { level: 3, label: '部分職位有年度 AI 培訓計畫，並有基本能力追蹤' },
        { level: 4, label: '以角色為基礎的 AI 能力框架，有強制培訓與認證' },
        { level: 5, label: '持續學習生態系，為所有教職員提供 AI 個人化進修路徑' }
      ]
    },
    ja: {
      context: '貴校は教職員向けの新しいAIリテラシー向上イニシアチブを開始しています。',
      question: '貴校は組織全体でどのようにAI能力を開発していますか？',
      options: [
        { level: 1, label: '正式なAIトレーニングプログラムはなく、個人が独学しています' },
        { level: 2, label: '時折ワークショップが開催されますが、参加は任意で追跡もされていません' },
        { level: 3, label: '一部の職種向けに年次AIトレーニングプログラムがあり、基本的な能力追跡が行われています' },
        { level: 4, label: '義務的なトレーニングと認定を備えた、役割ベースのAIコンピテンシーフレームワークがあります' },
        { level: 5, label: '全職員向けにAIパーソナライズされたスキルアップパスを備えた継続的な学習エコシステムがあります' }
      ]
    }
  },
  {
    id: 'S8', pillar: 3,
    en: {
      context: 'A major AI vendor has approached your institution about a campus-wide implementation.',
      question: 'How does your institution manage organizational change when adopting major AI systems?',
      options: [
        { level: 1, label: 'Change is unmanaged; adoption depends on individual enthusiasm' },
        { level: 2, label: 'IT leads implementation with minimal stakeholder communication' },
        { level: 3, label: 'Change management plan exists for major projects but is inconsistently applied' },
        { level: 4, label: 'Structured change management framework with stakeholder maps and communication plans' },
        { level: 5, label: 'Adaptive change management with feedback loops, metrics, and leadership accountability' }
      ]
    },
    zh: {
      context: '一家主要 AI 廠商已與貴校接洽全校導入合作。',
      question: '貴校在導入重大 AI 系統時如何管理組織變革？',
      options: [
        { level: 1, label: '變革無人管理，採用率取決於個人熱情' },
        { level: 2, label: '資訊組主導實施，利害關係人溝通極少' },
        { level: 3, label: '重大專案有變革管理計畫，但執行不一致' },
        { level: 4, label: '結構化變革管理框架，含利害關係人地圖與溝通計畫' },
        { level: 5, label: '適應性變革管理，具回饋循環、指標與領導問責機制' }
      ]
    },
    ja: {
      context: '主要なAIベンダーが、キャンパス全体への導入について貴校にアプローチしてきました。',
      question: '貴校は主要なAIシステムを導入する際、組織の変化をどのように管理していますか？',
      options: [
        { level: 1, label: '変化は管理されておらず、導入は個人の熱意に依存しています' },
        { level: 2, label: 'IT部門が最小限のステークホルダーとのコミュニケーションで導入を主導しています' },
        { level: 3, label: '主要プロジェクト向けのチェンジマネジメント計画はありますが、適用は一貫していません' },
        { level: 4, label: 'ステークホルダーマップとコミュニケーション計画を備えた、構造化されたチェンジマネジメントフレームワークがあります' },
        { level: 5, label: 'フィードバックループ、指標、リーダーシップの責任を備えた適応的なチェンジマネジメントが行われています' }
      ]
    }
  }
];

export const BENCHMARKS = [
  {
    id: 'upenn',
    emoji: '🔵',
    score: 4.6,
    pillarScores: [4.8, 4.7, 4.5, 4.4],
    link: 'https://global.upenn.edu/news-articles/exploring-the-governance-of-artificial-intelligence/',
    en: {
      name: 'University of Pennsylvania (UPenn)',
      shortName: 'UPenn',
      focus: 'Cross-school AI governance framework',
      summary: 'Integrating law, business, and engineering schools through a unified AI governance model.',
      details: 'UPenn coordinates AI governance across Wharton, Law School, and the School of Engineering via the Penn Center for AI (AI@Penn). The university established a cross-disciplinary AI governance task force that produces binding policy recommendations, maintains a centralized AI tool registry, and runs a faculty AI ethics certification program.',
      insight: 'Your institution can adopt UPenn\'s cross-school governance model by establishing a University-Level AI Steering Committee that formally integrates various colleges.'
    },
    zh: {
      name: '賓夕法尼亞大學（UPenn）',
      shortName: 'UPenn',
      focus: '跨學院 AI 治理框架',
      summary: '透過統一治理模式整合法學院、商學院與工程學院的 AI 治理。',
      details: 'UPenn 透過賓大 AI 中心（AI@Penn），協調沃頓商學院、法學院與工程學院的 AI 治理。校方設立跨領域 AI 治理工作小組，提出具約束力的政策建議，維護集中式 AI 工具登錄冊，並推行教師 AI 倫理認證計畫。',
      insight: '貴校可參考 UPenn 的跨學院治理模式，建立正式整合各學院的全校 AI 指導委員會。'
    },
    ja: {
      name: 'ペンシルベニア大学 (UPenn)',
      shortName: 'UPenn',
      focus: '学部横断的なAIガバナンスフレームワーク',
      summary: '統一されたAIガバナンスモデルを通じて、法学、ビジネス、工学の各学部を統合しています。',
      details: 'UPennは、Penn Center for AI (AI@Penn) を通じて、ウォートン・スクール、ロースクール、工学部のAIガバナンスを調整しています。大学は、拘束力のあるポリシー推奨事項を作成し、集中化されたAIツール登録簿を維持し、教員向けのAI倫理認定プログラムを実行する、学際的なAIガバナンス・タスクフォースを設立しました。',
      insight: '貴校は、様々な学部を正式に統合する大学レベルのAI運営委員会を設立することで、UPennの学部横断的なガバナンスモデルを採用できます。'
    }
  },
  {
    id: 'yale',
    emoji: '🔷',
    score: 4.4,
    pillarScores: [4.6, 4.2, 4.3, 4.5],
    link: 'https://law.yale.edu/yls-today/news/center-advances-us-china-understanding-ai-governance',
    en: {
      name: 'Yale University',
      shortName: 'Yale',
      focus: 'Policy, ethics & global AI governance',
      summary: 'Leading AI governance through interdisciplinary ethics centers and global policy engagement.',
      details: 'Yale\'s AI governance is anchored in its Law School\'s Information Society Project and the Yale Institute for Global Affairs. The university operates a formal AI Ethics Review Board that evaluates all major AI system deployments.',
      insight: 'Your institution should establish a formal AI Ethics Review process modeled on Yale\'s impact assessment framework.'
    },
    zh: {
      name: '耶魯大學（Yale）',
      shortName: 'Yale',
      focus: '政策、倫理與全球 AI 治理',
      summary: '透過跨領域倫理中心與全球政策參與，引領 AI 治理實踐。',
      details: '耶魯的 AI 治理以法學院資訊社會計畫及耶魯全球事務研究所為核心。校方設立正式 AI 倫理審查委員會，評估所有重大 AI 系統部署。',
      insight: '貴校應參照耶魯的影響評估框架，建立正式 AI 倫理審查程序。'
    },
    ja: {
      name: 'イェール大学',
      shortName: 'Yale',
      focus: 'ポリシー、倫理、グローバルなAIガバナンス',
      summary: '学際的な倫理センターとグローバルなポリシーへの関与を通じて、AIガバナンスをリードしています。',
      details: 'イェールのAIガバナンスは、ロースクールのInformation Society ProjectとYale Institute for Global Affairsに支えられています。大学は、すべての主要なAIシステムの導入を評価する正式なAI倫理審査委員会を運営しています。',
      insight: '貴校は、イェールの影響評価フレームワークをモデルにした正式なAI倫理審査プロセスを確立すべきです。'
    }
  },
  {
    id: 'asu',
    emoji: '🟡',
    score: 4.5,
    pillarScores: [4.3, 4.5, 4.8, 4.4],
    link: 'https://edtechmagazine.com/higher/article/2026/02/overview-ai-governance-education',
    en: {
      name: 'Arizona State University (ASU)',
      shortName: 'ASU',
      focus: 'AI-driven administration & predictive analytics',
      summary: 'Using AI to transform student success, operational efficiency, and administrative intelligence.',
      details: 'ASU is recognized as a leader in deploying AI for institutional operations. Their AI-driven student success platform analyzes 800+ variables to predict at-risk students, achieving a 15% improvement in retention.',
      insight: 'Your institution can prioritize ASU\'s operational AI model as a near-term win: deploying a student early warning system using existing enrollment and academic performance data.'
    },
    zh: {
      name: '亞利桑那州立大學（ASU）',
      shortName: 'ASU',
      focus: 'AI 驅動的行政管理與預測分析',
      summary: '運用 AI 轉型學生成功、營運效率與行政智能化。',
      details: 'ASU 是在機構運營中部署 AI 的領先機構。其 AI 驅動的學生成功平台分析 800 餘項變數，預測高風險學生，留退率提升 15%。',
      insight: '貴校可優先參考 ASU 的營運 AI 模式，作為近期可見成效的切入點：利用現有入學及學業表現資料，部署學生預警系統。'
    },
    ja: {
      name: 'アリゾナ州立大学 (ASU)',
      shortName: 'ASU',
      focus: 'AI主導の管理と予測分析',
      summary: 'AIを使用して、学生の成功、業務効率、および管理インテリジェンスを変革しています。',
      details: 'ASUは、組織運営のためのAI導入のリーダーとして認められています。彼らのAI主導の学生成功プラットフォームは、800以上の変数を分析してリスクのある学生を予測し、定着率を15%向上させました。',
      insight: '貴校は、ASUの運用AIモデルを短期的な成果として優先できます。既存の入学および学業成績データを使用して、学生の早期警告システムを導入することです。'
    }
  },
  {
    id: 'drexel',
    emoji: '🟠',
    score: 4.2,
    pillarScores: [4.0, 4.5, 4.0, 4.3],
    link: 'https://edtechmagazine.com/higher/article/2026/02/overview-ai-governance-education',
    en: {
      name: 'Drexel University',
      shortName: 'Drexel',
      focus: 'Cross-functional AI governance committee',
      summary: 'Building inclusive AI governance through standing committees that span IT, faculty, and leadership.',
      details: 'Drexel\'s AI governance model centers on its University AI Standing Committee (UAISC), a permanent body comprising the CIO, 3 faculty representatives, 2 student delegates, the Provost\'s office, and external industry advisors.',
      insight: 'Drexel\'s committee model is the most directly transferable to your institution given similar institutional scale.'
    },
    zh: {
      name: '德雷塞爾大學（Drexel）',
      shortName: 'Drexel',
      focus: '跨職能 AI 治理委員會',
      summary: '透過涵蓋資訊、教師與領導層的常設委員會，建立包容性 AI 治理。',
      details: 'Drexel 的 AI 治理模式以大學 AI 常設委員會（UAISC）為核心，成員包括資訊長、3 位教師代表、2 位學生代表、教務長辦公室及外部產業顧問。',
      insight: 'Drexel 的委員會模式在機構規模上與貴校最為接近，移植性最強。'
    },
    ja: {
      name: 'ドレクセル大学',
      shortName: 'Drexel',
      focus: '部門横断的なAIガバナンス委員会',
      summary: 'IT、教員、リーダーシップにまたがる常設委員会を通じて、包括的なAIガバナンスを構築しています。',
      details: 'ドレクセルのAIガバナンスモデルは、CIO、3名の教員代表、2名の学生代表、教務担当理事室、および外部の業界アドバイザーで構成される恒久的な組織である大学AI常設委員会 (UAISC) を中心としています。',
      insight: 'ドレクセルの委員会モデルは、同様の組織規模を考えると、貴校に最も直接的に転用可能です。'
    }
  }
];

export const TRANSLATIONS: any = {
  en: {
    stepLabels: ['Profile', 'Assessment', 'Maturity Score', 'Gap Analysis', 'Strategic Report'],
    stepDescs: ['User Context', 'Scenario-Based', 'Evaluation', 'vs U.S. Benchmarks', 'AI-Generated'],
    headerTitle: 'AI Governance Maturity Dashboard',
    headerSub: 'Global University Assessment Platform',
    next: 'Next',
    back: 'Back',
    generate: '⚡ Generate AI Report',
    preview: '👁 Preview Report',
    download: '⬇ Download Report (.txt)',
    loading: { main: 'Analyzing…', sub: 'Generating strategic insights' },
    step: 'Step',
    pillars: ['Strategy & Leadership', 'Cross-Unit Collaboration', 'Resources & Infrastructure', 'Capability & Change Management'],
    maturityLevels: ['Initial', 'Developing', 'Defined', 'Managed', 'Optimized'],
    maturityShort: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
    roles: [
      { val: 'president', label: 'President', sub: 'University strategic leadership' },
      { val: 'provost', label: 'Provost / Academic Affairs', sub: 'Academic operations & curriculum' },
      { val: 'dean', label: 'Dean', sub: 'College or faculty leadership' },
      { val: 'itdirector', label: 'IT Director', sub: 'Technology & digital infrastructure' }
    ],
    focuses: [
      { val: 'strategy', label: '🎯 Strategy' }, { val: 'teaching', label: '📚 Teaching & Learning' },
      { val: 'research', label: '🔬 Research' }, { val: 'admin', label: '⚙️ Administration' }
    ],
    selfMaturityOpts: ['1 – Exploring: Ad-hoc AI use, no governance', '2 – Initiating: Some policies being developed', '3 – Integrating: Coordination exists but fragmented', '4 – Governing: Systematic governance in place', '5 – Transforming: AI embedded institution-wide'],
    gapLabel: ['Minimal', 'Moderate', 'Significant'],
    whatifTitle: 'What-if Simulation',
    whatifDesc: 'Adjust pillar investments to see how your overall maturity score could improve.',
    insightTitle: 'Executive Risk Insight',
    insightText: 'If your institution takes no action over the next 2 years:',
    downloadNote: 'Report generated by AI Governance Dashboard',
    pillarShort: ['Strategy', 'Collab', 'Resources', 'Capability'],
    uniNameLabel: 'University Name',
    uniNameDesc: 'Enter your university name (optional)',
    uniNamePlaceholder: 'Enter institution name...',
    roleLabel: 'Your Role',
    roleDesc: 'Select the role that best represents your responsibilities',
    focusTitle: 'Primary Strategic Focus',
    focusDesc: 'What is your primary area of concern in the context of AI governance?',
    selfMatTitle: 'Self-Assessment: Current AI Maturity',
    selfMatDesc: 'Based on your observation, where would you place your institution\'s AI governance maturity?',
    generateBtn: '⚡ Generate Strategic Report',
    previewBtn: '👁 Preview Report',
    downloadBtn: '⬇ Download (.txt)',
    reportPanelLabel: 'Report Control Panel',
    reportPanelDesc: 'Generate and download your AI-powered strategic analysis.',
    assessmentSummary: 'Assessment Summary',
    reportEditorTitle: 'Strategic Report Editor',
    reportEditorDesc: 'Review and refine the AI-generated strategic recommendations.',
    yourInstitution: 'Your Institution',
    learnFromLabel: 'Strategic Insights',
    viewFullReport: 'View Full Report',
    collapse: 'Collapse',
    explore: 'Explore',
    pillarLabel: 'Pillar',
    scenariosLabel: 'scenarios',
    contextLabel: 'Context',
    overallMaturityTitle: 'Overall Maturity Score',
    overallMaturityDesc: 'Composite score across all four governance pillars',
    maxScoreLabel: '/ 5.00',
    simulatedOverallLabel: 'Simulated Overall Score',
    vsCurrentLabel: 'vs current',
    noChangeLabel: 'No change',
    simulatedLevelLabel: 'Simulated Level',
    riskInsights: [
      'Without intervention, fragmented AI adoption will deepen silos, creating compliance risks as regulations tighten.',
      'Informal AI initiatives risk creating technical debt and policy gaps. Faculty trust in AI may erode without clear governance.',
      'Moderate integration without formalization risks reverting to fragmented practices. Peer institutions will advance ahead.',
      'Strong governance exists, but without continuous investment, your institution risks "governance theater" — policies without adoption.',
      'Excellent positioning. Primary risk is governance complacency — static frameworks will cause regression within 18 months.'
    ],
    step1Title: 'User Profile & Context Setting',
    step1Desc: 'Provide your role and strategic focus to receive a tailored governance analysis.',
    step2Title: 'Scenario Assessment',
    step2Desc: 'Evaluate your institution\'s readiness across key AI implementation scenarios.',
    step3Title: 'Maturity Assessment',
    step3Desc: 'Assess your current governance capabilities across four strategic pillars.',
    step4Title: 'Gap Analysis',
    step4Desc: 'Compare your current state with leading global benchmarks.',
    step5Title: 'Strategic Report',
    step5Desc: 'Review your personalized AI governance roadmap and recommendations.',
    gapLabels: ['Minimal', 'Moderate', 'Significant'],
    gapCompLabel: 'Benchmark Comparison',
    gapCompDesc: 'Solid bar = Your Institution | Dashed marker = U.S. benchmark',
    benchmarkTitle: 'U.S. Benchmark Universities',
    benchmarkDesc: 'Click each university to explore AI governance practices',
    overallScoreLabel: 'Overall Maturity Score',
    overallScoreDesc: 'Composite score across all four governance pillars',
    overallLabel: 'Overall',
    completeSelections: 'Please complete all selections before proceeding.',
    scenariosUnanswered: 'scenario(s) not answered.',
    genFailed: 'Failed to generate report. Please try again.'
  },
  zh: {
    stepLabels: ['用戶資料', '情境評估', '成熟度評分', '差距分析', '策略報告'],
    stepDescs: ['基本設定', '情境題組', '綜合評量', '對標美國大學', 'AI 生成報告'],
    headerTitle: 'AI 治理成熟度儀表板',
    headerSub: '全球大學評估平台',
    next: '下一步',
    back: '返回',
    generate: '⚡ 生成 AI 策略報告',
    preview: '👁 預覽完整報告',
    download: '⬇ 下載報告 (.txt)',
    loading: { main: 'AI 分析中…', sub: '正在生成策略建議' },
    step: '步驟',
    pillars: ['策略與領導力', '跨單位協作', '資源與基礎設施', '能力與變革管理'],
    maturityLevels: ['初始階段', '發展階段', '定義階段', '管理階段', '優化階段'],
    maturityShort: ['第一級', '第二級', '第三級', '第四級', '第五級'],
    roles: [
      { val: 'president', label: '校長', sub: '大學整體策略領導' },
      { val: 'provost', label: '教務長', sub: '學術事務與課程規劃' },
      { val: 'dean', label: '院長', sub: '學院或學系領導' },
      { val: 'itdirector', label: '資訊長', sub: '資訊技術與數位基礎建設' }
    ],
    focuses: [
      { val: 'strategy', label: '🎯 策略規劃' }, { val: 'teaching', label: '📚 教學與學習' },
      { val: 'research', label: '🔬 研究發展' }, { val: 'admin', label: '⚙️ 行政管理' }
    ],
    selfMaturityOpts: ['1 – 探索期：零散使用 AI，無治理機制', '2 – 導入期：部分政策正在制定中', '3 – 整合期：協調機制存在但仍碎片化', '4 – 治理期：系統性治理架構已建立', '5 – 轉型期：AI 全面嵌入大學運作'],
    gapLabel: ['差距小', '差距中', '差距大'],
    whatifTitle: '情境模擬器',
    whatifDesc: '調整各支柱的投資力度，觀察整體成熟度分數的改善空間。',
    insightTitle: '行政風險洞察',
    insightText: '若貴校未來兩年不採取行動：',
    downloadNote: '本報告由 AI 治理成熟度儀表板生成',
    pillarShort: ['策略', '協作', '資源', '能力'],
    uniNameLabel: '學校名稱',
    uniNameDesc: '請輸入您的學校名稱（可選）',
    uniNamePlaceholder: '請輸入學校名稱...',
    roleLabel: '您的角色',
    roleDesc: '選擇最能代表您職責的角色',
    focusTitle: '主要關注領域',
    focusDesc: '在 AI 治理背景下，您最關注的領域為何？',
    selfMatTitle: '自我評估：目前 AI 成熟度',
    selfMatDesc: '根據您的觀察，貴校目前的 AI 治理成熟度大致屬於哪個層級？',
    generateBtn: '⚡ 生成策略報告',
    previewBtn: '👁 預覽報告',
    downloadBtn: '⬇ 下載 (.txt)',
    reportPanelLabel: '報告控制面板',
    reportPanelDesc: '生成並下載您的 AI 策略分析報告。',
    assessmentSummary: '評估摘要',
    reportEditorTitle: '策略報告編輯器',
    reportEditorDesc: '審閱並完善 AI 生成的策略建議。',
    yourInstitution: '貴校',
    learnFromLabel: '策略建議',
    viewFullReport: '查看完整報告',
    collapse: '收起',
    explore: '點擊深入了解',
    pillarLabel: '支柱',
    scenariosLabel: '個情境題',
    contextLabel: '情境',
    overallMaturityTitle: '整體成熟度評分',
    overallMaturityDesc: '四大支柱綜合計算結果',
    maxScoreLabel: '滿分 5.00',
    simulatedOverallLabel: '模擬後整體成熟度',
    vsCurrentLabel: '較現況',
    noChangeLabel: '（持平）',
    simulatedLevelLabel: '模擬成熟度等級',
    riskInsights: [
      '若不介入，AI 零散採用將加深孤島效應，隨著法規收緊，合規風險將顯著上升。',
      '非正式 AI 計畫將帶來技術債務與政策缺口。若高層缺乏明確治理訊號，教師對 AI 系統的信任可能逐漸流失。',
      '中度整合若未正式化治理，隨著教師輪替，有退回零散狀態的風險。同儕機構屆時將大幅領先。',
      '治理框架完善，但若未持續投資能力發展，貴校將面臨「治理劇場」風險。',
      '定位優異。主要風險為治理自滿——靜態框架在動態 AI 環境中，18 個月內將導致退步。'
    ],
    step1Title: '用戶資料與情境設定',
    step1Desc: '請提供您的職位與主要關注領域，以便系統產生量身訂製的治理分析。',
    step2Title: '情境評估',
    step2Desc: '評估貴校在關鍵 AI 實施情境中的準備程度。',
    step3Title: '成熟度評估',
    step3Desc: '評估您在四個策略支柱中的當前治理能力。',
    step4Title: '差距分析',
    step4Desc: '將您的現狀與全球領先基準進行比較。',
    step5Title: '策略報告',
    step5Desc: '查看您的個性化 AI 治理路線圖與建議。',
    gapLabels: ['輕微', '中度', '顯著'],
    gapCompLabel: '基準比較',
    gapCompDesc: '實線 = 貴校 | 虛線標記 = 美國標竿水準',
    benchmarkTitle: '美國標竿大學',
    benchmarkDesc: '點擊各大學了解其 AI 治理最佳實踐',
    overallScoreLabel: '整體成熟度評分',
    overallScoreDesc: '四大支柱綜合計算結果',
    overallLabel: '整體分數',
    completeSelections: '請完成所有選項後再繼續。',
    scenariosUnanswered: '個情境題未作答。',
    genFailed: '報告生成失敗，請重試。'
  },
  ja: {
    stepLabels: ['プロフィール', '評価', '成熟度スコア', 'ギャップ分析', '戦略レポート'],
    stepDescs: ['ユーザーコンテキスト', 'シナリオベース', '評価', '米国ベンチマーク比較', 'AI生成'],
    headerTitle: 'AIガバナンス成熟度ダッシュボード',
    headerSub: 'グローバル大学評価プラットフォーム',
    next: '次へ',
    back: '戻る',
    generate: '⚡ AIレポートを生成',
    preview: '👁 レポートをプレビュー',
    download: '⬇ レポートをダウンロード (.txt)',
    loading: { main: '分析中…', sub: '戦略的な洞察を生成しています' },
    step: 'ステップ',
    pillars: ['戦略とリーダーシップ', '部門間連携', 'リソースとインフラ', '能力とチェンジマネジメント'],
    maturityLevels: ['初期', '発展中', '定義済み', '管理済み', '最適化済み'],
    maturityShort: ['レベル 1', 'レベル 2', 'レベル 3', 'レベル 4', 'レベル 5'],
    roles: [
      { val: 'president', label: '学長', sub: '大学の戦略的リーダーシップ' },
      { val: 'provost', label: '教務担当理事', sub: '学術運営とカリキュラム' },
      { val: 'dean', label: '学部長', sub: '学部または学科のリーダーシップ' },
      { val: 'itdirector', label: 'IT責任者', sub: 'テクノロジーとデジタルインフラ' }
    ],
    focuses: [
      { val: 'strategy', label: '🎯 戦略' }, { val: 'teaching', label: '📚 教育と学習' },
      { val: 'research', label: '🔬 研究' }, { val: 'admin', label: '⚙️ 管理運営' }
    ],
    selfMaturityOpts: ['1 – 探索期：アドホックなAI利用、ガバナンスなし', '2 – 導入期：一部のポリシーを策定中', '3 – 統合期：調整は存在するが断片的', '4 – 統治期：体系的なガバナンスが確立', '5 – 変革期：AIが組織全体に組み込まれている'],
    gapLabel: ['最小', '中程度', '重大'],
    whatifTitle: 'ホワットイフ・シミュレーション',
    whatifDesc: '各柱への投資を調整して、全体的な成熟度スコアがどのように向上するかを確認します。',
    insightTitle: 'エグゼクティブ・リスク洞察',
    insightText: '貴校が今後2年間にわたって対策を講じない場合：',
    downloadNote: 'このレポートはAIガバナンス成熟度ダッシュボードによって生成されました',
    pillarShort: ['戦略', '連携', 'リソース', '能力'],
    uniNameLabel: '大学名',
    uniNameDesc: '大学名を入力してください（任意）',
    uniNamePlaceholder: '大学名を入力...',
    roleLabel: 'あなたの役割',
    roleDesc: 'あなたの責任を最もよく表す役割を選択してください',
    focusTitle: '主要な戦略的焦点',
    focusDesc: 'AIガバナンスの文脈において、あなたの主な関心事は何ですか？',
    selfMatTitle: '自己評価：現在のAI成熟度',
    selfMatDesc: 'あなたの観察に基づいて、貴校のAIガバナンスの成熟度はどの段階にあると思いますか？',
    generateBtn: '⚡ 戦略レポートを生成',
    previewBtn: '👁 レポートをプレビュー',
    downloadBtn: '⬇ ダウンロード (.txt)',
    reportPanelLabel: 'レポート操作パネル',
    reportPanelDesc: 'AI戦略分析レポートの生成とダウンロード。',
    assessmentSummary: '評価概要',
    reportEditorTitle: '戦略レポートエディタ',
    reportEditorDesc: 'AIが生成した戦略的推奨事項を確認し、洗練させます。',
    yourInstitution: '貴校',
    learnFromLabel: '戦略的洞察',
    viewFullReport: '完整レポートを表示',
    collapse: '閉じる',
    explore: '詳細を見る',
    pillarLabel: '柱',
    scenariosLabel: '個のシナリオ',
    contextLabel: 'コンテキスト',
    overallMaturityTitle: '総合成熟度スコア',
    overallMaturityDesc: '4つのガバナンスの柱すべてにわたる複合スコア',
    maxScoreLabel: '最大 5.00',
    simulatedOverallLabel: 'シミュレーション後の総合成熟度',
    vsCurrentLabel: '現在と比較',
    noChangeLabel: '（変更なし）',
    simulatedLevelLabel: 'シミュレーション後のレベル',
    riskInsights: [
      '介入がなければ、断片的なAI導入はサイロ化を深め、規制が強化されるにつれてコンプライアンスリスクが高まります。',
      '非公式なAIイニシアチブは、技術的負債と政策のギャップを生むリスクがあります。明確なガバナンスがなければ、AIへの信頼が損なわれる可能性があります。',
      '形式化されていない中程度の統合は、断片的な慣行に戻るリスクがあります。競合機関が先行することになります。',
      '強力なガバナンスが存在しますが、継続的な投資がなければ、貴校は「ガバナンス・シアター」（形だけの政策）のリスクに直面します。',
      '優れたポジショニングです。主なリスクはガバナンスの自己満足です。静的なフレームワークは18か月以内に後退を引き起こします。'
    ],
    step1Title: 'ユーザープロフィールとコンテキスト設定',
    step1Desc: 'カスタマイズされたガバナンス分析を受け取るために、あなたの役割と戦略的焦点を入力してください。',
    step2Title: 'シナリオ評価',
    step2Desc: '主要なAI導入シナリオにおける組織の準備状況を評価します。',
    step3Title: '成熟度評価',
    step3Desc: '4つの戦略的柱における現在のガバナンス能力を評価します。',
    step4Title: 'ギャップ分析',
    step4Desc: '現在の状況を世界の主要なベンチマークと比較します。',
    step5Title: '戦略レポート',
    step5Desc: 'パーソナライズされたAIガバナンスロードマップと推奨事項を確認します。',
    gapLabels: ['軽微', '中程度', '顕著'],
    gapCompLabel: 'ベンチマーク比較',
    gapCompDesc: '実線 = 貴校 | 点線マーカー = 米国ベンチマーク',
    benchmarkTitle: '米国ベンチマーク大学',
    benchmarkDesc: '各大学をクリックして、AIガバナンスの実践例を確認してください',
    overallScoreLabel: '総合成熟度スコア',
    overallScoreDesc: '4つのガバナンスの柱すべてにわたる複合スコア',
    overallLabel: '総合',
    completeSelections: '続行する前にすべての選択を完了してください。',
    scenariosUnanswered: '個のシナリオが未回答です。',
    genFailed: 'レポートの生成に失敗しました。もう一度お試しください。'
  }
};
