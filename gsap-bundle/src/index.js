// Importa GSAP da UMD
import { gsap } from "gsap/dist/gsap";

// Importa i plugin di GSAP da dist/
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";
import { CustomEase } from "gsap/dist/CustomEase";

// Importa gli altri moduli
import barba from "@barba/core";
import Lenis from "lenis";
import SplitType from "split-type";

// Registra i plugin con GSAP
gsap.registerPlugin(
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  InertiaPlugin,
  CustomEase
);

// Esporta tutto su window per accesso globale
if (typeof window !== "undefined") {
  window.gsap = gsap;
  window.barba = barba;
  window.Lenis = Lenis;
  window.SplitType = SplitType;

  // Plugin singoli se servono da richiamare separatamente
  window.ScrollTrigger = ScrollTrigger;
  window.Observer = Observer;
  window.ScrollToPlugin = ScrollToPlugin;
  window.InertiaPlugin = InertiaPlugin;
  window.CustomEase = CustomEase;  
 }



