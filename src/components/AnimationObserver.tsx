"use client";

import { useEffect, useCallback } from "react";

export default function AnimationObserver() {
  const setupObserver = useCallback(() => {
    const elements = document.querySelectorAll(".animate-on-scroll:not(.animated)");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px 0px 0px" }
    );

    elements.forEach((el) => {
      // If element is already in viewport, animate immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("animated");
      } else {
        observer.observe(el);
      }
    });

    return observer;
  }, []);

  useEffect(() => {
    // Initial setup with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setupObserver();
    }, 50);

    // Re-run on any DOM mutations (handles route changes, dynamic content)
    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      mutationObserver.disconnect();
    };
  }, [setupObserver]);

  return null;
}
