// Importa GSAP da UMD
import { gsap } from "gsap/dist/gsap";

// Importa i plugin di GSAP da dist/
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";

// Importa gli altri moduli
import barba from "@barba/core";
import Lenis from "lenis";
import SplitType from "split-type";

// Registra i plugin con GSAP
gsap.registerPlugin(
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  MotionPathPlugin,
  Draggable,
  InertiaPlugin
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
  window.MotionPathPlugin = MotionPathPlugin;
  window.Draggable = Draggable;
  window.InertiaPlugin = InertiaPlugin;
}



