// Importa GSAP
import { gsap } from "gsap";

// Importa tutti i plugin di GSAP che ti servono
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registra tutti i plugin con GSAP
gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin);

// Esportazione globale di GSAP e di tutti i plugin
if (typeof window !== "undefined") {
  window.gsap = gsap;
  window.Flip = Flip;
  window.ScrollTrigger = ScrollTrigger;
  window.Observer = Observer;
  window.ScrollToPlugin = ScrollToPlugin;  
}

