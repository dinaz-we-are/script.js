"use strict";

// Configurazione di base
const cookieConfig = {
  mode: "opt-in",
  cookieMaxAge: 180, // Durata del cookie in giorni
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
function gtag() {
  dataLayer.push(arguments);
}

// Imposta lo stato di consenso predefinito
gtag("consent", "default", {
  ad_storage: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted", // Necessario per la sicurezza del sito
  wait_for_update: 500, // Attende l'aggiornamento del consenso
});

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
    const ca = document.cookie.split("; ");
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
    const trackingCookies = ["_ga", "_gid", "_gat", "_gac_", "_gtm", "_gcl_au"];
    const domainParts = window.location.hostname.split(".");
    let domain = domainParts.slice(-2).join("."); // Considera solo il dominio principale
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
    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
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
    closeCookiePreferences();
  },
  denyAll: () => {
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
    });
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
    const analyticsConsent = analyticsCheckbox ? analyticsCheckbox.checked : false;
    const marketingConsent = marketingCheckbox ? marketingCheckbox.checked : false;
    const personalizationConsent = personalizationCheckbox
      ? personalizationCheckbox.checked
      : false;

    gtag("consent", "update", {
      ad_storage: marketingConsent ? "granted" : "denied",
      analytics_storage: analyticsConsent ? "granted" : "denied",
      functionality_storage: personalizationConsent ? "granted" : "denied",
    });

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
      activateScripts();
    }
    gtmManager.updateConsentMode(userConsents);
    closeCookiePreferences();
  },
};

// Event listener per i pulsanti di consenso
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

// Funzione per attivare/disattivare gli script
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

// Funzione per inizializzare il tracking in base al consenso
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

document.addEventListener("DOMContentLoaded", initializeTracking);

document.addEventListener("DOMContentLoaded", () => {
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

        // Aggiorna gtag con il nuovo stato di consenso
        gtag("consent", "update", {
          ad_storage: savedConsents.marketing ? "granted" : "denied",
          analytics_storage: savedConsents.analytics ? "granted" : "denied",
          functionality_storage: savedConsents.personalization ? "granted" : "denied",
        });
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

function animateBanner() {
  const banner = document.getElementById("banner-cookie");
  if (banner) {
    gsap.fromTo(
      banner,
      { y: "10rem", display: "none" },
      {
        y: "0rem",
        display: "flex",
        duration: 1,
        delay: 3,
        ease: "power2.inOut",
      }
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
        banner.style.display = "none";
      },
    });
  }
}

function cookiePreferences() {
  const preferences = document.querySelector("#cookie-preferences");
  if (preferences) {
    preferences.style.display = "flex";
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
