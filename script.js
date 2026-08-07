(() => {
  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const languageButtons = document.querySelectorAll("[data-lang]");
  const translatable = document.querySelectorAll("[data-en][data-id]");
  const year = document.querySelector("#year");
  const avatar = document.querySelector(".avatar-wrap img");
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

  const languageLabels = {
    en: { menuOpen: "Open navigation", menuClose: "Close navigation" },
    id: { menuOpen: "Buka navigasi", menuClose: "Tutup navigasi" },
  };

  let activeLanguage = "en";
  let activePublicationCard = null;
  let lastFocusedElement = null;

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
    if (activePublicationCard) renderPublicationModal(activePublicationCard);
    try { localStorage.setItem("hzm-language", activeLanguage); } catch (_) { /* Storage is optional. */ }
  };

  const toggleMenu = (forceClose = false) => {
    const shouldOpen = forceClose ? false : !navigation?.classList.contains("open");
    navigation?.classList.toggle("open", shouldOpen);
    body.classList.toggle("menu-open", shouldOpen);
    menuButton?.setAttribute("aria-expanded", String(shouldOpen));
    menuButton?.setAttribute("aria-label", languageLabels[activeLanguage][shouldOpen ? "menuClose" : "menuOpen"]);
  };

  menuButton?.addEventListener("click", () => toggleMenu());
  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => toggleMenu(true)));
  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

  const openPublicationModal = (card) => {
    if (!publicationModal) return;
    lastFocusedElement = document.activeElement;
    activePublicationCard = card;
    renderPublicationModal(card);
    publicationModal.classList.add("open");
    publicationModal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    requestAnimationFrame(() => publicationModalClose?.focus());
  };

  const closePublicationModal = () => {
    if (!publicationModal?.classList.contains("open")) return;
    publicationModal.classList.remove("open");
    publicationModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    activePublicationCard = null;
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
    lastFocusedElement = null;
  };

  publicationCards.forEach((card) => card.addEventListener("click", () => openPublicationModal(card)));
  publicationModal?.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closePublicationModal));
  publicationModal?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusable = [...publicationModal.querySelectorAll("button:not([tabindex='-1']), a[href]")]
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
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (publicationModal?.classList.contains("open")) {
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
})();
