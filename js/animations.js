// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const initAnimations = () => {
    // Avoid double initialization
    if (window.__animationsInitialized) {
        return;
    }
    window.__animationsInitialized = true;

    // Refresh ScrollTrigger to calculate correct positions after page load
    ScrollTrigger.refresh();

    // ==========================================================================
    // 1. HERO SECTION & NAVBAR ANIMATIONS (Immediate Load)
    // ==========================================================================
    
    // Navbar Logo
    gsap.from(".navbar .logo", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    // Navbar CTA Button
    gsap.from(".navbar .btn-nav", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out"
    });

    // Hero Badge
    gsap.from(".hero-content .badge", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Hero Title H1
    gsap.from(".hero-content h1", {
        x: -60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out"
    });

    // Hero Subtitle
    gsap.from(".hero-content .sub-hero", {
        x: -60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    // Hero Mini Description
    gsap.from(".hero-content .mini-desc", {
        x: -60,
        opacity: 0,
        duration: 1,
        delay: 0.45,
        ease: "power3.out"
    });

    // Hero Image
    gsap.from(".hero-image-container img", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });

    // Hero Circle Outline
    gsap.from(".hero-circle-outline", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out"
    });

    // Hero Image Badge (Jonathan)
    gsap.from(".hero-image-container .hero-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.55,
        ease: "power2.out"
    });

    // Hero Main CTA Pulsation (Infinite yoyo, independent of ScrollTrigger)
    gsap.to(".hero-content .btn-primary-wrapper", {
        scale: 1.03,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });


    // ==========================================================================
    // 2. PARTNERS LOGOS SECTION
    // ==========================================================================
    gsap.from(".partner-logo", {
        scrollTrigger: {
            trigger: "#partners",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });


    // ==========================================================================
    // 3. FEATURES SECTION (4 CARDS)
    // ==========================================================================
    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: "#features",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
    });


    // ==========================================================================
    // 4. ABOUT SECTION (QUI JE SUIS)
    // ==========================================================================
    
    // Left Content elements
    gsap.from(".about-content > *", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Grey background rectangle
    gsap.from(".about-bg-grey", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out"
    });

    // Coach image
    gsap.from(".about-img", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power2.out"
    });

    // Large "JONATHAN" text band
    gsap.from(".about-band-text", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        opacity: 0,
        scaleX: 0.8,
        transformOrigin: "left center",
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out"
    });


    // ==========================================================================
    // 5. SECRETS SECTION & MOCKUPS
    // ==========================================================================

    // Target the secret cards with stagger animation using direct parent trigger
    gsap.from(".secret-card", {
        scrollTrigger: {
            trigger: "#secrets",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Asymmetric mockup entries triggered on the parent #secrets section:
    // PC (Secret 1 mockup) from left
    gsap.from(".secrets-grid .secret-card:nth-child(1) .secret-mockup", {
        scrollTrigger: {
            trigger: "#secrets",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Tablet (Secret 2 mockup) from right
    gsap.from(".secrets-grid .secret-card:nth-child(2) .secret-mockup", {
        scrollTrigger: {
            trigger: "#secrets",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Phone (Secret 3 mockup) pop from bottom
    gsap.from(".secrets-grid .secret-card:nth-child(3) .secret-mockup", {
        scrollTrigger: {
            trigger: "#secrets",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 80,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.5)"
    });


    // ==========================================================================
    // 6. MULTI-DEVICE COMPOSITION SECTION
    // ==========================================================================
    gsap.from(".composition-img", {
        scrollTrigger: {
            trigger: "#join",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 60,
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });

    gsap.from(".bg-outline-text", {
        scrollTrigger: {
            trigger: "#join",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.from(".join-content > *", {
        scrollTrigger: {
            trigger: "#join",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
    });


    // ==========================================================================
    // 7. TESTIMONIALS SECTION
    // ==========================================================================
    
    // Header double-title slide
    gsap.from(".testimonials-header", {
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Fetch and filter testimonial cards safely in JS
    const allTestimonialCards = Array.from(document.querySelectorAll(".testimonial-card"));
    const regularTestimonials = allTestimonialCards.filter(card => !card.classList.contains("active"));
    const activeTestimonial = allTestimonialCards.filter(card => card.classList.contains("active"));

    // Inactive testimonial cards
    if (regularTestimonials.length > 0) {
        gsap.from(regularTestimonials, {
            scrollTrigger: {
                trigger: "#testimonials",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            },
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
        });
    }

    // Active testimonial card (scale 1.06 gentle stabilization)
    if (activeTestimonial.length > 0) {
        gsap.from(activeTestimonial, {
            scrollTrigger: {
                trigger: "#testimonials",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            },
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 1.2,
            delay: 0.15,
            ease: "power2.out"
        });
    }
};

// Start animations on window load to ensure accurate heights/positions
if (document.readyState === "complete") {
    initAnimations();
} else {
    window.addEventListener("load", () => {
        initAnimations();
    });
}
