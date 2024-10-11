import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/Observer';

// Register the plugins
gsap.registerPlugin(ScrollTrigger, Flip, ScrollToPlugin, Observer);

// Export GSAP globally so it can be used in your main functions
window.gsap = gsap;
