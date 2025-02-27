const functions = {
    initBarbaWithGSAP,
    scrollToTopInstant,
    resetTransitionElementsButton,
    resetTransitionElementsButtonMenu,
    defaultEnterTransition,
    defaultSimpleTransition,
    transitionOnLoadHero,
    transitionOnLoadHeroDefault,
    animationPageEnterDesign,
    animationPageEnterWebDesign,
    animationPageEnterMarketing,
    animationPageEnterAbout,
    animationPageEnterWomen,
    createScrollTriggerScrollWrapper,
    showcasePanelsScrollMobile,
    showcaseTextContentMobile,
    propositoHomePage,
    swiperHome,
    createScrollTriggerHero,
    pageServiceScrollTriggerDesign,
    pageServiceScrollTriggerWeb,
    pageServiceScrollTriggerSeo,
    pageServiceScrollTriggerAbout,
    pageServiceScrollTriggerWomen,
    ctaAnimations,
    serviceWrapper,
    servicePageWrapper,
    blogTransition,
    smoothScrollToTop,
    dataColorAndScrollTop,
    secondSection,
    info,
    videoPause,
    toggleFaq,
    toggleButtonAnimation,
    toggleServiceSection,
    logoAnima,
    swiperUI,
    calendar,
    studioAnimations,
    startMarquee,
    startInfiniteMarquee,
    changePrice,
  };

  Object.keys(functions).forEach(fn => {
    window[fn] = functions[fn];
  });

  export default { BurgerMenu: window.BurgerMenu, menuNavigation: window.menuNavigation, linkManager: window.linkManager, ctaStickyTransition: window.ctaStickyTransition, 
    propositoAnimation: window.propositoAnimation, };


  //Oggetti e Array Transition
