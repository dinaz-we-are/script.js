// Importa GSAP
import { gsap } from "gsap";

// Importa tutti i plugin di GSAP che ti servono
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Registra tutti i plugin con GSAP
gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin);

// Esportazione globale di GSAP e di tutti i plugin
if (typeof window !== "undefined") {
  window.gsap = gsap;
  window.Flip = Flip;
  window.ScrollTrigger = ScrollTrigger;
  window.Observer = Observer;
  window.ScrollToPlugin = ScrollToPlugin;
  window.MotionPathPlugin = MotionPathPlugin;
}

async function loadAdditionalScripts() {
  try {
    // Importa gli script dei cookie e delle funzioni
    const [cookieModule, functionModule] = await Promise.all([
      import("./scripts/cta-cookie.min.js"),
      import("./scripts/function.min.js"),
    ]);

    // Inizializza i moduli
    if (cookieModule.initializeCookies) {
      cookieModule.initializeCookies();
      console.log("Modulo cookie inizializzato.");
    }

    if (functionModule.initializeMainFunctions) {
      functionModule.initializeMainFunctions();
      console.log("Modulo delle funzioni inizializzato.");
    }
  } catch (error) {
    console.error("Errore durante il caricamento degli script aggiuntivi:", error);
  }
}

loadAdditionalScripts();
