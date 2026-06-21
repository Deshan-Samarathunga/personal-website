/* ===================================================================
   Deshan Samarathunga — Portfolio interactions
   Preloader · custom cursor · mobile menu · scroll reveal · header
   =================================================================== */

(function () {
    "use strict";

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ---------- Preloader ---------- */
    const preloader = document.getElementById("preloader");
    const fill = document.getElementById("preloader-fill");
    const percentEl = document.getElementById("preloader-percent");

    const finishLoading = () => {
        document.body.classList.remove("is-loading");
        if (preloader) {
            window.setTimeout(() => {
                preloader.style.display = "none";
            }, 800);
        }
    };

    if (prefersReducedMotion || !preloader) {
        finishLoading();
    } else {
        let progress = 0;
        const tick = () => {
            // ease towards 100, slowing near the end
            progress += Math.max(1, (100 - progress) * 0.12);
            if (progress >= 100) progress = 100;
            const value = Math.round(progress);
            if (fill) fill.style.width = value + "%";
            if (percentEl) percentEl.textContent = String(value).padStart(2, "0");
            if (value < 100) {
                window.setTimeout(tick, 60);
            } else {
                window.setTimeout(finishLoading, 350);
            }
        };
        // start once the window has loaded (or after a short cap)
        let started = false;
        const start = () => {
            if (started) return;
            started = true;
            tick();
        };
        window.addEventListener("load", start);
        window.setTimeout(start, 1200);
    }

    /* ---------- Custom cursor (brutalist arrow → hand) ---------- */
    const cursor = document.getElementById("cursor");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const hoverSelector = "a, button, [data-hover], [data-hover-type]";

    if (cursor && finePointer && !prefersReducedMotion) {
        // hide the native pointer only once the custom cursor is live
        document.body.classList.add("custom-cursor");

        // the arrow snaps straight to the pointer — no easing
        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursor.style.opacity = "1";

            // swap arrow ↔ hand based on what's under the pointer
            const overTarget = e.target.closest(hoverSelector);
            cursor.classList.toggle("is-hover", Boolean(overTarget));
        });

        // hide while the pointer is off-window
        document.addEventListener("mouseleave", () => {
            cursor.style.opacity = "0";
        });
        document.addEventListener("mouseenter", () => {
            cursor.style.opacity = "1";
        });

        document.addEventListener("mousedown", () =>
            cursor.classList.add("is-down")
        );
        document.addEventListener("mouseup", () =>
            cursor.classList.remove("is-down")
        );
    } else if (cursor) {
        cursor.style.display = "none";
    }

    /* ---------- Mobile menu ---------- */
    const navToggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    const closeMenu = () => {
        document.body.classList.remove("menu-open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
        if (mobileMenu) mobileMenu.setAttribute("aria-hidden", "true");
    };

    if (navToggle && mobileMenu) {
        navToggle.addEventListener("click", () => {
            const open = document.body.classList.toggle("menu-open");
            navToggle.setAttribute("aria-expanded", String(open));
            mobileMenu.setAttribute("aria-hidden", String(!open));
        });
        mobileMenu
            .querySelectorAll("a")
            .forEach((link) => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });
    }

    /* ---------- Scroll Spy for Navbar ---------- */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a");

    if ("IntersectionObserver" in window) {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec));
    }

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll("[data-reveal]");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        revealEls.forEach((el) => observer.observe(el));
    }

    /* ---------- Footer year (keep current automatically) ---------- */
    // Year is hard-coded in markup; nothing to compute here.
})();
