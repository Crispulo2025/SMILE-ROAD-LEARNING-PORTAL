/* ==================================
   SMILE ROAD LEARNING PORTAL
   MAIN JAVASCRIPT FILE
================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Smile Road Learning Portal Loaded");

    /* ==========================
       FAQ ACCORDION
    ========================== */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }

        });
    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* ==========================
       VIDEO SEARCH
    ========================== */

    const searchInput = document.getElementById("videoSearch");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const filter = this.value.toLowerCase();

            const videoCards = document.querySelectorAll(".video-card");

            videoCards.forEach(card => {

                const title = card.textContent.toLowerCase();

                if (title.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */

    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }

        });

        backToTopBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ==========================
       FEATURED VIDEO FILTER
    ========================== */

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;

            const cards = document.querySelectorAll(".video-card");

            cards.forEach(card => {

                if (
                    category === "all" ||
                    card.dataset.category === category
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

    /* ==========================
       CONTACT FORM
    ========================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting Smile Road Learning Portal. We have received your message."
            );

            contactForm.reset();

        });

    }

});
