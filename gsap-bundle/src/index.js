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

(async () => {
  try {
    // Importa entrambi i moduli in parallelo
    const [cookieModule, functionModule] = await Promise.all([
      import("./scripts/cta-cookie.min.js"),
      import("./scripts/function.min.js"),
    ]);

    // Inizializza i cookie immediatamente
    cookieModule.initializeCookies();

    // Aggiungi l'event listener per inizializzare le funzioni principali
    document.addEventListener("DOMContentLoaded", () => {
      functionModule.initializeMainFunctions();
      console.log("Funzioni principali inizializzate dopo DOMContentLoaded.");
    });

    console.log("Modulo cookie inizializzato con successo.");
  } catch (error) {
    console.error("Errore nel caricamento dei moduli:", error);
  }
})();
