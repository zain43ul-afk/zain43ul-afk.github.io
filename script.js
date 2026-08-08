(() => {
  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const languageButtons = document.querySelectorAll("[data-lang]");
  const translatable = document.querySelectorAll("[data-en][data-id]");
  const year = document.querySelector("#year");
  const siteHeader = document.querySelector(".site-header");
  const scrollProgressBar = document.querySelector(".scroll-progress span");
  const backToTop = document.querySelector(".back-to-top");
  const mobileDock = document.querySelector(".mobile-dock");
  const primaryNavLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
  const mobileDockLinks = [...document.querySelectorAll(".mobile-dock a[href^='#']")];
  const trackedSections = primaryNavLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const serviceRows = document.querySelectorAll(".service-row");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const publicationCards = document.querySelectorAll(".publication-card");
  const publicationModal = document.querySelector("#publication-modal");
  const publicationModalNumber = document.querySelector("#publication-modal-number");
  const publicationModalYear = document.querySelector("#publication-modal-year");
  const publicationModalJournal = document.querySelector("#publication-modal-journal");
  const publicationModalTitle = document.querySelector("#publication-modal-title");
  const publicationModalAuthors = document.querySelector("#publication-modal-authors");
  const publicationModalMethod = document.querySelector("#publication-modal-method");
  const publicationModalDoi = document.querySelector("#publication-modal-doi");
  const publicationModalLink = document.querySelector("#publication-modal-link");
  const publicationModalClose = document.querySelector(".publication-modal-close");

  const demoButtons = document.querySelectorAll("button.service-demo-button[data-demo-key]");
  const demoModal = document.querySelector("#service-demo-modal");
  const demoModalClose = document.querySelector(".demo-modal-close");
  const demoModalNumber = document.querySelector("#demo-modal-number");
  const demoModalFormat = document.querySelector("#demo-modal-format");
  const demoModalType = document.querySelector("#demo-modal-type");
  const demoModalTitle = document.querySelector("#demo-modal-title");
  const demoModalSummary = document.querySelector("#demo-modal-summary");
  const demoModalSkills = document.querySelector("#demo-modal-skills");
  const demoModalPreview = document.querySelector("#demo-modal-preview");
  const demoModalDownload = document.querySelector("#demo-modal-download");
  const demoModalAction = document.querySelector("#demo-modal-action");
  const demoModalFileName = document.querySelector("#demo-modal-file-name");

  const spreadsheetTrigger = document.querySelector("[data-spreadsheet-open]");
  const spreadsheetSecondaryTriggers = document.querySelectorAll("[data-spreadsheet-open-secondary]");
  const spreadsheetModal = document.querySelector("#spreadsheet-slider-modal");
  const spreadsheetModalClose = spreadsheetModal?.querySelector(".spreadsheet-slider-close");
  const spreadsheetModalIndex = document.querySelector("#spreadsheet-modal-index");
  const spreadsheetModalTitle = document.querySelector("#spreadsheet-slider-title");
  const spreadsheetModalSubtitle = spreadsheetModal?.querySelector(".frontend-slider-heading small");
  const spreadsheetSliderView = document.querySelector("[data-spreadsheet-slider-view]");
  const spreadsheetDetailView = document.querySelector("[data-spreadsheet-detail-view]");
  const spreadsheetCardStage = document.querySelector("[data-spreadsheet-card-stage]");
  const spreadsheetPagination = document.querySelector("[data-spreadsheet-pagination]");
  const spreadsheetCurrent = document.querySelector("#spreadsheet-project-current");
  const spreadsheetPrevious = document.querySelector("[data-spreadsheet-prev]");
  const spreadsheetNext = document.querySelector("[data-spreadsheet-next]");
  const spreadsheetBack = document.querySelector("[data-spreadsheet-back]");
  const spreadsheetDetailIndex = document.querySelector("#spreadsheet-detail-index");
  const spreadsheetDetailHeading = document.querySelector("#spreadsheet-detail-heading");
  const spreadsheetDetailKind = document.querySelector("#spreadsheet-detail-kind");
  const spreadsheetDetailNumber = document.querySelector("#spreadsheet-detail-number");
  const spreadsheetDetailType = document.querySelector("#spreadsheet-detail-type");
  const spreadsheetDetailTitle = document.querySelector("#spreadsheet-detail-title");
  const spreadsheetDetailSummary = document.querySelector("#spreadsheet-detail-summary");
  const spreadsheetDetailWorkflow = document.querySelector("#spreadsheet-detail-workflow");
  const spreadsheetDetailTabs = document.querySelector("#spreadsheet-detail-tabs");
  const spreadsheetDetailSkills = document.querySelector("#spreadsheet-detail-skills");
  const spreadsheetDetailLink = document.querySelector("#spreadsheet-detail-link");
  const spreadsheetPreviewCard = document.querySelector(".spreadsheet-preview-card");
  const spreadsheetPreviewLabel = document.querySelector("#spreadsheet-preview-label");
  const spreadsheetPreviewTitle = document.querySelector("#spreadsheet-preview-title");
  const spreadsheetPreviewMetricLabels = [1, 2, 3].map((number) => document.querySelector(`#spreadsheet-preview-label-${number}`));
  const spreadsheetPreviewMetricValues = [1, 2, 3].map((number) => document.querySelector(`#spreadsheet-preview-value-${number}`));

  const researchTrigger = document.querySelector("[data-research-open]");
  const researchSecondaryTriggers = document.querySelectorAll("[data-research-open-secondary]");
  const researchModal = document.querySelector("#research-slider-modal");
  const researchModalClose = researchModal?.querySelector(".research-slider-close");
  const researchModalIndex = document.querySelector("#research-modal-index");
  const researchModalTitle = document.querySelector("#research-slider-title");
  const researchModalSubtitle = researchModal?.querySelector(".frontend-slider-heading small");
  const researchSliderView = document.querySelector("[data-research-slider-view]");
  const researchDetailView = document.querySelector("[data-research-detail-view]");
  const researchCardStage = document.querySelector("[data-research-card-stage]");
  const researchPagination = document.querySelector("[data-research-pagination]");
  const researchCurrent = document.querySelector("#research-publication-current");
  const researchAbstractLabel = document.querySelector("#research-abstract-label");
  const researchAbstractHeading = document.querySelector("#research-abstract-heading");
  const researchAbstractText = document.querySelector("#research-abstract-text");
  const researchAbstractTags = document.querySelector("#research-abstract-tags");
  const researchPrevious = document.querySelector("[data-research-prev]");
  const researchNext = document.querySelector("[data-research-next]");
  const researchBack = document.querySelector("[data-research-back]");
  const researchDetailIndex = document.querySelector("#research-detail-index");
  const researchDetailHeading = document.querySelector("#research-detail-heading");
  const researchDetailJournal = document.querySelector("#research-detail-journal");
  const researchDetailNumber = document.querySelector("#research-detail-number");
  const researchDetailYear = document.querySelector("#research-detail-year");
  const researchDetailJournalFull = document.querySelector("#research-detail-journal-full");
  const researchDetailTitle = document.querySelector("#research-detail-title");
  const researchDetailAuthors = document.querySelector("#research-detail-authors");
  const researchDetailMethod = document.querySelector("#research-detail-method");
  const researchDetailDoi = document.querySelector("#research-detail-doi");
  const researchDetailLink = document.querySelector("#research-detail-link");
  const researchCitationNumber = document.querySelector("#research-citation-number");
  const researchCitationYear = document.querySelector("#research-citation-year");
  const researchCitationJournal = document.querySelector("#research-citation-journal");

  const frontendTrigger = document.querySelector("[data-frontend-open]");
  const frontendModal = document.querySelector("#frontend-slider-modal");
  const frontendModalClose = frontendModal?.querySelector(".frontend-slider-close");
  const frontendModalIndex = document.querySelector("#frontend-modal-index");
  const frontendModalTitle = document.querySelector("#frontend-slider-title");
  const frontendModalSubtitle = frontendModal?.querySelector(".frontend-slider-heading small");
  const frontendSliderView = document.querySelector("[data-frontend-slider-view]");
  const frontendDemoView = document.querySelector("[data-frontend-demo-view]");
  const frontendCardStage = document.querySelector("[data-frontend-card-stage]");
  const frontendPagination = document.querySelector("[data-frontend-pagination]");
  const frontendCurrent = document.querySelector("#frontend-project-current");
  const frontendHighlightLabel = document.querySelector("#frontend-highlight-label");
  const frontendHighlightName = document.querySelector("#frontend-highlight-name");
  const frontendHighlightTitle = document.querySelector("#frontend-highlight-title");
  const frontendHighlightText = document.querySelector("#frontend-highlight-text");
  const frontendHighlightTags = document.querySelector("#frontend-highlight-tags");
  const frontendPrevious = document.querySelector("[data-frontend-prev]");
  const frontendNext = document.querySelector("[data-frontend-next]");
  const frontendBack = document.querySelector("[data-frontend-back]");
  const frontendDemoFrame = document.querySelector("#frontend-demo-frame");
  const frontendDemoShell = document.querySelector(".frontend-demo-shell");
  const frontendDemoIndex = document.querySelector("#frontend-demo-index");
  const frontendDemoTitle = document.querySelector("#frontend-demo-title");
  const frontendDemoType = document.querySelector("#frontend-demo-type");
  const frontendSourceLink = document.querySelector("#frontend-source-link");
  const atlasTrigger = document.querySelector("[data-atlas-open]");
  const caseStudies = document.querySelectorAll(".case-study");

  const languageLabels = {
    en: { menuOpen: "Open navigation", menuClose: "Close navigation", backToTop: "Back to top", quickNav: "Quick navigation" },
    id: { menuOpen: "Buka navigasi", menuClose: "Tutup navigasi", backToTop: "Kembali ke atas", quickNav: "Navigasi cepat" },
  };

  const demos = {
    sales: {
      number: "01",
      format: "SHEETS",
      type: { en: "Live Google Sheets workbook", id: "Workbook Google Sheets langsung" },
      title: { en: "Sales & Cost Analysis Dashboard", id: "Dasbor Analisis Penjualan & Biaya" },
      summary: {
        en: "A formula-backed monthly model with editable assumptions, transaction detail, KPI cards, trend chart, validation rules, and a model-status check sheet.",
        id: "Model bulanan berbasis rumus dengan asumsi yang dapat diedit, rincian transaksi, kartu KPI, grafik tren, aturan validasi, dan lembar pemeriksaan status model.",
      },
      skills: {
        en: ["SUMIFS", "Financial model", "Dashboard", "Validation", "Model checks"],
        id: ["SUMIFS", "Model keuangan", "Dasbor", "Validasi", "Pemeriksaan model"],
      },
      action: { en: "Open in Google Sheets", id: "Buka di Google Sheets" },
      linkNote: { en: "Live workbook · opens in a new tab", id: "Workbook langsung · terbuka di tab baru" },
      url: "https://docs.google.com/spreadsheets/d/1oQ64zW34-vc-ApXJp8Gfnses7YNjKkgGDH2HmEZLuyM",
    },
    ai: {
      number: "03",
      format: "SHEETS",
      type: { en: "Live Google Sheets workbook", id: "Workbook Google Sheets langsung" },
      title: { en: "AI Response Evaluation Rubric", id: "Rubrik Evaluasi Respons AI" },
      summary: {
        en: "A weighted evaluation system for accuracy, relevance, instruction-following, clarity, and safety, with verdict formulas, escalation logic, reviewer notes, and summary charts.",
        id: "Sistem evaluasi berbobot untuk akurasi, relevansi, kepatuhan instruksi, kejelasan, dan keamanan, dilengkapi rumus keputusan, logika eskalasi, catatan penilai, dan grafik ringkasan.",
      },
      skills: {
        en: ["Weighted scoring", "Rubric design", "Adjudication", "Escalation", "Quality control"],
        id: ["Skor berbobot", "Desain rubrik", "Adjudikasi", "Eskalasi", "Kontrol mutu"],
      },
      action: { en: "Open in Google Sheets", id: "Buka di Google Sheets" },
      linkNote: { en: "Live workbook · opens in a new tab", id: "Workbook langsung · terbuka di tab baru" },
      url: "https://docs.google.com/spreadsheets/d/1us2Wx3_fFGZKg75l_4ZRbhXFOTpI8pd6svPY2EqxaSE",
    },
    qa: {
      number: "04",
      format: "SHEETS",
      type: { en: "Live Google Sheets workbook", id: "Workbook Google Sheets langsung" },
      title: { en: "Data Quality QA Tracker", id: "Pelacak QA Kualitas Data" },
      summary: {
        en: "A traceable source-to-review workflow that flags duplicate IDs, missing email, invalid phone, and amount mismatches, then routes exceptions to second-pass review.",
        id: "Alur sumber-ke-pemeriksaan yang dapat ditelusuri untuk menandai ID duplikat, email kosong, telepon tidak valid, dan selisih nilai, lalu mengarahkan pengecualian ke pemeriksaan kedua.",
      },
      skills: {
        en: ["Data cleaning", "Audit flags", "Validation rules", "Exception review", "Handoff QA"],
        id: ["Pembersihan data", "Penanda audit", "Aturan validasi", "Tinjauan pengecualian", "QA serah terima"],
      },
      action: { en: "Open in Google Sheets", id: "Buka di Google Sheets" },
      linkNote: { en: "Live workbook · opens in a new tab", id: "Workbook langsung · terbuka di tab baru" },
      url: "https://docs.google.com/spreadsheets/d/17oedCPofQ6T6XKioW7QMfoRnyhU2V3FvnvRXoCiYDY0",
    },
  };

  const spreadsheetProjects = [
    {
      number: "01", title: "Sales & Cost Analysis Dashboard", accent: "#2ab47e", visual: "sales",
      type: { en: "Analysis dashboard", id: "Dasbor analisis" },
      summary: {
        en: "A monthly sales-and-cost model with editable assumptions, transaction detail, KPI cards, trend analysis, validation, and model checks.",
        id: "Model penjualan dan biaya bulanan dengan asumsi yang dapat diedit, rincian transaksi, kartu KPI, analisis tren, validasi, dan pemeriksaan model.",
      },
      workflow: { en: "Transactions → formulas → dashboard → checks", id: "Transaksi → rumus → dasbor → pemeriksaan" },
      tabs: ["Dashboard", "Transactions", "Assumptions", "Checks"],
      skills: ["SUMIFS", "Financial model", "Dashboard", "Validation"],
      metrics: [
        { label: { en: "Revenue", id: "Pendapatan" }, value: "Rp 717m" },
        { label: { en: "Net profit", id: "Laba bersih" }, value: "Rp 423.7m" },
        { label: { en: "Margin", id: "Margin" }, value: "59.1%" },
      ],
      url: "https://docs.google.com/spreadsheets/d/1oQ64zW34-vc-ApXJp8Gfnses7YNjKkgGDH2HmEZLuyM",
    },
    {
      number: "02", title: "Data Quality QA Tracker", accent: "#6677ff", visual: "quality",
      type: { en: "Quality assurance tracker", id: "Pelacak penjaminan mutu" },
      summary: {
        en: "A traceable source-to-review workflow for duplicate IDs, missing fields, invalid contact data, amount mismatches, and second-pass decisions.",
        id: "Alur sumber-ke-pemeriksaan yang dapat ditelusuri untuk ID duplikat, kolom kosong, kontak tidak valid, selisih nilai, dan keputusan pemeriksaan kedua.",
      },
      workflow: { en: "Raw data → review rules → flags → QA decision", id: "Data mentah → aturan review → penanda → keputusan QA" },
      tabs: ["QA Dashboard", "Raw Data", "Data Review", "Validation Rules", "Checks"],
      skills: ["Data QA", "Audit flags", "Exception review", "Handoff"],
      metrics: [
        { label: { en: "Passed", id: "Lulus" }, value: "6" },
        { label: { en: "Needs review", id: "Perlu ditinjau" }, value: "6" },
        { label: { en: "Total issues", id: "Total isu" }, value: "6" },
      ],
      url: "https://docs.google.com/spreadsheets/d/17oedCPofQ6T6XKioW7QMfoRnyhU2V3FvnvRXoCiYDY0",
    },
    {
      number: "03", title: "Data Cleaning & Validation Workbook", accent: "#55d69e", visual: "cleaning",
      type: { en: "Data cleaning workbook", id: "Workbook pembersihan data" },
      summary: {
        en: "A formula-driven cleaning layer that standardizes records, preserves raw inputs, exposes transparent QA checks, and routes exceptions for review.",
        id: "Lapisan pembersihan berbasis rumus yang menstandarkan data, mempertahankan input mentah, menampilkan pemeriksaan QA transparan, dan mengarahkan pengecualian untuk ditinjau.",
      },
      workflow: { en: "Raw data → clean layer → QA checks → review status", id: "Data mentah → lapisan bersih → pemeriksaan QA → status review" },
      tabs: ["Dashboard", "Raw Data", "Clean Data", "QA Checks", "Rules"],
      skills: ["TRIM", "COUNTIF", "Validation", "Conditional formatting"],
      metrics: [
        { label: { en: "Records", id: "Data" }, value: "20" },
        { label: { en: "Passed", id: "Lulus" }, value: "14" },
        { label: { en: "Needs review", id: "Perlu ditinjau" }, value: "6" },
      ],
      url: "https://docs.google.com/spreadsheets/d/1dgcA2CpXMIHA2BgyBIB48vSfdZh_iTKXdQ7vHoFEVpg",
    },
    {
      number: "04", title: "Reconciliation & Exception Report", accent: "#f3b94d", visual: "reconciliation",
      type: { en: "Reconciliation report", id: "Laporan rekonsiliasi" },
      summary: {
        en: "A two-source comparison that identifies matched transactions, amount differences, missing records, owners, and open exception status.",
        id: "Perbandingan dua sumber yang mengidentifikasi transaksi cocok, selisih nilai, data yang hilang, penanggung jawab, dan status pengecualian terbuka.",
      },
      workflow: { en: "Source A + Source B → match logic → exception queue", id: "Sumber A + Sumber B → logika pencocokan → antrean pengecualian" },
      tabs: ["Dashboard", "Source A", "Source B", "Reconciliation", "Parameters"],
      skills: ["COUNTIF", "SUMIF", "Tolerance", "Exception routing"],
      metrics: [
        { label: { en: "Transactions", id: "Transaksi" }, value: "19" },
        { label: { en: "Matched", id: "Cocok" }, value: "15" },
        { label: { en: "Exceptions", id: "Pengecualian" }, value: "4" },
      ],
      url: "https://docs.google.com/spreadsheets/d/1XqDulmmjLxJxrtQ1gQXGxv0t18OC8FNoMaKkvNv67hc",
    },
    {
      number: "05", title: "Remote Operations & SLA Tracker", accent: "#ff704d", visual: "operations",
      type: { en: "Remote operations tracker", id: "Pelacak operasi remote" },
      summary: {
        en: "An asynchronous task log with owners, priorities, due dates, QA results, cycle time, SLA status, capacity, and documented handoffs.",
        id: "Log tugas asinkron dengan penanggung jawab, prioritas, tenggat, hasil QA, waktu siklus, status SLA, kapasitas, dan serah terima terdokumentasi.",
      },
      workflow: { en: "Task intake → owner → QA → SLA → capacity", id: "Tugas masuk → penanggung jawab → QA → SLA → kapasitas" },
      tabs: ["Dashboard", "Task Log", "Team Capacity", "Parameters"],
      skills: ["SLA monitoring", "Workload", "QA status", "Remote handoff"],
      metrics: [
        { label: { en: "Tasks", id: "Tugas" }, value: "20" },
        { label: { en: "Open", id: "Terbuka" }, value: "15" },
        { label: { en: "SLA issues", id: "Isu SLA" }, value: "13" },
      ],
      url: "https://docs.google.com/spreadsheets/d/1hHIaZYk2a80JThKO5Vb_1l9eqf1D4AvlX9kuJ6UUhfg",
    },
  ];

  const publicationAccents = ["#6677ff", "#c8fa52", "#ff704d", "#b48cff", "#56c7ff", "#f3b94d", "#55d69e", "#ff8a65", "#8da2ff"];
  const publicationAbstracts = [
    {
      en: "Using quarterly Indonesian data from 2007–2022 and a VECM, this study examines how FDI, exchange rates, inflation, interest rates, and exports relate to GDP growth. FDI is not significant; exchange rates and exports reduce growth in both horizons, inflation is negative in the long run, and interest rates are positive in the long run.",
      id: "Dengan data triwulanan Indonesia 2007–2022 dan VECM, riset ini menguji hubungan FDI, nilai tukar, inflasi, suku bunga, dan ekspor dengan pertumbuhan PDB. FDI tidak signifikan; nilai tukar dan ekspor menekan pertumbuhan dalam jangka pendek maupun panjang, inflasi berdampak negatif dalam jangka panjang, sedangkan suku bunga berdampak positif dalam jangka panjang.",
    },
    {
      en: "Using 2014–2020 panel data from ten Islamic countries, this study applies Panel VECM to test how Islamic finance, halal food, travel, fashion, and media and recreation relate to economic growth. The abstract reports that only Islamic finance has a positive short-run effect, showing that halal-sector expansion does not produce uniform macroeconomic gains.",
      id: "Dengan data panel 2014–2020 dari sepuluh negara Islam, riset ini memakai Panel VECM untuk menguji hubungan keuangan Islam, makanan halal, perjalanan, fesyen, serta media dan rekreasi dengan pertumbuhan ekonomi. Abstraknya menunjukkan bahwa hanya keuangan Islam yang berdampak positif dalam jangka pendek, sehingga pertumbuhan sektor halal tidak otomatis menghasilkan manfaat makroekonomi yang seragam.",
    },
    {
      en: "This VECM study uses quarterly data for 2007–2022 from BPS, BKPM, and Bank Indonesia to examine Indonesia’s export performance. FDI contributes indirectly through production structure and technology transfer; exchange rates and inflation are positive in the long run, while interest rates are negative in both horizons and GDP shifts from a positive short-run to a negative long-run effect.",
      id: "Riset VECM ini memakai data triwulanan 2007–2022 dari BPS, BKPM, dan Bank Indonesia untuk menganalisis kinerja ekspor Indonesia. FDI berkontribusi tidak langsung melalui struktur produksi dan transfer teknologi; nilai tukar dan inflasi berdampak positif dalam jangka panjang, sedangkan suku bunga negatif pada kedua horizon dan PDB berubah dari positif jangka pendek menjadi negatif jangka panjang.",
    },
    {
      en: "A systematic literature review connects AI adoption in Indonesian MSMEs with Maqāṣid ash-Sharīʿah. AI can improve productivity, service quality, financial accuracy, knowledge, market reach, and inclusion, but may also create algorithmic bias, privacy risks, labor displacement, and cognitive dependence. Its ethical contribution therefore depends on governance, system design, human oversight, and inclusive policy support.",
      id: "Tinjauan literatur sistematis ini menghubungkan adopsi AI pada UMKM Indonesia dengan Maqāṣid ash-Sharīʿah. AI dapat meningkatkan produktivitas, kualitas layanan, akurasi keuangan, pengetahuan, jangkauan pasar, dan inklusi, tetapi juga membawa risiko bias algoritmik, privasi, pergeseran tenaga kerja, dan ketergantungan kognitif. Kontribusi etisnya bergantung pada tata kelola, desain sistem, pengawasan manusia, dan kebijakan yang inklusif.",
    },
    {
      en: "Through qualitative content analysis, this study examines green sukuk financing for sustainable transportation in Indonesia. Around IDR 34 trillion supported transport projects and was associated with reductions exceeding 15 million tonnes of carbon emissions during 2018–2022. The findings position green sukuk as a practical SDG financing instrument while noting limits in data coverage and economic-impact assessment.",
      id: "Melalui analisis isi kualitatif, riset ini mengkaji pembiayaan green sukuk untuk transportasi berkelanjutan di Indonesia. Sekitar Rp34 triliun dialokasikan pada proyek transportasi dan dikaitkan dengan penurunan emisi karbon lebih dari 15 juta ton selama 2018–2022. Temuan menempatkan green sukuk sebagai instrumen pembiayaan SDGs yang praktis, dengan keterbatasan pada cakupan data dan penilaian dampak ekonomi.",
    },
    {
      en: "This systematic literature review examines how Maqāṣid al-Sharī‘ah can strengthen moral, social, spiritual, and ecological dimensions that are less visible in indicator-driven SDG implementation. It finds broad alignment around welfare, justice, public interest, and environmental protection, while identifying challenges in integration, interpretation, socioeconomic conditions, climate change, and technology.",
      id: "Tinjauan literatur sistematis ini mengkaji bagaimana Maqāṣid al-Sharī‘ah dapat memperkuat dimensi moral, sosial, spiritual, dan ekologis yang kurang terlihat dalam implementasi SDGs berbasis indikator. Riset menemukan keselarasan pada kesejahteraan, keadilan, kemaslahatan, dan perlindungan lingkungan, sekaligus tantangan integrasi, perbedaan interpretasi, kondisi sosial-ekonomi, perubahan iklim, dan teknologi.",
    },
    {
      en: "Using System GMM on 1992–2020 data for 53 OIC member countries, this study tests the effects of economic growth, population, FDI, and globalization on CO₂ emissions. Economic growth and FDI significantly increase emission concentrations, whereas population growth and globalization are associated with reductions. The results underline the need to align investment and growth strategies with environmental objectives.",
      id: "Dengan System GMM pada data 1992–2020 dari 53 negara anggota OKI, riset ini menguji pengaruh pertumbuhan ekonomi, populasi, FDI, dan globalisasi terhadap emisi CO₂. Pertumbuhan ekonomi dan FDI meningkatkan konsentrasi emisi secara signifikan, sedangkan pertumbuhan populasi dan globalisasi berkaitan dengan penurunan emisi. Hasilnya menegaskan perlunya menyelaraskan strategi investasi dan pertumbuhan dengan tujuan lingkungan.",
    },
    {
      en: "Using quarterly Indonesian data from 2007–2022, this VECM study analyzes how exchange rates, inflation, and interest rates influence FDI. Exchange rates are negative but insignificant in the short run and significantly negative in the long run; inflation shifts from positive-insignificant to significantly negative; and interest rates move from negative-insignificant in the short run to significantly positive in the long run.",
      id: "Dengan data triwulanan Indonesia 2007–2022, riset VECM ini menganalisis pengaruh nilai tukar, inflasi, dan suku bunga terhadap FDI. Nilai tukar negatif tetapi tidak signifikan dalam jangka pendek dan negatif signifikan dalam jangka panjang; inflasi berubah dari positif-tidak signifikan menjadi negatif signifikan; sedangkan suku bunga berubah dari negatif-tidak signifikan menjadi positif signifikan.",
    },
    {
      en: "A qualitative descriptive comparison of two years of financial reports evaluates PT X and PT Y through liquidity, leverage, and profitability ratios. Both firms maintain solid performance despite competition and pandemic pressure; PT X improves across several ratios, while PT Y fluctuates. The study emphasizes sound management and financial strength as foundations for continuity and growth.",
      id: "Perbandingan deskriptif kualitatif atas laporan keuangan dua tahun menilai PT X dan PT Y melalui rasio likuiditas, leverage, dan profitabilitas. Keduanya mempertahankan kinerja yang solid di tengah persaingan dan tekanan pandemi; PT X membaik pada sejumlah rasio, sedangkan PT Y berfluktuasi. Riset menekankan manajemen yang baik dan kekuatan keuangan sebagai dasar keberlanjutan dan pertumbuhan.",
    },
  ];
  const researchPublications = [...publicationCards].map((card, index) => ({
    number: card.dataset.publicationNumber,
    year: card.dataset.publicationYear,
    title: card.dataset.publicationTitle,
    journal: card.dataset.publicationJournal,
    journalShort: card.querySelector(".publication-card-journal")?.textContent.trim() || card.dataset.publicationJournal,
    authors: card.dataset.publicationAuthors,
    doi: card.dataset.publicationDoi,
    method: {
      en: card.dataset.publicationMethodEn,
      id: card.dataset.publicationMethodId,
    },
    abstract: publicationAbstracts[index],
    url: card.dataset.publicationUrl,
    accent: publicationAccents[index % publicationAccents.length],
  }));

  const frontendProjects = [
    {
      slug: "atlas-studio", title: "Atlas Studio", accent: "#ff6b3d",
      type: { en: "Website Frontend", id: "Frontend Website" },
      summary: { en: "An editorial architecture website with immersive imagery and measured typography.", id: "Website arsitektur editorial dengan gambar imersif dan tipografi yang terukur." },
      highlightTitle: { en: "immersive clarity.", id: "kejelasan imersif." },
      highlight: { en: "Built for architecture and design studios that need projects to feel premium without sacrificing clarity. Full-width imagery, an editorial grid, measured typography, and restrained motion create a memorable showcase that remains easy to navigate on every screen.", id: "Dirancang untuk studio arsitektur dan desain yang ingin menampilkan proyek secara premium tanpa mengorbankan kejelasan. Gambar lebar, grid editorial, tipografi terukur, dan animasi yang terkendali menciptakan etalase berkesan sekaligus mudah dinavigasi di setiap layar." },
      tags: ["Next.js", "Responsive", "Motion"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "flowdesk-app", title: "Flowdesk", accent: "#8b7cff", visual: "visual-flowdesk",
      type: { en: "Web Application Frontend", id: "Frontend Aplikasi Web" },
      summary: { en: "A focused project workspace with live task controls and useful operational states.", id: "Ruang kerja proyek dengan kontrol tugas langsung dan status operasional yang jelas." },
      highlightTitle: { en: "focused workflow.", id: "alur kerja fokus." },
      highlight: { en: "Useful for teams coordinating tasks, forms, and changing project states in one workspace. Clear hierarchy, state-aware controls, and compact Kanban patterns reduce visual noise so users can understand priorities and act quickly.", id: "Berguna bagi tim yang mengelola tugas, formulir, dan perubahan status proyek dalam satu ruang kerja. Hierarki jelas, kontrol berbasis status, dan pola Kanban ringkas mengurangi kepadatan visual agar prioritas cepat dipahami dan ditindaklanjuti." },
      tags: ["React State", "Kanban", "Forms"],
    },
    {
      slug: "form-store", title: "Form Objects", accent: "#f35b3f",
      type: { en: "E-commerce Frontend", id: "Frontend E-commerce" },
      summary: { en: "A premium storefront with product filtering, cart controls, and checkout feedback.", id: "Etalase premium dengan filter produk, kontrol keranjang, dan umpan balik checkout." },
      highlightTitle: { en: "confident commerce.", id: "belanja meyakinkan." },
      highlight: { en: "Designed for product brands that need discovery and purchase actions to feel effortless. Strong product imagery, practical filters, visible cart states, and immediate checkout feedback help shoppers move from browsing to buying with confidence.", id: "Dirancang untuk merek produk yang membutuhkan proses pencarian dan pembelian tanpa hambatan. Foto produk yang kuat, filter praktis, status keranjang yang terlihat, dan umpan balik checkout langsung membantu pengunjung beralih dari melihat-lihat menuju pembelian dengan yakin." },
      tags: ["Commerce UI", "Cart", "Filters"],
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "nova-analytics", title: "Nova Analytics", accent: "#6366f1", visual: "visual-nova",
      type: { en: "Dashboard & Data Visualization", id: "Dasbor & Visualisasi Data" },
      summary: { en: "A decision-ready revenue dashboard with responsive charts and period filters.", id: "Dasbor pendapatan siap keputusan dengan grafik responsif dan filter periode." },
      highlightTitle: { en: "decisions at a glance.", id: "keputusan sekilas." },
      highlight: { en: "Created for managers who need revenue, trends, and KPIs without reading dense reports. Responsive charts, period filters, and a disciplined information hierarchy surface changes quickly while keeping detailed data within reach.", id: "Dibuat untuk manajer yang perlu memahami pendapatan, tren, dan KPI tanpa membaca laporan padat. Grafik responsif, filter periode, dan hierarki informasi yang disiplin menampilkan perubahan dengan cepat sekaligus menjaga data rinci tetap mudah diakses." },
      tags: ["SVG Charts", "KPI", "Data UI"],
    },
    {
      slug: "nusa-travel", title: "Nusa Escape", accent: "#ffdf69",
      type: { en: "Responsive Web Development", id: "Pengembangan Web Responsif" },
      summary: { en: "A mobile-first travel experience designed to remain expressive on every screen.", id: "Pengalaman perjalanan mobile-first yang tetap ekspresif di setiap ukuran layar." },
      highlightTitle: { en: "expressive everywhere.", id: "ekspresif di semua layar." },
      highlight: { en: "Ideal for travel brands that must inspire visitors on phones as strongly as on desktop. Mobile-first composition, fluid typography, touch-friendly controls, and adaptive imagery preserve the visual mood without compromising speed or usability.", id: "Ideal untuk merek perjalanan yang harus tetap menginspirasi di smartphone maupun desktop. Komposisi mobile-first, tipografi fluid, kontrol ramah sentuhan, dan gambar adaptif mempertahankan suasana visual tanpa mengorbankan kecepatan atau kemudahan penggunaan." },
      tags: ["Mobile-first", "Fluid Type", "Touch UI"],
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "nadi-ui", title: "Nadi Finance", accent: "#bcff5c", visual: "visual-nadi",
      type: { en: "Figma-to-Code / UI Implementation", id: "Implementasi UI / Figma-to-Code" },
      summary: { en: "A token-driven fintech interface translated into precise reusable components.", id: "Antarmuka fintech berbasis token yang diterjemahkan menjadi komponen presisi dan reusable." },
      highlightTitle: { en: "systematic precision.", id: "presisi sistematis." },
      highlight: { en: "Shows how a detailed fintech design can become consistent production code. Reusable components, design tokens, controlled spacing, and dark-mode support make the interface easier to scale, maintain, and compare accurately with its source design.", id: "Menunjukkan bagaimana desain fintech yang rinci diterjemahkan menjadi kode produksi yang konsisten. Komponen reusable, design token, jarak terkontrol, dan dukungan mode gelap membuat antarmuka lebih mudah dikembangkan, dirawat, dan dicocokkan secara presisi dengan desain sumber." },
      tags: ["Design Tokens", "Components", "Dark Mode"],
    },
    {
      slug: "lumen-gallery", title: "Lumen Archive", accent: "#ff5c8a",
      type: { en: "Interactive Frontend", id: "Frontend Interaktif" },
      summary: { en: "A cinematic image archive with filtering, keyboard navigation, and lightbox viewing.", id: "Arsip gambar sinematik dengan filter, navigasi keyboard, dan lightbox." },
      highlightTitle: { en: "cinematic discovery.", id: "eksplorasi sinematik." },
      highlight: { en: "Suited to photographers, studios, and visual archives with many items to explore. Filtering, keyboard navigation, smooth transitions, and an accessible lightbox keep large image collections engaging without making visitors lose their place.", id: "Cocok untuk fotografer, studio, dan arsip visual dengan banyak karya. Filter, navigasi keyboard, transisi halus, dan lightbox yang aksesibel membuat koleksi gambar besar tetap menarik tanpa membuat pengunjung kehilangan posisi." },
      tags: ["Lightbox", "Keyboard", "Animation"],
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "storypress-cms", title: "Storypress", accent: "#1f8f66", visual: "visual-story",
      type: { en: "CMS Frontend", id: "Frontend CMS" },
      summary: { en: "An editorial workspace to create, search, edit, and publish content locally.", id: "Ruang kerja editorial untuk membuat, mencari, menyunting, dan menerbitkan konten." },
      highlightTitle: { en: "editorial control.", id: "kontrol editorial." },
      highlight: { en: "Useful for content teams that need a clear path from draft to publication. Focused CRUD screens, search, local persistence, and visible publishing states keep routine editorial work understandable and reduce avoidable mistakes.", id: "Berguna bagi tim konten yang membutuhkan alur jelas dari draf hingga publikasi. Layar CRUD yang fokus, pencarian, penyimpanan lokal, dan status penerbitan yang terlihat membuat pekerjaan editorial rutin lebih mudah dipahami serta mengurangi kesalahan." },
      tags: ["CRUD UI", "Local Storage", "Search"],
    },
    {
      slug: "climate-now", title: "Climate Now", accent: "#56c7ff", visual: "visual-climate",
      type: { en: "API Integration", id: "Integrasi API" },
      summary: { en: "A live city forecast that turns external weather data into a clear interface.", id: "Prakiraan kota langsung yang mengubah data cuaca eksternal menjadi antarmuka jelas." },
      highlightTitle: { en: "live data, clearly.", id: "data langsung, jelas." },
      highlight: { en: "Demonstrates how external API data can become a dependable user experience. Search, loading, success, empty, and error states are handled explicitly, while the forecast layout turns changing weather data into information that is quick to scan.", id: "Mendemonstrasikan bagaimana data API eksternal dapat menjadi pengalaman pengguna yang andal. Status pencarian, memuat, berhasil, kosong, dan gagal ditangani secara jelas, sementara tata letak prakiraan mengubah data cuaca yang berubah menjadi informasi yang cepat dipahami." },
      tags: ["Open-Meteo", "Async States", "Search"],
    },
    {
      slug: "focus-pwa", title: "Focus PWA", accent: "#ff775d", visual: "visual-focus",
      type: { en: "Progressive Web App (PWA)", id: "Progressive Web App (PWA)" },
      summary: { en: "An installable focus app with an offline-ready shell and device-local tasks.", id: "Aplikasi fokus yang dapat dipasang dengan mode offline dan tugas lokal perangkat." },
      highlightTitle: { en: "focus without friction.", id: "fokus tanpa hambatan." },
      highlight: { en: "Made for users who need a lightweight task and focus tool even when connectivity is unreliable. Installability, an offline-ready shell, local task storage, and restrained interaction design keep the core workflow available and distraction-free.", id: "Dibuat untuk pengguna yang membutuhkan alat tugas dan fokus ringan meskipun koneksi tidak stabil. Kemampuan instalasi, shell siap offline, penyimpanan tugas lokal, dan interaksi yang terkendali menjaga alur utama tetap tersedia tanpa gangguan." },
      tags: ["Service Worker", "Manifest", "Offline"],
    },
    {
      slug: "bite-mobile", title: "Bite Mobile", accent: "#ffcc3d",
      type: { en: "Mobile / Cross-platform Frontend", id: "Frontend Mobile / Cross-platform" },
      summary: { en: "A touch-first food discovery flow framed for mobile and adaptable to desktop.", id: "Alur penemuan kuliner touch-first untuk perangkat mobile yang adaptif ke desktop." },
      highlightTitle: { en: "designed for touch.", id: "dirancang untuk sentuhan." },
      highlight: { en: "Built for quick food discovery on mobile devices, with a layout that also expands naturally on desktop. Large tap targets, thumb-friendly navigation, visual categories, and an app-like shell make browsing comfortable with one hand.", id: "Dibuat untuk pencarian kuliner cepat di perangkat mobile dengan tata letak yang tetap berkembang alami di desktop. Target sentuh besar, navigasi ramah ibu jari, kategori visual, dan app shell membuat penelusuran nyaman dilakukan dengan satu tangan." },
      tags: ["App Shell", "Touch", "Responsive"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "clear-journal", title: "Clear Journal", accent: "#27c47d",
      type: { en: "Performance & Accessibility", id: "Performa & Aksesibilitas" },
      summary: { en: "A readable editorial experience with adaptive controls and performance-minded media.", id: "Pengalaman editorial yang mudah dibaca dengan kontrol adaptif dan media yang efisien." },
      highlightTitle: { en: "inclusive by design.", id: "inklusif sejak desain." },
      highlight: { en: "Designed for long-form reading that must remain fast and comfortable for more people. Strong contrast, keyboard support, reduced-motion behavior, adaptive controls, and efficient media improve accessibility and Core Web Vitals without flattening the visual identity.", id: "Dirancang untuk bacaan panjang yang harus tetap cepat dan nyaman bagi lebih banyak pengguna. Kontras kuat, dukungan keyboard, reduced motion, kontrol adaptif, dan media efisien meningkatkan aksesibilitas serta Core Web Vitals tanpa menghilangkan identitas visual." },
      tags: ["WCAG", "Core Web Vitals", "Reduced Motion"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=90",
    },
  ];

  let activeLanguage = "en";
  let activePublicationCard = null;
  let activeDemoKey = null;
  let activeSpreadsheetIndex = 0;
  let activeSpreadsheetDetailIndex = null;
  let activeResearchIndex = 0;
  let activeResearchDetailIndex = null;
  let activeFrontendIndex = 0;
  let activeFrontendDemoIndex = null;
  let lastFocusedElement = null;

  const copy = (value) => value?.[activeLanguage] || value?.en || "";

  const renderPublicationModal = (card) => {
    if (!card) return;
    const methodKey = activeLanguage === "id" ? "publicationMethodId" : "publicationMethodEn";
    publicationModalNumber.textContent = card.dataset.publicationNumber;
    publicationModalYear.textContent = card.dataset.publicationYear;
    publicationModalYear.setAttribute("datetime", card.dataset.publicationYear);
    publicationModalJournal.textContent = card.dataset.publicationJournal;
    publicationModalTitle.textContent = card.dataset.publicationTitle;
    publicationModalAuthors.textContent = card.dataset.publicationAuthors;
    publicationModalMethod.textContent = card.dataset[methodKey];
    publicationModalDoi.textContent = card.dataset.publicationDoi;
    publicationModalLink.href = card.dataset.publicationUrl;
  };

  const renderPreview = (key) => {
    const id = activeLanguage === "id";
    const previewLabels = {
      sales: {
        eyebrow: id ? "Analisis spreadsheet" : "Spreadsheet analysis",
        title: id ? "Dasbor Penjualan & Biaya" : "Sales & Cost Dashboard",
        badge: id ? "RUMUS AKTIF" : "FORMULA-BACKED",
        kpis: id ? [["Pendapatan", "Rp 717 jt"], ["Laba bersih", "Rp 423,7 jt"], ["Margin", "59,1%"]] : [["Revenue", "Rp 717m"], ["Net profit", "Rp 423.7m"], ["Margin", "59.1%"]],
        rows: id ? [["Bulan", "Pendapatan", "Biaya", "Laba"], ["Okt", "69,5 jt", "28,4 jt", "41,1 jt"], ["Nov", "77,3 jt", "31,6 jt", "45,7 jt"], ["Des", "85,1 jt", "34,8 jt", "50,3 jt"]] : [["Month", "Revenue", "Cost", "Profit"], ["Oct", "69.5m", "28.4m", "41.1m"], ["Nov", "77.3m", "31.6m", "45.7m"], ["Dec", "85.1m", "34.8m", "50.3m"]],
        note: id ? "Data sintetis · 36 transaksi · tab asumsi, transaksi, dasbor, dan pemeriksaan." : "Synthetic data · 36 transactions · assumptions, transactions, dashboard, and checks tabs.",
      },
      ai: {
        eyebrow: id ? "Evaluasi respons AI" : "AI response evaluation",
        title: id ? "Ringkasan Rubrik Berbobot" : "Weighted Rubric Summary",
        badge: id ? "10 KASUS" : "10 CASES",
        kpis: id ? [["Skor rata-rata", "85,3"], ["Lulus", "50%"], ["Eskalasi", "2"]] : [["Average score", "85.3"], ["Pass rate", "50%"], ["Escalations", "2"]],
        note: id ? "Lima kriteria, rumus keputusan, logika eskalasi, dan catatan adjudikasi." : "Five criteria, verdict formulas, escalation logic, and written adjudication notes.",
      },
      qa: {
        eyebrow: id ? "Kontrol kualitas data" : "Data quality control",
        title: id ? "Dasbor Pengecualian QA" : "QA Exception Dashboard",
        badge: id ? "12 DATA" : "12 RECORDS",
        kpis: id ? [["Lulus", "6"], ["Perlu ditinjau", "6"], ["Total isu", "6"]] : [["Passed", "6"], ["Needs review", "6"], ["Total issues", "6"]],
        rows: id ? [["Pemeriksaan", "Jumlah", "Tindakan"], ["ID duplikat", "2", "Verifikasi sumber"], ["Email kosong", "1", "Kembalikan ke pemilik"], ["Selisih nilai", "2", "Rekonsiliasi"]] : [["Check", "Count", "Action"], ["Duplicate ID", "2", "Verify source"], ["Missing email", "1", "Return to owner"], ["Amount mismatch", "2", "Reconcile"]],
        note: id ? "Lapisan data mentah tetap dipertahankan; semua penanda berasal dari rumus pada lapisan pemeriksaan." : "The raw-data layer stays unchanged; all flags are formula-driven in the review layer.",
      },
    };

    if (key === "sales") {
      const item = previewLabels.sales;
      return `
        <div class="demo-preview-header"><div><span>${item.eyebrow}</span><strong>${item.title}</strong></div><small>${item.badge}</small></div>
        <div class="demo-kpi-grid">${item.kpis.map(([label, value]) => `<div class="demo-kpi"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
        <div class="demo-mini-table">${item.rows.map((row, index) => `<div class="demo-mini-row${index === 0 ? " header" : ""}">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}</div>
        <div class="demo-note">${item.note}</div>`;
    }

    if (key === "ai") {
      const item = previewLabels.ai;
      const criteria = id ? [["Akurasi", 88], ["Relevansi", 82], ["Kepatuhan", 86], ["Kejelasan", 84], ["Keamanan", 92]] : [["Accuracy", 88], ["Relevance", 82], ["Instruction", 86], ["Clarity", 84], ["Safety", 92]];
      return `
        <div class="demo-preview-header"><div><span>${item.eyebrow}</span><strong>${item.title}</strong></div><small>${item.badge}</small></div>
        <div class="demo-kpi-grid">${item.kpis.map(([label, value]) => `<div class="demo-kpi"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
        <div class="demo-score-list">${criteria.map(([label, value]) => `<div class="demo-score-item"><span>${label}</span><div class="demo-score-track"><i style="width:${value}%"></i></div><strong>${value}</strong></div>`).join("")}</div>
        <div class="demo-note">${item.note}</div>`;
    }

    if (key === "qa") {
      const item = previewLabels.qa;
      return `
        <div class="demo-preview-header"><div><span>${item.eyebrow}</span><strong>${item.title}</strong></div><small>${item.badge}</small></div>
        <div class="demo-kpi-grid">${item.kpis.map(([label, value]) => `<div class="demo-kpi"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
        <div class="demo-mini-table">${item.rows.map((row, index) => `<div class="demo-mini-row three${index === 0 ? " header" : ""}">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}</div>
        <div class="demo-note">${item.note}</div>`;
    }

    return "";
  };

  const renderDemoModal = (key) => {
    const demo = demos[key];
    if (!demo) return;
    demoModalNumber.textContent = demo.number;
    demoModalFormat.textContent = demo.format;
    demoModalType.textContent = copy(demo.type);
    demoModalTitle.textContent = copy(demo.title);
    demoModalSummary.textContent = copy(demo.summary);
    demoModalSkills.innerHTML = copy(demo.skills).map((skill) => `<span>${skill}</span>`).join("");
    demoModalPreview.innerHTML = renderPreview(key);
    demoModalDownload.href = demo.url;
    demoModalDownload.removeAttribute("download");
    demoModalAction.textContent = copy(demo.action);
    demoModalFileName.textContent = copy(demo.linkNote);
    demoModalDownload.setAttribute("aria-label", `${copy(demo.action)} — ${copy(demo.title)}`);
  };

  const projectNumber = (index) => String(index + 1).padStart(2, "0");

  const buildSpreadsheetSlider = () => {
    if (!spreadsheetCardStage || !spreadsheetPagination) return;
    spreadsheetCardStage.innerHTML = spreadsheetProjects.map((project, index) => `
      <article class="frontend-project-card spreadsheet-project-card" data-spreadsheet-project-index="${index}" role="button" style="--accent:${project.accent}" draggable="false">
        <div class="frontend-card-visual spreadsheet-card-visual">
          <div class="sheet-card-ui ${project.visual}" aria-hidden="true">
            <div class="sheet-card-toolbar"><i></i><i></i><i></i><span>GOOGLE SHEETS</span></div>
            <div class="sheet-card-kpis"><span><i></i><b></b></span><span><i></i><b></b></span><span><i></i><b></b></span></div>
            <div class="sheet-card-chart"><i></i><i></i><i></i><i></i></div>
            <div class="sheet-card-table"><i></i><i></i><i></i><i></i></div>
          </div>
          <span class="frontend-card-index">SHEET / ${project.number}</span>
          <span class="frontend-card-open"></span>
        </div>
        <div class="frontend-card-body">
          <div class="frontend-card-title"><span>${project.number}</span><div><h4>${project.title}</h4><p class="spreadsheet-card-type"></p></div><i>↗</i></div>
          <p class="frontend-card-summary spreadsheet-card-summary"></p>
          <div class="frontend-card-tags">${project.skills.slice(0, 3).map((skill) => `<span>${skill}</span>`).join("")}</div>
        </div>
      </article>`).join("");
    spreadsheetPagination.innerHTML = spreadsheetProjects.map((project, index) => `<button type="button" data-spreadsheet-page="${index}"></button>`).join("");
  };

  const localizeSpreadsheetSlider = () => {
    if (!spreadsheetCardStage || !spreadsheetPagination) return;
    spreadsheetCardStage.querySelectorAll("[data-spreadsheet-project-index]").forEach((card) => {
      const index = Number(card.dataset.spreadsheetProjectIndex);
      const project = spreadsheetProjects[index];
      card.querySelector(".spreadsheet-card-type").textContent = copy(project.type);
      card.querySelector(".spreadsheet-card-summary").textContent = copy(project.summary);
      card.querySelector(".frontend-card-open").textContent = activeLanguage === "id" ? "Lihat detail ↗" : "View details ↗";
      card.setAttribute("aria-label", `${activeLanguage === "id" ? "Lihat detail spreadsheet" : "View spreadsheet details"}: ${project.title}`);
    });
    spreadsheetPagination.querySelectorAll("[data-spreadsheet-page]").forEach((button) => {
      const project = spreadsheetProjects[Number(button.dataset.spreadsheetPage)];
      button.setAttribute("aria-label", `${activeLanguage === "id" ? "Pilih spreadsheet" : "Go to spreadsheet"} ${project.number}: ${project.title}`);
    });
  };

  const updateSpreadsheetSlider = () => {
    const total = spreadsheetProjects.length;
    spreadsheetCardStage?.querySelectorAll("[data-spreadsheet-project-index]").forEach((card) => {
      const index = Number(card.dataset.spreadsheetProjectIndex);
      const relative = (index - activeSpreadsheetIndex + total) % total;
      const state = relative === 0 ? "is-active" : relative === 1 ? "is-next" : relative === total - 1 ? "is-prev" : "is-hidden";
      card.classList.remove("is-active", "is-next", "is-prev", "is-hidden");
      card.classList.add(state);
      card.tabIndex = state === "is-active" ? 0 : -1;
      card.setAttribute("aria-hidden", String(state !== "is-active"));
    });
    spreadsheetPagination?.querySelectorAll("[data-spreadsheet-page]").forEach((button) => {
      const isActive = Number(button.dataset.spreadsheetPage) === activeSpreadsheetIndex;
      button.classList.toggle("active", isActive);
      if (isActive) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    if (spreadsheetCurrent) spreadsheetCurrent.textContent = projectNumber(activeSpreadsheetIndex);
  };

  const selectSpreadsheetProject = (index) => {
    const total = spreadsheetProjects.length;
    activeSpreadsheetIndex = (index + total) % total;
    updateSpreadsheetSlider();
  };

  const renderSpreadsheetHeader = () => {
    if (spreadsheetModalIndex) spreadsheetModalIndex.textContent = "01";
    if (spreadsheetModalTitle) spreadsheetModalTitle.textContent = activeLanguage === "id" ? "Slider demo spreadsheet" : "Spreadsheet demo slider";
    if (spreadsheetModalSubtitle) spreadsheetModalSubtitle.textContent = activeLanguage === "id" ? "5 Google Sheets langsung · geser, tarik, panah, atau keyboard" : "5 live Google Sheets · swipe, drag, arrows, or keyboard";
  };

  const renderSpreadsheetDetail = (index) => {
    const project = spreadsheetProjects[index];
    if (!project) return;
    if (spreadsheetModalIndex) spreadsheetModalIndex.textContent = project.number;
    if (spreadsheetModalTitle) spreadsheetModalTitle.textContent = project.title;
    if (spreadsheetModalSubtitle) spreadsheetModalSubtitle.textContent = `${copy(project.type)} · ${activeLanguage === "id" ? "workbook aktif" : "live workbook"}`;
    if (spreadsheetDetailIndex) spreadsheetDetailIndex.textContent = `${project.number} / ${String(spreadsheetProjects.length).padStart(2, "0")}`;
    if (spreadsheetDetailHeading) spreadsheetDetailHeading.textContent = project.title;
    if (spreadsheetDetailKind) spreadsheetDetailKind.textContent = copy(project.type);
    if (spreadsheetDetailNumber) spreadsheetDetailNumber.textContent = project.number;
    if (spreadsheetDetailType) spreadsheetDetailType.textContent = copy(project.type);
    if (spreadsheetDetailTitle) spreadsheetDetailTitle.textContent = project.title;
    if (spreadsheetDetailSummary) spreadsheetDetailSummary.textContent = copy(project.summary);
    if (spreadsheetDetailWorkflow) spreadsheetDetailWorkflow.textContent = copy(project.workflow);
    if (spreadsheetDetailTabs) spreadsheetDetailTabs.textContent = project.tabs.join(" · ");
    if (spreadsheetDetailSkills) spreadsheetDetailSkills.textContent = project.skills.join(" · ");
    if (spreadsheetDetailLink) {
      spreadsheetDetailLink.href = project.url;
      spreadsheetDetailLink.setAttribute("aria-label", `${activeLanguage === "id" ? "Buka di Google Sheets" : "Open in Google Sheets"}: ${project.title}`);
    }
    if (spreadsheetPreviewCard) spreadsheetPreviewCard.style.setProperty("--sheet-accent", project.accent);
    if (spreadsheetPreviewLabel) spreadsheetPreviewLabel.textContent = activeLanguage === "id" ? "DASBOR / WORKBOOK AKTIF" : "DASHBOARD / LIVE WORKBOOK";
    if (spreadsheetPreviewTitle) spreadsheetPreviewTitle.textContent = project.title;
    project.metrics.forEach((metric, metricIndex) => {
      if (spreadsheetPreviewMetricLabels[metricIndex]) spreadsheetPreviewMetricLabels[metricIndex].textContent = copy(metric.label);
      if (spreadsheetPreviewMetricValues[metricIndex]) spreadsheetPreviewMetricValues[metricIndex].textContent = metric.value;
    });
  };

  const resetSpreadsheetDetailView = (restoreCardFocus = false) => {
    activeSpreadsheetDetailIndex = null;
    spreadsheetModal?.classList.remove("showing-detail");
    if (spreadsheetSliderView) spreadsheetSliderView.hidden = false;
    if (spreadsheetDetailView) spreadsheetDetailView.hidden = true;
    renderSpreadsheetHeader();
    if (restoreCardFocus) requestAnimationFrame(() => spreadsheetCardStage?.querySelector(".spreadsheet-project-card.is-active")?.focus());
  };

  const openSpreadsheetDetail = (index) => {
    const project = spreadsheetProjects[index];
    if (!project || !spreadsheetDetailView || !spreadsheetSliderView) return;
    selectSpreadsheetProject(index);
    activeSpreadsheetDetailIndex = index;
    renderSpreadsheetDetail(index);
    spreadsheetSliderView.hidden = true;
    spreadsheetDetailView.hidden = false;
    spreadsheetModal?.classList.add("showing-detail");
    requestAnimationFrame(() => spreadsheetBack?.focus());
  };

  const openSpreadsheetModal = () => {
    if (!spreadsheetModal || !spreadsheetCardStage) return;
    lastFocusedElement = document.activeElement;
    spreadsheetTrigger?.setAttribute("aria-expanded", "true");
    activeSpreadsheetIndex = 0;
    updateSpreadsheetSlider();
    resetSpreadsheetDetailView(false);
    spreadsheetModal.classList.add("open");
    spreadsheetModal.setAttribute("aria-hidden", "false");
    syncModalState();
    requestAnimationFrame(() => spreadsheetModalClose?.focus());
  };

  const closeSpreadsheetModal = () => {
    if (!spreadsheetModal?.classList.contains("open")) return;
    resetSpreadsheetDetailView(false);
    spreadsheetModal.classList.remove("open");
    spreadsheetModal.setAttribute("aria-hidden", "true");
    spreadsheetTrigger?.setAttribute("aria-expanded", "false");
    syncModalState();
    restoreFocus();
  };

  const buildResearchSlider = () => {
    if (!researchCardStage || !researchPagination) return;
    researchCardStage.innerHTML = researchPublications.map((publication, index) => `
      <article class="frontend-project-card research-project-card" data-research-publication-index="${index}" role="button" style="--accent:${publication.accent}" draggable="false">
        <div class="frontend-card-visual research-card-visual">
          <div class="research-card-cover" aria-hidden="true">
            <span>PUBLICATION / ${publication.number}</span>
            <strong>${publication.year}</strong>
            <p>${publication.journalShort}</p>
            <i>DOI · VERIFIED RECORD</i>
          </div>
          <span class="frontend-card-index">RESEARCH / ${publication.number}</span>
        </div>
        <div class="frontend-card-body">
          <div class="frontend-card-title"><span>${publication.number}</span><div><h4>${publication.title}</h4><p class="research-card-type"></p></div><i>↗</i></div>
          <p class="frontend-card-summary research-card-authors"></p>
          <div class="frontend-card-tags research-card-tags"></div>
        </div>
      </article>`).join("");
    researchPagination.innerHTML = researchPublications.map((publication, index) => `<button type="button" data-research-page="${index}"></button>`).join("");
  };

  const renderResearchAbstract = (index) => {
    const publication = researchPublications[index];
    if (!publication) return;
    const number = projectNumber(index);
    if (researchAbstractLabel) researchAbstractLabel.textContent = `${activeLanguage === "id" ? "RINGKASAN ABSTRAK" : "ABSTRACT SUMMARY"} / ${number}`;
    if (researchAbstractHeading) researchAbstractHeading.textContent = activeLanguage === "id" ? "Ringkasan" : "Abstract";
    if (researchAbstractText) researchAbstractText.textContent = copy(publication.abstract);
    if (researchAbstractTags) {
      const methodTags = copy(publication.method).split(" · ").filter(Boolean);
      researchAbstractTags.innerHTML = [publication.year, ...methodTags, "DOI"].map((tag) => `<span>${tag}</span>`).join("");
      researchAbstractTags.setAttribute("aria-label", `${activeLanguage === "id" ? "Metode dan metadata artikel aktif" : "Current article methods and metadata"}: ${publication.title}`);
    }
  };

  const localizeResearchSlider = () => {
    if (!researchCardStage || !researchPagination) return;
    researchCardStage.querySelectorAll("[data-research-publication-index]").forEach((card) => {
      const index = Number(card.dataset.researchPublicationIndex);
      const publication = researchPublications[index];
      card.querySelector(".research-card-type").textContent = copy(publication.method);
      card.querySelector(".research-card-authors").textContent = `${activeLanguage === "id" ? "Penulis" : "Authors"}: ${publication.authors}`;
      const methodTags = copy(publication.method).split(" · ").slice(0, 2);
      card.querySelector(".research-card-tags").innerHTML = [publication.year, ...methodTags, "DOI"].map((tag) => `<span>${tag}</span>`).join("");
      card.setAttribute("aria-label", `${activeLanguage === "id" ? "Buka publikasi" : "Open publication"}: ${publication.title}`);
    });
    researchPagination.querySelectorAll("[data-research-page]").forEach((button) => {
      const publication = researchPublications[Number(button.dataset.researchPage)];
      button.setAttribute("aria-label", `${activeLanguage === "id" ? "Pilih publikasi" : "Go to publication"} ${publication.number}: ${publication.title}`);
    });
    renderResearchAbstract(activeResearchIndex);
  };

  const updateResearchSlider = () => {
    const total = researchPublications.length;
    researchCardStage?.querySelectorAll("[data-research-publication-index]").forEach((card) => {
      const index = Number(card.dataset.researchPublicationIndex);
      const relative = (index - activeResearchIndex + total) % total;
      const state = relative === 0 ? "is-active" : relative === 1 ? "is-next" : relative === total - 1 ? "is-prev" : "is-hidden";
      card.classList.remove("is-active", "is-next", "is-prev", "is-hidden");
      card.classList.add(state);
      card.tabIndex = state === "is-active" ? 0 : -1;
      card.setAttribute("aria-hidden", String(state !== "is-active"));
    });
    researchPagination?.querySelectorAll("[data-research-page]").forEach((button) => {
      const isActive = Number(button.dataset.researchPage) === activeResearchIndex;
      button.classList.toggle("active", isActive);
      if (isActive) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    if (researchCurrent) researchCurrent.textContent = projectNumber(activeResearchIndex);
    renderResearchAbstract(activeResearchIndex);
  };

  const selectResearchPublication = (index) => {
    const total = researchPublications.length;
    activeResearchIndex = (index + total) % total;
    updateResearchSlider();
  };

  const renderResearchHeader = () => {
    if (researchModalIndex) researchModalIndex.textContent = "02";
    if (researchModalTitle) researchModalTitle.textContent = activeLanguage === "id" ? "Slider publikasi ilmiah" : "Research publication slider";
    if (researchModalSubtitle) researchModalSubtitle.textContent = activeLanguage === "id" ? "9 publikasi terulas sejawat · geser, tarik, panah, atau keyboard" : "9 peer-reviewed publications · swipe, drag, arrows, or keyboard";
  };

  const renderResearchDetail = (index) => {
    const publication = researchPublications[index];
    if (!publication) return;
    if (researchModalIndex) researchModalIndex.textContent = publication.number;
    if (researchModalTitle) researchModalTitle.textContent = activeLanguage === "id" ? "Detail publikasi" : "Publication details";
    if (researchModalSubtitle) researchModalSubtitle.textContent = `${publication.year} · ${publication.journalShort}`;
    if (researchDetailIndex) researchDetailIndex.textContent = `${publication.number} / ${String(researchPublications.length).padStart(2, "0")}`;
    if (researchDetailHeading) researchDetailHeading.textContent = publication.title;
    if (researchDetailJournal) researchDetailJournal.textContent = publication.journalShort;
    if (researchDetailNumber) researchDetailNumber.textContent = publication.number;
    if (researchDetailYear) {
      researchDetailYear.textContent = publication.year;
      researchDetailYear.setAttribute("datetime", publication.year);
    }
    if (researchDetailJournalFull) researchDetailJournalFull.textContent = publication.journal;
    if (researchDetailTitle) researchDetailTitle.textContent = publication.title;
    if (researchDetailAuthors) researchDetailAuthors.textContent = publication.authors;
    if (researchDetailMethod) researchDetailMethod.textContent = copy(publication.method);
    if (researchDetailDoi) researchDetailDoi.textContent = publication.doi;
    if (researchDetailLink) {
      researchDetailLink.href = publication.url;
      researchDetailLink.setAttribute("aria-label", `${activeLanguage === "id" ? "Buka halaman jurnal resmi" : "Open official journal page"}: ${publication.title}`);
    }
    if (researchCitationNumber) researchCitationNumber.textContent = publication.number;
    if (researchCitationYear) researchCitationYear.textContent = publication.year;
    if (researchCitationJournal) researchCitationJournal.textContent = publication.journalShort;
  };

  const resetResearchDetailView = (restoreCardFocus = false) => {
    activeResearchDetailIndex = null;
    researchModal?.classList.remove("showing-detail");
    if (researchSliderView) researchSliderView.hidden = false;
    if (researchDetailView) researchDetailView.hidden = true;
    renderResearchHeader();
    if (restoreCardFocus) requestAnimationFrame(() => researchCardStage?.querySelector(".research-project-card.is-active")?.focus());
  };

  const openResearchDetail = (index) => {
    const publication = researchPublications[index];
    if (!publication || !researchDetailView || !researchSliderView) return;
    selectResearchPublication(index);
    activeResearchDetailIndex = index;
    renderResearchDetail(index);
    researchSliderView.hidden = true;
    researchDetailView.hidden = false;
    researchModal?.classList.add("showing-detail");
    requestAnimationFrame(() => researchBack?.focus());
  };

  const openResearchModal = () => {
    if (!researchModal || !researchCardStage) return;
    lastFocusedElement = document.activeElement;
    researchTrigger?.setAttribute("aria-expanded", "true");
    activeResearchIndex = 0;
    updateResearchSlider();
    resetResearchDetailView(false);
    researchModal.classList.add("open");
    researchModal.setAttribute("aria-hidden", "false");
    syncModalState();
    requestAnimationFrame(() => researchModalClose?.focus());
  };

  const closeResearchModal = () => {
    if (!researchModal?.classList.contains("open")) return;
    resetResearchDetailView(false);
    researchModal.classList.remove("open");
    researchModal.setAttribute("aria-hidden", "true");
    researchTrigger?.setAttribute("aria-expanded", "false");
    syncModalState();
    restoreFocus();
  };

  const buildFrontendSlider = () => {
    if (!frontendCardStage || !frontendPagination) return;
    frontendCardStage.innerHTML = frontendProjects.map((project, index) => {
      const visual = project.image
        ? `<img src="${project.image}" alt="${project.title} interface preview" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" draggable="false">`
        : `<div class="frontend-mini-ui ${project.visual || ""}" aria-hidden="true"><span></span><span></span><span></span><i></i><b></b></div>`;
      return `<article class="frontend-project-card" data-frontend-project-index="${index}" role="button" style="--accent:${project.accent}" draggable="false">
        <div class="frontend-card-visual">${visual}<span class="frontend-card-index">PROJECT / ${projectNumber(index)}</span><span class="frontend-card-open"></span></div>
        <div class="frontend-card-body"><div class="frontend-card-title"><span>${projectNumber(index)}</span><div><h4>${project.title}</h4><p class="frontend-card-type"></p></div><i>↗</i></div><p class="frontend-card-summary"></p><div class="frontend-card-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></div>
      </article>`;
    }).join("");
    frontendPagination.innerHTML = frontendProjects.map((project, index) => `<button type="button" data-frontend-page="${index}"></button>`).join("");
  };

  const renderFrontendHighlight = (index) => {
    const project = frontendProjects[index];
    if (!project) return;
    const number = projectNumber(index);
    if (frontendHighlightLabel) frontendHighlightLabel.textContent = `${activeLanguage === "id" ? "KEUNGGULAN DESAIN" : "DESIGN ADVANTAGE"} / ${number}`;
    if (frontendHighlightName) frontendHighlightName.textContent = project.title;
    if (frontendHighlightTitle) frontendHighlightTitle.textContent = copy(project.highlightTitle);
    if (frontendHighlightText) frontendHighlightText.textContent = copy(project.highlight);
    if (frontendHighlightTags) {
      frontendHighlightTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
      frontendHighlightTags.setAttribute("aria-label", `${activeLanguage === "id" ? "Keunggulan teknis proyek aktif" : "Current project technical strengths"}: ${project.title}`);
    }
  };

  const localizeFrontendSlider = () => {
    if (!frontendCardStage || !frontendPagination) return;
    frontendCardStage.querySelectorAll("[data-frontend-project-index]").forEach((card) => {
      const index = Number(card.dataset.frontendProjectIndex);
      const project = frontendProjects[index];
      card.querySelector(".frontend-card-type").textContent = copy(project.type);
      card.querySelector(".frontend-card-summary").textContent = copy(project.summary);
      card.querySelector(".frontend-card-open").textContent = activeLanguage === "id" ? "Buka demo ↗" : "View demo ↗";
      card.setAttribute("aria-label", `${activeLanguage === "id" ? "Buka demo" : "Open demo"}: ${project.title}`);
    });
    frontendPagination.querySelectorAll("[data-frontend-page]").forEach((button) => {
      const project = frontendProjects[Number(button.dataset.frontendPage)];
      button.setAttribute("aria-label", `${activeLanguage === "id" ? "Pilih proyek" : "Go to project"} ${project.title}`);
    });
    renderFrontendHighlight(activeFrontendIndex);
  };

  const updateFrontendSlider = () => {
    const total = frontendProjects.length;
    frontendCardStage?.querySelectorAll("[data-frontend-project-index]").forEach((card) => {
      const index = Number(card.dataset.frontendProjectIndex);
      const relative = (index - activeFrontendIndex + total) % total;
      const state = relative === 0 ? "is-active" : relative === 1 ? "is-next" : relative === total - 1 ? "is-prev" : "is-hidden";
      card.classList.remove("is-active", "is-next", "is-prev", "is-hidden");
      card.classList.add(state);
      card.tabIndex = state === "is-active" ? 0 : -1;
      card.setAttribute("aria-hidden", String(state !== "is-active"));
    });
    frontendPagination?.querySelectorAll("[data-frontend-page]").forEach((button) => {
      const isActive = Number(button.dataset.frontendPage) === activeFrontendIndex;
      button.classList.toggle("active", isActive);
      if (isActive) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    if (frontendCurrent) frontendCurrent.textContent = projectNumber(activeFrontendIndex);
    renderFrontendHighlight(activeFrontendIndex);
  };

  const selectFrontendProject = (index) => {
    const total = frontendProjects.length;
    activeFrontendIndex = (index + total) % total;
    updateFrontendSlider();
  };

  const renderFrontendHeader = () => {
    if (frontendModalIndex) frontendModalIndex.textContent = "04";
    if (frontendModalTitle) frontendModalTitle.textContent = activeLanguage === "id" ? "Slider proyek frontend" : "Frontend project slider";
    if (frontendModalSubtitle) frontendModalSubtitle.textContent = activeLanguage === "id" ? "12 proyek interaktif · geser, tarik, panah, atau keyboard" : "12 interactive builds · swipe, drag, arrows, or keyboard";
  };

  const renderFrontendDemoMeta = (index) => {
    const project = frontendProjects[index];
    if (!project) return;
    if (frontendModalIndex) frontendModalIndex.textContent = projectNumber(index);
    if (frontendModalTitle) frontendModalTitle.textContent = project.title;
    if (frontendModalSubtitle) frontendModalSubtitle.textContent = `${copy(project.type)} · ${activeLanguage === "id" ? "demo terbuka di dalam portofolio" : "demo opens inside this portfolio"}`;
    if (frontendDemoIndex) frontendDemoIndex.textContent = `${projectNumber(index)} / ${frontendProjects.length}`;
    if (frontendDemoTitle) frontendDemoTitle.textContent = project.title;
    if (frontendDemoType) frontendDemoType.textContent = copy(project.type);
    if (frontendDemoFrame) frontendDemoFrame.title = `${project.title} — ${copy(project.type)}`;
    if (frontendSourceLink) {
      frontendSourceLink.href = `https://github.com/zain43ul-afk/zain43ul-afk.github.io/tree/main/zain43ul-frontenddemo.github.io/showcase/${project.slug}`;
      frontendSourceLink.setAttribute("aria-label", `${activeLanguage === "id" ? "Lihat source code" : "View source code"}: ${project.title}`);
    }
  };

  const setLanguage = (language) => {
    activeLanguage = language === "id" ? "id" : "en";
    root.lang = activeLanguage;
    translatable.forEach((element) => {
      const translation = element.dataset[activeLanguage];
      if (translation) element.innerHTML = translation;
    });
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === activeLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    const isOpen = body.classList.contains("menu-open");
    menuButton?.setAttribute("aria-label", languageLabels[activeLanguage][isOpen ? "menuClose" : "menuOpen"]);
    backToTop?.setAttribute("aria-label", languageLabels[activeLanguage].backToTop);
    mobileDock?.setAttribute("aria-label", languageLabels[activeLanguage].quickNav);
    if (activePublicationCard) renderPublicationModal(activePublicationCard);
    if (activeDemoKey) renderDemoModal(activeDemoKey);
    localizeSpreadsheetSlider();
    if (activeSpreadsheetDetailIndex === null) renderSpreadsheetHeader();
    else renderSpreadsheetDetail(activeSpreadsheetDetailIndex);
    localizeResearchSlider();
    if (activeResearchDetailIndex === null) renderResearchHeader();
    else renderResearchDetail(activeResearchDetailIndex);
    localizeFrontendSlider();
    if (activeFrontendDemoIndex === null) renderFrontendHeader();
    else renderFrontendDemoMeta(activeFrontendDemoIndex);
    try { localStorage.setItem("hzm-language", activeLanguage); } catch { /* Storage is optional. */ }
  };

  const toggleMenu = (forceClose = false) => {
    const shouldOpen = forceClose ? false : !navigation?.classList.contains("open");
    navigation?.classList.toggle("open", shouldOpen);
    body.classList.toggle("menu-open", shouldOpen);
    menuButton?.setAttribute("aria-expanded", String(shouldOpen));
    menuButton?.setAttribute("aria-label", languageLabels[activeLanguage][shouldOpen ? "menuClose" : "menuOpen"]);
  };

  const syncModalState = () => {
    const hasOpenModal = publicationModal?.classList.contains("open") || demoModal?.classList.contains("open") || spreadsheetModal?.classList.contains("open") || researchModal?.classList.contains("open") || frontendModal?.classList.contains("open");
    body.classList.toggle("modal-open", Boolean(hasOpenModal));
  };

  const restoreFocus = () => {
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
    lastFocusedElement = null;
  };

  const trapFocus = (modal, event) => {
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll("button:not([tabindex='-1']), a[href], iframe")]
      .filter((element) => !element.hasAttribute("disabled") && !element.closest("[hidden]") && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openPublicationModal = (card) => {
    if (!publicationModal) return;
    lastFocusedElement = document.activeElement;
    activePublicationCard = card;
    card.setAttribute("aria-expanded", "true");
    renderPublicationModal(card);
    publicationModal.classList.add("open");
    publicationModal.setAttribute("aria-hidden", "false");
    syncModalState();
    requestAnimationFrame(() => publicationModalClose?.focus());
  };

  const closePublicationModal = () => {
    if (!publicationModal?.classList.contains("open")) return;
    publicationModal.classList.remove("open");
    publicationModal.setAttribute("aria-hidden", "true");
    activePublicationCard?.setAttribute("aria-expanded", "false");
    activePublicationCard = null;
    syncModalState();
    restoreFocus();
  };

  const openDemoModal = (key) => {
    if (!demoModal || !demos[key]) return;
    lastFocusedElement = document.activeElement;
    activeDemoKey = key;
    demoButtons.forEach((button) => button.setAttribute("aria-expanded", String(button.dataset.demoKey === key)));
    renderDemoModal(key);
    demoModal.classList.add("open");
    demoModal.setAttribute("aria-hidden", "false");
    syncModalState();
    requestAnimationFrame(() => demoModalClose?.focus());
  };

  const closeDemoModal = () => {
    if (!demoModal?.classList.contains("open")) return;
    demoModal.classList.remove("open");
    demoModal.setAttribute("aria-hidden", "true");
    demoButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
    activeDemoKey = null;
    syncModalState();
    restoreFocus();
  };

  const resetFrontendDemoView = (restoreCardFocus = false) => {
    activeFrontendDemoIndex = null;
    frontendModal?.classList.remove("showing-demo");
    if (frontendSliderView) frontendSliderView.hidden = false;
    if (frontendDemoView) frontendDemoView.hidden = true;
    frontendDemoShell?.classList.remove("demo-ready");
    if (frontendDemoFrame) frontendDemoFrame.src = "about:blank";
    renderFrontendHeader();
    if (restoreCardFocus) requestAnimationFrame(() => frontendCardStage?.querySelector(".frontend-project-card.is-active")?.focus());
  };

  const openFrontendDemo = (index) => {
    const project = frontendProjects[index];
    if (!project || !frontendDemoFrame || !frontendDemoView || !frontendSliderView) return;
    selectFrontendProject(index);
    activeFrontendDemoIndex = index;
    renderFrontendDemoMeta(index);
    frontendSliderView.hidden = true;
    frontendDemoView.hidden = false;
    frontendModal?.classList.add("showing-demo");
    frontendDemoShell?.classList.remove("demo-ready");
    frontendDemoFrame.src = `zain43ul-frontenddemo.github.io/showcase/${project.slug}/`;
    requestAnimationFrame(() => frontendBack?.focus());
  };

  const openFrontendModal = () => {
    if (!frontendModal || !frontendCardStage) return;
    lastFocusedElement = document.activeElement;
    frontendTrigger?.setAttribute("aria-expanded", "true");
    activeFrontendIndex = 0;
    updateFrontendSlider();
    resetFrontendDemoView(false);
    frontendModal.classList.add("open");
    frontendModal.setAttribute("aria-hidden", "false");
    syncModalState();
    requestAnimationFrame(() => frontendModalClose?.focus());
  };

  const closeFrontendModal = () => {
    if (!frontendModal?.classList.contains("open")) return;
    resetFrontendDemoView(false);
    frontendModal.classList.remove("open");
    frontendModal.setAttribute("aria-hidden", "true");
    frontendTrigger?.setAttribute("aria-expanded", "false");
    syncModalState();
    restoreFocus();
  };

  const prepareFrontendDemoFrame = () => {
    try {
      const documentInsideFrame = frontendDemoFrame?.contentDocument;
      if (!documentInsideFrame?.body || !documentInsideFrame.querySelector(".demo-stage")) return false;
      let integrationStyle = documentInsideFrame.querySelector("#portfolio-demo-integration");
      if (!integrationStyle) {
        integrationStyle = documentInsideFrame.createElement("style");
        integrationStyle.id = "portfolio-demo-integration";
        integrationStyle.textContent = `html{scroll-behavior:auto!important}body{margin:0!important;overflow:auto!important}.skip-link,.showcase-bar,.showcase-intro,.next-project{display:none!important}.showcase-page{min-height:100vh!important}.demo-stage{min-height:100vh!important;padding:14px!important}.demo-stage>div{width:100%!important;max-width:none!important;margin:0!important}@media(max-width:780px){.demo-stage{padding:8px!important}}`;
        documentInsideFrame.head.appendChild(integrationStyle);
      }
      documentInsideFrame.documentElement.scrollTop = 0;
      documentInsideFrame.body.scrollTop = 0;
      return true;
    } catch {
      return false;
    }
  };

  const allSectionLinks = [...primaryNavLinks, ...mobileDockLinks];
  let scrollFrame = 0;

  const updateScrollInterface = () => {
    scrollFrame = 0;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollTop / scrollRange));
    scrollProgressBar?.style.setProperty("transform", `scaleX(${progress})`);
    siteHeader?.classList.toggle("scrolled", scrollTop > 30);
    backToTop?.classList.toggle("visible", scrollTop > Math.max(800, scrollRange * .55));

    const marker = scrollTop + window.innerHeight * .38;
    let activeId = "";
    trackedSections.forEach((section) => {
      if (section.offsetTop <= marker) activeId = section.id;
    });
    if (window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 12) activeId = "contact";

    allSectionLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeId}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const requestScrollUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateScrollInterface);
  };

  if (finePointer && !reducedMotion) {
    serviceRows.forEach((row) => {
      row.addEventListener("pointermove", (event) => {
        const bounds = row.getBoundingClientRect();
        row.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        row.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      });
    });

    publicationCards.forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        card.style.setProperty("--rotate-x", `${(-y * 4).toFixed(2)}deg`);
        card.style.setProperty("--rotate-y", `${(x * 5).toFixed(2)}deg`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
      });
    });
  }

  menuButton?.addEventListener("click", () => toggleMenu());
  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => toggleMenu(true)));
  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  caseStudies.forEach((study) => {
    study.addEventListener("toggle", () => {
      if (!study.open) return;
      caseStudies.forEach((other) => {
        if (other !== study) other.open = false;
      });
    });
  });

  publicationCards.forEach((card) => {
    card.setAttribute("aria-expanded", "false");
    card.addEventListener("click", () => openPublicationModal(card));
  });
  publicationModal?.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closePublicationModal));
  publicationModal?.addEventListener("keydown", (event) => trapFocus(publicationModal, event));

  demoButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => openDemoModal(button.dataset.demoKey));
  });
  demoModal?.querySelectorAll("[data-demo-close]").forEach((button) => button.addEventListener("click", closeDemoModal));
  demoModal?.addEventListener("keydown", (event) => trapFocus(demoModal, event));

  buildSpreadsheetSlider();
  localizeSpreadsheetSlider();
  updateSpreadsheetSlider();
  spreadsheetTrigger?.setAttribute("aria-expanded", "false");
  spreadsheetTrigger?.addEventListener("click", openSpreadsheetModal);
  spreadsheetSecondaryTriggers.forEach((button) => button.addEventListener("click", openSpreadsheetModal));
  spreadsheetModal?.querySelectorAll("[data-spreadsheet-close]").forEach((button) => button.addEventListener("click", closeSpreadsheetModal));
  spreadsheetModal?.addEventListener("keydown", (event) => trapFocus(spreadsheetModal, event));
  spreadsheetPrevious?.addEventListener("click", () => selectSpreadsheetProject(activeSpreadsheetIndex - 1));
  spreadsheetNext?.addEventListener("click", () => selectSpreadsheetProject(activeSpreadsheetIndex + 1));
  spreadsheetPagination?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-spreadsheet-page]");
    if (button) selectSpreadsheetProject(Number(button.dataset.spreadsheetPage));
  });

  let spreadsheetPointerStart = null;
  let spreadsheetPointerDelta = 0;
  let suppressSpreadsheetClick = false;
  spreadsheetCardStage?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    spreadsheetPointerStart = event.clientX;
    spreadsheetPointerDelta = 0;
  });
  spreadsheetCardStage?.addEventListener("pointermove", (event) => {
    if (spreadsheetPointerStart === null) return;
    spreadsheetPointerDelta = event.clientX - spreadsheetPointerStart;
    const isDragging = Math.abs(spreadsheetPointerDelta) > 7;
    spreadsheetCardStage.classList.toggle("is-dragging", isDragging);
    if (isDragging && !spreadsheetCardStage.hasPointerCapture?.(event.pointerId)) spreadsheetCardStage.setPointerCapture?.(event.pointerId);
  });
  const finishSpreadsheetPointer = (event) => {
    if (spreadsheetPointerStart === null) return;
    if (spreadsheetCardStage?.hasPointerCapture?.(event.pointerId)) spreadsheetCardStage.releasePointerCapture(event.pointerId);
    spreadsheetCardStage?.classList.remove("is-dragging");
    if (Math.abs(spreadsheetPointerDelta) > 42) {
      selectSpreadsheetProject(activeSpreadsheetIndex + (spreadsheetPointerDelta < 0 ? 1 : -1));
      suppressSpreadsheetClick = true;
      window.setTimeout(() => { suppressSpreadsheetClick = false; }, 0);
    }
    spreadsheetPointerStart = null;
    spreadsheetPointerDelta = 0;
  };
  spreadsheetCardStage?.addEventListener("pointerup", finishSpreadsheetPointer);
  spreadsheetCardStage?.addEventListener("pointercancel", finishSpreadsheetPointer);
  spreadsheetCardStage?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-spreadsheet-project-index]");
    if (!card || suppressSpreadsheetClick) return;
    const index = Number(card.dataset.spreadsheetProjectIndex);
    if (index === activeSpreadsheetIndex) openSpreadsheetDetail(index);
    else selectSpreadsheetProject(index);
  });
  spreadsheetCardStage?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      selectSpreadsheetProject(activeSpreadsheetIndex + (event.key === "ArrowRight" ? 1 : -1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      selectSpreadsheetProject(event.key === "Home" ? 0 : spreadsheetProjects.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openSpreadsheetDetail(activeSpreadsheetIndex);
    }
  });
  spreadsheetBack?.addEventListener("click", () => resetSpreadsheetDetailView(true));

  buildResearchSlider();
  localizeResearchSlider();
  updateResearchSlider();
  researchTrigger?.setAttribute("aria-expanded", "false");
  researchTrigger?.addEventListener("click", openResearchModal);
  researchSecondaryTriggers.forEach((button) => button.addEventListener("click", openResearchModal));
  researchModal?.querySelectorAll("[data-research-close]").forEach((button) => button.addEventListener("click", closeResearchModal));
  researchModal?.addEventListener("keydown", (event) => trapFocus(researchModal, event));
  researchPrevious?.addEventListener("click", () => selectResearchPublication(activeResearchIndex - 1));
  researchNext?.addEventListener("click", () => selectResearchPublication(activeResearchIndex + 1));
  researchPagination?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-research-page]");
    if (button) selectResearchPublication(Number(button.dataset.researchPage));
  });

  let researchPointerStart = null;
  let researchPointerDelta = 0;
  let suppressResearchClick = false;
  researchCardStage?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    researchPointerStart = event.clientX;
    researchPointerDelta = 0;
  });
  researchCardStage?.addEventListener("pointermove", (event) => {
    if (researchPointerStart === null) return;
    researchPointerDelta = event.clientX - researchPointerStart;
    const isDragging = Math.abs(researchPointerDelta) > 7;
    researchCardStage.classList.toggle("is-dragging", isDragging);
    if (isDragging && !researchCardStage.hasPointerCapture?.(event.pointerId)) researchCardStage.setPointerCapture?.(event.pointerId);
  });
  const finishResearchPointer = (event) => {
    if (researchPointerStart === null) return;
    if (researchCardStage?.hasPointerCapture?.(event.pointerId)) researchCardStage.releasePointerCapture(event.pointerId);
    researchCardStage?.classList.remove("is-dragging");
    if (Math.abs(researchPointerDelta) > 42) {
      selectResearchPublication(activeResearchIndex + (researchPointerDelta < 0 ? 1 : -1));
      suppressResearchClick = true;
      window.setTimeout(() => { suppressResearchClick = false; }, 0);
    }
    researchPointerStart = null;
    researchPointerDelta = 0;
  };
  researchCardStage?.addEventListener("pointerup", finishResearchPointer);
  researchCardStage?.addEventListener("pointercancel", finishResearchPointer);
  researchCardStage?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-research-publication-index]");
    if (!card || suppressResearchClick) return;
    const index = Number(card.dataset.researchPublicationIndex);
    if (index === activeResearchIndex) openResearchDetail(index);
    else selectResearchPublication(index);
  });
  researchCardStage?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      selectResearchPublication(activeResearchIndex + (event.key === "ArrowRight" ? 1 : -1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      selectResearchPublication(event.key === "Home" ? 0 : researchPublications.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openResearchDetail(activeResearchIndex);
    }
  });
  researchBack?.addEventListener("click", () => resetResearchDetailView(true));

  buildFrontendSlider();
  updateFrontendSlider();
  frontendTrigger?.setAttribute("aria-expanded", "false");
  frontendTrigger?.addEventListener("click", openFrontendModal);
  atlasTrigger?.addEventListener("click", () => {
    openFrontendModal();
    openFrontendDemo(0);
  });
  frontendModal?.querySelectorAll("[data-frontend-close]").forEach((button) => button.addEventListener("click", closeFrontendModal));
  frontendModal?.addEventListener("keydown", (event) => trapFocus(frontendModal, event));
  frontendPrevious?.addEventListener("click", () => selectFrontendProject(activeFrontendIndex - 1));
  frontendNext?.addEventListener("click", () => selectFrontendProject(activeFrontendIndex + 1));
  frontendPagination?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-frontend-page]");
    if (button) selectFrontendProject(Number(button.dataset.frontendPage));
  });

  let frontendPointerStart = null;
  let frontendPointerDelta = 0;
  let suppressFrontendClick = false;
  frontendCardStage?.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    frontendPointerStart = event.clientX;
    frontendPointerDelta = 0;
  });
  frontendCardStage?.addEventListener("pointermove", (event) => {
    if (frontendPointerStart === null) return;
    frontendPointerDelta = event.clientX - frontendPointerStart;
    const isDragging = Math.abs(frontendPointerDelta) > 7;
    frontendCardStage.classList.toggle("is-dragging", isDragging);
    if (isDragging && !frontendCardStage.hasPointerCapture?.(event.pointerId)) frontendCardStage.setPointerCapture?.(event.pointerId);
  });
  const finishFrontendPointer = (event) => {
    if (frontendPointerStart === null) return;
    if (frontendCardStage?.hasPointerCapture?.(event.pointerId)) frontendCardStage.releasePointerCapture(event.pointerId);
    frontendCardStage?.classList.remove("is-dragging");
    if (Math.abs(frontendPointerDelta) > 42) {
      selectFrontendProject(activeFrontendIndex + (frontendPointerDelta < 0 ? 1 : -1));
      suppressFrontendClick = true;
      window.setTimeout(() => { suppressFrontendClick = false; }, 0);
    }
    frontendPointerStart = null;
    frontendPointerDelta = 0;
  };
  frontendCardStage?.addEventListener("pointerup", finishFrontendPointer);
  frontendCardStage?.addEventListener("pointercancel", finishFrontendPointer);
  frontendCardStage?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-frontend-project-index]");
    if (!card || suppressFrontendClick) return;
    const index = Number(card.dataset.frontendProjectIndex);
    if (index === activeFrontendIndex) openFrontendDemo(index);
    else selectFrontendProject(index);
  });
  frontendCardStage?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      selectFrontendProject(activeFrontendIndex + (event.key === "ArrowRight" ? 1 : -1));
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      selectFrontendProject(event.key === "Home" ? 0 : frontendProjects.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFrontendDemo(activeFrontendIndex);
    }
  });
  frontendBack?.addEventListener("click", () => resetFrontendDemoView(true));
  frontendDemoFrame?.addEventListener("load", () => {
    if (activeFrontendDemoIndex === null || frontendDemoFrame.src === "about:blank") return;
    prepareFrontendDemoFrame();
    window.setTimeout(prepareFrontendDemoFrame, 120);
    window.setTimeout(() => {
      if (activeFrontendDemoIndex !== null) {
        prepareFrontendDemoFrame();
        frontendDemoShell?.classList.add("demo-ready");
      }
    }, 360);
  });

  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780 && body.classList.contains("menu-open")) toggleMenu(true);
    requestScrollUpdate();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (frontendModal?.classList.contains("open")) {
      if (activeFrontendDemoIndex !== null) resetFrontendDemoView(true);
      else closeFrontendModal();
    } else if (researchModal?.classList.contains("open")) {
      if (activeResearchDetailIndex !== null) resetResearchDetailView(true);
      else closeResearchModal();
    } else if (spreadsheetModal?.classList.contains("open")) {
      if (activeSpreadsheetDetailIndex !== null) resetSpreadsheetDetailView(true);
      else closeSpreadsheetModal();
    } else if (demoModal?.classList.contains("open")) {
      closeDemoModal();
    } else if (publicationModal?.classList.contains("open")) {
      closePublicationModal();
    } else if (body.classList.contains("menu-open")) {
      toggleMenu(true);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -4%" });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  if (year) year.textContent = String(new Date().getFullYear());
  let storedLanguage = "en";
  try { storedLanguage = localStorage.getItem("hzm-language") || "en"; } catch { /* Use English. */ }
  setLanguage(storedLanguage);
  updateScrollInterface();
  window.addEventListener("load", updateScrollInterface, { once: true });
})();
