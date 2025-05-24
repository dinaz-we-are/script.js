// Importa GSAP base (serve sempre per usare i plugin)
const gsap = window.gsap;

// Importa i plugin aggiuntivi specifici per branding
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { Draggable } from "gsap/dist/Draggable";

// Registra i plugin con GSAP
gsap.registerPlugin(
  MotionPathPlugin,
  DrawSVGPlugin,
  Draggable
);

// Esporta su window per compatibilità con Webflow
if (typeof window !== "undefined") { 
  window.MotionPathPlugin = MotionPathPlugin;
  window.DrawSVGPlugin = DrawSVGPlugin;
  window.Draggable = Draggable;
}

