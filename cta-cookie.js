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
  clearTrackingCookies: () => {
   // Elenca i cookie di Google Analytics e Google Tag Manager
   const trackingCookies = ["_ga", "_gid", "_gat", "_gac_", "_gtm", "_gcl_au"];
  
   // Ottieni il dominio attuale
   const domainParts = window.location.hostname.split(".");
   let domain = domainParts.slice(-2).join("."); // Considera solo il dominio principale
 
   // Tenta di cancellare i cookie specificando il dominio
   trackingCookies.forEach(cookieName => {
     // Prova a cancellare il cookie con il dominio principale
     document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${domain}; SameSite=None; Secure`;
 
     // Prova anche a cancellare senza specificare il dominio (per sicurezza)
     document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=None; Secure`;
   }); 
 },
};

// Funzione per resettare tutti i cookie e chiudere il banner delle preferenze
const resetCookies = () => {
  // Cancella tutti i cookie
  cookieManager.clearAllCookies();
  cookieManager.clearTrackingCookies();

  // Chiudi il banner delle preferenze
  closeCookiePreferences();

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
      animateBanner();
    }
  },
  hideBanner: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      animateBannerClose();
    }
  },
  closeBannerWithoutConsent: () => {
    const banner = document.querySelector("#banner-cookie");
    if (banner) {
      animateBannerClose();
    }
  },
  handlePreferences: () => {
    const preferences = document.querySelector("#cookie-preferences");
    if (preferences) {
      cookiePreferences();
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
    activateScripts();
    uiManager.hideBanner();
    closeCookiePreferences();
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
    cookieManager.clearTrackingCookies();
    gtmManager.fireGTMEvent("allCookiesDenied");
    uiManager.hideBanner();
    closeCookiePreferences();
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
    if (analyticsConsent || marketingConsent) {
      activateScripts(); // Attiva subito gli script
    }
    gtmManager.updateConsentMode(userConsents);
    closeCookiePreferences();
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
  preferencesCloseButton.addEventListener("click", closeCookiePreferences);
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

function activateScripts() {
  const scripts = document.querySelectorAll('script[cta="activate"]');
  scripts.forEach((script) => {
    // Rimuovi l'attributo type per eseguire lo script
    script.removeAttribute("type");

    // Se è uno script esterno, ricrea l'elemento per ricaricarlo
    if (script.src) {
      const newScript = document.createElement("script");
      newScript.async = script.async;
      newScript.src = script.src;
      document.head.appendChild(newScript);
    } else {
      // Se è uno script inline, eseguilo direttamente
      eval(script.innerText);
    }
  });
}

// Funzione per inizializzare i servizi di tracking in base al consenso
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

// Inizializza i servizi di tracking al caricamento della pagina
document.addEventListener("DOMContentLoaded", initializeTracking);

document.addEventListener("DOMContentLoaded", () => {
  // Funzione per animare e gestire i checkbox singolarmente
  const toggleCheckboxAnimation = (
    checkboxId,
    containerAttr,
    toggleAttr,
    category,
    isChecked
  ) => {
    const checkbox = document.querySelector(checkboxId);
    const container = document.querySelector(
      `[cta-checkbox='${containerAttr}']`
    );
    const toggle = container?.querySelector(`[cta-toggle='${toggleAttr}']`);

    if (checkbox && container && toggle) {
      // Imposta lo stato iniziale del checkbox e applica l'animazione
      checkbox.checked = isChecked;
      if (isChecked) {
        gsap.to(toggle, { x: 20, duration: 0.3, ease: "power2.inOut" });
        gsap.to(container, {
          backgroundColor: "#ff006e",
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(toggle, { x: 0, duration: 0.3, ease: "power2.inOut" });
        gsap.to(container, {
          backgroundColor: "",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      // Aggiungi un event listener al click del checkbox
      checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
          // Animazione al primo click (ON)
          gsap.to(toggle, { x: 20, duration: 0.3, ease: "power2.inOut" });
          gsap.to(container, {
            backgroundColor: "#ff006e",
            duration: 0.3,
            ease: "power2.inOut",
          });
        } else {
          // Animazione al secondo click (OFF)
          gsap.to(toggle, { x: 0, duration: 0.3, ease: "power2.inOut" });
          gsap.to(container, {
            backgroundColor: "",
            duration: 0.3,
            ease: "power2.inOut",
          });
        }

        // Aggiorna il cookie con il nuovo stato
        const savedConsents = JSON.parse(cookieManager.getCookie("cta")) || {
          essential: true,
          analytics: false,
          marketing: false,
          personalization: false,
        };
        savedConsents[category] = checkbox.checked;
        cookieManager.setCookie(
          "cta",
          JSON.stringify(savedConsents),
          cookieConfig.cookieMaxAge
        );
      });
    } else {
      console.warn(
        `Elemento non trovato per l'animazione del checkbox: ${category}`
      );
    }
  };

  // Funzione per attivare/disattivare tutti i checkbox
  const toggleAllCheckboxes = (isChecked) => {
    toggleCheckboxAnimation(
      "#cookie-marketing",
      "marketing",
      "marketing",
      "marketing",
      isChecked
    );
    toggleCheckboxAnimation(
      "#cookie-analytics",
      "analytics",
      "analytics",
      "analytics",
      isChecked
    );
    toggleCheckboxAnimation(
      "#cookie-personalization",
      "personalization",
      "personalization",
      "personalization",
      isChecked
    );

    // Aggiorna il cookie con il nuovo stato per tutti i consensi
    const newConsents = {
      essential: true,
      analytics: isChecked,
      marketing: isChecked,
      personalization: isChecked,
    };
    cookieManager.setCookie(
      "cta",
      JSON.stringify(newConsents),
      cookieConfig.cookieMaxAge
    );
  };

  // Event listener per i pulsanti cta='allow' e cta='deny'
  const allowButtons = document.querySelectorAll("[cta='allow']");
  if (allowButtons.length > 0) {
    allowButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleAllCheckboxes(true); // Attiva tutti i checkbox
        uiManager.hideBanner();
      });
    });
  }

  const denyButtons = document.querySelectorAll("[cta='deny']");
  if (denyButtons.length > 0) {
    denyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleAllCheckboxes(false); // Disattiva tutti i checkbox
        uiManager.hideBanner();
      });
    });
  }

  // Attiva le animazioni e la gestione del cookie per ciascun checkbox
  const savedConsents = JSON.parse(cookieManager.getCookie("cta")) || {
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
  };
  toggleCheckboxAnimation(
    "#cookie-marketing",
    "marketing",
    "marketing",
    "marketing",
    savedConsents.marketing
  );
  toggleCheckboxAnimation(
    "#cookie-analytics",
    "analytics",
    "analytics",
    "analytics",
    savedConsents.analytics
  );
  toggleCheckboxAnimation(
    "#cookie-personalization",
    "personalization",
    "personalization",
    "personalization",
    savedConsents.personalization
  );
});

function  animateBanner() {
  const banner = document.getElementById("banner-cookie");
  if (banner) {
    gsap.fromTo(
      banner,
      { y: "10rem", display: "none" }, // Posizione iniziale e opacità
      {
        y: "0rem",
        display: "flex",
        duration: 1,
        delay: 3,
        ease: "power2.inOut",
      } // Posizione finale, opacità, durata e ritardo
    );
  }
}

function animateBannerClose() {
  const banner = document.querySelector("#banner-cookie");
  if (banner) {
    gsap.to(banner, {
      y: "10rem",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        banner.style.display = "none"; // Imposta display a none dopo l'animazione
      },
    });
  }
}

function cookiePreferences() {
  const preferences = document.querySelector("#cookie-preferences");
  if (preferences) {
    preferences.style.display = "flex"; // Mostra il centro preferenze
    gsap.to(preferences, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
  }
}

function closeCookiePreferences() {
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
}
