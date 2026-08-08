(() => {
  const measurementId = document.querySelector('meta[name="google-analytics-id"]')?.content.trim() || "";
  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) return;

  const banner = document.querySelector(".analytics-consent");
  const acceptButton = document.querySelector("[data-analytics-accept]");
  const declineButton = document.querySelector("[data-analytics-decline]");
  const storageKey = "hzm-analytics-consent";
  let loaded = false;

  const readConsent = () => {
    try { return localStorage.getItem(storageKey); } catch { return null; }
  };

  const saveConsent = (value) => {
    try { localStorage.setItem(storageKey, value); } catch { /* Consent still applies for this page view. */ }
  };

  const hideBanner = () => {
    if (banner) banner.hidden = true;
  };

  const loadAnalytics = () => {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    document.addEventListener("click", (event) => {
      const target = event.target.closest("[data-track]");
      if (!target || typeof window.gtag !== "function") return;
      window.gtag("event", "portfolio_action", {
        action_name: target.dataset.track,
        link_url: target.href || undefined,
      });
    });
  };

  acceptButton?.addEventListener("click", () => {
    saveConsent("granted");
    hideBanner();
    loadAnalytics();
  });

  declineButton?.addEventListener("click", () => {
    saveConsent("denied");
    hideBanner();
  });

  const consent = readConsent();
  if (consent === "granted") loadAnalytics();
  else if (consent !== "denied" && banner) banner.hidden = false;
})();
