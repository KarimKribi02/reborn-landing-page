document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    // Initial check in case page starts scrolled
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Testimonials Carousel Dot & Card Interactivity
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (cards.length > 0 && dots.length > 0) {
        // Dot clicks
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');

                const cardIndex = Math.min(index, cards.length - 1);
                cards.forEach((card, idx) => {
                    if (idx === cardIndex) {
                        card.classList.add('active');
                        // Micro-animation popup for premium feel
                        if (window.gsap) {
                            gsap.fromTo(card, { scale: 0.98 }, { scale: 1.06, duration: 0.4, ease: "power2.out" });
                        }
                    } else {
                        card.classList.remove('active');
                    }
                });
            });
        });

        // Card clicks
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                if (dots[index]) {
                    dots[index].classList.add('active');
                }

                cards.forEach((c, idx) => {
                    if (idx === index) {
                        c.classList.add('active');
                        if (window.gsap) {
                            gsap.fromTo(c, { scale: 0.98 }, { scale: 1.06, duration: 0.4, ease: "power2.out" });
                        }
                    } else {
                        c.classList.remove('active');
                    }
                });
            });
        });
    }
});
