
/* =====================================
   DEVAULT — MAIN JAVASCRIPT
   Build. Share. Connect.
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Dynamic footer year
    const footer = document.querySelector("footer");

    if (footer) {
        const copyright = footer.querySelector("p");

        if (copyright) {
            copyright.textContent =
                `© ${new Date().getFullYear()} DevVault. All rights reserved.`;
        }
    }

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll(
        ".feature-card, .section-heading, .community-section"
    );

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });
    }

    // Get Started button interaction
    document.querySelectorAll(
        '.signup-btn, .primary-btn'
    ).forEach(button => {
        button.addEventListener("click", event => {
            const href = button.getAttribute("href");

            if (href === "#signup") {
                event.preventDefault();
                alert("DevVault registration is coming soon!");
            }
        });
    });

    // Explore button interaction
    document.querySelectorAll('a[href="#explore"]').forEach(button => {
        button.addEventListener("click", () => {
            console.log("Exploring DevVault projects...");
        });
    });

    // Console branding
    console.log(
        "%cDEVAULT",
        "font-size:28px;font-weight:800;color:#a78bfa;"
    );

    console.log(
        "%cBuild. Share. Connect.",
        "font-size:13px;color:#9699ac;"
    );

    console.log("DevVault interface initialized successfully.");

});
