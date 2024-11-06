"use strict";

// Configurazione di base
const cookieConfig = {
  mode: "opt-in", // Modalità di consenso: 'opt-in', 'opt-out', 'informational'
  cookieMaxAge: 180, // Durata in giorni dei cookie
  debugMode: false, // Modalità debug
  consentMode: true, // Integrazione con Google Consent Mode
  categories: {
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
    uncategorized: false
  }
};

// Funzione per attivare la modalità debug
const activateDebugMode = () => {
  if (cookieConfig.debugMode) {
    console.log("Modalità debug attivata.");
  }
};

// Inizializza la configurazione
activateDebugMode();

// Modulo per la gestione dei cookie
const cookieManager = {
    setCookie: (name, value, days) => {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
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
      document.cookie = name + "=; Max-Age=-99999999;";
    }
  };
  
  // Esempio di utilizzo
  cookieManager.setCookie("exampleCookie", "value", cookieConfig.cookieMaxAge);

  // Modulo per la gestione della UI
const uiManager = {
    showBanner: () => {
      const banner = document.querySelector("[fs-cc='banner']");
      if (banner) {
        banner.style.display = "flex";
      }
    },
    hideBanner: () => {
      const banner = document.querySelector("[fs-cc='banner']");
      if (banner) {
        banner.style.display = "none";
      }
    },
    handlePreferences: () => {
      // Logica per aprire e chiudere le preferenze
    }
  };
  
  // Mostra il banner se l'utente non ha dato il consenso
  if (!cookieManager.getCookie("fs-cc")) {
    uiManager.showBanner();
  }

  // Modulo per l'integrazione con Google Tag Manager
const gtmManager = {
    fireGTMEvent: (eventName) => {
      if (window.dataLayer) {
        window.dataLayer.push({ event: eventName });
        console.log(`Evento GTM ${eventName} inviato.`);
      }
    },
    updateConsentMode: (consents) => {
      if (cookieConfig.consentMode) {
        window.gtag("consent", "update", {
          ad_storage: consents.marketing ? "granted" : "denied",
          analytics_storage: consents.analytics ? "granted" : "denied",
          personalization_storage: consents.personalization ? "granted" : "denied"
        });
      }
    }
  };

  // Modulo per la gestione degli eventi e della logica del consenso
const consentManager = {
    allowAll: () => {
      cookieManager.setCookie("fs-cc", JSON.stringify(cookieConfig.categories), cookieConfig.cookieMaxAge);
      gtmManager.fireGTMEvent("allCookiesAccepted");
      uiManager.hideBanner();
    },
    denyAll: () => {
      const defaultConsents = { ...cookieConfig.categories, analytics: false, marketing: false, personalization: false };
      cookieManager.setCookie("fs-cc", JSON.stringify(defaultConsents), cookieConfig.cookieMaxAge);
      gtmManager.fireGTMEvent("allCookiesDenied");
      uiManager.hideBanner();
    },
    handleFormSubmit: (event) => {
      event.preventDefault();
      // Leggi i consensi dal form e aggiorna i cookie
    }
  };
  // Aggiungi event listener ai pulsanti di consenso
const allowButton = document.querySelector("[fs-cc='allow']");
if (allowButton) {
  allowButton.addEventListener("click", consentManager.allowAll);
}

const denyButton = document.querySelector("[fs-cc='deny']");
if (denyButton) {
  denyButton.addEventListener("click", consentManager.denyAll);
}
  
  // Aggiungi event listener ai pulsanti di consenso
  document.querySelector("[fs-cc='allow']").addEventListener("click", consentManager.allowAll);
  document.querySelector("[fs-cc='deny']").addEventListener("click", consentManager.denyAll);
  