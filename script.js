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
  const frontendFrame = document.querySelector("#frontend-slider-frame");
  const frontendFrameShell = document.querySelector(".frontend-frame-shell");

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

  let activeLanguage = "en";
  let activePublicationCard = null;
  let activeDemoKey = null;
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
      .filter((element) => !element.hasAttribute("disabled"));
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

  const openFrontendModal = () => {
    if (!frontendModal || !frontendFrame) return;
    lastFocusedElement = document.activeElement;
    frontendTrigger?.setAttribute("aria-expanded", "true");
    frontendFrameShell?.classList.remove("frame-ready");
    const source = frontendFrame.dataset.src;
    if (source) frontendFrame.src = source;
    frontendModal.classList.add("open");
    frontendModal.setAttribute("aria-hidden", "false");
    syncModalState();
    requestAnimationFrame(() => frontendModalClose?.focus());
  };

  const closeFrontendModal = () => {
    if (!frontendModal?.classList.contains("open")) return;
    frontendModal.classList.remove("open");
    frontendModal.setAttribute("aria-hidden", "true");
    frontendTrigger?.setAttribute("aria-expanded", "false");
    syncModalState();
    restoreFocus();
  };

  const alignFrontendProjectSlider = () => {
    try {
      frontendFrame?.contentDocument?.querySelector(".swiper-controls-row")?.scrollIntoView({ block: "start", behavior: "auto" });
    } catch (_) { /* The bundled demo is expected to remain same-origin. */ }
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

  frontendTrigger?.setAttribute("aria-expanded", "false");
  frontendTrigger?.addEventListener("click", openFrontendModal);
  frontendModal?.querySelectorAll("[data-frontend-close]").forEach((button) => button.addEventListener("click", closeFrontendModal));
  frontendModal?.addEventListener("keydown", (event) => trapFocus(frontendModal, event));
  frontendFrame?.addEventListener("load", () => {
    if (!frontendFrame.getAttribute("src")) return;
    alignFrontendProjectSlider();
    window.setTimeout(alignFrontendProjectSlider, 120);
    window.setTimeout(() => {
      alignFrontendProjectSlider();
      frontendFrameShell?.classList.add("frame-ready");
    }, 320);
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
      closeFrontendModal();
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
