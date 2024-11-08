"use strict";

// Configurazione di base
const cookieConfig = {
  mode: "opt-in", // Modalità di consenso: 'opt-in', 'opt-out', 'informational'
  cookieMaxAge: 180, // Durata in giorni dei cookie
  debugMode: false, // Modalità debug
  consentMode: true, // Integrazione con Google Consent Mode
  categories: {
    essential: true, // Cookie essenziali attivi di default
    analytics: false, // Cookie disabilitati fino al consenso
    marketing: false, // Cookie disabilitati fino al consenso
    personalization: false, // Cookie disabilitati fino al consenso
    uncategorized: false, // Cookie disabilitati fino al consenso
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
    document.cookie =
      name + "=" + (value || "") + expires + "; path=/; SameSite=None; Secure";
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
    document.cookie =
      name + "=; Max-Age=-99999999; path=/; SameSite=None; Secure";
  },
  clearAllCookies: () => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split("=")[0];
      document.cookie =
        cookieName + "=; Max-Age=-99999999; path=/; SameSite=None; Secure";
    }
  },
};

// Funzione per resettare tutti i cookie e chiudere il banner delle preferenze
const resetCookies = () => {
  // Cancella tutti i cookie
  cookieManager.clearAllCookies();

  // Chiudi il banner delle preferenze
  cookieAnimation.closeCookiePreferences();

  // Mostra un messaggio di conferma o esegui eventuali altre azioni
  console.log(
    "Tutti i cookie sono stati cancellati e il banner è stato chiuso."
  );
  location.reload();
};

// Aggiungi l'event listener per il pulsante di reset
const resetButton = document.querySelector("[cta='reset']");
if (resetButton) {
  resetButton.addEventListener("click", resetCookies);
}

// Modulo per la gestione della UI
const uiManager = {
  showBanner: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      cookieAnimation.animateBanner();
    }
  },
  hideBanner: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      cookieAnimation.animateBannerClose();
    }
  },
  closeBannerWithoutConsent: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      cookieAnimation.animateBannerClose();
    }
  },
  handlePreferences: () => {
    const preferences = document.querySelector("#cookie-preferences");
    if (preferences) {
      cookieAnimation.cookiePreferences();
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
    uiManager.hideBanner();
    cookieAnimation.closeCookiePreferences();
  },
  denyAll: () => {
    const defaultConsents = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false,
    };
    cookieManager.setCookie(
      "cta",
      JSON.stringify(defaultConsents),
      cookieConfig.cookieMaxAge
    );
    gtmManager.fireGTMEvent("allCookiesDenied");
    uiManager.hideBanner();
    cookieAnimation.closeCookiePreferences();
  },
  handleFormSubmit: (event) => {
    event.preventDefault();

    const analyticsCheckbox = document.querySelector("#cookie-analytics");
    const marketingCheckbox = document.querySelector("#cookie-marketing");
    const personalizationCheckbox = document.querySelector(
      "#cookie-personalization"
    );

    const analyticsConsent = analyticsCheckbox
      ? analyticsCheckbox.checked
      : false;
    const marketingConsent = marketingCheckbox
      ? marketingCheckbox.checked
      : false;
    const personalizationConsent = personalizationCheckbox
      ? personalizationCheckbox.checked
      : false;

    const userConsents = {
      essential: true,
      analytics: analyticsConsent,
      marketing: marketingConsent,
      personalization: personalizationConsent,
    };

    cookieManager.setCookie(
      "cta",
      JSON.stringify(userConsents),
      cookieConfig.cookieMaxAge
    );
    gtmManager.updateConsentMode(userConsents);
    cookieAnimation.closeCookiePreferences();
  },
};

// Aggiungi event listener ai pulsanti di consenso
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

// Event listener per i pulsanti di apertura delle preferenze
const openPreferencesButtons = document.querySelectorAll(
  "[cta='open-preferences']"
);
if (openPreferencesButtons.length > 0) {
  openPreferencesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      uiManager.closeBannerWithoutConsent();
      uiManager.handlePreferences();
    });
  });
}

// Event listener per il form delle preferenze
const preferencesForm = document.querySelector(
  "#wf-form-Cookie-Preferences-form"
);
if (preferencesForm) {
  preferencesForm.addEventListener("submit", consentManager.handleFormSubmit);
}

// Event listener per il pulsante di chiusura delle preferenze
const preferencesCloseButton = document.querySelector("#preferences-close");
if (preferencesCloseButton) {
  preferencesCloseButton.addEventListener("click",  cookieAnimation.closeCookiePreferences);
}

// Event listener per il pulsante di conferma delle preferenze
const submitButton = document.querySelector("[cta='submit']");
if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    consentManager.handleFormSubmit(event);
  });
}

// Event listener per il pulsante di chiusura senza consenso
const closeButton = document.querySelector("#banner-close");
if (closeButton) {
  closeButton.addEventListener("click", uiManager.closeBannerWithoutConsent);
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

