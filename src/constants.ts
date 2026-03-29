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
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'S1', pillar: 0,
    en: {
      context: 'NCHU is undergoing a strategic planning cycle for the next 5 years.',
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
      context: '中興大學正在進行未來五年的策略規劃週期。',
      question: '貴校目前如何制定並傳達 AI 發展策略？',
      options: [
        { level: 1, label: '尚無正式 AI 策略，各院系各自為政' },
        { level: 2, label: '領導層曾非正式討論 AI，但無書面策略或授權' },
        { level: 3, label: '已有 AI 策略草稿，但缺乏高層認可或預算支持' },
        { level: 4, label: '已有校長與校務會議正式背書的 AI 治理憲章' },
        { level: 5, label: 'AI 策略已全面融入大學使命、KPI 及年度報告' }
      ]
    }
  },
  {
    id: 'S2', pillar: 0,
    en: {
      context: 'The Ministry of Education requires universities to designate AI leadership roles.',
      question: 'How is AI governance leadership structured at NCHU?',
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
      question: '中興大學的 AI 治理領導架構為何？',
      options: [
        { level: 1, label: '無指定 AI 負責人，責任歸屬不清' },
        { level: 2, label: '資訊長主導所有 AI 決策，缺乏學術面意見' },
        { level: 3, label: '非正式 AI 委員會偶爾開會，但缺乏決策權' },
        { level: 4, label: '設有首席 AI 官（或同等職位），與學術治理委員會共同領導' },
        { level: 5, label: '雙首長模式：CAIO + 學術 AI 委員會，有明確授權與預算' }
      ]
    }
  },
  {
    id: 'S3', pillar: 1,
    en: {
      context: 'Multiple departments have independently procured AI tools this year.',
      question: 'How does NCHU coordinate AI tool adoption across departments?',
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
      question: '中興大學如何協調各院系的 AI 工具採用？',
      options: [
        { level: 1, label: '各院系自行選擇工具，無中央監管' },
        { level: 2, label: '資訊組推薦工具，但各院系可自行決定是否採用' },
        { level: 3, label: '部分協調：有共用工具，但採購仍零散' },
        { level: 4, label: '中央治理平台，有核准廠商清單與採購政策' },
        { level: 5, label: '完全整合的 AI 生態系，具跨單位資料共享與互通標準' }
      ]
    }
  },
  {
    id: 'S4', pillar: 1,
    en: {
      context: 'A student raises concerns about AI-generated academic work during a faculty senate meeting.',
      question: 'How does NCHU handle cross-unit policy development for AI academic integrity?',
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
      question: '中興大學如何跨單位制定 AI 學術誠信政策？',
      options: [
        { level: 1, label: '無政策，各教師自行裁量' },
        { level: 2, label: '教務長已發布備忘錄，但無執行機制' },
        { level: 3, label: '教務處與資訊組正在合作起草政策' },
        { level: 4, label: '全校 AI 誠信政策已核准，並設有申訴程序' },
        { level: 5, label: '政策持續更新，納入學生、教師及倫理委員會意見' }
      ]
    }
  },
  {
    id: 'S5', pillar: 2,
    en: {
      context: 'NCHU is planning its next digital infrastructure investment cycle.',
      question: 'What is the current state of AI infrastructure at NCHU?',
      options: [
        { level: 1, label: 'No dedicated AI computing resources; faculty use personal accounts' },
        { level: 2, label: 'Limited GPU resources available, primarily for CS/engineering departments' },
        { level: 3, label: 'Shared HPC cluster exists but lacks AI-optimized management and data pipelines' },
        { level: 4, label: 'Dedicated AI computing environment with data governance and security policies' },
        { level: 5, label: 'Cloud-hybrid AI infrastructure with institution-wide access, observability, and compliance' }
      ]
    },
    zh: {
      context: '中興大學正在規劃下一期數位基礎設施投資。',
      question: '中興大學目前的 AI 基礎設施現況為何？',
      options: [
        { level: 1, label: '無專屬 AI 運算資源，教師使用個人帳戶' },
        { level: 2, label: '有限 GPU 資源，主要供資工與工程系所使用' },
        { level: 3, label: '有共用 HPC 叢集，但缺乏 AI 最佳化管理與資料管線' },
        { level: 4, label: '專屬 AI 運算環境，具資料治理與資安政策' },
        { level: 5, label: '雲端混合 AI 基礎設施，全校可存取，具可觀測性與法規遵循機制' }
      ]
    }
  },
  {
    id: 'S6', pillar: 2,
    en: {
      context: 'The Ministry has released new AI budget allocation guidelines for universities.',
      question: 'How does NCHU allocate and track AI-related budgets?',
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
      question: '中興大學如何配置與追蹤 AI 相關預算？',
      options: [
        { level: 1, label: 'AI 支出埋入一般資訊預算，無獨立追蹤' },
        { level: 2, label: '部分 AI 項目存在，但分散各院系，缺乏協調' },
        { level: 3, label: '有中央 AI 預算，但 ROI 衡量與報告仍非正式' },
        { level: 4, label: '正式 AI 投資計畫，有年度審查與績效指標' },
        { level: 5, label: 'AI 投資組合由策略層面管理，向校務會議報告價值實現成果' }
      ]
    }
  },
  {
    id: 'S7', pillar: 3,
    en: {
      context: 'NCHU is launching a new AI literacy initiative for faculty and staff.',
      question: 'How does NCHU develop AI capabilities across the institution?',
      options: [
        { level: 1, label: 'No formal AI training programs; individuals self-learn' },
        { level: 2, label: 'Occasional workshops exist but attendance is optional and untracked' },
        { level: 3, label: 'Annual AI training program exists for some roles, with basic competency tracking' },
        { level: 4, label: 'Role-based AI competency framework with mandatory training and certification' },
        { level: 5, label: 'Continuous learning ecosystem with AI-personalized upskilling paths for all staff' }
      ]
    },
    zh: {
      context: '中興大學正在啟動針對教職員的 AI 素養提升計畫。',
      question: '中興大學如何在全校推動 AI 能力發展？',
      options: [
        { level: 1, label: '無正式 AI 培訓計畫，個人自學' },
        { level: 2, label: '偶爾舉辦工作坊，出席為自願且未追蹤' },
        { level: 3, label: '部分職位有年度 AI 培訓計畫，並有基本能力追蹤' },
        { level: 4, label: '以角色為基礎的 AI 能力框架，有強制培訓與認證' },
        { level: 5, label: '持續學習生態系，為所有教職員提供 AI 個人化進修路徑' }
      ]
    }
  },
  {
    id: 'S8', pillar: 3,
    en: {
      context: 'A major AI vendor has approached NCHU about a campus-wide implementation.',
      question: 'How does NCHU manage organizational change when adopting major AI systems?',
      options: [
        { level: 1, label: 'Change is unmanaged; adoption depends on individual enthusiasm' },
        { level: 2, label: 'IT leads implementation with minimal stakeholder communication' },
        { level: 3, label: 'Change management plan exists for major projects but is inconsistently applied' },
        { level: 4, label: 'Structured change management framework with stakeholder maps and communication plans' },
        { level: 5, label: 'Adaptive change management with feedback loops, metrics, and leadership accountability' }
      ]
    },
    zh: {
      context: '一家主要 AI 廠商已與中興大學接洽全校導入合作。',
      question: '中興大學在導入重大 AI 系統時如何管理組織變革？',
      options: [
        { level: 1, label: '變革無人管理，採用率取決於個人熱情' },
        { level: 2, label: '資訊組主導實施，利害關係人溝通極少' },
        { level: 3, label: '重大專案有變革管理計畫，但執行不一致' },
        { level: 4, label: '結構化變革管理框架，含利害關係人地圖與溝通計畫' },
        { level: 5, label: '適應性變革管理，具回饋循環、指標與領導問責機制' }
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
      insight: 'NCHU can adopt UPenn\'s cross-school governance model by establishing a University-Level AI Steering Committee that formally integrates the colleges of Engineering, Agriculture, Science, and Management.'
    },
    zh: {
      name: '賓夕法尼亞大學（UPenn）',
      shortName: 'UPenn',
      focus: '跨學院 AI 治理框架',
      summary: '透過統一治理模式整合法學院、商學院與工程學院的 AI 治理。',
      details: 'UPenn 透過賓大 AI 中心（AI@Penn），協調沃頓商學院、法學院與工程學院的 AI 治理。校方設立跨領域 AI 治理工作小組，提出具約束力的政策建議，維護集中式 AI 工具登錄冊，並推行教師 AI 倫理認證計畫。',
      insight: '中興大學可參考 UPenn 的跨學院治理模式，建立正式整合工程、農業、理學與管理學院的全校 AI 指導委員會。'
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
      insight: 'NCHU should establish a formal AI Ethics Review process modeled on Yale\'s impact assessment framework.'
    },
    zh: {
      name: '耶魯大學（Yale）',
      shortName: 'Yale',
      focus: '政策、倫理與全球 AI 治理',
      summary: '透過跨領域倫理中心與全球政策參與，引領 AI 治理實踐。',
      details: '耶魯的 AI 治理以法學院資訊社會計畫及耶魯全球事務研究所為核心。校方設立正式 AI 倫理審查委員會，評估所有重大 AI 系統部署。',
      insight: '中興大學應參照耶魯的影響評估框架，建立正式 AI 倫理審查程序。'
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
      insight: 'NCHU can prioritize ASU\'s operational AI model as a near-term win: deploying a student early warning system using existing enrollment and academic performance data.'
    },
    zh: {
      name: '亞利桑那州立大學（ASU）',
      shortName: 'ASU',
      focus: 'AI 驅動的行政管理與預測分析',
      summary: '運用 AI 轉型學生成功、營運效率與行政智能化。',
      details: 'ASU 是在機構運營中部署 AI 的領先機構。其 AI 驅動的學生成功平台分析 800 餘項變數，預測高風險學生，留退率提升 15%。',
      insight: '中興大學可優先參考 ASU 的營運 AI 模式，作為近期可見成效的切入點：利用現有入學及學業表現資料，部署學生預警系統。'
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
      insight: 'Drexel\'s committee model is the most directly transferable to NCHU given similar institutional scale.'
    },
    zh: {
      name: '德雷塞爾大學（Drexel）',
      shortName: 'Drexel',
      focus: '跨職能 AI 治理委員會',
      summary: '透過涵蓋資訊、教師與領導層的常設委員會，建立包容性 AI 治理。',
      details: 'Drexel 的 AI 治理模式以大學 AI 常設委員會（UAISC）為核心，成員包括資訊長、3 位教師代表、2 位學生代表、教務長辦公室及外部產業顧問。',
      insight: 'Drexel 的委員會模式在機構規模上與中興大學最為接近，移植性最強。'
    }
  }
];