const transitionElementsObj = {
    transitionWrapper: document.querySelector(".transition-wrapper") || null,
    colorScuro: document.querySelector("#color-scuro") || null,
    colorTransition: document.querySelector("#color-transition") || null,
    brandScuro: document.querySelector("#colore-punto-brand-scuro") || null,
    colorBackground:
      document.querySelectorAll(".color-background-transition") || null,
    brandLetters: {
      c: document.querySelector("#brand-trans-c") || null,
      t: document.querySelector("#brand-trans-t") || null,
      a: document.querySelector("#brand-trans-a") || null,
    },
    brandSymbols: {
      puntoTrans: document.querySelector("#colore-punto-brand-trans") || null,
      freccia: document.querySelector("#brand-trans-freccia") || null,
      punto: document.querySelector("#brand-trans-punto") || null,
    },
    colorDestinations: {
      destination: document.querySelector("#color-destination") || null,
      background: document.querySelector("#color-background-transition") || null,
    },
  };
  
  const transitionElements = [
    transitionElementsObj.transitionWrapper,
    transitionElementsObj.colorScuro,
    transitionElementsObj.colorTransition,
    transitionElementsObj.brandScuro,
    transitionElementsObj.colorBackground,
  ].filter((el) => el); // 🔹 Filtra elementi nulli
  
  const brandLetters = [
    transitionElementsObj.brandLetters.c,
    transitionElementsObj.brandLetters.t,
    transitionElementsObj.brandLetters.a,
  ].filter((el) => el);
  
  const brandSymbols = [
    transitionElementsObj.brandSymbols.puntoTrans,
    transitionElementsObj.brandSymbols.freccia,
    transitionElementsObj.brandSymbols.punto,
  ].filter((el) => el);
  
  const colorTransitions = [
    transitionElementsObj.colorDestinations.destination,
    transitionElementsObj.colorDestinations.background,
  ].filter((el) => el);
  //-----------------------------------------
  
  //Oggetti e Array Menu Transition
  const transitionElementMenuObj = {
    transitionMenuWrapper:
      document.querySelector(".transition-wrapper-menu") || null,
    puntoLogoNav: document.querySelector("#colore-punto-brand-logoNav") || null,
    puntoChiaroMenu:
      document.querySelector("#colore-punto-brand-chiaro-menu") || null,
    brandLettersMenu: {
      c: document.querySelector("#brand-trans-c-menu") || null,
      t: document.querySelector("#brand-trans-t-menu") || null,
      a: document.querySelector("#brand-trans-a-menu") || null,
    },
    brandSymbolsMenu: {
      puntoMenu: document.querySelector("#colore-punto-brand-menu") || null,
      frecciaMenu: document.querySelector("#brand-trans-freccia-menu") || null,
      puntoTransMenu: document.querySelector("#brand-trans-punto-menu") || null,
    },
    backgroundMenu: document.querySelector(".color-background-menu") || null,
  };
  
  const transitionMenuArray = [
    transitionElementMenuObj.transitionMenuWrapper,
    transitionElementMenuObj.backgroundMenu,
    transitionElementMenuObj.brandSymbolsMenu.puntoMenu,
    transitionElementMenuObj.brandSymbolsMenu.frecciaMenu,
    transitionElementMenuObj.brandSymbolsMenu.puntoTransMenu,
    transitionElementMenuObj.brandLettersMenu.c,
    transitionElementMenuObj.brandLettersMenu.t,
    transitionElementMenuObj.brandLettersMenu.a,
    transitionElementMenuObj.puntoChiaroMenu,
  ].filter((el) => el); // 🔹 Filtra eventuali elementi nulli
  
  const brandLettersMenuArray = [
    transitionElementMenuObj.brandLettersMenu.c,
    transitionElementMenuObj.brandLettersMenu.t,
    transitionElementMenuObj.brandLettersMenu.a,
  ].filter((el) => el);
  
  const brandSymbolsMenuArray = [
    transitionElementMenuObj.brandSymbolsMenu.puntoMenu,
    transitionElementMenuObj.brandSymbolsMenu.frecciaMenu,
    transitionElementMenuObj.brandSymbolsMenu.puntoTransMenu,
  ].filter((el) => el);
  //-------------------------------------
  //Oggetti e Array Nav e Logo Header
  const header = {
    burgerBlock: document.querySelector("#nav-burger") || null,
    logoMenu: document.querySelector("#nav-logo") || null,
  };
  const headerElements = Object.values(header).filter((el) => el);
  //-------------------------------------------------------------------
  //Oggetti e Array Elementi Menu e Burger
  const burgerElements = {
    menu: document.querySelector(".menu-container") || null,
    wrapper: document.querySelector(".menu-wrapper") || null,
    row: document.querySelector(".menu-wrapper-row") || null,
    lineWrapper: document.querySelector(".line-menu-wrapper") || null,
    burgerWrapper: document.querySelector(".burger-wrapper") || null,
    burgerClose: document.querySelector(".burger-close") || null,
    textMenu: document.querySelector(".text-menu") || null,
    logoNav: document.querySelector("#colore-chiaro-logoNav") || null,
    lines: {
      top: document.querySelector(".line-top") || null,
      middle: document.querySelector(".line-middle") || null,
      bottom: document.querySelector(".line-bottom") || null,
    },
  };
  
  const backHomeLink = document.querySelector(".back-home-link") || null;
  const burger = document.querySelector("#burger") || null;
  
  const menuWrapperElements = [
    burgerElements.wrapper,
    burgerElements.row,
    burgerElements.lineWrapper,
  ].filter((el) => el);
  
  const menuContainerTransitionElements = [
    burgerElements.menu,
    burgerElements.lineWrapper,
    burgerElements.row,
  ].filter((el) => el);
  
  const menuContainerElements = [
    burgerElements.menu,
    burgerElements.lineWrapper,
  ].filter((el) => el);
  
  const burgerLinesElements = [
    burgerElements.lines.bottom,
    burgerElements.lines.top,
  ].filter((el) => el);
  //

  const brandSymbolsArray = [
    document.querySelector("#punto"),
    document.querySelector("#colore-punto-brand"),
    document.querySelector("#freccia"),
  ].filter((el) => el);
  
  const brandLettersArray = [
    document.querySelector("#c"),
    document.querySelector("#t"),
    document.querySelector("#a"),
  ].filter((el) => el);
  
  window.BurgerMenu = window.BurgerMenu || {
    menuOpen: false,
    isHomePage: false, // Puoi passarlo dinamicamente quando necessario
  
    disableBackHomeLink() {
      if (backHomeLink) {
        backHomeLink.style.pointerEvents = "none";
        backHomeLink.style.cursor = "default";
      }
    },
  
    enableBackHomeLink() {
      if (backHomeLink) {
        backHomeLink.style.pointerEvents = "auto";
        backHomeLink.style.cursor = "pointer";
      }
    },
  
    disableBurgerClick() {
      if (burger) {
        burger.style.pointerEvents = "none";
      }
    },
  
    enableBurgerClick() {
      if (burger) {
        burger.style.pointerEvents = "auto";
      }
    },
  
    closeMenu(callback) {
      if (!this.menuOpen) {
        console.warn("Il menu è già chiuso. Ignoro l'animazione di chiusura.");
        if (callback) callback();
        return;
      }
      const dropdowns = document.querySelectorAll(".dropdown-menu");
      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh();
          gsap.set(menuWrapperElements, {
            clearProps: "all",
          });
          gsap.to(burgerElements.menu, {
            scrollTo: { y: 0, x: 0 },
          });
          this.menuOpen = false;
          this.enableBurgerHover();
          this.enableBackHomeLink();
          if (callback) callback();
          dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains("open")) {
              gsap.set(dropdown, { height: 0 });
              dropdown.classList.remove("open");
            }
          });
        },
      });
  
      tl.to(menuContainerElements, {
        opacity: 0,
        duration: 0,
        ease: "none",
      });
      if (window.matchMedia("(min-width: 768px)").matches) {
        tl.to(
          burgerElements.burgerWrapper,
          {
            width: "10rem",
            duration: 0.4,
            borderColor: "",
            borderWidth: "",
            ease: "power2.inOut",
          },
          0
        ).to(
          burgerElements.lines.middle,
          { width: "3.25rem", duration: 0.3, ease: "power2.inOut" },
          0
        );
      }
      if (
        window.matchMedia("(min-width: 480px) and (max-width: 767px)").matches
      ) {
        tl.to(
          burgerElements.burgerWrapper,
          {
            width: "8rem",
            duration: 0.4,
            borderColor: "",
            borderWidth: "",
            ease: "power2.inOut",
          },
          0
        ).to(
          burgerElements.lines.middle,
          { width: "2.75rem", duration: 0.2, ease: "power1.out" },
          0
        );
      }
      if (window.matchMedia("(max-width: 479px)").matches) {
        tl.to(
          burgerElements.burgerWrapper,
          {
            width: "7rem",
            duration: 0.4,
            borderColor: "",
            borderWidth: "",
            ease: "power2.inOut",
          },
          0
        ).to(
          burgerElements.lines.middle,
          { width: "2.5rem", duration: 0.2, ease: "power1.out" },
          0
        );
      }
      tl.to(
        burgerElements.burgerClose,
        {
          x: 0,
          ease: "power2.inOut",
          duration: 0.2,
        },
        "<"
      )
        .to(
          burgerLinesElements,
          { y: 0, rotationZ: 0, duration: 0.3, ease: "power1.out" },
          "<"
        )
        .to(
          burgerElements.wrapper,
          {
            y: "-100vh",
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.4"
        )
        .to(
          burgerElements.logoNav,
          { y: "0%", duration: 0.4, ease: "power2.out" },
          "-=0.2"
        )
        .to(
          burgerElements.textMenu,
          {
            scale: 1,
            duration: 0.2,
            ease: "power1.inOut",
          },
          "-=0.4"
        );
    },
  
    closeMenuTransition() {
      const dropdowns = document.querySelectorAll(".dropdown-menu");
      if (!this.menuOpen) {
        return;
      }
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(burgerElements.menu, {
            scrollTo: { y: 0, x: 0 },
          });
          this.menuOpen = false;
          this.enableBurgerHover();
          this.enableBackHomeLink();
          dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains("open")) {
              gsap.set(dropdown, { height: 0 }); // 🔹 Chiude immediatamente senza animazione
              dropdown.classList.remove("open");
            }
          });
        },
      });
  
      if (window.matchMedia("(min-width: 768px)").matches) {
        tl.to(
          burgerElements.burgerWrapper,
          {
            width: "10rem",
            duration: 0.4,
            borderColor: "",
            borderWidth: "",
            ease: "power2.inOut",
          },
          0
        ).to(
          burgerElements.lines.middle,
          { width: "3.25rem", duration: 0.3, ease: "power2.inOut" },
          0
        );
      }
      if (
        window.matchMedia("(min-width: 480px) and (max-width: 767px)").matches
      ) {
        tl.to(
          burgerElements.burgerWrapper,
          {
            width: "8rem",
            duration: 0.4,
            borderColor: "",
            borderWidth: "",
            ease: "power2.inOut",
          },
          0
        ).to(
          burgerElements.lines.middle,
          { width: "2.75rem", duration: 0.2, ease: "power1.out" },
          0
        );
      }
      if (window.matchMedia("(max-width: 479px)").matches) {
        tl.to(
          burgerElements.burgerWrapper,
          {
            width: "7rem",
            duration: 0.4,
            borderColor: "",
            borderWidth: "",
            ease: "power2.inOut",
          },
          0
        ).to(
          burgerElements.lines.middle,
          { width: "2.5rem", duration: 0.2, ease: "power1.out" },
          0
        );
      }
      tl.to(
        burgerElements.burgerClose,
        {
          x: 0,
          ease: "power2.inOut",
          duration: 0.2,
        },
        "<"
      )
        .to(
          burgerLinesElements,
          {
            y: 0,
            rotationZ: 0,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          burgerElements.textMenu,
          {
            scale: 1,
            duration: 0.2,
            ease: "power1.inOut",
          },
          "-=0.2"
        )
        .to(burgerElements.logoNav, {
          y: "0%",
          duration: 0.6,
          ease: "power2.out",
        });
    },
  
    animateBurgerHover() {
      if (!burger) {
        console.error("Burger element not found");
        return;
      }
  
      if (!burgerElements.lines.middle || !burgerElements.burgerWrapper) {
        console.error("One or more line elements not found");
        return;
      }
  
      const timeline = gsap.timeline({ paused: true });
  
      timeline
        .to(burgerElements.lines.middle, {
          width: "24px",
          duration: 0.2,
          ease: "power1.out",
        })
        .to(
          burgerElements.burgerWrapper,
          {
            width: "9rem",
            duration: 0.2,
            borderColor: "#feffec",
            ease: "power1.out",
          },
          0
        );
  
      const onMouseEnter = () => {
        if (!this.menuOpen) timeline.play();
      };
  
      const onMouseLeave = () => {
        if (!this.menuOpen) timeline.reverse();
      };
  
      burger.addEventListener("mouseenter", onMouseEnter);
      burger.addEventListener("mouseleave", onMouseLeave);
  
      this.disableBurgerHover = () => {
        burger.removeEventListener("mouseenter", onMouseEnter);
        burger.removeEventListener("mouseleave", onMouseLeave);
      };
  
      this.enableBurgerHover = () => {
        timeline.seek(0).pause(); // Resetta la timeline allo stato iniziale
        burger.addEventListener("mouseenter", onMouseEnter);
        burger.addEventListener("mouseleave", onMouseLeave);
      };
    },
  
    animateBurger(callback) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (callback) callback();
        },
      });
  
      if (!this.menuOpen) {
        this.disableBurgerHover();
        this.disableBackHomeLink();
        gsap.set(burgerElements.wrapper, { display: "flex" });
  
        tl.to(burgerElements.row, {
          y: "0vh",
          duration: 0.6,
          ease: "power3.inOut",
        })
          .to(
            burgerElements.lines.middle,
            { width: 0, duration: 0.2, ease: "power2.inOut" },
            "<"
          )
          .to(
            burgerElements.textMenu,
            {
              scale: 0,
              duration: 0.2,
              ease: "power2.inOut",
            },
            "<"
          );
        if (window.matchMedia("(min-width: 768px)").matches) {
          tl.to(
            burgerElements.lines.top,
            {
              y: 8, // Valore standard
              rotationZ: -45,
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          ).to(
            burgerElements.lines.bottom,
            {
              y: -8, // Valore standard
              rotationZ: 45,
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          );
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
          tl.to(
            burgerElements.lines.top,
            {
              y: 7, // Valore standard
              rotationZ: -45,
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          ).to(
            burgerElements.lines.bottom,
            {
              y: -7, // Valore standard
              rotationZ: 45,
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          );
        }
  
        if (window.matchMedia("(min-width: 768px)").matches) {
          tl.to(
            burgerElements.burgerWrapper,
            {
              width: "3.875rem",
              duration: 0.4,
              borderColor: "var(--linear-grad1)",
              borderWidth: "2px",
              ease: "power2.inOut",
            },
            "-=0.5"
          ).to(
            burgerElements.burgerClose,
            {
              x: 9,
              duration: 0.2,
              ease: "power2.inOut",
            },
            "<"
          );
        }
        if (
          window.matchMedia("(min-width: 480px) and (max-width: 767px)").matches
        ) {
          tl.to(
            burgerElements.burgerWrapper,
            {
              width: "3.25rem",
              duration: 0.4,
              borderColor: "var(--linear-grad1)",
              borderWidth: "2px",
              ease: "power2.inOut",
            },
            "-=0.5"
          ).to(
            burgerElements.burgerClose,
            {
              x: 7,
              duration: 0.2,
              ease: "power2.inOut",
            },
            "<"
          );
        }
        if (window.matchMedia("(max-width: 479px)").matches) {
          tl.to(
            burgerElements.burgerWrapper,
            {
              width: "2.875rem",
              duration: 0.4,
              borderColor: "var(--linear-grad1)",
              borderWidth: "2px",
              ease: "power2.inOut",
            },
            "-=0.5"
          ).to(
            burgerElements.burgerClose,
            {
              x: 6,
              duration: 0.2,
              ease: "power2.inOut",
            },
            "<"
          );
        }
        tl.to(
          burgerElements.logoNav,
          {
            y: "-100%",
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        )
          .to(
            burgerElements.menu,
            {
              opacity: 1,
              duration: 0.3,
              ease: "power1.out",
            },
            "-=0.2"
          )
          .to(
            burgerElements.lineWrapper,
            {
              width: "100%",
              duration: 0.6,
              ease: "power2.inOut",
            },
            "-=0.2"
          );
  
        this.menuOpen = true; // Imposta lo stato del menu come aperto
      } else {
        this.closeMenu(callback);
      }
    },
  
    init() {
      if (burger) {
        burger.addEventListener("click", () => this.animateBurger());
      }
      this.animateBurgerHover(); // Inizializza l'hover del burger
    },
  };
  
  window.menuNavigation = window.menuNavigation || {
    timelines: {}, // Per gestire le timeline di ogni elemento
  
    initializeHoverAnimations: function () {
      const boxes = document.querySelectorAll(".link-wrapper-menu");
      boxes.forEach((box, index) => {
        const hoverTimeline = gsap.timeline({ paused: true });
        const touchTimeline = gsap.timeline({ paused: true });
  
        const color = box.querySelector(".link-hover");
        const freccia = box.querySelectorAll(".arrow-link-navabar");
        const link = box.querySelector(".link-heading");
        const subLink = box.querySelector(".sublink");
  
        // Crea animazioni per hover e touch
        this.createTimeline(hoverTimeline, { color, freccia, link, subLink });
        this.createTimeline(touchTimeline, { color, freccia, link, subLink });
  
        // Aggiungi timeline all'oggetto per accesso esterno
        this.timelines[`box-${index}`] = { hoverTimeline, touchTimeline };
  
        // Gestisci gli eventi hover
        box.addEventListener("mouseenter", () => hoverTimeline.play());
        box.addEventListener("mouseleave", () => {
          hoverTimeline.reverse();
          // Aggiungi un clearProps dopo la fine dell'animazione
          hoverTimeline.eventCallback("onReverseComplete", () => {
            setTimeout(() => {
              gsap.set([color, freccia, link, subLink], { clearProps: "all" });
            }, 100);
          });
        });
  
        // Gestisci gli eventi touch
        box.addEventListener("touchstart", () => touchTimeline.play(), {
          passive: true,
        });
        box.addEventListener("touchend", () => {
          touchTimeline.reverse();
          // Aggiungi un clearProps dopo la fine dell'animazione
          touchTimeline.eventCallback("onReverseComplete", () => {
            gsap.set([color, freccia, link, subLink], { clearProps: "all" });
          });
        });
      });
    },
  
    createTimeline: function (timeline, { color, freccia, link, subLink }) {
      timeline
        .to(color, {
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(
          freccia,
          {
            x: "100%",
            color: "#feffec",
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          [link, subLink],
          {
            color: "#feffec",
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        );
    },
  
    handleLinkMenuHover: function () {
      // Attiva la funzione solo su schermi > 992px
      if (window.innerWidth <= 992) return;
  
      // Seleziona tutti gli elementi .link-menu-desk
      const containers = document.querySelectorAll(".link-menu-desk");
  
      if (containers.length === 0) return;
  
      containers.forEach((container) => {
        // Trova .dot-menu-desk e .dot-menu-color all'interno del container
        const dotContainer = container.querySelector(".dot-menu-desk");
        const dot = dotContainer
          ? dotContainer.querySelector(".dot-menu-color")
          : null;
        const freccia = dotContainer
          ? dotContainer.querySelector(".arrow-menu-desk")
          : null;
  
        if (!dot) return;
  
        // Aggiungi eventi hover
        container.addEventListener("mouseenter", () => {
          gsap
            .timeline()
            .to(dot, {
              scale: 0,
              transformOrigin: "bottom left",
              duration: 0.3,
              ease: "power1.out",
            })
            .to(
              freccia,
              {
                scale: 1,
                duration: 0.3,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              container,
              {
                borderColor: "#feffec",
                duration: 0.3,
                ease: "power1.out",
              },
              "<"
            );
        });
  
        container.addEventListener("mouseleave", () => {
          gsap
            .timeline()
            .to(dot, {
              scale: 1,
              duration: 0.3,
              ease: "power1.out",
            })
            .to(
              freccia,
              {
                scale: 0,
                duration: 0.3,
                ease: "power1.out",
              },
              "<"
            )
            .to(
              container,
              {
                borderColor: "",
                duration: 0.3,
                ease: "power1.out",
              },
              "<"
            );
        });
      });
    },
    simpleLinkMenuHover: function () {
      // Seleziona tutti gli elementi .link-menu-menu
      const containers = document.querySelectorAll(".link-menu-menu");
  
      if (containers.length === 0) return;
  
      containers.forEach((container) => {
        // Trova .dot-menu-menu e gli elementi figli
        const dotContainer = container.querySelector(".dot-menu-menu");
        const dot = dotContainer.querySelector(".dot-menu-color-menu");
        const freccia = dotContainer.querySelector(".arrow-menu-menu");
  
        // Funzione per animazione hover/touchstart
        const onEnter = () => {
          gsap
            .timeline()
            .to(dot, {
              scale: 0,
              transformOrigin: "bottom left",
              duration: 0.3,
              ease: "power1.out",
            })
            .to(
              freccia,
              {
                scale: 1,
                duration: 0.3,
                ease: "power1.out",
              },
              "<"
            );
        };
  
        // Funzione per animazione mouseleave/touchend
        const onLeave = () => {
          gsap
            .timeline()
            .to(dot, {
              scale: 1,
              duration: 0.3,
              ease: "power1.out",
            })
            .to(
              freccia,
              {
                scale: 0,
                duration: 0.3,
                ease: "power1.out",
              },
              "<"
            );
        };
  
        // Aggiungi eventi hover per desktop
        container.addEventListener("mouseenter", onEnter);
        container.addEventListener("mouseleave", onLeave);
  
        // Aggiungi eventi touch per dispositivi mobili
        container.addEventListener("touchstart", () => {
          onEnter();
        });
  
        container.addEventListener("touchend", () => {
          onLeave();
        });
      });
    },
  
    handleActiveLink: function () {
      const menuLinks = document.querySelectorAll(".link-wrapper-menu");
      const activeLink = document.querySelector(".link-wrapper-menu.w--current");
  
      // Resetta gli stili di tutti i link
      menuLinks.forEach((link) => {
        gsap.set(link, {
          clearProps: "all", // Ripristina tutti gli stili inline
        });
  
        // Ripristina il click sui link non attivi
        link.style.pointerEvents = "auto";
        link.style.cursor = "pointer";
      });
  
      // Se non esiste un link attivo, interrompi l'esecuzione
      if (!activeLink) {
        return; // Esci dalla funzione
      }
  
      // Applica l'animazione al link attivo
      gsap.to(activeLink, {
        color: "var(--linear-grad1)",
        opacity: 0.7, // Cambia l'opacità
      });
  
      // Disabilita il click sul link attivo
      activeLink.addEventListener("click", (event) => {
        event.preventDefault();
      });
  
      // Disabilita completamente i click e cambia il cursore sul link attivo
      activeLink.style.pointerEvents = "none";
      activeLink.style.cursor = "default";
    },
  
    shareBtnAnimation: function () {
      const shareBtns = document.querySelectorAll(".share-btn");
  
      shareBtns.forEach((btn) => {
        const svgCont = btn.querySelector(".svg-cont");
        let context = gsap.context(() => {
          function animateSvgCont(show) {
            gsap.to(svgCont, {
              duration: 0.3,
              opacity: show ? 1 : 0,
              right: show ? 0 : "auto",
              ease: "power1.out",
            });
          }
  
          btn.addEventListener("mouseenter", () => animateSvgCont(true));
          btn.addEventListener("mouseleave", () => animateSvgCont(false));
          btn.addEventListener("touchstart", () => animateSvgCont(true));
          btn.addEventListener("touchend", () => animateSvgCont(false));
        }, btn);
      });
    },
    animateUSPLinks: function () {
      const links = document.querySelectorAll(".usp-text-link");
  
      links.forEach((link) => {
        // Seleziona il contenitore interno e le parentesi
        const innerText = link.querySelector(".text-link-inner");
        const parenthesisLeft = innerText?.querySelector(".parentesi.sx");
        const parenthesisRight = innerText?.querySelector(".parentesi.dx");
  
        if (!parenthesisLeft || !parenthesisRight) {
          console.error("Parentheses not found in the link:", link);
          return;
        }
  
        // Determina il colore dell'underline e del testo in base alla classe
        let underlineColor = "#ff006e"; // Colore di default
        if (link.classList.contains("sviluppo")) {
          underlineColor = "#00aeff";
        } else if (link.classList.contains("design")) {
          underlineColor = "#ff8719";
        }
  
        const hoverTimeline = gsap.timeline({ paused: true });
  
        // Animazione per le parentesi
        hoverTimeline
          .to(parenthesisLeft, {
            x: "-10px", // Sposta la parentesi sx
            opacity: 0, // Nascondi gradualmente
            duration: 0.3,
            ease: "power1.out",
          })
          .to(
            parenthesisRight,
            {
              x: "10px", // Sposta la parentesi dx
              opacity: 0, // Nascondi gradualmente
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          )
          // Cambia il colore del testo e aggiungi underline
          .to(
            link,
            {
              textDecoration: "underline",
              textUnderlineOffset: "5px", // Distanza dell'underline dal testo
              color: underlineColor, // Cambia colore del testo e underline
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          );
  
        // Eventi hover e touch
        link.addEventListener("mouseenter", () => hoverTimeline.play());
        link.addEventListener("mouseleave", () => hoverTimeline.reverse());
  
        // Gestione del touch per dispositivi mobili
        link.addEventListener("touchstart", () => hoverTimeline.play(), {
          passive: true,
        });
        link.addEventListener("touchend", () => hoverTimeline.reverse(), {
          passive: true,
        });
      });
    },
  
    userAccount: function () {
      const dropdownWrappers = document.querySelectorAll(
        ".dropdown-menu-wrapper"
      );
  
      if (!dropdownWrappers.length) return; // 🔹 Esci se nessun dropdown trovato
  
      dropdownWrappers.forEach((wrapper) => {
        const dropdownMenu = wrapper.querySelector(".dropdown-menu");
        const trigger = wrapper.querySelector(".dropdown-menu-content"); // 🔹 Click su questo
  
        if (!dropdownMenu || !trigger) return;
  
        // 🔹 Colori originali e di hover
        const defaultColor = getComputedStyle(trigger).color;
        const hoverColor = "var(--primary)";
  
        let isTouchDevice =
          "ontouchstart" in window || navigator.maxTouchPoints > 0;
  
        // 🔹 Funzione per aprire/chiudere il dropdown
        const toggleDropdown = (event) => {
          event.preventDefault();
  
          const isOpen = dropdownMenu.classList.contains("open");
  
          if (isOpen) {
            gsap.to(dropdownMenu, {
              height: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            trigger.classList.remove("active");
            dropdownMenu.classList.remove("open");
          } else {
            gsap.set(dropdownMenu, { height: "auto" });
            const height = dropdownMenu.offsetHeight;
            gsap.fromTo(
              dropdownMenu,
              { height: 0 },
              { height: height, duration: 0.3, ease: "power2.out" }
            );
            trigger.classList.add("active");
            dropdownMenu.classList.add("open");
          }
        };
  
        // 🔹 Funzione hover - cambia il colore
        const hoverIn = () => {
          gsap.to(trigger, {
            color: hoverColor,
            duration: 0.2,
            ease: "power1.out",
          });
        };
  
        // 🔹 Funzione hover end - ritorna al colore originale
        const hoverOut = () => {
          gsap.to(trigger, {
            color: defaultColor,
            duration: 0.2,
            ease: "power1.in",
          });
        };
  
        // 🔹 Aggiunge il listener per il click
        trigger.addEventListener("click", toggleDropdown);
  
        // 🔹 Aggiunge i listener per hover (solo su dispositivi non-touch)
        if (!isTouchDevice) {
          trigger.addEventListener("mouseenter", hoverIn);
          trigger.addEventListener("mouseleave", hoverOut);
        }
  
        // 🔹 Gestione del touch su dispositivi mobili
        if (isTouchDevice) {
          trigger.addEventListener("touchstart", (e) => {
            hoverIn();
            toggleDropdown(e);
          });
  
          trigger.addEventListener("touchend", (e) => {
            setTimeout(() => {
              hoverOut();
            }, 300); // Ritardo per evitare conflitto tra hover e chiusura
          });
        }
      });
    },
  
    init: function () {
      this.initializeHoverAnimations();
      this.shareBtnAnimation();
      this.handleActiveLink();
      this.handleLinkMenuHover();
      this.animateUSPLinks();
      this.simpleLinkMenuHover();
      this.userAccount();
    },
  };

  window.linkManager = window.linkManager ||{
    excludePatterns: ["/proposito-blog-posts/", "/categorie/", "/tags/"],
  
    init: function () {
      if (!document.querySelectorAll("a[href]")) {
        return;
      }
  
      const excludedLinks = [...document.querySelectorAll("a[href]")].filter(
        (link) =>
          this.excludePatterns.some((pattern) => link.href.includes(pattern))
      );
  
      if (excludedLinks.length === 0) {
        console.log("Nessun link escluso trovato.");
        return;
      }
  
      excludedLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          this.handleExcludedLinkClick(link);
  
          setTimeout(() => {
            window.location.href = link.href;
          }, 600);
        });
      });
    },
  
    handleExcludedLinkClick: function (link) {
      if (!gsap) {
        console.error("GSAP non è caricato.");
        return;
      }
  
      gsap
        .timeline()
        .set(".prop-cover-wrapper", { display: "block" })
        .to(".prop-cover-wrapper", {
          y: "0vh",
          duration: 0.6,
          ease: "power3.inOut",
        })
        .to(
          headerElements,
          {
            y: "-6rem",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        );
    },
  };

//BARBA  
  let isBarbaTransition = false;

function initBarbaWithGSAP() {
  if (typeof barba === "undefined" || typeof gsap === "undefined") {
    console.error("Barba.js o GSAP non sono stati caricati correttamente.");
    return;
  }

  barba.init({
    //debug: true,
    timeout: 5000,
    transitions: [
      {
        name: "button-transition",
        from: {
          custom: ({ trigger }) =>
            trigger instanceof HTMLElement &&
            trigger.getAttribute("data-custom") === "button",
        },
        leave(data) {
          isBarbaTransition = true;
          const done = this.async();
          gsap.set(transitionElementsObj.transitionWrapper, {
            display: "block",
          });
          gsap
            .timeline({
              onComplete: () => {
                done();
              },
            })
            .call(() => {
              BurgerMenu.disableBurgerClick();
            })
            .to(header.burgerBlock, {
              scale: 1,
              duration: 0.4,
              ease: "expo.out",
            })
            .to(
              data.current.container,
              {
                y: "-100vh",
                duration: 0.8,
                ease: "power3.inOut",
              },
              0
            )
            .to(
              transitionElementsObj.transitionWrapper,
              {
                y: "0vh",
                duration: 0.8,
                ease: "power3.inOut",
              },
              0
            );
        },
        afterLeave(data) {
          // Controlla se stai entrando nella home
          if (data.current.namespace === "home") {
            ScrollTrigger.getAll().forEach((trigger) => {
              if (
                trigger.vars.id &&
                trigger.vars.id.startsWith("hero-trigger")
              ) {
                trigger.kill();
              }
            });
          }
        },
        enter(data) {
          const done = this.async();
          const pageTl = gsap.timeline({
            onComplete: () => {
              resetTransitionElementsButton();
              lenisInstance.start();
              BurgerMenu.enableBurgerClick();
            },
          });
          pageTl
            .call(() => {
              done();
              BurgerMenu.disableBurgerClick();
            })
            .to(transitionElementsObj.colorScuro, {
              delay: 0.2,
              y: "-100vh",
              duration: 0.4,
              ease: "power2.inOut",
            })
            .to(
              transitionElementsObj.colorDestinations.destination,
              {
                y: "0vh",
                duration: 0.4,
                ease: "power3.inOut",
              },
              "<"
            )
            .to(
              transitionElementsObj.colorTransition,
              {
                y: "0vh",
                duration: 0.6,
                ease: "power3.inOut",
              },
              "-=0.2"
            )

            .to(
              transitionElementsObj.brandScuro,
              {
                scale: 0,
                transformOrigin: "center center",
                duration: 0.2,
                ease: "power1.inOut",
              },
              "-=0.6"
            )
            .to(
              brandLetters,
              {
                y: "100vh",
                duration: 0.6,
                ease: "power1.inOut",
                stagger: 0.2,
              },
              "-=0.2"
            )
            .to(
              brandSymbols,
              {
                y: "100vh",
                duration: 0.6,
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              transitionElementsObj.colorBackground,
              {
                y: "100vh",
                duration: 1.2,
                ease: "power2.inOut",
              },
              "-=0.8"
            )
            .set(
              colorTransitions,
              {
                opacity: 0,
              },
              "<"
            );
        },
        after(data) {
          updatePageMetaAndInteractions(data.next.html);
          initializeMainFunctions();
          lenisInstance.update();
          scrollToTopInstant();
          lenisInstance.stop();
          if (!cookieManager.getCookie("cta")) {
            uiManager.showBanner();
          }
        },
      },
      {
        name: "lateral-transition",
        from: {
          custom: ({ trigger }) =>
            trigger instanceof HTMLElement &&
            trigger.getAttribute("data-custom") === "lateral",
        },
        leave(data) {
          isBarbaTransition = true;
          const done = this.async();
          gsap.set(transitionElementsObj.transitionWrapper, {
            display: "block",
            y: 0,
            x: "100vw",
          });
          gsap
            .timeline({
              onComplete: () => {
                done();
              },
            })
            .call(() => {
              BurgerMenu.disableBurgerClick();
            })
            .to(header.burgerBlock, {
              scale: 1,
              duration: 0.4,
              ease: "expo.out",
            })
            .to(
              data.current.container,
              {
                x: "-100vw",
                duration: 0.8,
                ease: "power3.inOut",
              },
              0
            )
            .to(
              transitionElementsObj.transitionWrapper,
              {
                x: "0vw",
                duration: 0.8,
                ease: "power3.inOut",
              },
              0
            );
        },
        afterLeave(data) {
          // Controlla se stai entrando nella home
          if (data.current.namespace === "home") {
            ScrollTrigger.getAll().forEach((trigger) => {
              if (
                trigger.vars.id &&
                trigger.vars.id.startsWith("hero-trigger")
              ) {
                trigger.kill();
              }
            });
          }
        },
        enter(data) {
          const done = this.async();
          const pageTl = gsap.timeline({
            onComplete: () => {
              resetTransitionElementsButton();
              lenisInstance.start();
              BurgerMenu.enableBurgerClick();
            },
          });
          pageTl
            .call(() => {
              done();
              BurgerMenu.disableBurgerClick();
            })
            .to(transitionElementsObj.colorScuro, {
              delay: 0.2,
              y: "-100vh",
              duration: 0.4,
              ease: "power2.inOut",
            })
            .to(
              transitionElementsObj.colorDestinations.destination,
              {
                y: "0vh",
                duration: 0.4,
                ease: "power3.inOut",
              },
              "<"
            )
            .to(
              transitionElementsObj.colorTransition,
              {
                y: "0vh",
                duration: 0.6,
                ease: "power3.inOut",
              },
              "-=0.2"
            )

            .to(
              transitionElementsObj.brandScuro,
              {
                scale: 0,
                transformOrigin: "center center",
                duration: 0.2,
                ease: "power1.inOut",
              },
              "-=0.6"
            )
            .to(
              brandLetters,
              {
                y: "100vh",
                duration: 0.6,
                ease: "power1.inOut",
                stagger: 0.2,
              },
              "-=0.2"
            )
            .to(
              brandSymbols,
              {
                y: "100vh",
                duration: 0.6,
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              transitionElementsObj.colorBackground,
              {
                y: "100vh",
                duration: 1.2,
                ease: "power2.inOut",
              },
              "-=0.8"
            )
            .set(
              colorTransitions,
              {
                opacity: 0,
              },
              "<"
            );
        },
        after(data) {
          updatePageMetaAndInteractions(data.next.html);
          initializeMainFunctions();
          lenisInstance.update();
          scrollToTopInstant();
          lenisInstance.stop();
          if (!cookieManager.getCookie("cta")) {
            uiManager.showBanner();
          }
        },
      },
      {
        name: "menu-transition",
        from: {
          custom: ({ trigger }) =>
            trigger instanceof HTMLElement &&
            trigger.getAttribute("data-custom") === "menu",
        },
        leave(data) {
          isBarbaTransition = true;
          const done = this.async();
          gsap
            .timeline()
            .to(transitionElementMenuObj.transitionMenuWrapper, {
              y: "0vh",
              duration: 0.8,
              ease: "power3.out",
            })
            .to(
              transitionElementMenuObj.puntoLogoNav,
              { scale: 0, duration: 0.2 },
              "-=0.4"
            )
            .to(header.burgerBlock, {
              scale: 1,
              duration: 0,
              onComplete: done,
            })
            .set(menuContainerTransitionElements, {
              opacity: 0,
            })
            .call(() => {
              if (typeof BurgerMenu.closeMenuTransition === "function") {
                BurgerMenu.closeMenuTransition();
                BurgerMenu.disableBurgerClick();
              } else {
                console.error(
                  "BurgerMenu.closeMenuTransition non è una funzione."
                );
              }
            });
        },
        afterLeave(data) {
          // Controlla se stai entrando nella home
          if (data.current.namespace === "home") {
            ScrollTrigger.getAll().forEach((trigger) => {
              if (
                trigger.vars.id &&
                trigger.vars.id.startsWith("hero-trigger")
              ) {
                trigger.kill();
              }
            });
          }
        },
        enter(data) {
          const done = this.async();
          const pageTl = gsap.timeline({
            onComplete: () => {
              lenisInstance.start();
              resetTransitionElementsButtonMenu();
              BurgerMenu.enableBurgerClick();
            },
          });

          done();

          pageTl
            .to(transitionElementMenuObj.puntoChiaroMenu, {
              scale: 0,
              transformOrigin: "center center",
              duration: 0.2,
              ease: "power1.inOut",
            })
            .to(
              brandLettersMenuArray,
              {
                y: "100vh",
                duration: 0.8,
                ease: "power1.inOut",
                stagger: 0.2,
              },
              "+=0.2"
            )
            .to(
              brandSymbolsMenuArray,
              {
                y: "100vh",
                duration: 0.8,
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              transitionElementMenuObj.backgroundMenu,
              {
                y: "100vh",
                duration: 0.8,
                ease: "power2.in",
              },
              "-=1"
            )
            .to(
              transitionElementMenuObj.puntoLogoNav,
              { scale: 1, ease: "expo.out", duration: 0.2 },
              "<"
            );
        },
        after(data) {
          updatePageMetaAndInteractions(data.next.html);
          initializeMainFunctions();
          lenisInstance.update();
          scrollToTopInstant();
          lenisInstance.stop();
          if (!cookieManager.getCookie("cta")) {
            uiManager.showBanner();
          }
        },
      },
      {
        name: "popstate-transition",
        leave(data) {
          isBarbaTransition = true;
          const done = this.async();
          gsap.set(".transition-wrapper", {
            display: "block",
          });
          gsap
            .timeline({
              onComplete: () => {
                done();
              },
            })
            .call(() => {
              BurgerMenu.disableBurgerClick();
            })
            .to(header.burgerBlock, {
              scale: 1,
              duration: 0.4,
              ease: "expo.out",
            })
            .to(
              data.current.container,
              {
                y: "-100vh",
                duration: 0.8,
                ease: "power3.inOut",
              },
              0
            )
            .to(
              transitionElementsObj.transitionWrapper,
              {
                y: "0vh",
                duration: 0.8,
                ease: "power3.inOut",
              },
              0
            );
        },
        afterLeave(data) {
          // Controlla se stai entrando nella home
          if (data.current.namespace === "home") {
            ScrollTrigger.getAll().forEach((trigger) => {
              if (
                trigger.vars.id &&
                trigger.vars.id.startsWith("hero-trigger")
              ) {
                trigger.kill();
              }
            });
          }
        },
        enter(data) {
          const done = this.async();
          const pageTl = gsap.timeline({
            onComplete: () => {
              resetTransitionElementsButton();
              lenisInstance.start();
              BurgerMenu.enableBurgerClick();
            },
          });

          pageTl
            .call(() => {
              done();
              BurgerMenu.disableBurgerClick();
            })
            .to(transitionElementsObj.colorScuro, {
              delay: 0.2,
              y: "-100vh",
              duration: 0.4,
              ease: "power2.inOut",
            })
            .to(
              transitionElementsObj.colorDestinations.destination,
              {
                y: "0vh",
                duration: 0.4,
                ease: "power3.inOut",
              },
              "<"
            )
            .to(
              transitionElementsObj.colorTransition,
              {
                y: "0vh",
                duration: 0.6,
                ease: "power3.inOut",
              },
              "-=0.2"
            )

            .to(
              transitionElementsObj.brandScuro,
              {
                scale: 0,
                transformOrigin: "center center",
                duration: 0.2,
                ease: "power1.inOut",
              },
              "-=0.6"
            )
            .to(
              brandLetters,
              {
                y: "100vh",
                duration: 0.6,
                ease: "power1.inOut",
                stagger: 0.2,
              },
              "-=0.2"
            )
            .to(
              brandSymbols,
              {
                y: "100vh",
                duration: 0.6,
                ease: "power1.inOut",
              },
              "<"
            )
            .to(
              transitionElementsObj.colorBackground,
              {
                y: "100vh",
                duration: 1.2,
                ease: "power2.inOut",
              },
              "-=0.8"
            )
            .set(
              colorTransitions,
              {
                opacity: 0,
              },
              "<"
            );
        },
        after(data) {
          updatePageMetaAndInteractions(data.next.html);
          initializeMainFunctions();
          lenisInstance.update();
          scrollToTopInstant();
          lenisInstance.stop();
          if (!cookieManager.getCookie("cta")) {
            uiManager.showBanner();
          }
        },
      },
    ],
    prevent: ({ href }) => {
      const excludePatterns = [
        "/proposito-blog-posts/",
        "/categorie/",
        "/tags/",
      ];
      return excludePatterns.some((pattern) => href.includes(pattern));
    },
    hooks: {
      after() {
        isBarbaTransition = false;
      },
    },
    preventRunning: true,
    scroll: {
      reset: true, // Resetta lo scroll
    },
    prefetch: true,
  });

  document.querySelectorAll('a[data-barba="link"]').forEach((link) => {
    link.addEventListener("mouseenter", () => barba.prefetch(link.href));
  });
}

function scrollToTopInstant() {
    lenisInstance.scrollTo(0, { immediate: true });
  }
  
  function resetTransitionElementsButton() {
    gsap.set(
      [
        ...transitionElements,
        ...brandSymbols,
        ...colorTransitions,
        ...brandLetters,
      ],
      {
        clearProps: "all", // Rimuove tutti gli stili inline applicati da GSAP
      }
    );
  }
  
  function resetTransitionElementsButtonMenu() {
    gsap.set([...transitionMenuArray, ...menuWrapperElements], {
      clearProps: "all", // Rimuove tutti gli stili inline applicati da GSAP
    });
  }

  //BARBA fine

  //ANIMAZIONI di ingresso
  function defaultEnterTransition() {
    const coverTL = gsap.timeline();
    const tlPlus = gsap.timeline();
    const masterTimeline = gsap.timeline({
      onStart: () => blockScroll(),
      onComplete: () => {
        gsap.set(".cover-wrapper", { display: "none" });
      },
    });
  
    masterTimeline.add(coverTL, 0).add(tlPlus, 1.2);
  
    coverTL
      .to(".cover-wrapper-background.clear", {
        scale: 1,
        transformOrigin: "bottom center",
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        "#colore-scuro",
        {
          y: "-100vh",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        "#colore-punto-brand-chiaro",
        {
          scale: 0,
          transformOrigin: "center center",
          duration: 0.4,
          ease: "power4.out",
        },
        "-=0.8"
      )
      .to(
        ".logotype-transition",
        {
          rotateX: -90,
          duration: 0.4,
          transformOrigin: "top",
          ease: "power1.inOut",
        },
        "-=0.4"
      )
      .to(
        brandLettersArray,
        {
          y: "100vh",
          duration: 0.6,
          ease: "power1.inOut",
          stagger: 0.2,
        },
        "-=0.4"
      )
      .to(
        brandSymbolsArray,
        {
          y: "100vh",
          duration: 0.6,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".cover-wrapper-background",
        {
          y: "100vh",
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .set(
        "#cover-wrapper-background",
        {
          opacity: 0,
        },
        "<"
      );
  
    tlPlus
      .to(headerElements, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .call(() => {
        unblockScroll();
      });
  }
  
  function defaultSimpleTransition() {
    const tlPlus = gsap.timeline();
  
    tlPlus.to(headerElements, {
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  function animationPageEnterDesign() {
    const split = new SplitType(".h1-page", {
      types: "lines",
      tagName: "span",
    });
  
    const svg = document.getElementById("svg-page-container");
  
    gsap.set("#Union", {
      opacity: 0,
    });
  
    gsap.set("#quadrato-design", {
      scale: 0,
      transformOrigin: "bottom left",
    });
    gsap.set("#cerchio-design", {
      scale: 1.7,
      transformOrigin: "bottom left",
    });
  
    gsap.set(svg, {
      x: "100vw",
    });
  
    gsap
      .timeline()
      .from(split.lines, {
        delay: 1.4,
        y: "200%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        svg,
        {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(".sub-head-page", {
        y: "200%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        "#quadrato-design",
        {
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#cerchio-design",
        {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#Union",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.in",
        },
        "-=0.3"
      );
  }
  
  function animationPageEnterAbout() {
    const split = new SplitType(".h1-span-page", {
      types: "chars",
      tagName: "span",
    });
  
    const splitSub = new SplitType(".span-sfumato-h-page-first", {
      types: "words",
      tagName: "span",
    });
  
    const subHeadPage = document.querySelector(".sub-head-page");
  
    const heading = document.querySelectorAll(".h1-span-page .char");
  
    const subHeading = document.querySelectorAll(
      ".span-sfumato-h-page-first .word"
    );
  
    gsap.set(heading, { rotateY: 90, transformOrigin: "center center" });
    gsap.set(subHeading, { y: "200%" });
    gsap.set(subHeadPage, { y: "200%" });
  
    const img = document.getElementById("img-page-container");
  
    gsap.set(img, {
      opacity: 0,
    });
  
    gsap
      .timeline()
      .to(heading, {
        delay: 1.4,
        rotateY: 0,
        duration: 0.5,
        stagger: { amount: 0.3 },
        ease: "power2.out",
      })
      .to(
        subHeading,
        {
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        img,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        subHeadPage,
        {
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }
  
  function animationPageEnterWebDesign() {
    const split = new SplitType(".h1-page", {
      types: "lines",
      tagName: "span",
    });
  
    const svg = document.getElementById("svg-page-container");
    const paths = ["#big-square-web-design", "#arrow-web-design"]
      .map((selector) => {
        let path = document.querySelector(selector);
        if (path) {
          let length = path.getTotalLength() * 1.02; // 🔹 Piccola compensazione (+2%)
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          return path;
        }
      })
      .filter(Boolean);
  
    gsap.set("#big-square-web-design", {
      scale: 0,
      transformOrigin: "bottom left",
    });
    gsap.set("#arrow-web-design", {
      scale: 1.7,
      transformOrigin: "bottom left",
    });
  
    gsap.set(svg, {
      x: "100vw",
    });
    gsap
      .timeline()
      .from(split.lines, {
        delay: 1.4,
        y: "200%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        svg,
        {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(".sub-head-page", {
        y: "200%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        " #arrow-web-design",
        {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#big-square-web-design",
        {
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        paths,
        {
          strokeDashoffset: "0",
          duration: 1.2,
          ease: "power2.out",
          stagger: -0.6,
        },
        "<"
      );
  }
  
  function animationPageEnterMarketing() {
    const split = new SplitType(".h1-page", {
      types: "lines",
      tagName: "span",
    });
    const bigSquare = document.getElementById("big-square-seo");
    const svg = document.getElementById("svg-page-container");
  
    gsap.set(bigSquare, {
      scale: 2,
      transformOrigin: "top right",
    });
  
    gsap.set(svg, {
      x: "100vw",
      rotateZ: 180,
      transformOrigin: "center centeer",
    });
  
    gsap
      .timeline()
      .from(split.lines, {
        delay: 1.4,
        y: "200%",
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
      .to(
        svg,
        {
          x: 0,
          rotateZ: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(".sub-head-page", {
        y: "200%",
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(
        bigSquare,
        {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "<"
      );
  }
  
  function animationPageEnterWomen() {
    const split = new SplitType(".h1-page", {
      types: "lines",
      tagName: "span",
    });
  
    const splitHead = document.querySelectorAll(".h1-page .line");
    const subHead = document.querySelectorAll(".sub-head-page");
    const svg = document.getElementById("svg-page-container");
  
    gsap.set(svg, {
      opacity: 0,
    });
    gsap.set([...splitHead, ...subHead], {
      y: "200%",
    });
  
    gsap
      .timeline()
      .to(splitHead, {
        delay: 1.4,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
      .to(
        svg,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(subHead, {
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });
  }

  function transitionOnLoadHero() {
    const mm = gsap.matchMedia();
    const tlTitle = gsap.timeline();
    const coverTL = gsap.timeline();
    const tlPlus = gsap.timeline();
    const masterTimeline = gsap.timeline({
      onStart: () => {
        blockScroll();
        gsap.set(".arrow", { x: -window.innerWidth });
        gsap.set(".sphere", {
          x: -window.innerWidth,
          y: -window.innerHeight * 0.5,
        });
        gsap.set(".square", {
          x: window.innerWidth,
          y: -window.innerHeight * 0.5,
          rotateZ: 180,
        });
      },
      onComplete: () => {
        gsap.set(".cover-wrapper", { display: "none" });
        mm.add("(min-width: 992px)", () => {
          gsap.set(header.burgerBlock, {
            scale: 0,
            y: 0,
          });
        });
      },
    });
  
    masterTimeline.add(coverTL, 0).add(tlTitle, 1.2).add(tlPlus, 1.4);
  
    coverTL
      .to(".cover-wrapper-background.clear", {
        scale: 1,
        transformOrigin: "bottom center",
        duration: 1,
        ease: "power4.inOut",
      })
      .to(
        "#colore-scuro",
        {
          y: "-100vh",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        "#colore-punto-brand-chiaro",
        {
          scale: 0,
          transformOrigin: "center center",
          duration: 0.4,
          ease: "power4.out",
        },
        "-=0.8"
      )
      .to(
        ".logotype-transition",
        {
          rotateX: -90,
          duration: 0.4,
          transformOrigin: "top",
          ease: "power1.inOut",
        },
        "-=0.4"
      )
      .to(
        brandLettersArray,
        {
          y: "100vh",
          duration: 0.6,
          ease: "power1.inOut",
          stagger: 0.2,
        },
        "-=0.4"
      )
      .to(
        brandSymbolsArray,
        {
          y: "100vh",
          duration: 0.6,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".cover-wrapper-background",
        {
          y: "100vh",
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .set(
        "#cover-wrapper-background",
        {
          opacity: 0,
        },
        "<"
      );
  
    tlTitle
      .to(".sphere", {
        x: 0,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
      })
      .to(
        ".square",
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.4,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        "#hero-line",
        {
          width: "100%",
          duration: 1,
          ease: "power4.Out",
        },
        "<"
      )
      .to(
        ".span-design",
        {
          rotateY: 0,
          duration: 0.8,
          stagger: { amount: -0.2 },
          ease: "power1.inOut",
        },
        "-=0.8"
      )
      .to(
        ".span-emozioni",
        {
          rotateY: 0,
          duration: 0.8,
          stagger: { amount: 0.2 },
          ease: "power1.inOut",
        },
        "<"
      )
  
      .to(
        ".arrow",
        {
          x: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=1.2"
      )
  
      .to(
        ".span-p",
        {
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.2 },
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".span-p2",
        {
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.2 },
          ease: "power2.out",
        },
        "<"
      );
  
    tlPlus
      .call(() => {
        unblockScroll();
      })
      .to(header.logoMenu, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
  
    mm.add(
      {
        isDesktop: "(min-width: 992px)", // Breakpoint per desktop
        isMobile: "(max-width: 991px)", // Breakpoint per mobile
      },
      (context) => {
        if (context.conditions.isDesktop) {
          tlPlus.to(".link-menu-desk", {
            rotateX: 0,
            duration: 0.4,
            stagger: { amount: 0.2 },
            ease: "power2.iOut",
          });
        }
  
        if (context.conditions.isMobile) {
          tlPlus.to(
            header.burgerBlock,
            {
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "<"
          );
        }
      }
    );
  }
  
  function transitionOnLoadHeroDefault() {
    const mm = gsap.matchMedia();
    const tlTitle = gsap.timeline();
    const tlPlus = gsap.timeline();
    const masterTimeline = gsap.timeline({
      onStart: () => {
        gsap.set(".arrow", { x: -window.innerWidth });
        gsap.set(".sphere", {
          x: -window.innerWidth,
          y: -window.innerHeight * 0.5,
        });
        gsap.set(".square", {
          x: window.innerWidth,
          y: -window.innerHeight * 0.5,
          rotateZ: 180,
        });
      },
      onComplete: () => {
        mm.add("(min-width: 992px)", () => {
          gsap.set(header.burgerBlock, {
            y: 0,
          });
        });
      },
    });
  
    mm.add("(min-width: 992px)", () => {
      gsap.to(header.burgerBlock, {
        scale: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          // Avvia la masterTimeline solo dopo il completamento dell'animazione iniziale
          masterTimeline.play();
        },
      });
    });
  
    masterTimeline.add(tlTitle, 1.2).add(tlPlus, 0.6);
  
    tlTitle
      .to(".sphere", {
        x: 0,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
      })
      .to(
        ".square",
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.4,
          ease: "power4.out",
        },
        "<"
      )
      .to(
        "#hero-line",
        {
          width: "100%",
          duration: 1,
          ease: "power4.Out",
        },
        "<"
      )
      .to(
        ".span-design",
        {
          rotateY: 0,
          duration: 0.8,
          stagger: { amount: -0.2 },
          ease: "power1.inOut",
        },
        "-=0.8"
      )
      .to(
        ".span-emozioni",
        {
          rotateY: 0,
          duration: 0.8,
          stagger: { amount: 0.2 },
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".arrow",
        {
          x: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=1.2"
      )
  
      .to(
        ".span-p",
        {
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.2 },
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".span-p2",
        {
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.2 },
          ease: "power2.out",
        },
        "<"
      );
  
    tlPlus.to(header.logoMenu, {
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  
    mm.add(
      {
        isDesktop: "(min-width: 992px)", // Breakpoint per desktop
        isMobile: "(max-width: 991px)", // Breakpoint per mobile
      },
      (context) => {
        if (context.conditions.isDesktop) {
          tlPlus.to(".link-menu-desk", {
            rotateX: 0,
            duration: 0.4,
            stagger: { amount: 0.2 },
            ease: "power2.iOut",
          });
        }
  
        if (context.conditions.isMobile) {
          tlPlus.to(
            header.burgerBlock,
            {
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "<"
          );
        }
      }
    );
  }
  
  //

  //Animazioni Specifiche HOME
  window.ctaStickyTransition = window.ctaStickyTransition || {
    // Variabili e oggetti
    horizontalScrollTL: null,
    numImages: 6, // Numero immagini nello scroll verticale
  
    // Selettori per Scroll Orizzontale
    reset() {
      this.scrollWrapperH = document.querySelector(".horizontal-scroll-wrapper");
      this.scrollContainerH = document.querySelector(
        ".horizontal-scroll-container"
      );
      this.panelPrimo = document.getElementById("panelPrimo");
      this.panelSecondo = document.getElementById("panelSecondo");
      this.panelTerzo = document.getElementById("panelTerzo");
  
      this.scrollWrapperV = document.getElementById("vertical-scroll-wrapper");
      this.scrollContainerV = document.querySelector(
        ".vertical-scroll-container"
      );
      this.verticalPath = document.querySelector(".vertical-path");
  
      this.transitionZoneTrigger = document.getElementById("item-trans");
      this.transitionZoneImage = document.getElementById("img-trans");
      this.transitionIndex = document.getElementById("item-index");
  
      // Popoliamo gli array solo se gli elementi sono stati trovati
      this.panelArray = [this.verticalPath, this.panelTerzo].filter(Boolean);
      this.contentArray = [this.scrollContainerH, this.verticalPath].filter(
        Boolean
      );
  
      // Se gli elementi sono validi, rilancio le animazioni
      if (this.scrollWrapperH && this.scrollContainerH && this.panelPrimo) {
        this.init();
      } else {
        console.warn(
          "reset(): Alcuni elementi non sono stati trovati, animazioni non riavviate."
        );
      }
    },
  
    // Inizializzazione dell'oggetto
    init() {
      this.showcaseHorizontalScroll();
      this.definition();
      this.transition();
      this.showcaseVerticalScroll();
      this.showcaseExpandPanels();
      this.showcaseScaleImages();
      this.showcaseTextContent();
      this.panelHoverEffect();
    },
  
    // Funzione per lo Scroll Orizzontale
    showcaseHorizontalScroll() {
      if (!this.scrollWrapperH || !this.scrollContainerH) {
        console.warn(" showcaseHorizontalScroll: elementi non trovati");
        return;
      }
  
      const scrollLength = this.scrollContainerH.scrollWidth - window.innerWidth;
  
      this.horizontalScrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: this.scrollWrapperH,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: true,
        },
      });
  
      this.horizontalScrollTL.to(this.scrollContainerH, {
        x: `-${scrollLength}px`,
        ease: "none",
      });
    },
  
    // Funzione per la transizione della zona intermedia
    transition() {
      if (!this.transitionZoneImage || !this.transitionZoneTrigger) {
        console.warn(" transition: elementi non trovati");
        return;
      }
  
      gsap.to(this.transitionZoneImage, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: this.transitionZoneTrigger,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
      if (!this.transitionIndex || !this.scrollContainerH) {
        console.warn("transition: elementi per il nuovo trigger non trovati");
        return;
      }
  
      gsap.to(this.scrollWrapperH, {
        zIndex: 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: this.transitionIndex,
          start: "top 60%",
          end: "top 55%",
          scrub: true,
        },
      });
    },
  
    showcaseVerticalScroll() {
      if (!this.scrollWrapperV || !this.scrollContainerV) {
        console.warn(" showcaseVerticalScroll: elementi non trovati");
        return;
      }
  
      const splitLines = new SplitType(".value-text", {
        types: "lines",
        tagName: "span",
      });
  
      const splitLinesMiss = new SplitType(".miss-text", {
        types: "lines",
        tagName: "span",
      });
  
      const trigger = document.querySelector("#v-trigger-first");
      if (!trigger) {
        console.warn(" showcaseVerticalScroll: trigger non trovato");
        return;
      }
  
      const lineText = document.querySelectorAll(".value-text .line");
      const lineTextMiss = document.querySelectorAll(".miss-text .line");
      gsap.set(lineText, { y: 100, opacity: 0 });
      gsap.set(lineTextMiss, { y: 100, opacity: 0 });
      // Calcolo delle altezze
      const verticalScrollLength =
        this.scrollContainerV.scrollHeight - window.innerHeight;
      const totalImagesHeight = (this.numImages * 20 * window.innerWidth) / 100;
      const viewportHeight = window.innerHeight;
      const missingHeight = Math.max(totalImagesHeight - viewportHeight, 0); // Evita valori negativi
  
      // Timeline per lo Scroll Verticale
      this.verticalScrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: `+=${verticalScrollLength}`,
          scrub: true,
          pin: this.scrollWrapperV,
          anticipatePin: 0,
        },
      });
  
      // Animazione per ridurre la larghezza dei pannelli
      gsap.to(this.panelArray, {
        width: "30vw",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: trigger,
          start: "top 50%",
          end: "top -75%",
          scrub: true,
        },
      });
  
      // Spostamento del contenuto per compensare l'altezza mancante
      gsap.to(this.contentArray, {
        y: `-${missingHeight}px`,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
  
      gsap.to(".line-title.text-par.red", {
        width: "100%",
        ease: "none",
        stagger: 0.3,
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          end: "center 40%",
          scrub: true,
        },
      });
  
      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: trigger,
            start: "top -50%",
            end: "bottom top",
            onEnter: () => {
              gsap
                .timeline()
                .to(lineText, {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  stagger: { amount: 0.2 },
                  ease: "power2.out",
                })
                .to(
                  ".point-value",
                  {
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                  },
                  "<"
                )
                .to(
                  lineTextMiss,
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: { amount: 0.2 },
                    ease: "power2.out",
                  },
                  "<"
                );
            },
            onLeaveBack: () => {
              gsap
                .timeline()
                .to(lineTextMiss, {
                  y: 100,
                  opacity: 0,
                  duration: 0.4,
                  ease: "power2.in",
                })
                .to(
                  ".point-value",
                  {
                    scale: 0,
                    duration: 0.4,
                    ease: "power2.in",
                  },
                  "<"
                )
                .to(
                  lineText,
                  {
                    y: 100,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.in",
                  },
                  "<"
                );
            },
          },
        }
      );
    },
  
    showcaseExpandPanels() {
      if (!this.panelPrimo) {
        console.warn(
          "showcaseExpandPanels: Il trigger principale non è stato trovato."
        );
        return;
      }
  
      const panels = [
        {
          element: this.panelSecondo,
          trigger: this.panelPrimo,
          start: "left 70%",
          end: "left -30%",
          finalX: "0vw",
        },
        {
          element: this.panelTerzo,
          trigger: this.panelPrimo,
          start: "left 70%",
          end: "left -30%",
          finalX: "0vw",
        },
      ];
  
      panels.forEach(({ element, trigger, start, end, finalX }) => {
        if (!element || !trigger) {
          console.warn(`showcaseExpandPanels: Elemento o trigger non trovati.`);
          return;
        }
  
        gsap.to(element, {
          x: finalX,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger,
            containerAnimation: this.horizontalScrollTL,
            start: start,
            end: end,
            scrub: true,
          },
        });
      });
    },
  
    showcaseScaleImages() {
      if (!this.panelPrimo) {
        console.warn(
          " showcaseScaleImages: il trigger principale non è stato trovato"
        );
        return;
      }
  
      const images = [
        {
          id: "#imgPrimo",
          trigger: this.panelPrimo,
          start: "left 70%",
          end: "left 30%",
        },
        {
          id: "#imgSecondo",
          trigger: this.panelPrimo,
          start: "left 70%",
          end: "center left",
        },
        {
          id: "#imgTerzo",
          trigger: this.panelPrimo,
          start: "center 30%",
          end: "right -30%",
        },
      ];
  
      images.forEach(({ id, trigger, start, end }) => {
        let image = document.querySelector(id);
        if (!image) {
          console.warn(` showcaseScaleImages: Immagine ${id} non trovata`);
          return;
        }
  
        gsap.to(image, {
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger,
            containerAnimation: this.horizontalScrollTL, // Ora usa `this.`
            start: start,
            end: end,
            scrub: true,
          },
        });
      });
    },
  
    showcaseTextContent() {
      if (!this.panelPrimo) {
        console.warn(
          "showcaseTextContent: Il trigger principale non è stato trovato."
        );
        return;
      }
  
      const splitTitles = new SplitType(".panel-title", {
        types: "chars",
        tagName: "span",
      });
  
      const textTriggers = [
        {
          element: this.panelPrimo,
          trigger: this.panelPrimo,
          start: "left 50%",
          end: "right 50%",
        },
        {
          element: this.panelSecondo,
          trigger: this.panelPrimo,
          start: "left left",
          end: "center left",
        },
        {
          element: this.panelTerzo,
          trigger: this.panelPrimo,
          start: "right left",
          end: "right -30%",
        },
      ];
  
      textTriggers.forEach(({ element, trigger, start, end }) => {
        if (!element || !trigger) {
          console.warn(`showcaseTextContent: Elemento o trigger non trovati.`);
          return;
        }
  
        const titleChars = element.querySelectorAll(".panel-title .char");
        const descriptionContainer = element.querySelector(".panel-desscript");
  
        // Imposta lo stato iniziale con gsap.set()
        gsap.set(titleChars, { y: "100%", opacity: 0 });
        gsap.set(descriptionContainer, { y: "-200%" });
  
        // Crea il trigger e gestisce le animazioni con una timeline
        ScrollTrigger.create({
          trigger: trigger,
          containerAnimation: this.horizontalScrollTL,
          start: start,
          end: end,
          onEnter: () => {
            const tl = gsap.timeline();
  
            tl.to(titleChars, {
              y: 0,
              opacity: 1,
              stagger: { amount: 0.5 },
              duration: 0.4,
              ease: "power2.out",
            }).to(
              descriptionContainer,
              {
                y: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              "<" // Sovrapposizione leggera per fluidità
            );
          },
          onLeaveBack: () => {
            const tlBack = gsap.timeline();
  
            tlBack
              .to(titleChars, {
                y: "100%",
                opacity: 0,
                duration: 0.2,
                ease: "power2.in",
              })
              .to(
                descriptionContainer,
                {
                  y: "-200%",
                  duration: 0.2,
                  ease: "power2.in",
                },
                "<"
              );
          },
        });
      });
    },
    definition() {
      if (!this.panelPrimo) {
        console.warn("Il trigger principale non è stato trovato");
        return;
      }
  
      const innTextArray = [
        {
          selector: ".inn-span",
          trigger: this.panelPrimo,
          start: "left 100%",
          end: "left 80%",
        },
      ];
  
      innTextArray.forEach(({ selector, trigger, start, end }) => {
        let innTextElements = document.querySelectorAll(selector);
        if (!innTextElements.length) {
          console.warn(`Nessun elemento trovato per ${selector}`);
          return;
        }
  
        gsap.set(innTextElements, { y: "100%" }); // Imposta gli elementi inizialmente nascosti
  
        ScrollTrigger.create({
          trigger: trigger,
          containerAnimation: this.horizontalScrollTL,
          start: start,
          end: end,
          scrub: true,
          onEnter: () => {
            gsap.to(innTextElements, {
              y: 0,
              duration: 0.4,
              stagger: { amount: 0.5 },
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(innTextElements, {
              y: "100%",
              duration: 0.4,
              ease: "power2.in",
            });
          },
        });
      });
    },
  
    panelHoverEffect() {
      const panels = document.querySelectorAll(".panel-item-hov");
  
      if (!panels.length) {
        console.warn("Nessun elemento .panel-item-hov trovato");
        return;
      }
  
      panels.forEach((panel) => {
        const panelItemV = panel.querySelector(".panel-item-v");
        const itemVTitle = panel.querySelector(".item-v-title");
        gsap.set(itemVTitle, { y: "100%" });
  
        panel.addEventListener("mouseenter", () => {
          gsap.to(panel, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
  
          if (panelItemV) {
            gsap.to(panelItemV, {
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
  
          if (itemVTitle) {
            gsap.to(itemVTitle, {
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        });
  
        panel.addEventListener("mouseleave", () => {
          gsap.to(panel, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
  
          if (panelItemV) {
            gsap.to(panelItemV, {
              y: "-100%",
              duration: 0.5,
              ease: "power2.in",
            });
          }
  
          if (itemVTitle) {
            gsap.to(itemVTitle, {
              y: "100%",
              duration: 0.5,
              ease: "power2.in",
            });
          }
        });
      });
    },
  };
  
  // Chiama la funzione per inizializzare le animazioni
  function createScrollTriggerScrollWrapper() {
    const mm = gsap.matchMedia();
  
    // Animazione per desktop (>= 992px)
    mm.add("(min-width: 992px)", () => {
      const splitTextTop = new SplitType("#inner-t-top", {
        types: "chars",
        tagName: "span",
      });
  
      gsap.set(splitTextTop.chars, { y: 200 });
      gsap.set("#inner-line-first", { scaleX: 0 });
  
      const tl = gsap.timeline({ paused: true });
  
      tl.to("#inner-line-first", {
        scaleX: 1,
        ease: "power2.inOut",
        duration: 0.8,
        transformOrigin: "center left",
      }).to(
        splitTextTop.chars,
        {
          y: 0,
          duration: 0.5,
          stagger: { amount: 0.2 },
          ease: "power2.out",
        },
        "<"
      );
  
      ScrollTrigger.create({
        trigger: ".horizontal-scroll-wrapper",
        start: "top 60%",
        end: "top 20%",
        scrub: false,
        id: "inner-animation-h",
        toggleActions: "play none none reverse",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    });
  
    // Animazione per mobile (< 992px)
    mm.add("(max-width: 991px)", () => {
      const splitTextTop = new SplitType("#inner-t-top", {
        types: "chars",
        tagName: "span",
      });
  
      gsap.set(".inn-span", { y: 100, opacity: 0 });
      gsap.set(splitTextTop.chars, { y: 100 });
      gsap.set("#inner-line-first", { scaleX: 0 });
  
      const tlMobile = gsap.timeline({ paused: true });
  
      tlMobile
        .to("#inner-line-first", {
          scaleX: 1,
          ease: "power2.inOut",
          duration: 0.5,
          transformOrigin: "center left",
        })
        .to(
          splitTextTop.chars,
          {
            y: 0,
            duration: 0.5,
            stagger: { amount: 0.2 },
            ease: "power2.out",
          },
          "<"
        )
        .to(
          ".inn-span",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: { amount: 0.2 },
            ease: "power2.out",
          },
          "-=0.3"
        );
  
      ScrollTrigger.create({
        trigger: ".horizontal-scroll-wrapper",
        start: "top 80%",
        id: "inner-animation-mobile",
        toggleActions: "play none none reverse",
        onEnter: () => tlMobile.play(),
        onLeaveBack: () => tlMobile.reverse(),
      });
    });
  }
  
  //
  function showcasePanelsScrollMobile() {
    const splitTitles = new SplitType(".panel-title", {
      types: "chars",
      tagName: "span",
    });
  
    const panels = [
      { panel: "#panelPrimo", trigger: "#triggerPrimo" },
      { panel: "#panelSecondo", trigger: "#triggerSecondo" },
      { panel: "#panelTerzo", trigger: "#triggerTerzo" },
    ];
  
    panels.forEach(({ panel, trigger }) => {
      const panelEl = document.querySelector(panel);
      const triggerEl = document.querySelector(trigger);
  
      if (!panelEl || !triggerEl) {
        console.warn(
          `showcasePanelsScrollMobile: Pannello o Trigger non trovati per ${panel}`
        );
        return;
      }
  
      const titleChars = panelEl.querySelectorAll(".panel-title .char");
      const descriptionContainer = panelEl.querySelector(".panel-desscript");
      const kindJobText = panelEl.querySelector(".panel-text.kind-job.mb-hyde");
  
      if (!titleChars.length || !descriptionContainer || !kindJobText) {
        console.warn(`Elementi mancanti in ${panel}`);
        return;
      }
  
      // 🔹 Impostiamo i valori iniziali per evitare glitch
      gsap.set(titleChars, { y: "100%", opacity: 0 });
      gsap.set(kindJobText, { y: "100%", opacity: 0 });
      gsap.set(descriptionContainer, { y: "-200%" });
  
      // 🔹 Creiamo lo ScrollTrigger basato sul trigger fisico
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap
            .timeline()
            .to(titleChars, {
              y: 0,
              opacity: 1,
              stagger: { amount: 0.2 },
              duration: 0.5,
              ease: "power2.out",
            })
            .to(
              kindJobText,
              {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              },
              "-=0.3"
            )
            .to(
              descriptionContainer,
              {
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              "<"
            );
        },
        onLeaveBack: () => {
          gsap
            .timeline()
            .to(titleChars, {
              y: "100%",
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            })
            .to(kindJobText, {
              y: "100%",
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            })
            .to(descriptionContainer, {
              y: "-200%",
              duration: 0.5,
              ease: "power2.in",
            });
        },
      });
    });
  
    ScrollTrigger.refresh();
  }
  
  function showcaseTextContentMobile() {
    const panelHovs = document.querySelectorAll(".panel-item-hov");
    const valueWrapper = document.querySelector(".value-wrapper.no-desk");
  
    panelHovs.forEach((panelHov) => {
      const itemVTitles = panelHov.querySelectorAll(".item-v-title");
  
      gsap.set(itemVTitles, { y: "100%" });
  
      ScrollTrigger.create({
        trigger: panelHov,
        start: "top 60%",
        onEnter: () => {
          gsap.to(itemVTitles, {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(itemVTitles, {
            y: "100%",
            duration: 0.4,
            ease: "power2.in",
          });
        },
      });
    });
  
    // Animazione per il valueWrapper
    if (valueWrapper) {
      const lineTitles = valueWrapper.querySelectorAll(
        ".line-title.text-par.red.no-desk"
      );
      const pointValues = valueWrapper.querySelectorAll(".point-value.no-desk");
  
      if (!lineTitles.length || !pointValues.length) {
        console.warn(
          "showcaseTextContentMobile: lineTitles o pointValues non trovati."
        );
        return;
      }
  
      // Impostiamo i valori iniziali per evitare glitch
      gsap.set(lineTitles, { width: "0%" });
      gsap.set(pointValues, { scale: 0, opacity: 0 });
  
      ScrollTrigger.create({
        trigger: valueWrapper,
        start: "top 60%",
        end: "top 20%",
        onEnter: () => {
          gsap
            .timeline()
            .to(lineTitles, {
              width: "100%",
              duration: 0.8,
              ease: "power2.inOut",
            })
            .to(
              pointValues,
              {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: { amount: 0.2 },
                ease: "power2.out",
              },
              "<+=0.2"
            );
        },
        onLeaveBack: () => {
          gsap
            .timeline()
            .to(pointValues, {
              scale: 0,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            })
            .to(
              lineTitles,
              {
                width: "0%",
                duration: 0.6,
                ease: "power2.inOut",
              },
              "<"
            );
        },
      });
    }
  
    const splitLinesMiss = new SplitType(".miss-text.no-desk", {
      types: "lines",
      tagName: "span",
    });
  
    setTimeout(() => {
      const missText = document.querySelectorAll(".miss-text.no-desk .line");
  
      if (!missText.length) {
        console.warn(
          "showcaseTextContentMobile: Nessuna linea trovata dopo SplitType."
        );
        return;
      }
  
      gsap.set(missText, { y: 100, opacity: 0 });
  
      ScrollTrigger.create({
        trigger: valueWrapper,
        start: "center 50%",
        end: "bottom bottom",
  
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(missText, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: { amount: 0.2 },
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          const tlBackMiss = gsap.timeline();
          tlBackMiss.to(missText, {
            y: 100,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        },
      });
    }, 100); // Ritardo per garantire che il DOM sia aggiornato
  }

  function propositoHomePage() {
    const trigger = document.querySelector(".proposito-section");
    if (!trigger) {
      return;
    }
  
    // Elementi da animare
    const subHead = document.getElementById("sub-heading-proposito-home");
    const inspire = trigger.querySelectorAll(".span-prop-home");
    const heading = trigger.querySelector(".proposito-home-h2");
    if (!heading) {
      return;
    }
  
    const split = new SplitType(heading, {
      types: "chars",
      tagName: "span",
    });
  
    // Imposta le animazioni iniziali
    gsap.set(inspire, { rotateX: 90, transformOrigin: "center center" });
    gsap.set(subHead, { rotateX: 90, transformOrigin: "center center" });
    gsap.set(".proposito-home-h2 .char", { y: "-150%" });
  
    // 🎯 Media Queries
    const mm = gsap.matchMedia();
  
    //  Desktop Animation (>= 992px)
    mm.add("(min-width: 992px)", () => {
      gsap.to(".proposito-home-h2 .char", {
        y: 0,
        ease: "none",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          end: "top 10%",
          scrub: true, // Scroll progressivo
        },
      });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 40%",
          end: "top top",
          scrub: true,
        },
      });
  
      tl.to(subHead, {
        rotateX: 0,
        ease: "power2.out",
        duration: 0.6,
      }).to(
        inspire,
        {
          rotateX: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "<"
      );
    });
  
    // Mobile Animation (< 992px)
    mm.add("(max-width: 991px)", () => {
      gsap.to(".proposito-home-h2 .char", {
        y: 0,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: trigger,
          start: "top 70%",
          end: "top 30%",
          scrub: false,
        },
      });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 60%",
          end: "top 10%",
          scrub: false,
        },
      });
  
      tl.to(subHead, {
        rotateX: 0,
        ease: "power2.out",
        duration: 0.3,
      }).to(
        inspire,
        {
          rotateX: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.2"
      );
    });
  }

  function swiperHome() {
    var swiper = new Swiper(".swiper-container-home", {
      slidesPerView: "auto",
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      speed: 500,
      on: {
        init: function () {
          this.update();
          updateOpacityAndParallax(this);
        },
        slideChange: function () {
          updateOpacityAndParallax(this);
        },
      },
    });
  
    function updateOpacityAndParallax(swiper) {
      const slides = swiper.slides;
      slides.forEach((slide, index) => {
        slide.style.opacity = index === swiper.activeIndex ? 1 : 0.6;
      });
      // Applica animazioni GSAP
      gsap.to(slides[swiper.activeIndex].querySelector(".parallax-bg-img"), {
        scale: 1.1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
      // Animazioni parallax per slide precedenti e successive
      if (slides[swiper.activeIndex - 1]) {
        gsap.to(
          slides[swiper.activeIndex - 1].querySelector(".parallax-bg-img"),
          {
            scale: 0.5,
            opacity: 0.6,
            duration: 0.5,
            ease: "power3.inOut",
          }
        );
      }
      if (slides[swiper.activeIndex + 1]) {
        gsap.to(
          slides[swiper.activeIndex + 1].querySelector(".parallax-bg-img"),
          {
            scale: 0.5,
            opacity: 0.6,
            duration: 0.5,
            ease: "power3.inOut",
          }
        );
      }
    }
    const swiperContainer = document.querySelector(".swiper-container-home");
    swiperContainer.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperContainer.addEventListener("mouseleave", () => swiper.autoplay.start());
  
    swiperContainer.addEventListener("touchstart", () => swiper.autoplay.stop());
    swiperContainer.addEventListener("touchend", () => swiper.autoplay.start());
  
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(document.querySelector(".swiper-container-home"));
  }

  //

  //Scroll Trigger per ogni pagina
  function pageServiceScrollTriggerDesign() {
    if (typeof ScrollTrigger === "undefined" || typeof gsap === "undefined") {
      console.error(
        "⚠️ GSAP o ScrollTrigger non sono stati caricati correttamente."
      );
      return;
    }
    //-Elementi
    const firstH = document.getElementById("first-heading");
    const secondH = document.getElementById("second-heading");
    const thirdH = document.getElementById("third-heading");
    const divCit = document.getElementById("citation");
    //-first
    const firstPreH = firstH.querySelector(".section-pre-title-page");
    const firstPostH = firstH.querySelector(".section-post-title-page");
    const firstLineH = firstH.querySelector(".line-title-section");
    gsap.set(firstLineH, { scaleX: 0, transformOrigin: "center left" });
    const firstNumberH = firstH.querySelector(".section-pre-title-page-number");
    gsap.set(firstNumberH, { y: 150 });
    const imgCit = divCit.querySelector(".di-img-cit-aut");
  
    gsap.set(firstPreH, { y: 150 });
    gsap.set(firstPostH, { y: -150 });
    gsap.set(imgCit, { scale: 0, rotateZ: 45 });
    //-second
    const secondPreH = secondH.querySelector(".section-pre-title-page");
    const secondPostH = secondH.querySelector(".section-post-title-page");
    const secondLineH = secondH.querySelector(".line-title-section");
    gsap.set(secondLineH, { scaleX: 0, transformOrigin: "center left" });
    const secondNumberH = secondH.querySelector(".section-pre-title-page-number");
    gsap.set(secondNumberH, { y: 150 });
  
    gsap.set(secondPreH, { y: 150 });
    gsap.set(secondPostH, { y: -150 });
    //-third
  
    const thirdLineH = thirdH.querySelector(".line-title-section");
    gsap.set(thirdLineH, { scaleX: 0, transformOrigin: "center left" });
    const thirdNumberH = thirdH.querySelector(".section-pre-title-page-number");
    gsap.set(thirdNumberH, { y: 150 });
  
    //
    function playAnimationFirst() {
      const firstHtl = gsap.timeline();
  
      firstHtl
        .to(firstLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          firstPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          firstPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationFirst() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(firstLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          firstPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          firstPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: firstH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationFirst();
      },
      onLeaveBack: () => {
        reverseAnimationFirst();
      },
    });
  
    ScrollTrigger.create({
      trigger: divCit,
      start: "top center",
      end: "top top",
      onEnter: () => {
        gsap.to(imgCit, { scale: 1, duration: 0.6, ease: "bounce.out" });
      },
      onLeaveBack: () => {
        gsap.to(imgCit, { scale: 0, duration: 0.4, ease: "power2.out" });
      },
    });
  
    function playAnimationSecond() {
      const playTl = gsap.timeline();
  
      playTl
        .to(secondLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          secondPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          secondPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          secondNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationSecond() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(secondLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          secondPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          secondPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          secondNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: secondH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationSecond();
      },
      onLeaveBack: () => {
        reverseAnimationSecond();
      },
    });
  
    ScrollTrigger.create({
      trigger: thirdH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        gsap
          .timeline()
          .to(thirdLineH, {
            scaleX: 1,
            duration: 0.8,
            ease: "power1.out",
          })
          .to(
            thirdNumberH,
            {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.4"
          );
      },
      onLeaveBack: () => {
        gsap
          .timeline()
          .to(thirdLineH, {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(
            thirdNumberH,
            {
              y: 150,
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
      },
    });
  }
  
  function pageServiceScrollTriggerWeb() {
    if (typeof ScrollTrigger === "undefined" || typeof gsap === "undefined") {
      console.error(
        "⚠️ GSAP o ScrollTrigger non sono stati caricati correttamente."
      );
      return;
    }
    //-Elementi
    const firstH = document.getElementById("first-heading");
    const secondH = document.getElementById("second-heading");
    const thirdH = document.getElementById("third-heading");
    const fourthH = document.getElementById("fourth-heading");
    const divCit = document.getElementById("citation");
    //-first
    const firstPreH = firstH.querySelector(".section-pre-title-page");
    const firstPostH = firstH.querySelector(".section-post-title-page");
    const firstLineH = firstH.querySelector(".line-title-section");
    gsap.set(firstLineH, { scaleX: 0, transformOrigin: "center left" });
    const firstNumberH = firstH.querySelector(".section-pre-title-page-number");
    gsap.set(firstNumberH, { y: 150 });
    const imgCit = divCit.querySelector(".di-img-cit-aut");
  
    gsap.set(firstPreH, { y: 150 });
    gsap.set(firstPostH, { y: -150 });
    gsap.set(imgCit, { scale: 0, rotateZ: 45 });
    //-second
  
    const secondPostH = secondH.querySelector(".section-post-title-page");
    const secondLineH = secondH.querySelector(".line-title-section");
    gsap.set(secondLineH, { scaleX: 0, transformOrigin: "center left" });
    const secondNumberH = secondH.querySelector(".section-pre-title-page-number");
    gsap.set(secondNumberH, { y: 150 });
    gsap.set(secondPostH, { y: 150 });
    //-third
    const thirdPreH = thirdH.querySelector(".section-pre-title-page");
    const thirdPostH = thirdH.querySelector(".section-post-title-page");
    gsap.set(thirdPreH, { y: 150 });
    gsap.set(thirdPostH, { y: -150 });
    const thirdLineH = thirdH.querySelector(".line-title-section");
    gsap.set(thirdLineH, { scaleX: 0, transformOrigin: "center left" });
    const thirdNumberH = thirdH.querySelector(".section-pre-title-page-number");
    gsap.set(thirdNumberH, { y: 150 });
    //-fourth
    const fourthLineH = fourthH.querySelector(".line-title-section");
    gsap.set(fourthLineH, { scaleX: 0, transformOrigin: "center left" });
    const fourthNumberH = fourthH.querySelector(".section-pre-title-page-number");
    gsap.set(fourthNumberH, { y: 150 });
  
    //
    function playAnimationFirst() {
      const firstHtl = gsap.timeline();
  
      firstHtl
        .to(firstLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          firstPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          firstPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationFirst() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(firstLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          firstPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          firstPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: firstH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationFirst();
      },
      onLeaveBack: () => {
        reverseAnimationFirst();
      },
    });
  
    ScrollTrigger.create({
      trigger: divCit,
      start: "top center",
      end: "top top",
      onEnter: () => {
        gsap.to(imgCit, { scale: 1, duration: 0.6, ease: "bounce.out" });
      },
      onLeaveBack: () => {
        gsap.to(imgCit, { scale: 0, duration: 0.4, ease: "power2.out" });
      },
    });
  
    function playAnimationSecond() {
      const playTl = gsap.timeline();
  
      playTl
        .to(secondLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          secondPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          secondNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationSecond() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(secondLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          secondPostH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          secondNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: secondH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationSecond();
      },
      onLeaveBack: () => {
        reverseAnimationSecond();
      },
    });
  
    ScrollTrigger.create({
      trigger: fourthH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        gsap
          .timeline()
          .to(fourthLineH, {
            scaleX: 1,
            duration: 0.8,
            ease: "power1.out",
          })
          .to(
            fourthNumberH,
            {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.4"
          );
      },
      onLeaveBack: () => {
        gsap
          .timeline()
          .to(fourthLineH, {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(
            fourthNumberH,
            {
              y: 150,
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
      },
    });
    function playAnimationThird() {
      const firstHtl = gsap.timeline();
  
      firstHtl
        .to(thirdLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          thirdPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          thirdPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          thirdNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationThird() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(thirdLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          thirdPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          thirdPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          thirdNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: thirdH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationThird();
      },
      onLeaveBack: () => {
        reverseAnimationThird();
      },
    });
  }
  
  function pageServiceScrollTriggerSeo() {
    if (typeof ScrollTrigger === "undefined" || typeof gsap === "undefined") {
      console.error(
        "⚠️ GSAP o ScrollTrigger non sono stati caricati correttamente."
      );
      return;
    }
    //-Elementi
    const firstH = document.getElementById("first-heading");
    const secondH = document.getElementById("second-heading");
    const thirdH = document.getElementById("third-heading");
    const divCit = document.getElementById("citation");
    //-first
    const firstPreH = firstH.querySelector(".section-pre-title-page");
    const firstPostH = firstH.querySelector(".section-post-title-page");
    const firstLineH = firstH.querySelector(".line-title-section");
    gsap.set(firstLineH, { scaleX: 0, transformOrigin: "center left" });
    const firstNumberH = firstH.querySelector(".section-pre-title-page-number");
    gsap.set(firstNumberH, { y: 150 });
    const imgCit = divCit.querySelector(".di-img-cit-aut");
  
    gsap.set(firstPreH, { y: 150 });
    gsap.set(firstPostH, { y: -150 });
    gsap.set(imgCit, { scale: 0, rotateZ: 45 });
    //-second
    const secondPreH = secondH.querySelector(".section-pre-title-page");
    const secondPostH = secondH.querySelector(".section-post-title-page");
    const secondLineH = secondH.querySelector(".line-title-section");
    gsap.set(secondLineH, { scaleX: 0, transformOrigin: "center left" });
    const secondNumberH = secondH.querySelector(".section-pre-title-page-number");
    gsap.set(secondNumberH, { y: 150 });
  
    gsap.set(secondPreH, { y: 150 });
    gsap.set(secondPostH, { y: -150 });
    //-third
  
    const thirdLineH = thirdH.querySelector(".line-title-section");
    gsap.set(thirdLineH, { scaleX: 0, transformOrigin: "center left" });
    const thirdNumberH = thirdH.querySelector(".section-pre-title-page-number");
    gsap.set(thirdNumberH, { y: 150 });
  
    //
    function playAnimationFirst() {
      const firstHtl = gsap.timeline();
  
      firstHtl
        .to(firstLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          firstPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          firstPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationFirst() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(firstLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          firstPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          firstPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: firstH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationFirst();
      },
      onLeaveBack: () => {
        reverseAnimationFirst();
      },
    });
  
    ScrollTrigger.create({
      trigger: divCit,
      start: "top center",
      end: "top top",
      onEnter: () => {
        gsap.to(imgCit, { scale: 1, duration: 0.6, ease: "bounce.out" });
      },
      onLeaveBack: () => {
        gsap.to(imgCit, { scale: 0, duration: 0.4, ease: "power2.out" });
      },
    });
  
    function playAnimationSecond() {
      const playTl = gsap.timeline();
  
      playTl
        .to(secondLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          secondPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          secondPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          secondNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationSecond() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(secondLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          secondPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          secondPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          secondNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: secondH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationSecond();
      },
      onLeaveBack: () => {
        reverseAnimationSecond();
      },
    });
  
    ScrollTrigger.create({
      trigger: thirdH,
      start: "top 30%",
      end: "top top",
      onEnter: () => {
        gsap
          .timeline()
          .to(thirdLineH, {
            scaleX: 1,
            duration: 0.8,
            ease: "power1.out",
          })
          .to(
            thirdNumberH,
            {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.4"
          );
      },
      onLeaveBack: () => {
        gsap
          .timeline()
          .to(thirdLineH, {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(
            thirdNumberH,
            {
              y: 150,
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
      },
    });
  }
  
  function pageServiceScrollTriggerAbout() {
    if (typeof ScrollTrigger === "undefined" || typeof gsap === "undefined") {
      console.error(
        "⚠️ GSAP o ScrollTrigger non sono stati caricati correttamente."
      );
      return;
    }
    //-Elementi
    const divCit = document.getElementById("citation");
    //-first
  
    const imgCit = divCit.querySelector(".di-img-cit-aut");
  
    gsap.set(imgCit, { scale: 0 });
  
    ScrollTrigger.create({
      trigger: divCit,
      start: "top center",
      end: "top top",
      onEnter: () => {
        gsap.to(imgCit, { scale: 1, duration: 0.6, ease: "bounce.out" });
      },
      onLeaveBack: () => {
        gsap.to(imgCit, { scale: 0, duration: 0.4, ease: "power2.out" });
      },
    });
  }
  
  function pageServiceScrollTriggerWomen() {
    if (typeof ScrollTrigger === "undefined" || typeof gsap === "undefined") {
      console.error(
        "⚠️ GSAP o ScrollTrigger non sono stati caricati correttamente."
      );
      return;
    }
    //-Elementi
    const firstH = document.getElementById("first-heading");
    const secondH = document.getElementById("second-heading");
    const thirdH = document.getElementById("third-heading");
    const divCit = document.getElementById("citation");
    //-first
    const firstPreH = firstH.querySelector(".section-pre-title-page");
    const firstPostH = firstH.querySelector(".section-post-title-page");
    const firstLineH = firstH.querySelector(".line-title-section");
    gsap.set(firstLineH, { scaleX: 0, transformOrigin: "center left" });
    const firstNumberH = firstH.querySelector(".section-pre-title-page-number");
    gsap.set(firstNumberH, { y: 150 });
    const imgCit = divCit.querySelector(".di-img-cit-aut");
  
    gsap.set(firstPreH, { y: 150 });
    gsap.set(firstPostH, { y: -150 });
    gsap.set(imgCit, { scale: 0, rotateZ: 45 });
    //-third
  
    const thirdLineH = thirdH.querySelector(".line-title-section");
    gsap.set(thirdLineH, { scaleX: 0, transformOrigin: "center left" });
    const thirdNumberH = thirdH.querySelector(".section-pre-title-page-number");
    gsap.set(thirdNumberH, { y: 150 });
  
    //
    function playAnimationFirst() {
      const firstHtl = gsap.timeline();
  
      firstHtl
        .to(firstLineH, {
          scaleX: 1,
          duration: 0.8,
          ease: "power1.out",
        })
        .to(
          firstPreH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          firstPostH,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }
  
    function reverseAnimationFirst() {
      const reverseTl = gsap.timeline();
  
      reverseTl
        .to(firstLineH, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          firstPreH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          firstPostH,
          {
            y: -150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          firstNumberH,
          {
            y: 150,
            duration: 0.3,
            ease: "power2.in",
          },
          "<"
        );
    }
  
    ScrollTrigger.create({
      trigger: firstH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        playAnimationFirst();
      },
      onLeaveBack: () => {
        reverseAnimationFirst();
      },
    });
  
    ScrollTrigger.create({
      trigger: divCit,
      start: "top center",
      end: "top top",
      onEnter: () => {
        gsap.to(imgCit, { scale: 1, duration: 0.6, ease: "bounce.out" });
      },
      onLeaveBack: () => {
        gsap.to(imgCit, { scale: 0, duration: 0.4, ease: "power2.out" });
      },
    });
  
    ScrollTrigger.create({
      trigger: thirdH,
      start: "top 80%",
      end: "top center",
      onEnter: () => {
        gsap
          .timeline()
          .to(thirdLineH, {
            scaleX: 1,
            duration: 0.8,
            ease: "power1.out",
          })
          .to(
            thirdNumberH,
            {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.4"
          );
      },
      onLeaveBack: () => {
        gsap
          .timeline()
          .to(thirdLineH, {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(
            thirdNumberH,
            {
              y: 150,
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
      },
    });
  }

  function createScrollTriggerHero() {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 992px)", () => {
      ScrollTrigger.create({
        trigger: "#hero",
        start: "bottom 95%",
        scrub: true,
        id: "hero-trigger",
        onEnter: () => {
          gsap
            .timeline()
            .to(".menu-desktop", {
              rotateX: 90,
              ease: "power2.inOut",
              duration: 0.2,
            })
            .to(
              header.burgerBlock,
              {
                scale: 1,
                duration: 0.6,
                ease: "power2.inOut",
              },
              "<"
            );
        },
        onLeaveBack: () => {
          gsap
            .timeline()
            .to(header.burgerBlock, {
              scale: 0,
              duration: 0.4,
              ease: "power2.inOut",
            })
            .to(".menu-desktop", {
              rotateX: 0,
              ease: "power2.inOut",
              duration: 0.6,
            });
        },
      });
    });
  
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom 20%",
        scrub: true,
      },
    });
    mm.add("(min-width: 992px)", () => {
      tlScroll
        .to(".sphere", { scale: 1.8, duration: 1 })
        .to(
          ".square",
          { scale: 0.5, y: 200, duration: 1, transformOrigin: "bottom right" },
          "<"
        )
        .to(".arrow", { rotateZ: 90, y: 150, duration: 1 }, "<");
    });
    mm.add("(min-width: 768px) and (max-width: 991px)", () => {
      tlScroll
        .to(".sphere", { scale: 1.5, duration: 1 })
        .to(
          ".square",
          { scale: 0.6, y: 200, duration: 1, transformOrigin: "bottom left" },
          "<"
        )
        .to(".arrow", { rotateZ: 90, y: 150, duration: 1 }, "<");
    });
    mm.add("(max-width: 767px)", () => {
      tlScroll
        .to(".sphere", { scale: 2, duration: 1.5 })
        .to(
          ".square",
          { scale: 0.4, y: 200, transformOrigin: "bottom left", duration: 2 },
          "<"
        )
        .to(".arrow", { rotateZ: 90, y: 150, duration: 1.5 }, "<");
    });
  }

  //
  //servizi e CTA
  function ctaAnimations() {
    const boxes = document.querySelectorAll(".btn-cta");
    gsap.set(boxes, { x: "120%" });
  
    boxes.forEach((box) => {
      const gradientDiv = box.querySelector(".button-bg-gradient");
      const gradientLight = box.querySelector(".button-bg-gradient-light");
  
      if (!gradientDiv) {
        console.error("Element gradientDiv not found.");
        return;
      }
  
      const color1 = getComputedStyle(gradientDiv)
        .getPropertyValue("--background-first")
        .trim();
      const color2 = getComputedStyle(gradientDiv)
        .getPropertyValue("--primary")
        .trim();
  
      const createTimeline = () => {
        const animationTimeline = gsap.timeline({ paused: true });
        animationTimeline.to(
          gradientDiv,
          {
            backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
            duration: 0.6,
            ease: "sine.inOut",
          },
          0
        );
  
        if (gradientLight) {
          animationTimeline.to(
            gradientLight,
            { ease: "sine.inOut", opacity: 0, duration: 0.6 },
            "<"
          );
        }
  
        animationTimeline
          .to(
            box.querySelector(".button-spacer"),
            {
              width: "5%",
              duration: 0.6,
              ease: "power2.out",
            },
            0
          )
  
          .to(
            box.querySelector(".text-cta"),
            {
              marginRight: "0.75rem",
              duration: 0.6,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            box.querySelector(".freccia-cta"),
            {
              scale: 1.1,
              duration: 0.6,
              ease: "power2.out",
            },
            "<"
          );
  
        const playAnimation = () => animationTimeline.play();
        const reverseAnimation = () => animationTimeline.reverse();
  
        box.addEventListener("mouseenter", playAnimation);
        box.addEventListener("mouseleave", reverseAnimation);
        box.addEventListener("touchstart", playAnimation);
        box.addEventListener("touchend", reverseAnimation);
  
        return animationTimeline;
      };
  
      gsap.matchMedia().add("(min-width: 992px)", () => {
        createTimeline();
      });
  
      gsap.matchMedia().add("(min-width: 320px) and (max-width: 991px)", () => {
        createTimeline();
      });
  
      gsap.matchMedia().add("(max-width: 992px)", () => {
        const loopTimeline = gsap.timeline({ repeat: -1, yoyo: true });
  
        loopTimeline.to(
          gradientDiv,
          {
            backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
            duration: 2,
            ease: "sine.inOut",
          },
          0
        );
  
        if (gradientLight) {
          loopTimeline.to(
            gradientLight,
            {
              opacity: 0,
              duration: 2,
              ease: "sine.inOut",
            },
            "<"
          );
        }
  
        loopTimeline.to(
          gradientDiv,
          {
            backgroundImage: `linear-gradient(to right, ${color2}, ${color1})`,
            duration: 2,
            ease: "sine.inOut",
          },
          2
        );
  
        if (gradientLight) {
          loopTimeline.to(
            gradientLight,
            {
              opacity: 1,
              duration: 2,
              ease: "sine.inOut",
            },
            "<"
          );
        }
  
        loopTimeline.play();
  
        const stopLoop = () => loopTimeline.pause();
        const resumeLoop = () => loopTimeline.play();
  
        box.addEventListener("touchstart", stopLoop);
        box.addEventListener("touchend", resumeLoop);
        box.addEventListener("mouseenter", stopLoop);
        box.addEventListener("mouseleave", resumeLoop);
      });
  
      if (!box.classList.contains("herotop")) {
        ScrollTrigger.create({
          trigger: box,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play none none reverse",
          onEnter: () =>
            gsap.to(box, { x: 0, duration: 0.6, ease: "power2.out" }),
        });
      }
    });
  }
  function serviceWrapper() {
    gsap.set(".color-cover", { width: "100%" });
    const splitH3 = new SplitType(".heading-h3-service", {
      types: "words",
      tagName: "span",
    });
    const splitPar = new SplitType(".paragraph-service", {
      types: "lines",
      tagName: "span",
    });
  
    const splitWords = document.querySelectorAll(".heading-h3-service .word");
    gsap.set(splitWords, { y: -100 });
    const splitLines = document.querySelectorAll(".paragraph-service .line");
    gsap.set(splitLines, { y: 50, opacity: 0 });
    const containers = document.querySelectorAll(".service-wrapper-container");
  
    containers.forEach((container) => {
      const colorCover = container.querySelector(".color-cover");
      const h3Words = container.querySelectorAll(".heading-h3-service .word");
      const lineTitle = container.querySelector(".line-title-section");
      const list = container.querySelectorAll(".list");
      const line = container.querySelector(".container-list-serv.abs");
      const par = container.querySelectorAll(".paragraph-service .line");
      gsap.set(lineTitle, { width: "0%" });
  
      ScrollTrigger.create({
        trigger: container,
        start: "top 70%",
        scrub: 1, // Questo rimane perché vogliamo l'effetto progressivo
        toggleActions: "play none none none",
        onEnter: () => {
          gsap
            .timeline()
            .to(lineTitle, {
              width: "100%",
              duration: 0.6,
              ease: "power2.out",
            })
            .to(
              h3Words,
              {
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
              },
              "-=0.4"
            );
        },
      });
  
      // **Animazione Color Cover (50%) - Rimane legata allo scroll**
      ScrollTrigger.create({
        trigger: container,
        start: "top 50%",
        scrub: true, // Questo rimane perché vogliamo l'effetto progressivo
        toggleActions: "play none none none",
        onEnter: () => {
          gsap.to(colorCover, {
            x: "100%",
            duration: 1,
            ease: "power2.inOut",
          });
        },
      });
  
      // **Gestione Mobile e Desktop**
      if (window.innerWidth > 991) {
        // **Animazione per Desktop (NON legata allo scroll)**
        ScrollTrigger.create({
          trigger: container,
          start: "top 20%",
          toggleActions: "play none none none", // Attivazione immediata
          once: true, // Si attiva una sola volta
          animation: gsap
            .timeline()
            .to(par, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.15,
              ease: "power2.out",
            })
            .to(line, { height: "100%", ease: "power2.out", duration: 0.6 }, "<")
            .to(
              list,
              {
                opacity: 1,
                rotateX: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power2.inOut",
              },
              "<"
            ),
        });
      } else {
        // **Animazione per Mobile (NON legata allo scroll)**
        ScrollTrigger.create({
          trigger: container,
          start: "top 20%",
          toggleActions: "play none none none", // Attivazione immediata
          once: true, // Si attiva una sola volta
          animation: gsap
            .timeline()
            .to(par, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              stagger: 0.15,
              ease: "power2.out",
            })
            .to(
              list,
              {
                opacity: 1,
                rotateX: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.inOut",
              },
              "<"
            ),
        });
      }
    });
  
    // **Forza un refresh di ScrollTrigger al resize**
    window.addEventListener("resize", () => ScrollTrigger.refresh());
  }
  
  //funzione per l'animazione ingresso Servizio in pagina
  function servicePageWrapper() {
    const splitH = new SplitType(".heading-h3-service-page", {
      types: "words",
      tagName: "span",
    });
    gsap.set(splitH.words, { y: -100 });
    const containers = document.querySelectorAll(".service-wrapper-container");
    containers.forEach((container) => {
      gsap.set(".color-cover", { width: "100%" });
      const splitWords = container.querySelectorAll(
        ".heading-h3-service-page .word"
      );
      const lineTitle = container.querySelector(".line-title-section");
      gsap.set(lineTitle, { scaleX: 0, transformOrigin: "center left" });
  
      ScrollTrigger.create({
        trigger: container,
        start: "top 70%",
        scrub: 1,
        toggleActions: "play none none none",
        onEnter: () => {
          gsap
            .timeline()
            .to(lineTitle, {
              scaleX: 1,
              duration: 0.6,
              ease: "power2.out",
            })
            .to(
              splitWords,
              {
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
              },
              "-=0.4"
            );
        },
      });
  
      // Seleziona tutte le sezioni che devono essere animate
      ScrollTrigger.create({
        trigger: container,
        start: "top 60%",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none none",
        onEnter: () => {
          // Animazione della cover
          gsap.to(container.querySelector(".color-cover"), {
            width: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          });
        },
      });
    });
  
    window.addEventListener("resize", () => ScrollTrigger.refresh());
  }
  //

  //Animazioni VARIE
  function blogTransition() {
    const coverTL = gsap.timeline();
    const tlPlus = gsap.timeline();
    const masterTimeline = gsap.timeline({
      onStart: () => {
        blockScroll();
      },
      onComplete: () => {
        gsap.set(".prop-cover-wrapper", { display: "none", y: "100vh" });
        gsap.set(
          "#colore-punto-brand-chiaro-pro, .proptype-transition, .category-cover, #c-pro, #t-pro, #a-pro, #punto-pro, #colore-punto-brand-pro, #freccia-pro, .prop-wrapper-background, .category-cover",
          { clearProps: "all" }
        );
      },
    });
  
    masterTimeline.add(coverTL, 0).add(tlPlus, 1.2);
  
    coverTL
      .to("#colore-punto-brand-chiaro-pro", {
        scale: 0,
        transformOrigin: "center center",
        duration: 0.6,
        ease: "power4.out",
      })
      .to(
        ".proptype-transition",
        {
          rotateX: -90,
          duration: 0.8,
          transformOrigin: "top",
          ease: "power1.out",
        },
        "<"
      )
      .to(
        ".category-cover",
        {
          rotateX: 0,
          duration: 0.8,
          transformOrigin: "top",
          ease: "power1.out",
        },
        "<"
      )
      .to(
        "#c-pro, #t-pro, #a-pro",
        {
          y: "100vh",
          duration: 0.6,
          ease: "power1.inOut",
          stagger: 0.2,
        },
        "-=0.2"
      )
      .to(
        "#punto-pro, #colore-punto-brand-pro, #freccia-pro",
        {
          y: "100vh",
          duration: 0.6,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".prop-wrapper-background, .category-cover",
        {
          y: "100vh",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.6"
      );
  
    tlPlus
      .to(headerElements, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .call(() => {
        unblockScroll();
      });
  }

  function smoothScrollToTop() {
    if (lenisInstance?.instance) {
      lenisInstance.instance.scrollTo(0, {
        duration: 1.2, // Scroll più fluido
        easing: (t) => 1 - Math.pow(1 - t, 3), // Easing personalizzato
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function dataColorAndScrollTop() {
    const elementsWithColor = document.querySelectorAll("[data-color]");
  
    elementsWithColor.forEach((element) => {
      const color = element.getAttribute("data-color");
  
      if (color) {
        gsap.to(element, {
          color: color,
          duration: 1,
          ease: "power1",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        console.warn(
          `Element ${element} does not have a valid data-color attribute.`
        );
      }
    });
  
    document.querySelectorAll('[data-scroll="top"]').forEach((button) => {
      button.addEventListener("click", () => {
        if (lenisInstance?.instance) {
          lenisInstance.instance.scrollTo(0, {
            duration: 1.2, // Scroll più fluido
            easing: (t) => 1 - Math.pow(1 - t, 3), // Easing personalizzato
          });
        } else {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0, autoKill: true },
            ease: "power2.inOut",
          });
        }
      });
    });
  }

  function secondSection(isHomePage = false) {
    if (isHomePage) {
    }
  
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 320px) and (max-width: 767px)", () => {
      document.querySelectorAll(".focus").forEach((focusElem) => {
        gsap.to(focusElem, {
          x: "10vw",
          scale: 0.8,
          opacity: 0.5,
          y: "33%",
          rotate: 90,
          transformOrigin: "top left",
          ease: "power2.out",
          scrollTrigger: {
            trigger: focusElem,
            start: "top 20%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  
    mm.add("(min-width: 768px) and (max-width: 991px)", () => {
      document.querySelectorAll(".focus").forEach((focusElem) => {
        gsap.to(focusElem, {
          x: "12vw",
          opacity: 0.5,
          rotate: 90,
          y: "50%",
          transform: "translateY(-50%)",
          transformOrigin: "top left",
          ease: "power2.out",
          scrollTrigger: {
            trigger: focusElem,
            start: "top 20%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  
    mm.add("(min-width: 992px)", () => {
      document.querySelectorAll(".focus").forEach((focusElem) => {
        gsap.to(focusElem, {
          x: "10vw",
          opacity: 0.5,
          rotate: 90,
          y: "50%",
          transform: "translateY(-50%)",
          transformOrigin: "top left",
          ease: "power2.out",
          scrollTrigger: {
            trigger: focusElem,
            start: "top 10%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  
    const containers = document.querySelectorAll(".path-container");
    const images = document.querySelectorAll(".img-target");
  
    gsap.matchMedia().add("(min-width: 320px) and (max-width: 991px)", () => {
      containers.forEach((container) => {
        const imgId = container.getAttribute("data-img-id");
        const image = imgId
          ? document.getElementById(imgId)
          : container.querySelector(".img-target");
        const customPathVectors = container.querySelectorAll(".path-vector");
  
        customPathVectors.forEach((customPathVector) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "top top",
              toggleActions: "play none none reverse",
            },
          });
  
          tl.from(customPathVector, {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            x: -200,
            ease: "power2.out",
          });
  
          if (isHomePage) {
            tl.to(customPathVector, {
              rotation: 90,
              x: "-0.6rem",
              y: "0.6rem",
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
  
        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: container,
                start: "top 90%",
                end: "top 10%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  gsap.to(images, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                  });
                  gsap.to(image, {
                    opacity: 0.7,
                    duration: 1,
                    ease: "power2.out",
                  });
                },
                onLeave: () => {
                  gsap.to(image, { opacity: 0, duration: 1, ease: "power2.out" });
                },
                onEnterBack: () => {
                  gsap.to(images, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                  });
                  gsap.to(image, {
                    opacity: 0.7,
                    duration: 1,
                    ease: "power2.out",
                  });
                },
                onLeaveBack: () => {
                  gsap.to(image, { opacity: 0, duration: 1, ease: "power2.out" });
                },
              },
            }
          );
        }
      });
    });
  
    gsap.matchMedia().add("(min-width: 992px)", () => {
      containers.forEach((container) => {
        const imgId = container.getAttribute("data-img-id");
        const image = imgId
          ? document.getElementById(imgId)
          : container.querySelector(".img-target");
        const customPathVectors = container.querySelectorAll(".path-vector");
  
        customPathVectors.forEach((customPathVector) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "top top",
              toggleActions: "play none none reverse",
            },
          });
  
          tl.from(customPathVector, {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            x: -200,
            ease: "power2.out",
          });
  
          if (isHomePage) {
            tl.to(customPathVector, {
              rotation: 90,
              x: "-1rem",
              y: "1rem",
              duration: 0.2,
              ease: "power2.out",
            });
          }
        });
  
        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  gsap.to(images, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                  });
                  gsap.to(image, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                  });
                },
                onLeave: () => {
                  gsap.to(image, { opacity: 0, duration: 1, ease: "power2.out" });
                },
                onEnterBack: () => {
                  gsap.to(images, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                  });
                  gsap.to(image, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                  });
                },
                onLeaveBack: () => {
                  gsap.to(image, { opacity: 0, duration: 1, ease: "power2.out" });
                },
              },
            }
          );
        }
      });
    });
    if (!isHomePage) {
      document.querySelectorAll(".img-tg-cont").forEach((imgTgContElem) => {
        gsap.from(imgTgContElem, {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgTgContElem,
            start: "top 20%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }

  function info() {
    document.querySelectorAll(".cm-talk-content").forEach((talk) => {
      const serviceContainer = talk.querySelector(".cta-container");
      const plusBtn = talk.querySelector(".plus-btn-cta");
      const trigger = talk.querySelector(".cta-service-btn");
  
      let isPaused = false;
  
      // Funzione per gestire hover e touch in modo sicuro
      function handleHover() {
        if (!isPaused) {
          gsap.to(plusBtn, {
            scale: 1.5,
            rotation: 90,
            color: "#ff006e",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(plusBtn.querySelectorAll(".ellipse-47"), {
            stroke: "transparent",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
  
      function handleHoverOut() {
        if (!isPaused) {
          gsap.to(plusBtn, {
            rotation: 0,
            scale: 1,
            color: "",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(plusBtn.querySelectorAll(".ellipse-47"), {
            stroke: "",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
  
      // Eventi hover e touch con cleanup
      plusBtn.addEventListener("mouseenter", handleHover);
      plusBtn.addEventListener("mouseleave", handleHoverOut);
      plusBtn.addEventListener("touchstart", handleHover, { passive: true });
      plusBtn.addEventListener("touchend", handleHoverOut, { passive: true });
  
      trigger.addEventListener("click", () => {
        const isOpen = serviceContainer.classList.contains("open");
        if (isOpen) {
          // Chiudi la sezione
          gsap.to(serviceContainer, {
            height: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
          gsap.to(plusBtn, {
            scale: 1,
            rotation: 0,
            color: "",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(plusBtn.querySelectorAll(".ellipse-47, .vector-9"), {
            stroke: "",
            duration: 0.5,
            ease: "power2.out",
          });
  
          serviceContainer.classList.remove("open");
          isPaused = false;
        } else {
          // Apri la sezione
          gsap.set(serviceContainer, { height: "auto" });
          const height = serviceContainer.offsetHeight;
          gsap.fromTo(
            serviceContainer,
            { height: 0 },
            { height: height, duration: 0.5, ease: "power2.inOut" }
          );
          gsap.to(plusBtn, {
            scale: 1.5,
            rotation: 90,
            color: "#ff006e",
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(plusBtn.querySelectorAll(".ellipse-47, .vector-9"), {
            stroke: "transparent",
            duration: 0.5,
            ease: "power2.out",
          });
  
          serviceContainer.classList.add("open");
          isPaused = true;
        }
      });
    });
  }

  function videoPause() {
    const videoContainers = document.querySelectorAll(
      "div.w-background-video[data-pause-on-scroll]"
    );
  
    if ("IntersectionObserver" in window) {
      const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target.querySelector("video");
  
            if (video) {
              // Carica il video se ha l'attributo data-lazy
              if (video.hasAttribute("data-lazy")) {
                video.setAttribute("src", video.dataset.src);
                video.load();
                video.removeAttribute("data-lazy"); // Rimuove l'attributo per non caricarlo più volte
              }
  
              video.play(); // Riproduci il video quando è nel viewport
  
              ScrollTrigger.create({
                trigger: entry.target,
                start: "top bottom",
                end: "bottom top",
                onLeave: () => video.pause(),
                onEnterBack: () => video.play(),
                onLeaveBack: () => video.pause(),
              });
  
              observer.unobserve(entry.target); // Smette di osservare una volta che il video è stato caricato
            }
          }
        });
      });
  
      videoContainers.forEach((container) => {
        lazyVideoObserver.observe(container);
      });
    } else {
      // Fallback per browser che non supportano IntersectionObserver
      videoContainers.forEach((container) => {
        const video = container.querySelector("video");
        if (video) {
          ScrollTrigger.create(
            {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              onEnter: () => video.play(),
              onLeave: () => video.pause(),
              onEnterBack: () => video.play(),
              onLeaveBack: () => video.pause(),
            },
            { passive: true }
          );
        }
      });
    }
  }

  function toggleFaq() {
    document.querySelectorAll(".dropdown-container").forEach((faq) => {
      const faqContainer = faq.querySelector(".p-toggle");
      const dropBtn = faq.querySelector(".drop-toggle");
      const trigger = faq.querySelector(".dropdown-wrapper");
  
      if (!faqContainer || !dropBtn || !trigger) return; // 🔹 Evita errori se gli elementi non esistono
  
      // **🔹 Funzione per gestire l'apertura e chiusura della FAQ**
      const handler = (event) => {
        event.preventDefault();
        const isOpen = faqContainer.classList.contains("open");
  
        if (isOpen) {
          gsap.to(faqContainer, { height: 0, duration: 0.3 });
          gsap.to(dropBtn, {
            rotation: 0,
            duration: 0.3,
            color: "",
            ease: "power2.out",
          });
          faqContainer.classList.remove("open");
        } else {
          gsap.set(faqContainer, { height: "auto" });
          const height = faqContainer.offsetHeight;
          gsap.fromTo(
            faqContainer,
            { height: 0 },
            { height: height, duration: 0.3 }
          );
          gsap.to(dropBtn, {
            rotation: 180,
            duration: 0.3,
            color: "#ff006e",
            ease: "power2.out",
          });
          faqContainer.classList.add("open");
        }
      };
  
      // **🔹 Assegna il listener**
      trigger.addEventListener("click", handler);
  
      // **🔹 Memorizza il listener in `pageSpecificListeners` per la pulizia automatica**
      window.pageSpecificListeners.push({
        element: trigger,
        event: "click",
        handler: handler,
      });
    });
  }

  function toggleServiceSection() {
    document.querySelectorAll(".pricing_card").forEach((card) => {
      const serviceContainer = card.querySelector(".service-container");
      const plusBtn = card.querySelector(".plus-btn");
      const trigger = card.querySelector(".h-btn-container");
  
      trigger.addEventListener("click", () => {
        const isOpen = serviceContainer.classList.contains("open");
        if (isOpen) {
          // Close the service section
          gsap.to(serviceContainer, { height: 0, duration: 0.5 });
          gsap.to(plusBtn, {
            rotation: 0,
            duration: 0.5,
            width: "",
            ease: "ease.out",
          });
          gsap.to(card.querySelectorAll(".vector-9, .ellipse-47"), {
            stroke: "currentColor",
            duration: 0.5,
          });
          gsap.to(card.querySelectorAll(".vector-8"), {
            attr: { "stroke-width": "" },
            stroke: "currentcolor",
            duration: 0.5,
          });
          serviceContainer.classList.remove("open");
        } else {
          // Open the service section
          gsap.set(serviceContainer, { height: "auto" });
          const height = serviceContainer.offsetHeight;
          gsap.fromTo(
            serviceContainer,
            { height: 0 },
            { height: height, duration: 0.5 }
          );
          gsap.to(plusBtn, {
            rotation: 90,
            duration: 0.5,
            width: "4rem",
            ease: "ease.out",
          });
          gsap.to(card.querySelectorAll(".vector-9, .ellipse-47"), {
            stroke: "transparent",
            duration: 0.5,
          });
          gsap.to(card.querySelectorAll(".vector-8"), {
            attr: { "stroke-width": 2 },
            stroke: "#ff006e",
            duration: 0.5,
          });
          serviceContainer.classList.add("open");
        }
      });
    });
  }

  function toggleButtonAnimation() {
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleCircle = toggleBtn.querySelector(".toggle_btn_circle");
    const number = document.querySelectorAll(".number");
  
    let isActive = false;
  
    function toggle() {
      isActive = !isActive;
  
      if (isActive) {
        // Sposta il cerchio a destra
        gsap.to(toggleCircle, {
          x: toggleBtn.clientWidth - toggleCircle.clientWidth - 1.2 * 16,
          duration: 0.3,
        });
  
        // Cambia i colori
        gsap.to(toggleBtn, {
          backgroundColor: "var(--terzo-colore)",
          duration: 0.3,
        });
        gsap.to(number, { color: "var(--terzo-colore)", duration: 0.3 });
      } else {
        // Sposta il cerchio a sinistra
        gsap.to(toggleCircle, { x: 0, duration: 0.3 });
  
        // Ripristina i colori originali
        gsap.to(toggleBtn, { backgroundColor: "", duration: 0.3 });
        gsap.to(number, { color: "", duration: 0.3 });
      }
      // Chiama la funzione per cambiare i prezzi
      changePrice(isActive);
    }
  
    toggleBtn.addEventListener("click", toggle);
    toggleBtn.addEventListener("touchstart", toggle);

    window.pageSpecificListeners.push({
        element: toggleBtn,
        event: "click",
        toggle: toggle,
      });
      window.pageSpecificListeners.push({
        element: toggleBtn,
        event: "touchstart",
        toggle: toggle,
      });
  }

  function changePrice(isActive) {
    $(".number").each(function () {
      var $this = $(this),
        countTo = isActive ? $this.attr("data-year") : $this.attr("data-month");
  
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 500,
          easing: "linear",
          step: function (now) {
            $this.text(Math.round(now.toFixed(2)));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  function logoAnima() {
    // Seleziona tutti gli elementi con la classe .logo-cont-wrapper
    const logos = document.querySelectorAll(".logo-cont-wrapper");
  
    logos.forEach((logo) => {
      const anim = gsap.fromTo(
        logo,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          paused: true,
        }
      );
  
      ScrollTrigger.create({
        trigger: logo,
        start: "top 80%", // Inizia l'animazione quando il top dell'elemento è al 80% della
        end: "bottom top",
        onEnter: () => anim.play(),
        onEnterBack: () => anim.play(),
        onLeave: () => anim.reverse(),
        onLeaveBack: () => anim.reverse(),
        toggleActions: "play none none reverse", // Gioca l'animazione all'ingresso e la ripete all'uscita
      });
    });
  }
  
  function swiperUI() {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      speed: 500,
      effect: "slide",
      navigation: {
        nextEl: document.querySelector(".swiper-button-next"),
        prevEl: document.querySelector(".swiper-button-prev"),
      },
      on: {
        init: function () {
          this.update();
          updateOpacityAndParallax(this);
        },
        slideChange: function () {
          updateOpacityAndParallax(this);
        },
      },
    });
  
    function updateOpacityAndParallax(swiper) {
      const slides = swiper.slides;
      slides.forEach((slide, index) => {
        if (index === swiper.activeIndex) {
          gsap.to(slide, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.inOut",
          });
          gsap.to(slide.querySelector(".parallax-bg-img"), {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(slide, {
            opacity: 0.6,
            scale: 0.8,
            duration: 0.5,
            ease: "power3.inOut",
          });
          gsap.to(slide.querySelector(".parallax-bg-img"), {
            scale: 0.9,
            opacity: 0.6,
            duration: 0.5,
            ease: "power3.inOut",
          });
        }
      });
    }
  
    const swiperContainer = document.querySelector(".swiper-container");
    swiperContainer.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperContainer.addEventListener("mouseleave", () => swiper.autoplay.start());
  
    swiperContainer.addEventListener("touchstart", () => swiper.autoplay.stop());
    swiperContainer.addEventListener("touchend", () => swiper.autoplay.start());
  
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(document.querySelector(".swiper-container"));
  }

  function calendar() {
    var inputFields = document.querySelectorAll(".form-text-field-2");
    var calendarModal = document.getElementById("calendar-modal");
    var timeSelectionModal = document.getElementById("time-selection-modal");
    var timeSelectionEl = document.getElementById("time-selection");
    var calendarEl = document.getElementById("calendar");
    var currentInputField;
  
    if (!calendarEl || calendarEl.dataset.initialized) {
      console.warn("Il calendario è già stato inizializzato o non esiste.");
      return;
    }
  
    calendarEl.dataset.initialized = "true"; // Impedisce la duplicazione
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      firstDay: 1, // Lunedì
      selectable: true,
      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next",
      },
      locale: "it",
      buttonText: { today: "oggi" },
      dayHeaderFormat: { weekday: "short" },
      selectAllow: (selectInfo) =>
        selectInfo.start.getUTCDay() !== 5 && selectInfo.start.getUTCDay() !== 6,
      events: async (fetchInfo, successCallback, failureCallback) => {
        try {
          const response = await fetch(
            "https://us-central1-webflow-project---calltoaction.cloudfunctions.net/getCalendarEvents",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                timeMin: fetchInfo.startStr,
                timeMax: fetchInfo.endStr,
              }),
            }
          );
  
          if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
  
          const events = await response.json();
          events.forEach((event) => (event.className = "hidden-event"));
          successCallback(events);
        } catch (err) {
          console.error("Errore nel recupero degli eventi:", err);
          failureCallback(err);
        }
      },
      select: (info) => {
        if (info.start.getUTCDay() !== 5 && info.start.getUTCDay() !== 6)
          openTimeSelection(info.start);
      },
      dateClick: (info) => {
        if (info.date.getUTCDay() !== 5 && info.date.getUTCDay() !== 6)
          openTimeSelection(info.date);
      },
      eventOverlap: false,
      selectOverlap: (event) => !event,
      eventBackgroundColor: "red",
    });
  
    calendar.render();
  
    inputFields.forEach((inputField) => {
      const openCalendar = function () {
        inputField.value = "";
        calendarModal.style.display = "block";
        calendar.updateSize();
        currentInputField = inputField;
        gsap.to(".cover-page, .section-form, .page-heading-wrapper", {
          opacity: 0.5,
          duration: 0.3,
          ease: "none",
        });
        lenisInstance.pauseForCalendar();
      };
  
      inputField.addEventListener("click", openCalendar);
      window.pageSpecificListeners.push({
        element: inputField,
        event: "click",
        handler: openCalendar,
      });
    });
  
    function openTimeSelection(date) {
      if (date.getUTCDay() === 5 || date.getUTCDay() === 6) return;
  
      timeSelectionEl.innerHTML = "";
      timeSelectionModal.style.display = "block";
  
      var times = [];
      for (var hour = 10; hour <= 19; hour++) {
        times.push({ hour, minute: 0 }, { hour, minute: 30 });
      }
      times.push({ hour: 20, minute: 0 });
  
      times.forEach((time) => {
        var dateTime = new Date(date);
        dateTime.setHours(time.hour, time.minute, 0, 0);
        if (!isTimeSlotOccupied(dateTime)) {
          var button = document.createElement("button");
          button.innerText = `${("0" + time.hour).slice(-2)}:${(
            "0" + time.minute
          ).slice(-2)}`;
          button.addEventListener("click", function () {
            currentInputField.value = `${("0" + date.getDate()).slice(-2)}/${(
              "0" +
              (date.getMonth() + 1)
            ).slice(-2)}/${date.getFullYear()} ${button.innerText}`;
            timeSelectionModal.style.display = "none";
            calendarModal.style.display = "none";
            gsap.to(".cover-page, .section-form, .page-heading-wrapper", {
              opacity: 1,
              duration: 0.3,
              ease: "none",
            });
            lenisInstance.resumeAfterCalendar();
          });
          timeSelectionEl.appendChild(button);
        }
      });
    }
  
    function isTimeSlotOccupied(dateTime) {
      return calendar.getEvents().some((event) => {
        var start = new Date(event.start);
        var end = new Date(event.end);
        return dateTime >= start && dateTime < end;
      });
    }
  
    const closeCalendar = function (event) {
      if (
        !calendarModal.contains(event.target) &&
        !timeSelectionModal.contains(event.target) &&
        !event.target.classList.contains("form-text-field-2")
      ) {
        calendarModal.style.display = "none";
        timeSelectionModal.style.display = "none";
        gsap.to(".cover-page, .section-form, .page-heading-wrapper", {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        });
        lenisInstance.resumeAfterCalendar();
      }
    };
  
    document.addEventListener("click", closeCalendar);
    window.pageSpecificListeners.push({
      element: document,
      event: "click",
      handler: closeCalendar,
    });
  
    const preventGlobalScroll = function (event) {
      event.preventDefault();
      this.scrollTop += event.deltaY;
    };
  
    document
      .querySelector("#calendar-modal")
      .addEventListener("wheel", preventGlobalScroll, { passive: false });
    window.pageSpecificListeners.push({
      element: document.querySelector("#calendar-modal"),
      event: "wheel",
      handler: preventGlobalScroll,
    });
  }

  function studioAnimations() {
    const wrapper = document.getElementById("studio-wrapper");
    const containers = wrapper.querySelectorAll(".ms-img-text-block");
    const studio = wrapper.querySelector(".studio-content-flex");
    const trigger = studio.querySelector(".studio-img-container");
    const lineWrap = wrapper.querySelectorAll(".section-spacer-divider");
    const teamWrap = wrapper.querySelectorAll(".team-item-wrapper");
  
    // Split per le animazioni di testo
    const splitStudio = new SplitType(".miss-vis-text", {
      types: "lines",
      tagName: "span",
    });
  
    const splitMisVis = new SplitType(".mission-vision-text", {
      types: "lines",
      tagName: "span",
    });
  
    const splitSubTitle = new SplitType(".heading-h3-studio", {
      types: "words",
      tagName: "span",
    });
  
    // Animazioni per lineWrap (titoli e linee)
    lineWrap.forEach((lineWrap) => {
      const subTitles = lineWrap.querySelectorAll(".heading-h3-studio .word");
      const lineTitle = lineWrap.querySelectorAll(".line-title-section");
      gsap.set(lineTitle, { scaleX: 0, transformOrigin: "center left" });
      gsap.set(subTitles, { y: -100 });
  
      const tl = gsap.timeline({ paused: true });
      tl.to(lineTitle, {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
      }).to(
        subTitles,
        {
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.8"
      );
  
      ScrollTrigger.create({
        trigger: lineWrap,
        start: "top 70%",
        end: "top 20%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    });
  
    // Animazioni per i container
    containers.forEach((container) => {
      const misVisLines = container.querySelectorAll(
        ".line-title-mission-vision"
      );
      const misVisText = container.querySelectorAll(".mission-vision-text .line");
      gsap.set(misVisText, { opacity: 0, y: 100 });
      const points = container.querySelectorAll(".point-mis-vis");
  
      const tl = gsap.timeline({ paused: true });
  
      tl.to(misVisLines, { width: "100%", duration: 0.6, ease: "power2.out" })
        .to(
          misVisText,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.1 },
          },
          "-=0.3"
        )
        .to(points, { scale: 1, duration: 0.6, ease: "power2.out" }, "-=0.3");
  
      ScrollTrigger.create({
        trigger: container,
        start: "top 60%",
        end: "top 20%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    });
  
    // Animazione per il testo principale di studio
    const studioText = studio.querySelectorAll(".miss-vis-text .line");
    gsap.set(studioText, { opacity: 0, y: 100 });
  
    gsap.to(studioText, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: { amount: 0.1 },
      scrollTrigger: {
        trigger: trigger,
        start: "bottom 70%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });
  
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: "(min-width: 992px)", // Desktop (>= 992px)
        isMobile: "(max-width: 991px)", // Mobile (<= 991px)
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;
  
        teamWrap.forEach((teamItem) => {
          const textContainer = teamItem.querySelector(".item-txt-team-wrap");
          const textCompetenza = teamItem.querySelector(".item-text-team.name");
          const competenze = teamItem.querySelector(".competenze");
          const teamToggle = teamItem.querySelector(".plus-btn-team");
          const ellipse = teamToggle.querySelectorAll(".ellipse-47");
          const line = teamToggle.querySelectorAll(".vector-9");
  
          let isExpanded = false; // Stato per gestire il click
  
          let hoverTimeline;
          if (isDesktop) {
            hoverTimeline = gsap.timeline({ paused: true });
  
            hoverTimeline
              .to(textContainer, {
                width: "auto",
                duration: 0.5,
                ease: "power2.out",
              })
              .to(
                textCompetenza,
                {
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                },
                "-=0.2"
              );
  
            // Eventi hover
            const hoverHandlerEnter = () => hoverTimeline.play();
            const hoverHandlerLeave = () => {
              if (!isExpanded) hoverTimeline.reverse();
            };
  
            teamItem.addEventListener("mouseenter", hoverHandlerEnter);
            teamItem.addEventListener("mouseleave", hoverHandlerLeave);
  
            window.pageSpecificListeners.push(
              {
                element: teamItem,
                event: "mouseenter",
                handler: hoverHandlerEnter,
              },
              {
                element: teamItem,
                event: "mouseleave",
                handler: hoverHandlerLeave,
              }
            );
          }
  
          const clickHandler = () => {
            if (!isExpanded) {
              // Espansione
              gsap.to(competenze, {
                height: "100%",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(teamToggle, {
                rotation: 90,
                color: "#ff006e",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(ellipse, {
                stroke: "transparent",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(line, {
                stroke: "transparent",
                duration: 0.5,
                ease: "power2.out",
              });
            } else {
              // Chiusura
              gsap.to(competenze, {
                height: "0%",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(teamToggle, {
                rotation: 0,
                color: "var(--soft-white-change)",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(ellipse, {
                stroke: "currentColor",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(line, {
                stroke: "currentColor",
                duration: 0.5,
                ease: "power2.out",
              });
            }
            isExpanded = !isExpanded; // Inverte lo stato
          };
  
          teamItem.addEventListener("click", clickHandler);
  
          window.pageSpecificListeners.push({
            element: teamItem,
            event: "click",
            handler: clickHandler,
          });
        });
      }
    );
  }

  function startMarquee() {
    const wrapper = document.querySelector(".gsap-marquee-wrapper");
    const items = gsap.utils.toArray(".gsap-marquee-content .item");
  
    // Verifica se il wrapper e gli item esistono
    if (!wrapper || !items.length) return;
  
    // Imposta la velocità del loop
    const speed = 70; // Più alto = più lento
  
    const loop = gsap.timeline({
      repeat: -1, // Loop infinito
      paused: false, // Inizia subito
    });
  
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
  
    // Crea l'animazione
    items.forEach((item) => {
      loop.to(
        item,
        {
          x: `-=${totalWidth}`, // Sposta ogni elemento a sinistra di tutta la larghezza
          duration: totalWidth / speed, // Durata dinamica basata sulla velocità
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Loop continuo senza glitch
          },
        },
        0
      );
    });
  
    // 🔥 ScrollTrigger usando il wrapper come trigger
    ScrollTrigger.create({
      trigger: wrapper, // Usa il wrapper stesso come trigger
      start: "top 90%", // Attiva quando entra nella visuale
      end: "bottom top", // Si ferma quando esce dalla visuale
      onEnter: () => loop.resume(), // Riprende il loop
      onLeave: () => loop.pause(), // Mette in pausa
      onEnterBack: () => loop.resume(), // Riprende se torni indietro
      onLeaveBack: () => loop.pause(), // Pausa se esce dallo schermo
    });
  
    // 🔄 Riavvia l'animazione al resize
    const resizeHandler = () => {
      gsap.killTweensOf(items);
      startMarquee(); // Riavvia con nuove dimensioni
    };
  
    window.addEventListener("resize", resizeHandler);
  
    window.pageSpecificListeners.push({
      element: window,
      event: "resize",
      handler: resizeHandler,
    });
  }
  
  function startInfiniteMarquee() {
    const wrapper = document.querySelector(".gsap-marquee-wrapper");
    const items = gsap.utils.toArray(".gsap-marquee-content .item");
    const triggerSection = document.querySelector(".premessa");
  
    // Verifica se gli elementi esistono
    if (!wrapper || !items.length || !triggerSection) return;
  
    // Imposta la velocità del loop
    const speed = 60;
  
    const loop = gsap.timeline({
      repeat: -1, // Loop infinito
      paused: false, // Inizia subito
    });
  
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
  
    // Crea l'animazione
    items.forEach((item, index) => {
      loop.to(
        item,
        {
          x: `-=${totalWidth}`, // Sposta ogni elemento a sinistra di tutta la larghezza
          duration: totalWidth / speed, // Durata dinamica basata sulla velocità
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Loop continuo
          },
        },
        0
      );
    });
  
    ScrollTrigger.create({
      trigger: triggerSection,
      start: "top 90%",
      end: "bottom top",
      onEnter: () => loop.resume(), // Riprende il loop
      onLeave: () => loop.pause(), // Mette in pausa
      onEnterBack: () => loop.resume(), // Riprende se torni indietro
      onLeaveBack: () => loop.pause(), // Pausa se esce dallo schermo
    });
  
    const resizeHandler = () => {
      gsap.killTweensOf(items);
      startInfiniteMarquee(); // Riavvia con nuove dimensioni
    };
  
    window.addEventListener("resize", resizeHandler);
  
    window.pageSpecificListeners.push({
      element: window,
      event: "resize",
      handler: resizeHandler,
    });
  }
   

  window.propositoAnimation = window.propositoAnimation || {
    initializeSwiper: function () {
      // Seleziona tutti i contenitori degli slider
      const swiperContainers = document.querySelectorAll(
        ".related-articles-wrapper"
      );
  
      swiperContainers.forEach((swiperContainer) => {
        // Cerca i pulsanti di navigazione dentro lo stesso contenitore di slider
        const nextButton = swiperContainer
          .closest(".related-articles-slider")
          .querySelector(".swiper-button-next");
        const prevButton = swiperContainer
          .closest(".related-articles-slider")
          .querySelector(".swiper-button-prev");
  
        if (nextButton && prevButton) {
          try {
            // Inizializza lo Swiper per ogni .related-articles-wrapper
            const swiperPost = new Swiper(swiperContainer, {
              slidesPerView: "auto",
              spaceBetween: 32,
              centeredSlides: false,
              navigation: {
                nextEl: nextButton, // Usa il pulsante "next" corretto
                prevEl: prevButton, // Usa il pulsante "prev" corretto
              },
              speed: 600, // Velocità della transizione
              effect: "slide", // Effetto della transizione
            });
          } catch (error) {
            console.error("Errore durante l'inizializzazione di Swiper:", error);
          }
        } else {
          console.warn(
            "Pulsanti di navigazione non trovati per:",
            swiperContainer
          );
        }
      });
    },
  
    categoryLabel: function () {
      const categoryLabels = document.querySelectorAll(".category-label");
  
      categoryLabels.forEach((label) => {
        // Creiamo un context per ottimizzare la gestione delle animazioni
        let context = gsap.context(() => {
          // Funzione di animazione comune per hover/touch
          function animateCategoryLabel(state) {
            gsap.to(label, {
              duration: 0.3,
              paddingBottom: state ? "2rem" : "0rem",
              borderTopRightRadius: state ? "1rem" : "0.5rem",
              borderTopLeftRadius: state ? "1rem" : "0.5rem",
              ease: "power1.out",
            });
          }
  
          // Eventi hover
          label.addEventListener("mouseenter", () => animateCategoryLabel(true));
          label.addEventListener("mouseleave", () => animateCategoryLabel(false));
  
          // Eventi touch
          label.addEventListener("touchstart", () => animateCategoryLabel(true));
          label.addEventListener("touchend", () => animateCategoryLabel(false));
        });
      });
    },
  
    tagLinkAnimation: function () {
      const tagLinks = document.querySelectorAll(".tag-link");
  
      tagLinks.forEach((tag) => {
        let context = gsap.context(() => {
          function animateTagLink(isHover) {
            gsap.to(tag, {
              duration: 0.15,
              rotateZ: isHover ? 10 : 0,
              borderColor: isHover ? "#ff006e" : "",
              ease: "back.out(3)",
            });
          }
  
          // Eventi hover
          tag.addEventListener("mouseenter", () => animateTagLink(true));
          tag.addEventListener("mouseleave", () => animateTagLink(false));
  
          // Eventi touch (per dispositivi mobili)
          tag.addEventListener("touchstart", () => animateTagLink(true));
          tag.addEventListener("touchend", () => animateTagLink(false));
        }, tag); // Applichiamo il context a ciascun tag-link
      });
    },
    btnReadAnimation: function () {
      const btnReads = document.querySelectorAll(".btn-read");
  
      btnReads.forEach((btn) => {
        // Selezioniamo gli elementi interni da animare
        const arrow = btn.querySelector(".read-btn-arrow");
        const text = btn.querySelector(".read-text-btn");
  
        // Creiamo una timeline che sarà ripetuta su hover e touch
        let tl = gsap.timeline({ paused: true });
  
        // Aggiungiamo l'animazione del margine destro di .read-btn-arrow
        tl.to(arrow, {
          duration: 0.2,
          marginRight: "2px", // Cambia il margine destro a 0
          ease: "back.out",
        });
  
        // Aggiungiamo la rotazione della .read-text-btn subito dopo
        tl.to(
          text,
          {
            duration: 0.3,
            rotate: 8, // Ruota di 8 gradi
            ease: "back.out",
          },
          "-=0.2"
        ); // Sovrapponiamo leggermente le animazioni per farle avvenire quasi contemporaneamente
  
        // Funzione di animazione per hover e touch
        function animateBtnRead(isHover) {
          if (isHover) {
            tl.play(); // Avvia l'animazione
          } else {
            tl.reverse(); // Inverte l'animazione quando si lascia l'elemento
          }
        }
  
        btn.addEventListener("mouseenter", () => animateBtnRead(true));
        btn.addEventListener("mouseleave", () => animateBtnRead(false));
        btn.addEventListener("touchstart", () => animateBtnRead(true));
        btn.addEventListener("touchend", () => animateBtnRead(false));
      });
    },
    NewsLetterAnimation: function () {
      ScrollTrigger.create({
        trigger: ".newsletter-section",
        start: "center center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.fromTo(
            ".arrow-proposito-newsletter",
            { x: "0%" },
            {
              x: "-10%",
              repeat: 3,
              duration: 0.5,
              ease: "power1.inOut",
              yoyo: true,
            }
          );
        },
      });
    },
    btnCategoryAnimation: function () {
      const btnCategory = document.querySelectorAll(".btn-category");
  
      btnCategory.forEach((btn) => {
        // Selezioniamo gli elementi interni da animare
        const arrow = btn.querySelector(".read-btn-arrow");
        const text = btn.querySelector(".read-text-btn");
        const gradient = btn.querySelector(".category-color");
  
        // Otteniamo il primo colore di background dalla variabile CSS
        const color2 = getComputedStyle(gradient)
          .getPropertyValue("--background-first")
          .trim();
  
        const color1 = "transparent"; // Il secondo colore è trasparente
  
        // Creiamo una timeline che sarà ripetuta su hover e touch
        let tl = gsap.timeline({ paused: true });
  
        // Aggiungiamo l'animazione del margine destro di .read-btn-arrow
        tl.to(arrow, {
          duration: 0.2,
          marginRight: "2px", // Cambia il margine destro
          ease: "back.out",
        }).to(
          gradient,
          {
            backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`, // Gradiente dal colore1 al trasparente
            duration: 0.2,
            ease: "linear",
          },
          "<"
        );
  
        tl.to(
          text,
          {
            duration: 0.3,
            rotate: 8, // Ruota di 8 gradi
            ease: "back.out",
          },
          "-=0.2"
        );
  
        // Funzione di animazione per hover e touch
        function animateBtnCategory(isHover) {
          if (isHover) {
            tl.play(); // Avvia l'animazione
          } else {
            tl.reverse(); // Inverte l'animazione quando si lascia l'elemento
          }
        }
  
        // Eventi per hover e touch
        btn.addEventListener("mouseenter", () => animateBtnCategory(true));
        btn.addEventListener("mouseleave", () => animateBtnCategory(false));
        btn.addEventListener("touchstart", () => animateBtnCategory(true));
        btn.addEventListener("touchend", () => animateBtnCategory(false));
      });
    },
    thumbnailImageAnimation: function () {
      const containers = document.querySelectorAll(".related-post-category");
  
      containers.forEach((container) => {
        // Seleziona l'immagine della miniatura specifica all'interno del container
        const thumbnail = container.querySelector(".thumbnail-image");
  
        // Se la miniatura esiste, crea l'animazione
        if (thumbnail) {
          // Creiamo la timeline dell'animazione GSAP
          let tl = gsap.timeline({ paused: true });
  
          // Definiamo l'animazione hover
          tl.to(thumbnail, {
            scale: 1.2, // Scala l'immagine
            duration: 0.5, // Durata dell'animazione
            ease: "power2.inOut", // Tipo di easing per una transizione più fluida
            transformOrigin: "center center", // Imposta l'origine di trasformazione al centro
          }).to(
            container,
            {
              boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)", // Aggiungi un'ombra
              duration: 0.5,
              ease: "power2.inOut",
            },
            "<" // Sincronizza le animazioni
          );
  
          // Aggiungiamo gli eventi hover
          container.addEventListener("mouseenter", () => tl.play()); // Attiva l'animazione all'hover
          container.addEventListener("mouseleave", () => tl.reverse()); // Reverte l'animazione al termine dell'hover
        }
      });
    },
  
    postEntry: function () {
      const relatedPosts = document.querySelectorAll(".related-post-category");
      gsap.set(".related-post-category", { opacity: 0, y: "-20%" });
  
      relatedPosts.forEach((post) => {
        // Creiamo un'animazione per ciascun .related-post-category individualmente
        ScrollTrigger.create({
          trigger: post, // Ogni singolo post è il trigger
          start: "top 80%", // L'animazione parte quando il post è al 80% della viewport
          toggleActions: "play none none none", // Anima quando entra, reverte quando esce
          onEnter: () => {
            // Animazione per il singolo post
            gsap.to(post, {
              y: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "power1.inOut",
            });
          },
        });
      });
    },
  
    postEntry: function () {
      const relatedPosts = document.querySelectorAll(".related-post-category");
      gsap.set(".related-post-category", { opacity: 0, y: "-20%" });
  
      relatedPosts.forEach((post) => {
        // Creiamo un'animazione per ciascun .related-post-category individualmente
        ScrollTrigger.create({
          trigger: post, // Ogni singolo post è il trigger
          start: "top 80%", // L'animazione parte quando il post è al 80% della viewport
          toggleActions: "play none none none", // Anima quando entra, reverte quando esce
          onEnter: () => {
            // Animazione per il singolo post
            gsap.to(post, {
              y: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "power1.inOut",
            });
          },
        });
      });
    },
    init: function () {
      this.initializeSwiper();
      this.categoryLabel();
      this.tagLinkAnimation();
      this.btnReadAnimation();
      this.NewsLetterAnimation();
      this.btnCategoryAnimation();
      if (window.matchMedia("(min-width: 768px)").matches) {
        this.thumbnailImageAnimation();
      }
      this.postEntry();
    },
  };