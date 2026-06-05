document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS (SAFE CHECKS)
    ========================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const header = document.getElementById("header");
    const navLinks = document.querySelectorAll(".nav-link");

    /* =========================
       MOBILE MENU TOGGLE
    ========================== */

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

            const expanded =
                hamburger.getAttribute("aria-expanded") === "true";

            hamburger.setAttribute(
                "aria-expanded",
                String(!expanded)
            );
        });
    }

    /* =========================
       CLOSE MENU ON LINK CLICK
    ========================== */

    if (hamburger && navMenu) {

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");
                navMenu.classList.remove("active");

                hamburger.setAttribute("aria-expanded", "false");
            });

        });
    }

    /* =========================
       STICKY HEADER SCROLL
    ========================== */

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

    /* =========================
       ESC KEY ACCESSIBILITY
    ========================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            if (hamburger && navMenu) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");

                hamburger.setAttribute("aria-expanded", "false");
            }

        }

    });

    /* =========================
       SCROLL REVEAL ANIMATION
    ========================== */

    const elements = document.querySelectorAll(".reveal");

    if (elements.length > 0) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");

                    // better performance
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        elements.forEach(el => observer.observe(el));
    }

});


document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("active");
            }

        });

    },{
        threshold:0.15
    });

    elements.forEach(el => observer.observe(el));

});