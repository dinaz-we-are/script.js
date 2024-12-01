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

import { initializeCookies } from "./scripts/cta-cookie.min.js";

// Inizializza i cookie solo dopo che GSAP è pronto
document.addEventListener("DOMContentLoaded", () => {
  console.log("GSAP e i plugin sono stati caricati. Inizializzo i cookie...");
  initializeCookies();
});
