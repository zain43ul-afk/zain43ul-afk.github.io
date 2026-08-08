(() => {
  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const languageButtons = document.querySelectorAll("[data-lang]");
  const translatable = document.querySelectorAll("[data-en][data-id]");
  const year = document.querySelector("#year");
  const avatar = document.querySelector(".avatar-wrap img");
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

  const frontendTrigger = document.querySelector("[data-frontend-open]");
  const frontendModal = document.querySelector("#frontend-slider-modal");
  const frontendModalClose = document.querySelector(".frontend-slider-close");
  const frontendModalIndex = document.querySelector("#frontend-modal-index");
  const frontendModalTitle = document.querySelector("#frontend-slider-title");
  const frontendModalSubtitle = document.querySelector(".frontend-slider-heading small");
  const frontendSliderView = document.querySelector("[data-frontend-slider-view]");
  const frontendDemoView = document.querySelector("[data-frontend-demo-view]");
  const frontendCardStage = document.querySelector("[data-frontend-card-stage]");
  const frontendPagination = document.querySelector("[data-frontend-pagination]");
  const frontendCurrent = document.querySelector("#frontend-project-current");
  const frontendPrevious = document.querySelector("[data-frontend-prev]");
  const frontendNext = document.querySelector("[data-frontend-next]");
  const frontendBack = document.querySelector("[data-frontend-back]");
  const frontendDemoFrame = document.querySelector("#frontend-demo-frame");
  const frontendDemoShell = document.querySelector(".frontend-demo-shell");
  const frontendDemoIndex = document.querySelector("#frontend-demo-index");
  const frontendDemoTitle = document.querySelector("#frontend-demo-title");
  const frontendDemoType = document.querySelector("#frontend-demo-type");

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
    research: {
      number: "02",
      format: "DOCS",
      type: { en: "Live Google Docs document", id: "Dokumen Google Docs langsung" },
      title: { en: "Research Evidence Synthesis", id: "Sintesis Bukti Riset" },
      summary: {
        en: "A concise, method-aware synthesis of five selected peer-reviewed publications, including an evidence map, cross-study themes, decision implications, QA checklist, and source links.",
        id: "Sintesis ringkas dan peka-metode atas lima publikasi terulas sejawat, dilengkapi peta bukti, tema lintas studi, implikasi keputusan, daftar QA, dan tautan sumber.",
      },
      skills: {
        en: ["Evidence map", "Method fit", "Synthesis", "Source QA", "Decision writing"],
        id: ["Peta bukti", "Kesesuaian metode", "Sintesis", "QA sumber", "Penulisan keputusan"],
      },
      action: { en: "Open in Google Docs", id: "Buka di Google Docs" },
      linkNote: { en: "Live document · opens in a new tab", id: "Dokumen langsung · terbuka di tab baru" },
      url: "https://docs.google.com/document/d/1aC0fzyE7fmY1Paw-KnJkXMO92_o3In5lWt3XOog2IA8",
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
    writing: {
      number: "05",
      format: "DOCS",
      type: { en: "Live Google Docs document", id: "Dokumen Google Docs langsung" },
      title: { en: "Professional Research Brief", id: "Brief Riset Profesional" },
      summary: {
        en: "An illustrative three-page decision brief that turns a halal-certification support problem into a 90-day pilot, minimum data tracker, governance controls, and clear decision requests.",
        id: "Brief keputusan ilustratif tiga halaman yang menerjemahkan masalah dukungan sertifikasi halal menjadi pilot 90 hari, pelacak data minimum, kontrol tata kelola, dan permintaan keputusan yang jelas.",
      },
      skills: {
        en: ["Executive brief", "Implementation plan", "KPI design", "Risk controls", "Document formatting"],
        id: ["Brief eksekutif", "Rencana implementasi", "Desain KPI", "Kontrol risiko", "Pemformatan dokumen"],
      },
      action: { en: "Open in Google Docs", id: "Buka di Google Docs" },
      linkNote: { en: "Live document · opens in a new tab", id: "Dokumen langsung · terbuka di tab baru" },
      url: "https://docs.google.com/document/d/12nCFsaOga70oS94Om1LV00fizq4puB8jZ2IHeV_tTRY",
    },
  };

  const frontendProjects = [
    {
      slug: "atlas-studio", title: "Atlas Studio", accent: "#ff6b3d",
      type: { en: "Website Frontend", id: "Frontend Website" },
      summary: { en: "An editorial architecture website with immersive imagery and measured typography.", id: "Website arsitektur editorial dengan gambar imersif dan tipografi yang terukur." },
      tags: ["Next.js", "Responsive", "Motion"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "flowdesk-app", title: "Flowdesk", accent: "#8b7cff", visual: "visual-flowdesk",
      type: { en: "Web Application Frontend", id: "Frontend Aplikasi Web" },
      summary: { en: "A focused project workspace with live task controls and useful operational states.", id: "Ruang kerja proyek dengan kontrol tugas langsung dan status operasional yang jelas." },
      tags: ["React State", "Kanban", "Forms"],
    },
    {
      slug: "form-store", title: "Form Objects", accent: "#f35b3f",
      type: { en: "E-commerce Frontend", id: "Frontend E-commerce" },
      summary: { en: "A premium storefront with product filtering, cart controls, and checkout feedback.", id: "Etalase premium dengan filter produk, kontrol keranjang, dan umpan balik checkout." },
      tags: ["Commerce UI", "Cart", "Filters"],
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "nova-analytics", title: "Nova Analytics", accent: "#6366f1", visual: "visual-nova",
      type: { en: "Dashboard & Data Visualization", id: "Dasbor & Visualisasi Data" },
      summary: { en: "A decision-ready revenue dashboard with responsive charts and period filters.", id: "Dasbor pendapatan siap keputusan dengan grafik responsif dan filter periode." },
      tags: ["SVG Charts", "KPI", "Data UI"],
    },
    {
      slug: "nusa-travel", title: "Nusa Escape", accent: "#ffdf69",
      type: { en: "Responsive Web Development", id: "Pengembangan Web Responsif" },
      summary: { en: "A mobile-first travel experience designed to remain expressive on every screen.", id: "Pengalaman perjalanan mobile-first yang tetap ekspresif di setiap ukuran layar." },
      tags: ["Mobile-first", "Fluid Type", "Touch UI"],
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "nadi-ui", title: "Nadi Finance", accent: "#bcff5c", visual: "visual-nadi",
      type: { en: "Figma-to-Code / UI Implementation", id: "Implementasi UI / Figma-to-Code" },
      summary: { en: "A token-driven fintech interface translated into precise reusable components.", id: "Antarmuka fintech berbasis token yang diterjemahkan menjadi komponen presisi dan reusable." },
      tags: ["Design Tokens", "Components", "Dark Mode"],
    },
    {
      slug: "lumen-gallery", title: "Lumen Archive", accent: "#ff5c8a",
      type: { en: "Interactive Frontend", id: "Frontend Interaktif" },
      summary: { en: "A cinematic image archive with filtering, keyboard navigation, and lightbox viewing.", id: "Arsip gambar sinematik dengan filter, navigasi keyboard, dan lightbox." },
      tags: ["Lightbox", "Keyboard", "Animation"],
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "storypress-cms", title: "Storypress", accent: "#1f8f66", visual: "visual-story",
      type: { en: "CMS Frontend", id: "Frontend CMS" },
      summary: { en: "An editorial workspace to create, search, edit, and publish content locally.", id: "Ruang kerja editorial untuk membuat, mencari, menyunting, dan menerbitkan konten." },
      tags: ["CRUD UI", "Local Storage", "Search"],
    },
    {
      slug: "climate-now", title: "Climate Now", accent: "#56c7ff", visual: "visual-climate",
      type: { en: "API Integration", id: "Integrasi API" },
      summary: { en: "A live city forecast that turns external weather data into a clear interface.", id: "Prakiraan kota langsung yang mengubah data cuaca eksternal menjadi antarmuka jelas." },
      tags: ["Open-Meteo", "Async States", "Search"],
    },
    {
      slug: "focus-pwa", title: "Focus PWA", accent: "#ff775d", visual: "visual-focus",
      type: { en: "Progressive Web App (PWA)", id: "Progressive Web App (PWA)" },
      summary: { en: "An installable focus app with an offline-ready shell and device-local tasks.", id: "Aplikasi fokus yang dapat dipasang dengan mode offline dan tugas lokal perangkat." },
      tags: ["Service Worker", "Manifest", "Offline"],
    },
    {
      slug: "bite-mobile", title: "Bite Mobile", accent: "#ffcc3d",
      type: { en: "Mobile / Cross-platform Frontend", id: "Frontend Mobile / Cross-platform" },
      summary: { en: "A touch-first food discovery flow framed for mobile and adaptable to desktop.", id: "Alur penemuan kuliner touch-first untuk perangkat mobile yang adaptif ke desktop." },
      tags: ["App Shell", "Touch", "Responsive"],
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=90",
    },
    {
      slug: "clear-journal", title: "Clear Journal", accent: "#27c47d",
      type: { en: "Performance & Accessibility", id: "Performa & Aksesibilitas" },
      summary: { en: "A readable editorial experience with adaptive controls and performance-minded media.", id: "Pengalaman editorial yang mudah dibaca dengan kontrol adaptif dan media yang efisien." },
      tags: ["WCAG", "Core Web Vitals", "Reduced Motion"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=90",
    },
  ];

  let activeLanguage = "en";
  let activePublicationCard = null;
  let activeDemoKey = null;
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

    if (key === "research") {
      const items = id
        ? [["01", "Kapabilitas mendahului skala"], ["02", "Pembiayaan perlu terhubung dengan hasil"], ["03", "Metode menjawab pertanyaan yang berbeda"]]
        : [["01", "Capability precedes scale"], ["02", "Finance should be tied to outcomes"], ["03", "Methods answer different questions"]];
      return `
        <div class="demo-document-page">
          <span>${id ? "Sintesis bukti · 3 halaman" : "Evidence synthesis · 3 pages"}</span>
          <h4>${id ? "Pembangunan Ekonomi yang Berkelanjutan dan Inklusif" : "Sustainable and Inclusive Economic Development"}</h4>
          <p>${id ? "Peta terstruktur atas lima publikasi pilihan, tema lintas studi, implikasi keputusan, dan kontrol kualitas." : "A structured map of five selected publications, cross-study themes, decision implications, and quality controls."}</p>
          <div class="demo-document-list">${items.map(([number, text]) => `<div><b>${number}</b><span>${text}</span></div>`).join("")}</div>
          <div class="demo-note">${id ? "Sumber penerbit dan tautan publikasi dicantumkan untuk keterlacakan." : "Publisher sources and publication links are included for traceability."}</div>
        </div>`;
    }

    const phases = id
      ? [["M1–2", "Persiapan", "Alur & mitra"], ["M3–4", "Intake", "Profil kesiapan"], ["M5–9", "Pendampingan", "Berkas siap tindak"], ["M10–12", "Penutupan", "Rekomendasi"]]
      : [["W1–2", "Set-up", "Workflow & partners"], ["W3–4", "Intake", "Readiness profile"], ["W5–9", "Assistance", "Action-ready files"], ["W10–12", "Close-out", "Recommendation"]];
    return `
      <div class="demo-document-page">
        <span>${id ? "Brief profesional · 3 halaman" : "Professional brief · 3 pages"}</span>
        <h4>${id ? "Mempermudah Sertifikasi Halal bagi UMK di Ponorogo" : "Making Halal Certification Easier for MSEs in Ponorogo"}</h4>
        <p>${id ? "Rancangan pilot ringkas dengan pelacak data minimum, kontrol tata kelola, dan permintaan keputusan." : "A concise pilot design with a minimum data tracker, governance controls, and decision requests."}</p>
        <div class="demo-timeline">${phases.map(([time, phase, output]) => `<div><span>${time}</span><b>${phase}</b><small>${output}</small></div>`).join("")}</div>
        <div class="demo-note">${id ? "Brief ini bersifat ilustratif dan perlu divalidasi terhadap aturan resmi terkini." : "This brief is illustrative and must be validated against current official requirements."}</div>
      </div>`;
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
  };

  const selectFrontendProject = (index) => {
    const total = frontendProjects.length;
    activeFrontendIndex = (index + total) % total;
    updateFrontendSlider();
  };

  const renderFrontendHeader = () => {
    if (frontendModalIndex) frontendModalIndex.textContent = "06";
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
    localizeFrontendSlider();
    if (activeFrontendDemoIndex === null) renderFrontendHeader();
    else renderFrontendDemoMeta(activeFrontendDemoIndex);
    try { localStorage.setItem("hzm-language", activeLanguage); } catch (_) { /* Storage is optional. */ }
  };

  const toggleMenu = (forceClose = false) => {
    const shouldOpen = forceClose ? false : !navigation?.classList.contains("open");
    navigation?.classList.toggle("open", shouldOpen);
    body.classList.toggle("menu-open", shouldOpen);
    menuButton?.setAttribute("aria-expanded", String(shouldOpen));
    menuButton?.setAttribute("aria-label", languageLabels[activeLanguage][shouldOpen ? "menuClose" : "menuOpen"]);
  };

  const syncModalState = () => {
    const hasOpenModal = publicationModal?.classList.contains("open") || demoModal?.classList.contains("open") || frontendModal?.classList.contains("open");
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
    } catch (_) {
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

  buildFrontendSlider();
  updateFrontendSlider();
  frontendTrigger?.setAttribute("aria-expanded", "false");
  frontendTrigger?.addEventListener("click", openFrontendModal);
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

  avatar?.addEventListener("error", () => {
    avatar.style.display = "none";
    avatar.nextElementSibling.style.display = "grid";
  });

  if (year) year.textContent = String(new Date().getFullYear());
  let storedLanguage = "en";
  try { storedLanguage = localStorage.getItem("hzm-language") || "en"; } catch (_) { /* Use English. */ }
  setLanguage(storedLanguage);
  updateScrollInterface();
  window.addEventListener("load", updateScrollInterface, { once: true });
})();