export const TRANSLATIONS = {
  en: {
    stepLabels: ['Profile', 'Assessment', 'Maturity Score', 'Gap Analysis', 'Strategic Report'],
    stepDescs: ['User Context', 'Scenario-Based', 'Evaluation', 'vs U.S. Benchmarks', 'AI-Generated'],
    headerTitle: 'AI Governance Maturity Dashboard',
    headerSub: 'National Chung Hsing University · 中興大學',
    next: 'Next →',
    back: '← Back',
    generate: '⚡ Generate AI Report',
    preview: '👁 Preview Report',
    download: '⬇ Download Report (.txt)',
    loading: { main: 'Analyzing…', sub: 'Generating strategic insights' },
    pillars: ['Strategy & Leadership', 'Cross-Unit Collaboration', 'Resources & Infrastructure', 'Capability & Change'],
    maturityLevels: ['Exploring (Fragmented)', 'Initiating (Developing)', 'Integrating (Baseline)', 'Governing (Institutionalized)', 'Transforming (AI-Native)'],
    maturityShort: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
    roles: [
      { val: 'president', label: 'President (校長)', sub: 'University strategic leadership' },
      { val: 'provost', label: 'Provost / Academic Affairs (教務長)', sub: 'Academic operations & curriculum' },
      { val: 'dean', label: 'Dean (院長)', sub: 'College or faculty leadership' },
      { val: 'itdirector', label: 'IT Director (資訊長)', sub: 'Technology & digital infrastructure' }
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
    insightText: 'If NCHU takes no action over the next 2 years:',
    downloadNote: 'Report generated by NCHU AI Governance Dashboard',
    pillarShort: ['Strategy', 'Collab', 'Resources', 'Capability']
  },
  zh: {
    stepLabels: ['用戶資料', '情境評估', '成熟度評分', '差距分析', '策略報告'],
    stepDescs: ['基本設定', '情境題組', '綜合評量', '對標美國大學', 'AI 生成報告'],
    headerTitle: 'AI 治理成熟度儀表板',
    headerSub: '國立中興大學 · National Chung Hsing University',
    next: '下一步 →',
    back: '← 上一步',
    generate: '⚡ 生成 AI 策略報告',
    preview: '👁 預覽完整報告',
    download: '⬇ 下載報告 (.txt)',
    loading: { main: 'AI 分析中…', sub: '正在生成策略建議' },
    pillars: ['策略與雙首長領導', '跨單位協作', '資源與基礎設施', '能力與變革管理'],
    maturityLevels: ['探索期（碎片化）', '導入期（發展中）', '整合期（基礎建立）', '治理期（制度化）', '轉型期（AI Native 大學）'],
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
    insightText: '若中興大學未來兩年不採取行動：',
    downloadNote: '本報告由中興大學 AI 治理成熟度儀表板生成',
    pillarShort: ['策略', '協作', '資源', '能力']
  }
};
