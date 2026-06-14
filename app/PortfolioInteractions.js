"use client";

import { useEffect } from "react";

export default function PortfolioInteractions() {
  useEffect(() => {
    const timeouts = [];
    const listeners = [];
    const addListener = (target, type, handler, options) => {
      target.addEventListener(type, handler, options);
      listeners.push(() => target.removeEventListener(type, handler, options));
    };
    const setManagedTimeout = (handler, delay) => {
      const id = window.setTimeout(handler, delay);
      timeouts.push(id);
      return id;
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const preloader = document.getElementById("preloader");
    const fill = document.getElementById("preloader-fill");
    const percentEl = document.getElementById("preloader-percent");

    const finishLoading = () => {
      document.body.classList.remove("is-loading");
      if (preloader) {
        setManagedTimeout(() => {
          preloader.style.display = "none";
        }, 800);
      }
    };

    if (prefersReducedMotion || !preloader) {
      finishLoading();
    } else {
      let progress = 0;
      let started = false;

      const tick = () => {
        progress += Math.max(1, (100 - progress) * 0.12);
        if (progress >= 100) progress = 100;

        const value = Math.round(progress);
        if (fill) fill.style.width = `${value}%`;
        if (percentEl) percentEl.textContent = String(value).padStart(2, "0");

        if (value < 100) {
          setManagedTimeout(tick, 60);
        } else {
          setManagedTimeout(finishLoading, 350);
        }
      };

      const start = () => {
        if (started) return;
        started = true;
        tick();
      };

      addListener(window, "load", start);
      setManagedTimeout(start, 1200);
    }

    const cursor = document.getElementById("cursor");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const hoverSelector = "a, button, [data-hover], [data-hover-type]";

    if (cursor && finePointer && !prefersReducedMotion) {
      document.body.classList.add("custom-cursor");

      addListener(document, "mousemove", (event) => {
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        cursor.style.opacity = "1";
        const overTarget = event.target.closest(hoverSelector);
        cursor.classList.toggle("is-hover", Boolean(overTarget));
      });

      addListener(document, "mouseleave", () => {
        cursor.style.opacity = "0";
      });
      addListener(document, "mouseenter", () => {
        cursor.style.opacity = "1";
      });
      addListener(document, "mousedown", () => cursor.classList.add("is-down"));
      addListener(document, "mouseup", () => cursor.classList.remove("is-down"));
    } else if (cursor) {
      cursor.style.display = "none";
    }

    const navToggle = document.getElementById("nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      if (mobileMenu) mobileMenu.setAttribute("aria-hidden", "true");
    };

    if (navToggle && mobileMenu) {
      addListener(navToggle, "click", () => {
        const open = document.body.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", String(open));
        mobileMenu.setAttribute("aria-hidden", String(!open));
      });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        addListener(link, "click", closeMenu);
      });

      addListener(document, "keydown", (event) => {
        if (event.key === "Escape") closeMenu();
      });
    }

    const header = document.getElementById("site-header");
    let lastScroll = 0;
    addListener(
      window,
      "scroll",
      () => {
        const y = window.scrollY;
        if (header && !document.body.classList.contains("menu-open")) {
          if (y > lastScroll && y > 160) {
            header.classList.add("is-hidden");
          } else {
            header.classList.remove("is-hidden");
          }
        }
        lastScroll = y;
      },
      { passive: true }
    );

    const revealEls = document.querySelectorAll("[data-reveal]");
    let observer;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
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

    return () => {
      listeners.forEach((remove) => remove());
      timeouts.forEach((id) => window.clearTimeout(id));
      if (observer) observer.disconnect();
      document.body.classList.remove("custom-cursor", "menu-open", "is-loading");
    };
  }, []);

  return null;
}
