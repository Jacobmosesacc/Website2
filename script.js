const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");

/* Mobile Menu Toggle */

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    const expanded =
        hamburger.getAttribute("aria-expanded") === "true";

    hamburger.setAttribute(
        "aria-expanded",
        !expanded
    );
});

/* Close Menu When Clicking Links */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});

/* Sticky Glass Header */

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

/* Accessibility */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});


/* Hero section js*/

const phrases = [
    "Composite Aircraft Technician",
    "Building Robotics Systems",
    "Fabrication & Manufacturing Specialist",
];

document.addEventListener("DOMContentLoaded", () => {

    const textElement = document.getElementById("typewriter");

    if (!textElement) {
        console.error("Typewriter element not found.");
        return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentPhrase = phrases[phraseIndex];

        if (!deleting) {

            textElement.textContent =
                currentPhrase.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentPhrase.length) {

                deleting = true;

                setTimeout(type, 2000);
                return;
            }

        } else {

            textElement.textContent =
                currentPhrase.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;
                phraseIndex++;

                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }
            }
        }

        setTimeout(type, deleting ? 40 : 90);
    }

    type();
});


document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

});
