// Importa GSAP
import { gsap } from "gsap";
import barba from "@barba/core"; // Importa Barba.js
import Lenis from 'lenis'
import SplitType from 'split-type';


// Importa tutti i plugin di GSAP che ti servono
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

// Registra tutti i plugin con GSAP
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin, Draggable, InertiaPlugin);

// Esportazione globale di GSAP e di tutti i plugin
if (typeof window !== "undefined") {
  window.gsap = gsap;
  window.barba = barba;
  window.Lenis = Lenis;
  window.SplitType = SplitType;
  window.ScrollTrigger = ScrollTrigger;
  window.Observer = Observer;
  window.ScrollToPlugin = ScrollToPlugin;
  window.MotionPathPlugin = MotionPathPlugin;
  window.Draggable = Draggable;   
  window.InertiaPlugin = InertiaPlugin;
}


