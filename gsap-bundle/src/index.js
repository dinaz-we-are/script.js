import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin);

// Export GSAP globally so it can be used in your main functions
window.gsap = gsap;
