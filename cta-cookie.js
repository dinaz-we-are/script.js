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

// Inizializza Google Consent Mode V2 con le impostazioni predefinite
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500 // Attende l'aggiornamento del consenso
});

// Selezione di tutti gli elementi
const elements = {
  resetButton: document.querySelector("[cta='reset']"),
  banner: document.getElementById("banner-cookie"),
  preferences: document.getElementById("cookie-preferences"),
  preferencesForm: document.querySelector("#wf-form-Cookie-Preferences-form"),
  preferencesCloseButton: document.getElementById("preferences-close"),
  submitButton: document.querySelector("[cta='submit']"),
  closeButton: document.getElementById("banner-close"),
  allowButtons: document.querySelectorAll("[cta='allow']"),
  denyButtons: document.querySelectorAll("[cta='deny']"),
  openPreferencesButtons: document.querySelectorAll("[cta='open-preferences']"),
  analyticsCheckbox: document.getElementById("cookie-analytics"),
  marketingCheckbox: document.getElementById("cookie-marketing"),
  personalizationCheckbox: document.getElementById("cookie-personalization"),
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
    document.cookie =
      name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure";
  },
  getCookie: (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let c of ca) {
      c = c.trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  },
  eraseCookie: (name) => {
    document.cookie = name + "=; Max-Age=-99999999; path=/; SameSite=None; Secure";
  },
  clearAllCookies: () => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const cookieName = cookie.split("=")[0];
      document.cookie = `${cookieName}=; Max-Age=-99999999; path=/; SameSite=None; Secure`;
    }
  },
  clearTrackingCookies: () => {
    const trackingCookies = ["_ga", "_gid", "_gat", "_gac_", "_gtm", "_gcl_au"];
    const domain = window.location.hostname.split(".").slice(-2).join(".");
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
  closeCookiePreferences();
  console.log("Tutti i cookie sono stati cancellati e il banner è stato chiuso.");
  location.reload();
};

// Event listener per il pulsante di reset
if (elements.resetButton) {
  elements.resetButton.addEventListener("click", resetCookies);
}

// Modulo per la gestione della UI
const uiManager = {
  showBanner: () => {
    if (elements.banner) {
      elements.banner.style.display = "flex";
      animateManager.animateBanner();
    }
  },
  hideBanner: () => {
    if (elements.banner) {
      animateManager.animateBannerClose();
    }
  },
  closeBannerWithoutConsent: () => {
    if (elements.banner) {
      animateManager.animateBannerClose();
    }
  },
  handlePreferences: () => {
    if (elements.preferences) {
      elements.preferences.style.display = "flex";
      animateManager.animatePreferences();
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
    gtag("consent", "update", { ad_storage: "granted", analytics_storage: "granted" });
    cookieManager.setCookie(
      "cta",
      JSON.stringify({ essential: true, analytics: true, marketing: true, personalization: true }),
      cookieConfig.cookieMaxAge
    );
    gtmManager.fireGTMEvent("allCookiesAccepted");
    activateScripts();
    uiManager.hideBanner();
    closeCookiePreferences();
  },
  denyAll: () => {
    gtag("consent", "update", { ad_storage: "denied", analytics_storage: "denied" });
    const defaultConsents = { essential: true, analytics: false, marketing: false, personalization: false };
    cookieManager.setCookie("cta", JSON.stringify(defaultConsents), cookieConfig.cookieMaxAge);
    cookieManager.clearTrackingCookies();
    gtmManager.fireGTMEvent("allCookiesDenied");
    uiManager.hideBanner();
    closeCookiePreferences();
  },
  handleFormSubmit: (event) => {
    event.preventDefault();
    const analyticsConsent = elements.analyticsCheckbox ? elements.analyticsCheckbox.checked : false;
    const marketingConsent = elements.marketingCheckbox ? elements.marketingCheckbox.checked : false;
    const personalizationConsent = elements.personalizationCheckbox ? elements.personalizationCheckbox.checked : false;
    
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
    closeCookiePreferences();
  },
};

// Aggiungi event listener ai pulsanti di consenso
elements.allowButtons.forEach((button) => button.addEventListener("click", consentManager.allowAll));
elements.denyButtons.forEach((button) => button.addEventListener("click", consentManager.denyAll));

// Event listener per i pulsanti di apertura delle preferenze
elements.openPreferencesButtons.forEach((button) =>
  button.addEventListener("click", () => {
    uiManager.closeBannerWithoutConsent();
    uiManager.handlePreferences();
  })
);

// Event listener per il form delle preferenze
if (elements.preferencesForm) {
  elements.preferencesForm.addEventListener("submit", consentManager.handleFormSubmit);
}

// Event listener per il pulsante di chiusura delle preferenze
if (elements.preferencesCloseButton) {
  elements.preferencesCloseButton.addEventListener("click", closeCookiePreferences);
}

// Event listener per il pulsante di conferma delle preferenze
if (elements.submitButton) {
  elements.submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    consentManager.handleFormSubmit(event);
  });
}

// Event listener per il pulsante di chiusura senza consenso
if (elements.closeButton) {
  elements.closeButton.addEventListener("click", uiManager.closeBannerWithoutConsent);
}

// Modulo per l'integrazione con Google Tag Manager
const gtmManager = {
  fireGTMEvent: (eventName) => {
    if (window.dataLayer) {
      window.dataLayer.push({ event: eventName });
      if (cookieConfig.debugMode) {
        console.log(`Evento GTM ${eventName} inviato.`);
      }
    }
  },
  updateConsentMode: (consents) => {
    if (cookieConfig.consentMode && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: consents.marketing ? "granted" : "denied",
        analytics_storage: consents.analytics ? "granted" : "denied",
        functionality_storage: consents.personalization ? "granted" : "denied",
      });
      if (cookieConfig.debugMode) {
        console.log("Google Consent Mode aggiornato:", consents);
      }
    }
  },
};

// Funzione per attivare gli script
function activateScripts() {
  const scripts = document.querySelectorAll('script[cta="activate"]');
  scripts.forEach((script) => {
    script.removeAttribute("type");
    if (script.src) {
      const newScript = document.createElement("script");
      newScript.async = script.async;
      newScript.src = script.src;
      document.head.appendChild(newScript);
    } else {
      eval(script.innerText);
    }
  });
}

// Funzioni di animazione raggruppate
const animateManager = {
  animateBanner: () => {
    if (elements.banner) {
      gsap.fromTo(
        elements.banner,
        { y: "10rem", display: "none" },
        { y: "0rem", display: "flex", duration: 1, delay: 3, ease: "power2.inOut" }
      );
    }
  },
  animateBannerClose: () => {
    if (elements.banner) {
      gsap.to(elements.banner, {
        y: "10rem",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          elements.banner.style.display = "none";
        },
      });
    }
  },
  animatePreferences: () => {
    if (elements.preferences) {
      gsap.to(elements.preferences, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
    }
  },
};

// Inizializza i servizi di tracking al caricamento della pagina
document.addEventListener("DOMContentLoaded", initializeTracking);

function initializeTracking() {
  const savedConsents = JSON.parse(cookieManager.getCookie("cta")) || {
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
  };
  if (savedConsents.analytics || savedConsents.marketing) {
    activateScripts();
  }
}

// Funzione per chiudere le preferenze
function closeCookiePreferences() {
  if (elements.preferences) {
    gsap.to(elements.preferences, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        elements.preferences.style.display = "none";
      },
    });
  }
}
