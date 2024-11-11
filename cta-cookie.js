"use strict";

// Configurazione di base
const cookieConfig = {
  mode: "opt-in",
  cookieMaxAge: 180,
  debugMode: false,
  consentMode: true,
  categories: {
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
    uncategorized: false,
  },
};

// Oggetto per le animazioni GSAP
const animationsManager = {
  animateBanner: () => {
    const banner = document.getElementById("banner-cookie");
    if (banner) {
      gsap.fromTo(
        banner,
        { y: "10rem", display: "none" },
        { y: "0rem", display: "flex", duration: 1, delay: 0.5, ease: "power2.inOut" }
      );
    }
  },
  animateBannerClose: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      gsap.to(banner, {
        y: "10rem",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          banner.style.display = "none";
        },
      });
    }
  },
  animatePreferencesPanel: () => {
    const preferences = document.querySelector("#cookie-preferences");
    if (preferences) {
      preferences.style.display = "flex";
      gsap.to(preferences, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
    }
  },
  closePreferencesPanel: () => {
    const preferences = document.querySelector("#cookie-preferences");
    if (preferences) {
      gsap.to(preferences, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          preferences.style.display = "none";
        },
      });
    }
  },
  toggleCheckboxAnimation: (toggle, container, isChecked) => {
    if (toggle && container) {
      const xPosition = isChecked ? 20 : 0;
      const backgroundColor = isChecked ? "#ff006e" : "";

      gsap.to(toggle, { x: xPosition, duration: 0.3, ease: "power2.inOut" });
      gsap.to(container, {
        backgroundColor: backgroundColor,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  },
};

// Modulo per la gestione dei cookie
const cookieManager = {
  setCookie: (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure";
  },
  getCookie: (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: (name) => {
    document.cookie = name + "=; Max-Age=-99999999; path=/; SameSite=None; Secure";
  },
  clearAllCookies: () => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split("=")[0];
      document.cookie = cookieName + "=; Max-Age=-99999999; path=/; SameSite=None; Secure";
    }
  },
  clearTrackingCookies: () => {
    const trackingCookies = ["_ga", "_gid", "_gat", "_gac_", "_gtm", "_gcl_au"];
    const domainParts = window.location.hostname.split(".");
    let domain = domainParts.slice(-2).join(".");

    trackingCookies.forEach((cookieName) => {
      document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${domain}; SameSite=None; Secure`;
      document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=None; Secure`;
    });
  },
};

// Funzione per resettare tutti i cookie e chiudere il banner delle preferenze
const resetCookies = () => {
  cookieManager.clearAllCookies();
  cookieManager.clearTrackingCookies();
  animationsManager.closePreferencesPanel();
  console.log("Tutti i cookie sono stati cancellati e il banner è stato chiuso.");
  location.reload();
};

// Modulo per la gestione della UI
const uiManager = {
  showBanner: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      animationsManager.animateBanner();
    }
  },
  hideBanner: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      animationsManager.animateBannerClose();
    }
  },
  closeBannerWithoutConsent: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      animationsManager.animateBannerClose();
    }
  },
  handlePreferences: () => {
    const preferences = document.querySelector("#cookie-preferences");
    if (preferences) {
      animationsManager.animatePreferencesPanel();
    }
  },
};

// Mostra il banner se l'utente non ha dato il consenso
if (!cookieManager.getCookie("cta")) {
  uiManager.showBanner();
}

// Modulo per la gestione degli eventi e della logica del consenso
const consentManager = {
  allowAll: () => {
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    cookieManager.setCookie(
      "cta",
      JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true,
        personalization: true,
      }),
      cookieConfig.cookieMaxAge
    );
    gtmManager.fireGTMEvent("allCookiesAccepted");
    activateScripts();
    uiManager.hideBanner();
    animationsManager.closePreferencesPanel();
  },
  denyAll: () => {
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
    const defaultConsents = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    cookieManager.setCookie("cta", JSON.stringify(defaultConsents), cookieConfig.cookieMaxAge);
    cookieManager.clearTrackingCookies();
    gtmManager.fireGTMEvent("allCookiesDenied");
    uiManager.hideBanner();
    animationsManager.closePreferencesPanel();
  },
  handleFormSubmit: (event) => {
    event.preventDefault();
    const analyticsCheckbox = document.querySelector("#cookie-analytics");
    const marketingCheckbox = document.querySelector("#cookie-marketing");
    const personalizationCheckbox = document.querySelector("#cookie-personalization");

    const analyticsConsent = analyticsCheckbox ? analyticsCheckbox.checked : false;
    const marketingConsent = marketingCheckbox ? marketingCheckbox.checked : false;
    const personalizationConsent = personalizationCheckbox ? personalizationCheckbox.checked : false;

    gtag("consent", "update", {
      ad_storage: marketingConsent ? "granted" : "denied",
      analytics_storage: analyticsConsent ? "granted" : "denied",
    });

    const userConsents = {
      essential: true,
      analytics: analyticsConsent,
      marketing: marketingConsent,
      personalization: personalizationConsent,
    };

    cookieManager.setCookie("cta", JSON.stringify(userConsents), cookieConfig.cookieMaxAge);
    if (analyticsConsent || marketingConsent) {
      activateScripts();
    }
    gtmManager.updateConsentMode(userConsents);
    animationsManager.closePreferencesPanel();
  },
};

// Inizializza i servizi di tracking al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  const allowButtons = document.querySelectorAll("[cta='allow']");
  if (allowButtons.length > 0) {
    allowButtons.forEach((button) => {
      button.addEventListener("click", consentManager.allowAll);
    });
  }

  const denyButtons = document.querySelectorAll("[cta='deny']");
  if (denyButtons.length > 0) {
    denyButtons.forEach((button) => {
      button.addEventListener("click", consentManager.denyAll);
    });
  }

  const openPreferencesButtons = document.querySelectorAll("[cta='open-preferences']");
  if (openPreferencesButtons.length > 0) {
    openPreferencesButtons.forEach((button) => {
      button.addEventListener("click", uiManager.handlePreferences);
    });
  }

  const preferencesForm = document.querySelector("#wf-form-Cookie-Preferences-form");
  if (preferencesForm) {
    preferencesForm.addEventListener("submit", consentManager.handleFormSubmit);
  }

  const preferencesCloseButton = document.querySelector("#preferences-close");
  if (preferencesCloseButton) {
    preferencesCloseButton.addEventListener("click", animationsManager.closePreferencesPanel);
  }

  const resetButton = document.querySelector("[cta='reset']");
  if (resetButton) {
    resetButton.addEventListener("click", resetCookies);
  }

  // Inizializza l'animazione dei checkbox
  const checkboxes = [
    { id: "#cookie-marketing", category: "marketing", checked: false },
    { id: "#cookie-analytics", category: "analytics", checked: false },
    { id: "#cookie-personalization", category: "personalization", checked: false },
  ];

  checkboxes.forEach(({ id, category, checked }) => {
    const checkbox = document.querySelector(id);
    const container = document.querySelector(`[cta-checkbox='${category}']`);
    const toggle = container?.querySelector(`[cta-toggle='${category}']`);
    if (checkbox && container && toggle) {
      animationsManager.toggleCheckboxAnimation(toggle, container, checked);
      checkbox.addEventListener("click", () => {
        animationsManager.toggleCheckboxAnimation(toggle, container, checkbox.checked);
      });
    }
  });
});
