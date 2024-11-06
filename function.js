function burgerAnimation(isHomePage = false) {
  const burgerButton = document.querySelector("#burger");
  const burgerMobileButton = document.querySelector("#burger-mobile");
  const brandNavbar = document.querySelector(".brand-navbar");
  let menuOpen = false;

  function closeMenu(isMobile, callback) {
    const tl = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
        if (callback) callback();
      },
    });

    tl.to(".menu-container", {
      x: "-100vw",
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    })
      .to(
        "#logo-hidden",
        { opacity: 0, rotateY: 90, duration: 0.5, ease: "power1.out" },
        "<"
      )
      .to(
        "#logo-home",
        { opacity: "", rotateY: 0, duration: 0.5, ease: "power1.out" },
        ">"
      )
      .to(".line-top, .line-bottom", {backgroundColor: "", duration:0.3, ease:"linear"}, "0")
      .to("#nav", { backgroundColor: "", duration: 0.5, ease: "linear" }, "<")
      .to(".line-middle", { opacity: 1, ease: "power1.out" }, "<")
      .to(
        ".line-bottom",
        { y: "0", rotationZ: 0, duration: 0.3, ease: "power1.out" },
        "<"
      )
      .to(
        ".line-top",
        { y: "0", rotationZ: 0, duration: 0.3, ease: "power1.out" },
        "<"
      )
      .to(
        ".menu-wrapper-row",
        {
          width: 0,
          duration: 0.2,
          ease: "power1.out",
          stagger: isMobile ? 0.1 : 0.2,
        },
        "<"
      )
      .set(".cta-contact-nav", { display: "flex" }, "<")
      .set(".brand-container", { display: "none" }, "<")
      .to(
        ".cta-contact-nav",
        {
          rotationX: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        "<"
      )
      .to(".page-wrapper", { opacity: 1 }, "-=0.6")
      .set(".menu-wrapper", { display: "none" }, "-=0.4");

    if (isHomePage) {
      tl.to(".background-nav", { opacity: 1, duration: 0 }, "-=1");
    }

    menuOpen = false;
  }

  function animateBurger(isMobile, callback) {
    const tl = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
        if (callback) callback();
      },
    });

    if (!menuOpen) {
      tl.set(".menu-wrapper", { display: "flex" })
        .to(".page-wrapper", { opacity: 0 }, "-=0.5")
        .to(".cta-contact-nav", {
          rotationX: 90,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        })
        .set(".brand-container", { display: "flex" })
        .set(".cta-contact-nav", { display: "none" }, "<")
        .to(
          ".menu-wrapper-row",
          {
            width: "100%",
            duration: 0.2,
            ease: "power1.out",
            stagger: 0.2,
          },
          "-=0.5"
        )
        .to(
          ".line-top",
          {
            y: isMobile ? "11px" : "14px",
            duration: 0.3,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          ".line-bottom",
          {
            y: isMobile ? "-11px" : "-14px",
            duration: 0.3,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          ".line-middle",
          { opacity: 0, duration: 0.2, ease: "power1.out" },
          "<"
        )
        .to(".line-top", { rotationZ: -45, duration: 0.2, ease: "power1.out" })
        .to(
          ".line-bottom",
          { rotationZ: 45, duration: 0.2, ease: "power1.out" },
          "<"
        );
      if (isHomePage) {
        tl.to(".background-nav", { opacity: 0, duration: 0.5 }, "-=1");
      }
      tl.to(
        "#nav",
        { backgroundColor: "#faffec", duration: 0.5, ease: "linear" },
        "-=0.8"
      )
        .to(
          "#logo-home",
          { opacity: 0, rotateY: 90, duration: 0.5, ease: "power1.out" },
          "<"
        )
        .to(
          "#logo-hidden",
          { opacity: 1, rotateY: 0, duration: 0.5, ease: "power1.out" },
          ">"
        )
        .to(".line-top, .line-bottom", {backgroundColor: "#0d0d0d", duration:0.3, ease:"linear"}, "-=0.6")
        .to(
          ".menu-container",
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
          },
          "-=0.6"
        );

      menuOpen = true;
    } else {
      closeMenu(isMobile, callback);
    }
  }

  burgerButton.addEventListener("click", () => animateBurger(false));
  burgerMobileButton.addEventListener("click", () => animateBurger(true));
}

   //
  function initializeScrollControlButtons() {
    const blockScrollButtons = document.querySelectorAll("[data-block-scroll]");
    const unblockScrollButtons = document.querySelectorAll(
      "[data-unblock-scroll]"
    );
    const toggleScrollButtons = document.querySelectorAll("[data-toggle-scroll]");
    const scrollContainers = document.querySelectorAll("[data-scroll-container]");
    let scrollPosition = { top: 0, left: 0 };
  
    function saveScrollPosition() {
      scrollPosition.top = window.scrollY || document.documentElement.scrollTop;
      scrollPosition.left = window.scrollX || document.documentElement.scrollLeft;
    }
  
    function restoreScrollPosition() {
      window.scrollTo(scrollPosition.left, scrollPosition.top);
    }
  
    function handleBlockScroll() {
      saveScrollPosition();
      document.body.classList.add("no-scroll");
      scrollContainers.forEach((container) => {
        container.classList.add("scrollable");
      });
    }
  
    function handleUnblockScroll() {
      restoreScrollPosition();
      document.body.classList.remove("no-scroll");
      scrollContainers.forEach((container) => {
        container.classList.remove("scrollable");
      });
    }
  
    function handleToggleScroll() {
      if (document.body.classList.contains("no-scroll")) {
        restoreScrollPosition();
        document.body.classList.remove("no-scroll");
      } else {
        saveScrollPosition();
        document.body.classList.add("no-scroll");
      }
    }
  
    blockScrollButtons.forEach((button) => {
      button.addEventListener("click", handleBlockScroll, { passive: true });
    });
  
    unblockScrollButtons.forEach((button) => {
      button.addEventListener("click", handleUnblockScroll, { passive: true });
    });
  
    toggleScrollButtons.forEach((button) => {
      button.addEventListener("click", handleToggleScroll, { passive: true });
    });
  }
  //
  function navbarRepo(isHomePage = false) {
    const stickyElement = document.querySelector("#nav");
    const pathWrapper = isHomePage ? document.querySelector("#navbar-repo") : null;
    const menuWrapper = document.querySelector(".menu-wrapper");
    let navbarScrollTrigger = null;
    let lastScrollY = window.scrollY;
    let lastDirection = 0;
    const scrollThreshold = 16; // Define 1rem equivalent in pixels

    const showAnim = gsap
        .from(stickyElement, {
            yPercent: -100,
            paused: true,
            duration: 0.25,
            ease: "power2.inOut",
        })
        .progress(1);

    function isMenuVisible() {
        return getComputedStyle(menuWrapper).display === "flex";
    }

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 1 : -1;

        // If below threshold, don't trigger the animation
        if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;

        if (scrollDirection !== lastDirection) {
            if (scrollDirection === 1) {
                showAnim.reverse(); // Hide navbar on scroll down
            } else {
                showAnim.play(); // Show navbar on scroll up
            }
            lastDirection = scrollDirection;
        }
        lastScrollY = currentScrollY;
    }

    function addScrollListener() {
        if (!navbarScrollTrigger) {
            navbarScrollTrigger = gsap.ticker.add(handleScroll);
        }
    }

    function removeScrollListener() {
        if (navbarScrollTrigger) {
            gsap.ticker.remove(handleScroll);
            navbarScrollTrigger = null;
        }
    }

    function initNavbarScroll() {
        if (isHomePage && pathWrapper) {
            ScrollTrigger.create({
              scrub: true,
    invalidateOnRefresh: true,
                trigger: pathWrapper,
                start: "top 20%",
                end: "bottom center",
                onEnter: addScrollListener,
                onLeaveBack: () => {
                    removeScrollListener();
                    gsap.set(stickyElement, { y: 0 });
                },
            });
        } else {
            addScrollListener();
        }
    }

    // Reinitialize navbar scroll behavior on window resize
    window.addEventListener("resize", () => {
        lastScrollY = window.scrollY;
        removeScrollListener();
        initNavbarScroll();
    });

    // Initialize navbar scroll behavior
    initNavbarScroll();

    // Observe menu changes and reinitialize if necessary
    const observer = new MutationObserver(() => {
        removeScrollListener();
        initNavbarScroll();
    });

    observer.observe(menuWrapper, {
        attributes: true,
        childList: true,
        subtree: true,
    });
}


  //
  const menuNavigation = {
    animateBurger: function () {
      const burger = document.getElementById("burger"); // Usa ID invece di class
  
      if (!burger) {
        console.error("Burger element not found");
        return;
      }
  
      // Verifica che le linee esistano
      const lineMiddle = burger.querySelector(".line-middle");
      const lineTop = burger.querySelector(".line-top");
      const lineBottom = burger.querySelector(".line-bottom");
  
      if (!lineMiddle || !lineTop || !lineBottom) {
        console.error("One or more line elements not found");
        return;
      }
  
      // Crea la timeline di GSAP
      const timeline = gsap.timeline({ paused: true });
  
      timeline
        .to(lineMiddle, {
          width: "24px",
          duration: 0.2,
          ease: "power2.out",
        })
        .to(
          lineTop,
          {
            width: "40px",
            duration: 0.2,
            ease: "power2.out",
          },
          0
        )
        .to(
          lineBottom,
          {
            width: "40px",
            duration: 0.2,
            ease: "power2.out",
          },
          0
        );
  
      // Eventi hover
      burger.addEventListener("mouseenter", () => {
        timeline.play();
      });
  
      burger.addEventListener("mouseleave", () => {
        timeline.reverse();
      });
    },
    initializeHoverAnimations: function () {
      const boxes = document.querySelectorAll(".link-wrapper-menu");
  
      boxes.forEach((box) => {
        // Crea una timeline per hover
        const hoverTimeline = gsap.timeline({ paused: true });
  
        hoverTimeline.fromTo(
          box.querySelector(".icon-menu-link"),
          {
            x: "-15rem",
            scale: 0.5,
            opacity: 0,
          },
          {
            x: "-0.5rem",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(3)",
          },
          0
        );
        hoverTimeline.to(
          box.querySelector(".sublink"),
          {
            scale: 0.9,
            y: 5,
            duration: 0.5,            
            transformOrigin: "top left",
            ease: "power1.out",
          },
          0
        );
        hoverTimeline.to(
          box.querySelector(".link-heading"),
          {
            rotationZ: 3,
            x: "1rem",
            y: 5,
            scale: 1.2,
            duration: 0.3,
            ease: "power1.out",
            transformOrigin: "bottom left",
          },
          0.1
        );
  
        // Crea una timeline per touch
        const touchTimeline = gsap.timeline({ paused: true });
        touchTimeline.fromTo(
          box.querySelector(".icon-menu-link"),
          {
            x: "-15rem",
            scale: 0.5,
            opacity: 0,
          },
          {
            x: "-0.5rem",
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(3)",
          },
          0
        );
        touchTimeline.to(
          box.querySelector(".sublink"),
          {
            scale: 0.9,
            y: 5,
            duration: 0.5,           
            transformOrigin: "top left",
            ease: "power1.out",
          },
          0
        );
        touchTimeline.to(
          box.querySelector(".link-heading"),
          {
            rotationZ: 3,
            x: "1rem",
            y: 5,
            scale: 1.2,
            duration: 0.3,
            ease: "power1.out",
            transformOrigin: "bottom left",
          },
          0
        );
  
        // Gestisci gli eventi hover
        box.addEventListener("mouseenter", () => hoverTimeline.play());
        box.addEventListener("mouseleave", () => hoverTimeline.reverse());
  
        // Gestisci gli eventi touch
        box.addEventListener("touchstart", () => touchTimeline.play(), {
          passive: true,
        });
        box.addEventListener("touchend", () => touchTimeline.reverse(), {
          passive: true,
        });
      });
    },
    initializeSimpleHoverTouchAnimations: function () {
      const links = document.querySelectorAll(".link-text-menu");
  
      links.forEach((link) => {
        // Crea una timeline per hover
        const hoverTimeline = gsap.timeline({ paused: true });
  
        hoverTimeline.to(
          link,
          {
            rotationZ: 10, // leggera rotazione
            color: "#f06", // cambio colore del testo
            duration: 0.3,
            ease: "back.out(3)",
          },
          0
        );
  
        // Crea una timeline per touch
        const touchTimeline = gsap.timeline({ paused: true });
  
        touchTimeline.to(
          link,
          {
            rotationZ: 10, // leggera rotazione
            color: "#f06", // cambio colore del testo
            duration: 0.3,
            ease: "back.out(3)",
          },
          0
        );
  
        // Gestisci gli eventi hover
        link.addEventListener("mouseenter", () => hoverTimeline.play());
        link.addEventListener("mouseleave", () => hoverTimeline.reverse());
  
        // Gestisci gli eventi touch
        link.addEventListener("touchstart", () => touchTimeline.play(), {
          passive: true,
        });
        link.addEventListener("touchend", () => touchTimeline.reverse(), {
          passive: true,
        });
      });
    },
    animateLinkItemMagazine: function () {
      const linkItem = document.getElementById("link-magazine"); // Usa getElementById per l'ID
  
    if (!linkItem) {
      console.error("Elemento #link-item-Magazine non trovato");
      return;
    }
    const linkHoverTimeline = gsap.timeline({ paused: true });
  
    // Aggiungi le animazioni
    linkHoverTimeline
      .to(
        linkItem,
        {
          backgroundColor: "#ff006e",
          duration: 0.3,
          ease:"sine.inOut",       
        },    
      )       
      .to(
        [".h-magazine", ".sublink-first-menu"], 
        {
          color: "#faffec",
          duration: 0.3,
          ease: "power1.inOut",
        },"<"
      )
      .to(
        ".span-link-magazine",
        {
          color: "#0d0d0d",
          rotationZ: 10, 
          duration: 0.3,
          ease: "power1.inOut",
        },"<"
      );
  
    // Eventi hover e touch
    linkItem.addEventListener("mouseenter", () => linkHoverTimeline.play());
    linkItem.addEventListener("mouseleave", () => linkHoverTimeline.reverse());
  
    // Gestisci gli eventi touch
    linkItem.addEventListener("touchstart", () => linkHoverTimeline.play(), {
      passive: true,
    });
    linkItem.addEventListener("touchend", () => linkHoverTimeline.reverse(), {
      passive: true,
    });
  },
  shareBtnAnimation: function () {
    const shareBtns = document.querySelectorAll(".share-btn");

    shareBtns.forEach((btn) => {
      // Selezioniamo il div interno con la classe .svg-cont
      const svgCont = btn.querySelector(".svg-cont");

      // Creiamo un context per ottimizzare la gestione delle animazioni
      let context = gsap.context(() => {
        // Funzione di animazione per hover e touch
        function animateSvgCont(show) {
          gsap.to(svgCont, {
            duration: 0.3,
            opacity: show ? 1 : 0,
            right: show ? 0 : "auto",
            ease: "power1.out",
          });
        }

        // Eventi hover
        btn.addEventListener("mouseenter", () => animateSvgCont(true));
        btn.addEventListener("mouseleave", () => animateSvgCont(false));

        // Eventi touch (per dispositivi mobili)
        btn.addEventListener("touchstart", () => animateSvgCont(true));
        btn.addEventListener("touchend", () => animateSvgCont(false));
      }, btn); // Applichiamo il context al singolo button container
    });
  },
  
    init: function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        this.animateBurger();
      }
      this.initializeHoverAnimations();
      this.initializeSimpleHoverTouchAnimations();
      this.animateLinkItemMagazine();
      this.shareBtnAnimation();
    },
  };  
  //DATACOLOR
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
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });
        } else {
            console.warn(`Element ${element} does not have a valid data-color attribute.`);
        }
    });

    // Gestione del click per scrollare in cima alla pagina
    document.querySelectorAll('[data-scroll="top"]').forEach(button => {
        button.addEventListener('click', () => {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0, autoKill: true },
                ease: "power2.inOut"
            });
        });
    });
}
  //
  // SecondSection
  function secondSection(isHomePage = false) {
    if (isHomePage) {    
    }
  
    const mm = gsap.matchMedia();

    mm.add("(min-width: 320px) and (max-width: 767px)", () => {
        console.log("Mobile breakpoint active");

        document.querySelectorAll(".focus").forEach((focusElem) => {
            gsap.to(
                focusElem,                
                {
                    x: "10vw",
                    scale: 0.8,
                    opacity: 0.5,
                    y: "33%",
                    rotate: 90,
                    transformOrigin: "top left",
                    ease: "power1",
                    scrollTrigger: {
                        trigger: focusElem,
                        start: "top 20%",
                        end: "top top",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    invalidateOnRefresh: true,
                    },
                }
            );
        });
    });

    mm.add("(min-width: 768px) and (max-width: 991px)", () => {
        console.log("Tablet breakpoint active");

        document.querySelectorAll(".focus").forEach((focusElem) => {
            gsap.to(
                focusElem,                
                {
                    x: "12vw",
                    opacity: 0.5,
                    rotate: 90,
                    y: "50%",
                    transform: "translateY(-50%)",
                    transformOrigin: "top left",
                    ease: "power1",
                    scrollTrigger: {
                        trigger: focusElem,
                        start: "top 20%",
                        end: "top top",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    invalidateOnRefresh: true,
                    },
                }
            );
        });
    });

    mm.add("(min-width: 992px)", () => {
        console.log("Desktop breakpoint active");

        document.querySelectorAll(".focus").forEach((focusElem) => {
            gsap.to(
                focusElem,                
                {
                    x: "10vw",
                    opacity: 0.5,
                    rotate: 90,
                    y: "50%",
                    transform: "translateY(-50%)",
                    transformOrigin: "top left",
                    ease: "power1",
                    scrollTrigger: {
                        trigger: focusElem,
                        start: "top 10%",
                        end: "top top",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    invalidateOnRefresh: true,
                    },
                }
            );
        });
    });

    const containers = document.querySelectorAll(".path-container");
    const images = document.querySelectorAll(".img-target");
    
    gsap.matchMedia().add("(min-width: 320px) and (max-width: 991px)", () => {
        containers.forEach((container) => {
            const imgId = container.getAttribute("data-img-id");
            const image = imgId ? document.getElementById(imgId) : container.querySelector(".img-target");
            const customPathVectors = container.querySelectorAll(".path-vector");
    
            customPathVectors.forEach((customPathVector) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 70%",
                        end: "top top",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    invalidateOnRefresh: true,
                    },
                });
    
                tl.from(customPathVector, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    x: -200,
                    ease: "power1.out",
                });
    
                if (isHomePage) {
                    tl.to(customPathVector, {
                        rotation: 90,
                        x: "-0.6rem",
                        y: "0.6rem",
                        duration: 0.2,
                        ease: "power1.in",
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
                            scrub: true,
                    invalidateOnRefresh: true,
                            onEnter: () => {
                                gsap.to(images, {
                                    opacity: 0,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                                gsap.to(image, {
                                    opacity: 0.7,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                            },
                            onLeave: () => {
                                gsap.to(image, { opacity: 0, duration: 1, ease: "power1.out" });
                            },
                            onEnterBack: () => {
                                gsap.to(images, {
                                    opacity: 0,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                                gsap.to(image, {
                                    opacity: 0.7,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                            },
                            onLeaveBack: () => {
                                gsap.to(image, { opacity: 0, duration: 1, ease: "power1.out" });
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
            const image = imgId ? document.getElementById(imgId) : container.querySelector(".img-target");
            const customPathVectors = container.querySelectorAll(".path-vector");
    
            customPathVectors.forEach((customPathVector) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 70%",
                        end: "top top",
                        toggleActions: "play none none reverse",
                        scrub: true,
                    invalidateOnRefresh: true,
                    },
                });
    
                tl.from(customPathVector, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    x: -200,
                    ease: "power1.out",
                });
    
                if (isHomePage) {
                    tl.to(customPathVector, {
                        rotation: 90,
                        x: "-1rem",
                        y: "1rem",
                        duration: 0.2,
                        ease: "power1.in",
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
                            scrub: true,
                    invalidateOnRefresh: true,
                            onEnter: () => {
                                gsap.to(images, {
                                    opacity: 0,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                                gsap.to(image, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                            },
                            onLeave: () => {
                                gsap.to(image, { opacity: 0, duration: 1, ease: "power1.out" });
                            },
                            onEnterBack: () => {
                                gsap.to(images, {
                                    opacity: 0,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                                gsap.to(image, {
                                    opacity: 1,
                                    duration: 1,
                                    ease: "power1.out",
                                });
                            },
                            onLeaveBack: () => {
                                gsap.to(image, { opacity: 0, duration: 1, ease: "power1.out" });
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
              ease: "linear",
              scrollTrigger: {
                  trigger: imgTgContElem,
                  start: "top 20%",
                  end: "top top",
                  toggleActions: "play none none reverse",
                  scrub: true,
                    invalidateOnRefresh: true,
              },
          });
      });}
    
}
      
  //FUNZIONI PER LA CTA
  //info
  function info() {
    document.querySelectorAll(".cm-talk-content").forEach((talk) => {
      const serviceContainer = talk.querySelector(".cta-container");
      const plusBtn = talk.querySelector(".plus-btn-cta");
      const trigger = talk.querySelector(".cta-service-btn");
  
      let isPaused = false;
  
      // Funzione per gestire l'hover e il touch
      function handleHover() {
        if (!isPaused) {
          gsap.to(plusBtn, {
            scale: 1.5,
            rotation: 90,
            color: "#f06",
            duration: 0.5,
            ease: "ease.out",
          });
          gsap.to(
            plusBtn.querySelectorAll(".ellipse-47"),
            {
              stroke: "transparent",
              duration: 0.5,
              ease: "ease.out",
            },
            0
          );
        }
      }
  
      function handleHoverOut() {
        if (!isPaused) {
          gsap.to(plusBtn, {
            rotation: 0,
            scale: 1,
            color: "",
            duration: 0.5,
            ease: "ease.out",
          });
          gsap.to(
            plusBtn.querySelectorAll(".ellipse-47"),
            {
              stroke: "",
              duration: 0.5,
              ease: "ease.out",
            },
            0
          );
        }
      }
  
      // Aggiungi eventi hover e touch
      plusBtn.addEventListener("mouseenter", handleHover);
      plusBtn.addEventListener("mouseleave", handleHoverOut);
      plusBtn.addEventListener("touchstart", handleHover);
      plusBtn.addEventListener("touchend", handleHoverOut);
  
      trigger.addEventListener("click", () => {
        const isOpen = serviceContainer.classList.contains("open");
        if (isOpen) {
          // Close the service section
          gsap.to(serviceContainer, { height: 0, duration: 0.5 });
          gsap.to(plusBtn, {
            scale: 1,
            rotation: 0,
            color: "",
            duration: 0.5,
            ease: "ease.out",
          });
          gsap.to(
            plusBtn.querySelectorAll(".ellipse-47, .vector-9"),
            {
              stroke: "",
              duration: 0.5,
              ease: "ease.out",
            },
            0
          );
          serviceContainer.classList.remove("open");
          isPaused = false;
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
            scale: 1.5,
            rotation: 90,
            color: "#f06",
            duration: 0.5,
            ease: "ease.out",
          });
          gsap.to(
            plusBtn.querySelectorAll(".ellipse-47, .vector-9"),
            {
              stroke: "transparent",
              duration: 0.5,
              ease: "ease.out",
            },
            0
          );
          serviceContainer.classList.add("open");
          isPaused = true;
        }
      });
    });
  }
  
  //
  //CTA
  function ctaAnimations() {
    const boxes = document.querySelectorAll(".btn-cta");
  
    boxes.forEach((box) => {
      const gradientDiv = box.querySelector(".button-bg-gradient");
      const gradientLight = box.querySelector(".button-bg-gradient-light");
  
      if (!gradientDiv) {
        console.error("Element gradientDiv not found.");
        return;
      }
  
      const color1 = getComputedStyle(gradientDiv).getPropertyValue("--background-first").trim();
      const color2 = getComputedStyle(gradientDiv).getPropertyValue("--primary").trim();
  
      const createTimeline = () => {
        const animationTimeline = gsap.timeline({ paused: true });
        animationTimeline
          .to(
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
            {   ease: "sine.inOut",        
              opacity: 0,
              duration: 0.6,
            },
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
              scale:1.1,            
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
  
        loopTimeline
          .to(
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
  
        loopTimeline
          .to(
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
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () =>
            gsap.to(box, { x: 0, duration: 0.6, ease: "power2.out" }),
        });
      }
    });
  }
  
  //
  //videoPause
  function videoPause() {
    const videoContainers = document.querySelectorAll("div.w-background-video[data-pause-on-scroll]");
  
    if ('IntersectionObserver' in window) {
      const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
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
                scrub: true,
                invalidateOnRefresh: true,
                onLeave: () => video.pause(),
                onEnterBack: () => video.play(),
                onLeaveBack: () => video.pause(),
              });
  
              observer.unobserve(entry.target); // Smette di osservare una volta che il video è stato caricato
            }
          }
        });
      });
  
      videoContainers.forEach(container => {
        lazyVideoObserver.observe(container);
      });
    } else {
      // Fallback per browser che non supportano IntersectionObserver
      videoContainers.forEach(container => {
        const video = container.querySelector("video");
        if (video) {
          ScrollTrigger.create({
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: () => video.play(),
            onLeave: () => video.pause(),
            onEnterBack: () => video.play(),
            onLeaveBack: () => video.pause(),
          }, { passive: true });
        }
      });
    }
  }
  //
  //faq
  function toggleFaq() {
    document.querySelectorAll(".dropdown-container").forEach((faq) => {
      const faqContainer = faq.querySelector(".p-toggle");
      const dropBtn = faq.querySelector(".drop-toggle");
      const trigger = faq.querySelector(".dropdown-wrapper");
  
      trigger.addEventListener("click", () => {
        const isOpen = faqContainer.classList.contains("open");
        if (isOpen) {
          // Close the service section
          gsap.to(faqContainer, { height: 0, duration: 0.5 });
          gsap.to(dropBtn, {
            rotation: 0,
            duration: 0.5,
            color: "",
            ease: "ease.out",
          });
  
          faqContainer.classList.remove("open");
        } else {
          // Open the service section
          gsap.set(faqContainer, { height: "auto" });
          const height = faqContainer.offsetHeight;
          gsap.fromTo(
            faqContainer,
            { height: 0 },
            { height: height, duration: 0.5 }
          );
          gsap.to(dropBtn, {
            rotation: 180,
            duration: 0.5,
            color: "#f06",
            ease: "ease.out",
          });
  
          faqContainer.classList.add("open");
        }
      });
    });
  }
   //
  

  //Oggetto Portfolio
  const portfolioFunctions = {
    togglePortfolio: function () {
      document.querySelectorAll(".case-wrapper").forEach((cases) => {
        const caseContainer = cases.querySelector(".c-toggle");
        const dropBtn = cases.querySelector(".case-toggle");
        const trigger = cases.querySelector(".case-container");
  
        trigger.addEventListener("click", () => {
          const isOpen = caseContainer.classList.contains("open");
          if (isOpen) {
            // Close the service section
            gsap.to(caseContainer, { height: 0, duration: 0.5 });
            gsap.to(dropBtn, {
              rotation: 0,
              duration: 0.5,
              color: "",
              ease: "ease.out",
            });
  
            caseContainer.classList.remove("open");
          } else {
            // Open the service section
            gsap.set(caseContainer, { height: "auto" });
            const height = caseContainer.offsetHeight;
            gsap.fromTo(
              caseContainer,
              { height: 0 },
              { height: height, duration: 0.5 }
            );
            gsap.to(dropBtn, {
              rotation: 180,
              duration: 0.5,
              color: "#f06",
              ease: "ease.out",
            });
  
            caseContainer.classList.add("open");
          }
        });
      });
    },
    portfolioInfo: function () {
      let currentOpenContainer = null;
      let currentOpenButton = null;
  
      document.querySelectorAll(".div-content-portfolio").forEach((portfolio) => {
        const buttons = portfolio.querySelectorAll(".portfolio-btn-link");
        buttons.forEach((btn) => {
          const targetSelector = btn.getAttribute("data-btn");
          const serviceContainer = portfolio.querySelector(
            `.btn-link[data-btn="${targetSelector}"]`
          );
  
          // Funzione per gestire l'hover e il touch
          function handleHover() {
            if (!btn.classList.contains("active")) {
              gsap.to(btn.querySelector(".portfolio-btn"), {
                color: "#f06",
                rotation: 0,
                scale: 1.2,
                duration: 0.5,
                ease: "ease.out",
              });
              gsap.to(btn.querySelector(".text-btn-portfolio"), {
                color: "#f06",
                duration: 0.5,
                ease: "linear",
              });
            }
          }
  
          function handleHoverOut() {
            if (!btn.classList.contains("active")) {
              gsap.to(btn.querySelector(".portfolio-btn"), {
                color: "#f06",
                scale: 1,
                duration: 0.5,
                ease: "ease.out",
              });
              gsap.to(btn.querySelector(".text-btn-portfolio"), {
                color: "currentcolor",
                duration: 0.5,
                ease: "linear",
              });
            }
          }
  
          // Aggiungi eventi hover e touch
          btn.addEventListener("mouseenter", handleHover);
          btn.addEventListener("mouseleave", handleHoverOut);
          btn.addEventListener("touchstart", handleHover);
          btn.addEventListener("touchend", handleHoverOut);
  
          btn.addEventListener("click", () => {
            const isOpen = serviceContainer.classList.contains("open");
  
            if (
              currentOpenContainer &&
              currentOpenContainer !== serviceContainer
            ) {
              // Chiudi il container attualmente aperto
              gsap.to(currentOpenContainer, { height: 0, duration: 0.5 });
              currentOpenContainer.classList.remove("open");
              resetButtonState(currentOpenButton);
            }
  
            if (isOpen) {
              // Chiudi il container abbinato al pulsante
              gsap.to(serviceContainer, { height: 0, duration: 0.5 });
              serviceContainer.classList.remove("open");
              resetButtonState(btn);
              currentOpenContainer = null;
              currentOpenButton = null;
            } else {
              // Apri il container abbinato al pulsante
              gsap.set(serviceContainer, { height: "100%" });
              const height = serviceContainer.offsetHeight;
              gsap.fromTo(
                serviceContainer,
                { height: 0 },
                { height: height, duration: 0.5 }
              );
              serviceContainer.classList.add("open");
              currentOpenContainer = serviceContainer;
              currentOpenButton = btn;
              setButtonState(btn);
            }
          });
  
          function setButtonState(button) {
            button.classList.add("active");
            gsap.to(button.querySelector(".portfolio-btn"), {
              color: "#f06",
              rotation: 90,
              scale: 1.1,
              duration: 0.5,
              ease: "ease.out",
            });
            gsap.to(button.querySelector(".text-btn-portfolio"), {
              color: "#f06",
              duration: 0.5,
              ease: "linear",
            });
          }
  
          function resetButtonState(button) {
            if (button) {
              button.classList.remove("active");
              gsap.to(button.querySelector(".portfolio-btn"), {
                color: "#f06",
                rotation: 0,
                scale: 1,
                duration: 0.5,
                ease: "ease.out",
              });
              gsap.to(button.querySelector(".text-btn-portfolio"), {
                color: "currentcolor",
                duration: 0.5,
                ease: "linear",
              });
            }
          }
        });
      });
    },
    init: function () {
      this.togglePortfolio(); 
      this.portfolioInfo();      
    },
  };
  //
 
  //
  function initializeGSAPAnimations() {
    const tlLogo = gsap.timeline();
    const tld = gsap.timeline();
    const tle = gsap.timeline();
    const tls = gsap.timeline();
    const tli = gsap.timeline();
    const tlg = gsap.timeline();
    const tln = gsap.timeline();
    const tlPlus = gsap.timeline();
    const tlSviluppo = gsap.timeline();
  
    const masterTimeline = gsap.timeline({
      onComplete: () => {
        console.log("Tutte le animazioni sono completate");
       requestIdleCallback(() => {
    setTimeout(() => animaArrow(), 500);
    ScrollTrigger.refresh();
});
      },
    });

    masterTimeline
      .add(tlSviluppo, 0)
      .add(tlLogo, 0.8)
      .add(tld, 0.4)
      .add(tle, 1.3)
      .add(tlg, 2)
      .add(tls, 2)
      .add(tli, 3)
      .add(tln, 3)
      .add(tlPlus, 2.5);
  
    tld.to(".letter.d", {
      rotationY: 0,
      ease: "power2.out",
      duration: 1,
    });
  
    tlLogo
      .to("#Vect-1", {
        x: "0%",
        duration: 0.5,
        ease: "expo.out",
      })
      .to(
        "#Vect-2",
        {
          x: "0%",
          duration: 0.5,
          ease: "expo.out",
        },
        "<"
      )
      .to(
        "#Mask-brand",
        {
          rotate: -360,
          transformOrigin: "center",
          duration: 0.8,
          ease: "linear",
        },
        "-=0.1"
      );
  
    tle
      .to(".svg-letter-ee", {
        y: "0%",
        ease: "elastic.out",
        duration: 1,
      })
      .to(".h2-tagline", {
        rotationX: 0,        
        duration: 0.5,
        ease: "power2.out",
      },"-=0.8")
      .to(".svg-letter-ee", {
        rotationY: 90,
        ease: "linear",
        duration: 0.5,
      })
      .to(
        ".letter.ee",
        {
          rotationY: 0,
          ease: "linear",
          duration: 0.5,
        },
        "-=0.25"
      );
  
    tls.to(".letter.s", {
      y: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
  
    tlg
      .to(".letter.g", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .from(
        ".letter.g",
        {
          rotationZ: -720,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      )
      .to(".letter.g", {
        rotationZ: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(
        ".svg-letter-e",
        {
          rotationY: -90,
          transformOrigin: "right",
          duration: 0.5,
          ease: "linear",
        },
        "-=1"
      )
      .to(
        ".letter.e",
        {
          rotationY: 0,
          transformOrigin: "left",
          duration: 0.5,
          ease: "linear",
        },
        "-=0.5"
      );
  
    tli
      .to(".letter.i", {
        y: "0%",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        ".letter.agency",
        {
          x: "0%",
          duration: 0.5,
          ease: "expo.out",
        },
        "-=0.4"
      );
  
    tln
      .to(".letter.n", {
        x: "0%",
        duration: 1,
        ease: "power2.inOut",
      })
      .to(".letter.d", {
        y: "-50%",
        ease: "power2.inOut",
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      })
      .to(
        ".letter.web",
        {
          y: "0%",
          duration: 0.5,
          ease: "expo.out",
        },
        "-=0.3"
      )
      .from(
        "#asterix-mask",
        {
          rotate: -180,
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        "#web1",
        {
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );
  
    tlSviluppo      
      .to(
        ".span-parentesi1, .span-parentesi2",
        {
          rotationY: 720, // Ruotate fuori dallo schermo
          duration: 2,
          ease: "power2.inOut",
        }        
      )
      .to(".span-parentesi2", {
        x: "0%",
        duration: 0.6, // Durata dell'espansione
        ease: "power2.out",
      })
      .to(
        ".btn-cta.herotop",
        {
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".letter.hidden, .letter.p2, .svg-letter-o",
        {
          rotationY: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.6"
      )
      .to(".letter.p2", {
        rotationY: "0",
        duration: 1,
        ease: "power2.out",
      })
      .to(
        ".letter.hidden",
        {
          y: "100%",
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.6"
      )
      .to(
        ".letter.sviluppo",
        {
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        "<"
      );
  
    tlPlus
      .to("#nav", {
        y: "0rem",
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        ".div-scorri",
        {
          opacity: 1,
          y: "0rem",
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );
  }
    // Animazione freccia
    function animaArrow() {
      // Anima da web1 a web2
      let tlWeb1to2 = gsap.timeline();
      let tlWeb2to3 = gsap.timeline();
      let tlWeb3to4 = gsap.timeline();
      let tlWeb4to1 = gsap.timeline();
    
      tlWeb1to2
        .to("#asterix-mask", {
          delay: 0.5,    
          rotate: "+=180",
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          "#web1",
          {
            x: "200%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          "#web2",
          {
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to("#web1", { opacity: 0, x: "-200%", duration: 0 })
        .to("#web1", { opacity: 1 });
    
      // Anima da web2 a web3
      tlWeb2to3
        .to("#asterix-mask", {
          delay: 0.5,          
          rotate: "+=180",
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          "#web2",
          {
            x: "200%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          "#web3",
          {
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to("#web2", { opacity: 0, x: "-200%", duration: 0 })
        .to("#web2", { opacity: 1 });
    
      // Anima da web3 a web4
      tlWeb3to4
        .to("#asterix-mask", {
          delay: 0.5,          
          rotate: "+=180",
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          "#web3",
          {
            x: "200%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          "#web4",
          {
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to("#web3", { opacity: 0, x: "-200%", duration: 0 })
        .to("#web3", { opacity: 1 });
    
      // Anima da web4 a web1 (riavvio del ciclo)
      tlWeb4to1
        .to("#asterix-mask", {
          delay: 0.5,          
          rotate: "+=180",
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          "#web4",
          {
            x: "200%",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          "#web1",
          {
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .to("#web4", { opacity: 0, x: "-200%", duration: 0 })
        .to("#web4", { opacity: 1 });
    
      // Metti tutte le timeline in una principale con ripetizione infinita
      let webAnimation = gsap.timeline({ repeat: -1 });
      webAnimation.add(tlWeb1to2).add(tlWeb2to3).add(tlWeb3to4).add(tlWeb4to1);
    
      // Animazione rotazione continua del design
      let designAnimation = gsap.timeline({ repeat: -1 });
      designAnimation
        .to(".letter.i", {         
          rotationX: -90,
          transformOrigin: "center",
          duration: 1,
          ease: "power2.inOut",
        })
        .to(".svg-letter-i", {
          transformOrigin: "center",
          rotationX: 0,
          duration: 1,
          ease: "back.out(3)",
        })
        .to(":root", { 
          css: {"--linear-grad2": "#e0ff0d"} ,
          duration: 1,
          ease: "back.out(3)",
        },"<")
        .to(".svg-letter-i", { 
        	delay: 1,
          rotationX: -270,
          transformOrigin: "center",
          duration: 1,
          ease: "back.out(3)",
        })
        .to(".letter.i", {
          transformOrigin: "center",
          rotationX: 0,
          duration: 1,
          ease: "back.out(3)",
        })
        .to(":root", { 
          css: {"--linear-grad2": ""} ,
          duration: 1,
          ease: "back.out(3)",
        },"<");
    
      let scorriAnimation = gsap.timeline({ repeat: -1 });
      scorriAnimation
        .to(".span-scorri", {
          delay: 2,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          ".freccia-scorri",
          {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        .to(".freccia-scorri", {
          delay: 2,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          ".span-scorri",
          {
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.5"
        );
    
      // Ferma le animazioni quando ".hero" esce dalla viewport
      ScrollTrigger.create({
        trigger: ".hero",
        start: "bottom center",
        end: "bottom top",
        scrub: true,     
        invalidateOnRefresh: true,
        onEnter: () => {
          webAnimation.pause();
          designAnimation.pause();
          scorriAnimation.pause();
        },
        onLeaveBack: () => {
          webAnimation.play();
          designAnimation.play();
          scorriAnimation.play();
        },
      });
    
      // Avvia tutte le animazioni
      webAnimation.play();
      designAnimation.play();
      scorriAnimation.play();
    }


 function initializeScrollFlipAnimations() {
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }

  document.querySelectorAll("[tr-scrollflip-element='component']").forEach(function (componentEl) {
    const originEl = componentEl.querySelectorAll("[tr-scrollflip-element='origin']");
    const targetEl = componentEl.querySelectorAll("[tr-scrollflip-element='target']");
    const scrubStartEl = componentEl.querySelector("[tr-scrollflip-scrubstart]");
    const scrubEndEl = componentEl.querySelector("[tr-scrollflip-scrubend]");

    const startSetting = attr("top top", scrubStartEl.getAttribute("tr-scrollflip-scrubstart"));
    const endSetting = attr("bottom bottom", scrubEndEl.getAttribute("tr-scrollflip-scrubend"));
    const staggerSpeedSetting = attr(0, componentEl.getAttribute("tr-scrollflip-staggerspeed"));
    const staggerDirectionSetting = attr("start", componentEl.getAttribute("tr-scrollflip-staggerdirection"));
    const scaleSetting = attr(false, componentEl.getAttribute("tr-scrollflip-scale"));
    const breakpointSetting = attr(0, componentEl.getAttribute("tr-scrollflip-breakpoint"));

    let timeline;

    function createTimeline() {
      if (timeline) {
        timeline.kill();
        gsap.set(targetEl, { clearProps: "all" });
      }

      document.body.classList.add("scrollflip-relative");
      gsap.matchMedia().add(`(min-width: ${breakpointSetting}px)`, () => {
        const state = Flip.getState(originEl);
        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scrubStartEl,
            endTrigger: scrubEndEl,
            start: startSetting,
            end: endSetting,
            scrub: true,
            invalidateOnRefresh: true,                    
          },
        });
        timeline.add(
          Flip.from(state, {
            targets: targetEl,
            scale: scaleSetting,
            stagger: {
              amount: staggerSpeedSetting,
              from: staggerDirectionSetting,
            },
          })
        );
      });
      document.body.classList.remove("scrollflip-relative");
    }

    createTimeline();

    window.addEventListener(
      "resize",
      debounce(() => {
        createTimeline();
      }, 250)
    );
  });
}
  //fine flip
  //scrollTrigger
  function createScrollTriggerHero() {
    ScrollTrigger.create({
      trigger: ".hero-trigger",
      start: "top 95%",
      end: "top 85%",
      invalidateOnRefresh: true,
      scrub: true,
      onEnter: () => {
        gsap.to(
          ".brand_header",
          {
            y: "-10rem",
            opacity: 0,
            ease: "none",
            duration: 1,
          },
          "<"
        );
      },
      onLeaveBack: () => {
        gsap.to(
          ".brand_header",
          {
            y: 0,
            opacity: 1,
            ease: "none",
            duration: 1,
          },
          "<"
        );
      },
    });
    const navbar = document.querySelector("#nav"); // Seleziona la navbar
    const heroCta = document.querySelector(".btn-cta.herotop");
  
    ScrollTrigger.create({
      trigger: heroCta,
      start: () => `top ${navbar.offsetHeight}px`,
      end: "bottom top",     
      invalidateOnRefresh: true,
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        gsap
          .timeline()
          .to("#nav", {
            boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.4)",
            duration: 0.5,
            ease: "power4.inOut",
          })
          .to(
            "#cta-nav",
            {
              y: 0,
              duration: 0.3,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".header",
            {
              height: "0rem",
              duration: 0.3,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".div-scorri",
            {
              rotationX: 90,
              transformOrigin: "bottom",
              duration: 0.5,
              ease: "power4.inOut",
              stagger: { amount: 0.3 },
            },
            "<"
          );
      },
      onLeaveBack: () => {
        gsap
          .timeline()
          .to(
            "#nav",
            {
              boxShadow: "none",
              duration: 0.5,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            "#cta-nav",
            {
              y: "-5rem",
              duration: 0.3,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".header",
            {
              height: "",
              duration: 0.3,
              ease: "power4.inOut",
            },
            "-=0.2"
          )
          .to(
            ".div-scorri",
            {
              rotationX: 0,
              transformOrigin: "bottom",
              duration: 0.5,
              ease: "power4.inOut",
              stagger: { amount: 0.3 },
            },
            "<"
          );
      },
    });    
  }
  //
//CECO
const cecoStretegy = {
  setupCecoStrategy: function () {
    let cecoSplit = new SplitType(".ceco-heading", {
      types: "words",
      tagName: "span",
    });

    let animationCeco = gsap.fromTo(
      ".ceco-heading .word",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: { amount: 0.5 },
      }
    );

    // Crea il ScrollTrigger e collega l'animazione
    ScrollTrigger.create({
      trigger: "#ceco",
      start: "top 30%",
      end: "bottom bottom",
      toggleActions: "play none none resume",
      animation: animationCeco,
      invalidateOnRefresh: true,
      scrub: true,
    });

    let isMobile = window.innerWidth < 768;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-ceco",
        start: "bottom 80%",
        end: "bottom top",        
        invalidateOnRefresh: true,
        scrub: true,
      },
    });
    // Animazioni per tutte le dimensioni
    tl.to(".top-wrapper", {
      y: "-55vh",
      duration: 1,
      borderRadius: "1rem"      
    })
      .to(
        ".ceco-heading",
        {
          opacity: 0,
          duration: 1,
        },
        "<"
      )
      .fromTo(
        ".inner-section",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        "<"
      );
    if (isMobile) {
      tl.to(
        ".bottom-wrapper",
        {
          y: "70vh",
          duration: 1,
          borderRadius: "1rem",
        },
        "<"
      );
    } else {
      // Movimento di bottom-wrapper per desktop e tablet
      tl.to(
        ".bottom-wrapper",
        {
          y: "60vh",
          duration: 1,
          borderRadius: "1rem"          
        },
        "<"
      );
    }
  },
  toggleCeco: function () {
    let currentOpenContainer = null;
    const pageWrapper = document.querySelector(".page-wrapper");

    document.querySelectorAll("#ceco .card-item").forEach((btn) => {
      const targetSelector = btn.getAttribute("data-ceco");

      const serviceContainer = document.querySelector(
        `.ceco-popup[data-ceco="${targetSelector}"]`
      );

      if (!serviceContainer) {
        console.error(`Service container for ${targetSelector} not found.`);
        return;
      }

      // Funzione per gestire l'hover e il touch
      function handleHover() {
        if (!btn.classList.contains("active")) {
          gsap.to(btn.querySelector(".card-item-wrapper"), {
            borderBottomRightRadius: "1rem",
            borderBottomLeftRadius: "15rem",
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(btn.querySelector(".plus-btn-ceco"), {
            color: "#faffec",
            rotation: 90,
            scale: 1.1,
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(btn.querySelectorAll(".vector-8, .vector-9"), {
            strokeWidth: "1.5",
            duration: 0.5,
            ease: "ease.out",
          });
        }
      }

      function handleHoverOut() {
        if (!btn.classList.contains("active")) {
          gsap.to(btn.querySelector(".card-item-wrapper"), {
            borderBottomRightRadius: "10rem",
            borderBottomLeftRadius: "1rem",
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(btn.querySelector(".plus-btn-ceco"), {
            color: "",
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(btn.querySelectorAll(".vector-8, .vector-9"), {
            strokeWidth: "",
            duration: 0.5,
            ease: "ease.out",
          });
        }
      }
      // Aggiungi eventi hover e touch
      btn.addEventListener("mouseenter", handleHover);
      btn.addEventListener("mouseleave", handleHoverOut);
      btn.addEventListener("touchstart", handleHover);
      btn.addEventListener("touchend", handleHoverOut);

      btn.addEventListener("click", () => {
        const isOpen = serviceContainer.classList.contains("open");

        if (currentOpenContainer && currentOpenContainer !== serviceContainer) {
          // Chiudi il container attualmente aperto
          gsap.to(currentOpenContainer, {
            opacity: 0,
            height: 0,
            duration: 0.5,
          });
          currentOpenContainer.classList.remove("open");
          currentOpenContainer = null;
          gsap.to(pageWrapper, { opacity: 1, duration: 0.5 });
        }

        if (isOpen) {
          // Chiudi il container abbinato al pulsante
          gsap.to(serviceContainer, { opacity: 0, height: 0, duration: 0.5 });
          serviceContainer.classList.remove("open");
          currentOpenContainer = null;
          gsap.to(pageWrapper, { opacity: 1, duration: 0.5 });
        } else {
          // Apri il container abbinato al pulsante
          gsap.set(serviceContainer, { height: "auto" });
          const height = serviceContainer.offsetHeight;
          gsap.fromTo(
            serviceContainer,
            { height: 0 },
            { height: height, duration: 0.5 }
          );
          gsap.to(serviceContainer, { opacity: 1, duration: 0.5 });
          serviceContainer.classList.add("open");
          currentOpenContainer = serviceContainer;
          gsap.to(pageWrapper, { opacity: 0.5, duration: 0.5 });
        }
      });

      // Aggiungi evento per il pulsante di chiusura
      const closeButton = serviceContainer.querySelector(".popup-close");
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          gsap.to(serviceContainer, { opacity: 0, height: 0, duration: 0.5 });
          serviceContainer.classList.remove("open");
          currentOpenContainer = null;
          gsap.to(pageWrapper, { opacity: 1, duration: 0.5 });
        });
      } else {
        console.error(
          `Close button not found in service container for ${targetSelector}`
        );
      }
    });
  },
  changeCSSVariablesOnScroll: function () {
    const originalNavColor = "transparent";
    const newNavColor = "#0d0d0d";

    // Funzione per cambiare il colore di sfondo della navbar
    function changeNavColor(color) {
      gsap.to(".background-nav", {
        backgroundColor: color,
        duration: 0,
        ease: "none",
      });
    }
    // Quando il bottom di .trigger-ceco-2 ha scrollato verso l'alto di 100vh
    ScrollTrigger.create({
      trigger: ".trigger-ceco-2",
      start: "top+=100vh top",
      invalidateOnRefresh: true,
      scrub: true,
      onEnter: () => changeNavColor(newNavColor), 
      onLeaveBack: () => changeNavColor(originalNavColor), 
    });

    ScrollTrigger.create({
      trigger: ".trigger-ceco-2",
      start: "bottom top",
      invalidateOnRefresh: true,
      scrub: true,
      onEnterBack: () => changeNavColor(newNavColor), // Cambia il colore al nuovo
      onLeave: () => changeNavColor(originalNavColor), // Ripristina il colore originale
    });
  },
  animateCecoOnScroll: function () {
    function startContinuousRotation() {
      // Rotazione continua in senso orario per ceco-element
      gsap.to(".ceco-element", {
        rotation: "+=360",
        duration: 10,
        ease: "none",
        repeat: -1,
      });

      // Rotazione continua in senso antiorario per ceco-graphic-item
      gsap.to(".ceco-graphic-item", {
        rotation: "-=360",
        duration: 10,
        ease: "none",
        repeat: -1,
      });
    }
    // Quando il bottom di .trigger-ceco-2 ha scrollato verso l'alto di 80vh
    ScrollTrigger.create({
      trigger: ".trigger-ceco-2",
      start: "top+=80vh top",
      invalidateOnRefresh: true,
      scrub: true,
      onEnter: startContinuousRotation,
      onLeaveBack: () => {
        // Fermare l'animazione e resettare la rotazione quando si torna indietro
        gsap.set(".ceco-element", { rotation: 0 });
        gsap.set(".ceco-graphic-item", { rotation: 0 });
        ScrollTrigger.refresh(); // Assicura che ScrollTrigger sia aggiornato
      },
    });
  },
  init: function() {
    this.setupCecoStrategy();
    this.toggleCeco();
    this.changeCSSVariablesOnScroll();
    this.animateCecoOnScroll();
  }
};
//
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
    const swiperContainer = document.querySelector('.swiper-container-home');
    swiperContainer.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiperContainer.addEventListener('mouseleave', () => swiper.autoplay.start());

    swiperContainer.addEventListener('touchstart', () => swiper.autoplay.stop());
    swiperContainer.addEventListener('touchend', () => swiper.autoplay.start());
    
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
  

function logoAnima() {
    // Seleziona tutti gli elementi con la classe .logo-cont-wrapper
    const logos = document.querySelectorAll(".logo-cont-wrapper");
  
     logos.forEach((logo) => {
      const anim = gsap.fromTo(
        logo,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          paused: true,
        }
      );
  
      ScrollTrigger.create({
        trigger: logo,
        start: "top 80%", 
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: true,
        onEnter: () => anim.play(),
        onEnterBack: () => anim.play(),
        onLeave: () => anim.reverse(),
        onLeaveBack: () => anim.reverse(),
        toggleActions: "play none none reverse", 
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
        delay:1500,
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

    const swiperContainer = document.querySelector('.swiper-container');
    swiperContainer.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiperContainer.addEventListener('mouseleave', () => swiper.autoplay.start());

    swiperContainer.addEventListener('touchstart', () => swiper.autoplay.stop());
    swiperContainer.addEventListener('touchend', () => swiper.autoplay.start());
  
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
  
  //
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
            stroke: "#f06",
            duration: 0.5,
          });
          serviceContainer.classList.add("open");
        }
      });
    });
  }
  //
  
  function toggleButtonAnimation() {
    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleCircle = toggleBtn.querySelector(".toggle_btn_circle");
    const number = document.querySelectorAll(".number");
    //const textToggle1 = document.getElementById("text-toggle1");
    //const textToggle2 = document.getElementById("text-toggle2");
  
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
        gsap.to(toggleBtn, { backgroundColor: "var(--ciano)", duration: 0.3 });
        gsap.to(number, { color: "var(--ciano)", duration: 0.3 });
        //gsap.to(textToggle1, { color: "var(--soft-white)", duration: 0.3 });
        //gsap.to(textToggle2, { color: "var(--ciano)", duration: 0.3 });
      } else {
        // Sposta il cerchio a sinistra
        gsap.to(toggleCircle, { x: 0, duration: 0.3 });
  
        // Ripristina i colori originali
        gsap.to(toggleBtn, { backgroundColor: "", duration: 0.3 });
        gsap.to(number, { color: "", duration: 0.3 });
        //gsap.to(textToggle1, { color: "", duration: 0.3 });
        //gsap.to(textToggle2, { color: "", duration: 0.3 });
      }
  
      // Chiama la funzione per cambiare i prezzi
      changePrice(isActive);
    }
  
    toggleBtn.addEventListener("click", toggle);
    toggleBtn.addEventListener("touchstart", toggle);
  }
  //PAGINA CONTATTI
   //calendar
   function calendar() {
    var inputFields = document.querySelectorAll(".form-text-field-2");
    var calendarModal = document.getElementById("calendar-modal");
    var timeSelectionModal = document.getElementById("time-selection-modal");
    var timeSelectionEl = document.getElementById("time-selection");
    var calendarEl = document.getElementById("calendar");
    var currentInputField;
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      firstDay: 1, // Set the first day of the week to Monday
      selectable: true,
      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next",
      },
      locale: "it",
      buttonText: {
        today: "oggi",
      },
      dayHeaderFormat: { weekday: "short" },
      selectAllow: function (selectInfo) {
        // Disallow selection on weekends (Saturday is 5, Sunday is 6)
        var day = selectInfo.start.getUTCDay();
        console.log("Checking if day is selectable:", day); // Log for debugging
        return day !== 5 && day !== 6;
      },
      events: function (fetchInfo, successCallback, failureCallback) {
        console.log(
          "Fetching events for range: ",
          fetchInfo.startStr,
          " to ",
          fetchInfo.endStr
        );
        fetch(
          "https://us-central1-webflow-project---calltoaction.cloudfunctions.net/getCalendarEvents",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              timeMin: fetchInfo.startStr,
              timeMax: fetchInfo.endStr,
            }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              console.error("Network response was not ok ", response.statusText);
              throw new Error(
                "Network response was not ok " + response.statusText
              );
            }
            return response.json();
          })
          .then((events) => {
            console.log("Events fetched from backend: ", events);
            // Nascondere gli eventi nel calendario impostando il display su 'none'
            events.forEach((event) => {
              event.className = "hidden-event";
            });
            successCallback(events);
          })
          .catch((err) => {
            console.error("Error fetching events: ", err);
            failureCallback(err);
          });
      },
      select: function (info) {
        var day = info.start.getUTCDay();
        if (day === 5 || day === 6) {
          console.log("Selected day is a weekend, not allowed."); // Log for debugging
          return; // Ensure weekends are not selectable
        }
        console.log("Date selected: ", info.start);
        openTimeSelection(info.start);
      },
      dateClick: function (info) {
        var day = info.date.getUTCDay();
        if (day === 5 || day === 6) {
          console.log("Clicked day is a weekend, not allowed."); // Log for debugging
          return; // Ensure weekends are not clickable
        }
        console.log("Date clicked: ", info.date);
        openTimeSelection(info.date);
      },
      eventOverlap: false,
      selectOverlap: function (event) {
        return !event; // disable selection if there is an event
      },
      eventBackgroundColor: "red", // color for occupied events
    });
  
    calendar.render();
  
    inputFields.forEach(function (inputField) {
      inputField.addEventListener("click", function () {
        console.log("Input field clicked: ", inputField);
        calendarModal.style.display = "block";
        calendar.updateSize(); // Aggiorna la dimensione del calendario alla prima apertura
        currentInputField = inputField;
      });
    });
  
    function openTimeSelection(date) {
      var day = date.getUTCDay();
      if (day === 5 || day === 6) {
        console.log("Day is a weekend, not allowed for time selection."); // Log for debugging
        return; // Ensure weekends are not selectable
      }
  
      console.log("Opening time selection for date: ", date);
      timeSelectionEl.innerHTML = "";
      timeSelectionModal.style.display = "block";
  
      var times = [];
      for (var hour = 10; hour <= 19; hour++) {
        times.push({ hour: hour, minute: 0 });
        times.push({ hour: hour, minute: 30 });
      }
      times.push({ hour: 20, minute: 0 });
  
      times.forEach(function (time) {
        var dateTime = new Date(date);
        dateTime.setHours(time.hour, time.minute, 0, 0);
        if (!isTimeSlotOccupied(dateTime)) {
          var button = document.createElement("button");
          button.innerText =
            ("0" + time.hour).slice(-2) + ":" + ("0" + time.minute).slice(-2);
          button.addEventListener("click", function () {
            var formattedDate =
              ("0" + date.getDate()).slice(-2) +
              "/" +
              ("0" + (date.getMonth() + 1)).slice(-2) +
              "/" +
              date.getFullYear() +
              " " +
              button.innerText;
            console.log("Selected Date: ", formattedDate);
            currentInputField.value = formattedDate;
            timeSelectionModal.style.display = "none";
            calendarModal.style.display = "none";
          });
          timeSelectionEl.appendChild(button);
        }
      });
    }
    function isTimeSlotOccupied(dateTime) {
      var events = calendar.getEvents();
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var start = new Date(event.start);
        var end = new Date(event.end);
        if (dateTime >= start && dateTime < end) {
          return true;
        }
      }
      return false;
    }
  
    document.addEventListener("click", function (event) {
      if (
        !calendarModal.contains(event.target) &&
        !timeSelectionModal.contains(event.target) &&
        !event.target.classList.contains("form-text-field-2")
      ) {
        calendarModal.style.display = "none";
        timeSelectionModal.style.display = "none";
      }
    });
  }
  function contactSelection() {
    var buttons = document.querySelectorAll("[data-contact-target]");
    var forms = document.querySelectorAll(".form-component");
    var contactSelection = document.querySelector(".contact-selection");
    var backButtons = document.querySelectorAll(".back-selection");
    var images = document.querySelectorAll(".image-form-cover");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var target = button.getAttribute("data-contact-target");
        var form = document.querySelector(
          '.form-component[data-contact-origin="' + target + '"]'
        );
        var image = document.querySelector(
          '.image-form-cover[data-contact-target="' + target + '"]'
        );
  
        // Nascondi tutti i form
        forms.forEach(function (f) {
          gsap.to(f, { height: 0, duration: 0.5 });
        });
  
        // Nascondi tutte le immagini
        images.forEach(function (img) {
          gsap.to(img, { opacity: 0, duration: 0.5 });
        });
  
        // Animare l'altezza di .contact-selection a 0 se il target è diverso da "selection"
        if (target !== "selection") {
          gsap.to(contactSelection, {
            height: 0,
            duration: 0.5,
            onComplete: function () {
              contactSelection.style.display = "none";
            },
          });
        }
  
        // Delay e poi animare l'altezza del form specifico ad auto
        if (form) {
          gsap.to(form, { height: "auto", duration: 0.5, delay: 0.5 });
        }
  
        // Mostra l'immagine corrispondente
        if (image) {
          gsap.to(image, { opacity: 0.5, duration: 0.5, delay: 0.5 });
        }
      });
    });
  
    backButtons.forEach(function (backButton) {
      backButton.addEventListener("click", function () {
        var form = backButton.closest(".form-component");
        var target = backButton.getAttribute("data-contact-target");
  
        // Animare l'altezza del form a 0
        if (form) {
          gsap.to(form, {
            height: 0,
            duration: 0.5,
            onComplete: function () {
              form.style.height = "0";
            },
          });
        }
  
        // Nascondi tutte le immagini
        images.forEach(function (img) {
          gsap.to(img, { opacity: 0, duration: 0.5 });
        });
  
        // Delay e poi animare l'altezza di .contact-selection ad auto se il target è "selection"
        if (target === "selection") {
          gsap.set(contactSelection, { display: "flex" });
          gsap.to(contactSelection, {
            height: "auto",
            duration: 0.5,
            delay: 0.5,
          });
  
          // Mostra l'immagine di default
          var defaultImage = document.querySelector(
            '.image-form-cover[data-contact-target="0"]'
          );
          if (defaultImage) {
            gsap.to(defaultImage, { opacity: 0.5, duration: 0.5, delay: 0.5 });
          }
        }
      });
    });
  }
//funzione per l'animazione ingresso Servizio in HOME e ABOUT
function serviceWrapper() {
  gsap.set(".color-cover", { width: "101%" });

  document
    .querySelectorAll(".service-wrapper-container")
    .forEach((container) => {
      ScrollTrigger.create({
        trigger: container,
        start: "top 60%",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: true,
        toggleActions: "play none none none",
        onEnter: () => {
          let tl = gsap.timeline();
          // Animazione delle parole
          tl.to(container.querySelector(".color-cover"), {
            width: "auto",
            duration: 0.6,
            ease: "power2.inOut",
          });

          if (window.innerWidth > 992) {
            tl.from(
              container.querySelectorAll(".list"),
              {
                opacity: 0,
                y: -200,
                duration: 1,
                stagger: 0.1,
                ease: "back.out(1.7)",
                onComplete: () => {
                  container
                    .querySelectorAll(".list")
                    .forEach((el) => (el.style = ""));
                },
              },
              "<"
            );
          } else {
            tl.from(
              container.querySelectorAll(".list"),
              {
                delay: 0.2,
                opacity: 0,
                x: -100,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)",
                onComplete: () => {
                  container
                    .querySelectorAll(".list")
                    .forEach((el) => (el.style = ""));
                },
              },
              "<"
            );
          }
        },
      });
    });  
}
//funzione per l'animazione ingresso Servizio in pagina
    function servicePageWrapper() {
      gsap.set(".color-cover", { width: "101%" });      
    
      // Seleziona tutte le sezioni che devono essere animate
      document.querySelectorAll(".service-wrapper-container").forEach(container => {     
   
        
        // Crea il trigger per l'animazione generale
        ScrollTrigger.create({
          trigger: container,
          start: "top 60%",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          scrub: true,
          toggleActions: "play none none none",
          onEnter: () => {           
            // Animazione della cover
            gsap.to(container.querySelector(".color-cover"), {
            width: "auto",
            duration: 0.6,
            ease: "power2.inOut",
            })
          },
        });
      });       
    
    }
    
    function transitionHome() {
      document.querySelectorAll("a:not(.excluded-class)").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
          let currentUrl = anchor.getAttribute("href");
          const isMobile = window.innerWidth <= 767;
          const delay = isMobile ? parseInt(anchor.getAttribute("data-delay"), 10) : 0;
  
          if (anchor.hostname === window.location.hostname && !currentUrl.includes("#") && anchor.getAttribute("target") !== "_blank") {
            e.preventDefault();
  
            const navigate = () => {
              let tl = gsap.timeline({ onComplete: () => (window.location.href = currentUrl) });
              tl.fromTo(".page-wrapper, .navbar, .menu-wrapper", { xPercent: 0 }, { xPercent: 100, opacity: 0 });
            };
  
            if (delay) {
              setTimeout(navigate, delay);
            } else {
              navigate();
            }
          }
        });
      });
  
    window.onpageshow = function(event) {
      if (event.persisted) {
        window.location.reload();
      } else {
        ScrollTrigger.refresh();
      }
    };
    }

    function transitionPage() {
      let tl1 = gsap.timeline();  
  
      // Controlla se esiste .cover-page prima di animarla
      if (document.querySelector(".cover-page")) {
        tl1.to(".cover-page", {
          opacity: 1,
          ease: "power2.out"
        });
      }
  
      tl1.to(".page-heading-wrapper", {
        opacity: 1,
        x: "0rem",
        ease: "power2.out",
      });
  
      tl1.to("#nav", {
        y: "0rem",
        ease: "power2.out"
      });
  
      // link click
      $("a:not(.excluded-class)").on("click", function (e) {
        let currentUrl = $(this).attr("href");
        const isMobile = window.innerWidth <= 767;
        const delay = isMobile ? parseInt($(this).attr("data-delay"), 10) : 0;
  
        if (
          $(this).prop("hostname") === window.location.host &&
          !currentUrl.includes("#") &&
          $(this).attr("target") !== "_blank"
        ) {
          e.preventDefault();
  
          if (delay) {
            setTimeout(() => {
              let tl = gsap.timeline({
                onComplete: () => (window.location.href = currentUrl),
              });
  
              tl.fromTo(
                ".page-wrapper, #nav, .menu-wrapper",
                { xPercent: 0 },
                { xPercent: 100, opacity: 0 }
              );
            }, delay);
          } else {
            let tl = gsap.timeline({
              onComplete: () => (window.location.href = currentUrl),
            });
  
            tl.fromTo(
              ".page-wrapper, #nav, .menu-wrapper",
              { xPercent: 0 },
              { xPercent: 100, opacity: 0 }
            );
          }
        }
      });
      window.onpageshow = function (event) {
        if (event.persisted) window.location.reload();
      };
    }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const propositoAnimation = {
    initializeSwiper: function () {
         const swiperContainer = document.querySelector(".related-articles-wrapper");
      
        if (swiperContainer) {
          // Verifica ripetutamente la presenza dei pulsanti di navigazione
          const checkButtonsInterval = setInterval(() => {
            const nextButton = document.querySelector(".swiper-button-next");
            const prevButton = document.querySelector(".swiper-button-prev");
      
            if (nextButton && prevButton) {
              try {
                const swiperPost = new Swiper(".related-articles-wrapper", {
                  slidesPerView: "auto",
                  spaceBetween: 32,
                  centeredSlides: false,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  speed: 600, // Velocità della transizione in millisecondi
                  effect: "slide", // Effetto base (puoi cambiarlo con altri come 'fade', 'cube', 'coverflow', ecc.)
                });
      
                console.log("Swiper inizializzato correttamente:", swiperPost);
                clearInterval(checkButtonsInterval); // Ferma il controllo continuo
              } catch (error) {
                console.error("Errore durante l'inizializzazione di Swiper:", error);
                clearInterval(checkButtonsInterval); // Ferma il controllo in caso di errore
              }
            }
          }, 100); // Controlla ogni 100ms fino a trovare i pulsanti
        } else {
          console.warn("Nessun elemento trovato per lo slider: .related-articles-wrapper");
        }
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
              borderTopRightRadius: state ? "1rem" : "0rem",
              borderTopLeftRadius: state ? "1rem" : "0rem",
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
        // Creiamo un context per ottimizzare la gestione delle animazioni
        let context = gsap.context(() => {
          // Funzione per l'animazione hover e touch
          function animateTagLink(isHover) {
            gsap.to(tag, {
              duration: 0.15,
              rotateZ: isHover ? 10 : 0, // Rotazione sull'asse Z
              borderColor: isHover ? "#f06" : "", // Cambio del colore del bordo
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
        invalidateOnRefresh: true,
        scrub: true,
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
            const thumbnails = document.querySelectorAll(
        ".related-post-category .thumbnail-image"
      );
  
      thumbnails.forEach((thumbnail) => {
        // Creiamo la timeline dell'animazione GSAP
        let tl = gsap.timeline({ paused: true });
  
        // Definiamo l'animazione hover
        tl.to(thumbnail, {
          borderRadius: "2rem",
          scale: 1.1, // Scala l'immagine
          duration: 0.5, // Durata dell'animazione
          ease: "power2.out", // Tipo di easing per una transizione più fluida
          transformOrigin: "center center", // Imposta l'origine di trasformazione a destra
        });
  
        // Aggiungiamo gli eventi hover
        thumbnail.addEventListener("mouseenter", () => tl.play()); // Attiva l'animazione all'hover
        thumbnail.addEventListener("mouseleave", () => tl.reverse()); // Reverte l'animazione al termine dell'hover
      });
    },
    postEntry: function () {
      const relatedPosts = document.querySelectorAll(".related-post-category");
      gsap.set(".related-post-category", { opacity: 0, y: "-20%" });
      gsap.set(".cta-leggi", { opacity: 0, x: "-20rem" });
  
      relatedPosts.forEach((post) => {
        // Creiamo un'animazione per ciascun .related-post-category individualmente
        ScrollTrigger.create({
          trigger: post, // Ogni singolo post è il trigger
          start: "top 80%", // L'animazione parte quando il post è al 80% della viewport
          toggleActions: "play none none none", // Anima quando entra, reverte quando esce
          invalidateOnRefresh: true,
          scrub: true,
          onEnter: () => {
            // Animazione per il singolo post
            gsap.to(post, {
              y: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "power1.inOut",
            });
  
            // Animazione per .cta-leggi all'interno di ogni post
            gsap.to(
              post.querySelector(".cta-leggi"),
              {
                x: "0rem",
                opacity: 1,
                duration: 0.3,
                ease: "power1.inOut",
              },
              "-=0.2"
            ); // Sovrapposizione delle animazioni
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
      this.thumbnailImageAnimation(); }     
      this.postEntry();
    },
  }; 