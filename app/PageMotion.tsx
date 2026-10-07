"use client";

import { useEffect, useRef } from "react";

export default function PageMotion() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const page = document.querySelector<HTMLElement>(".nr-page");
    if (!page) return;
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const animations = new Set<Animation>();

    const updateProgress = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
    };
    const scheduleProgress = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const configure = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      page.classList.toggle("nr-motion-enabled", !preference.matches);
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer?.unobserve(element);
          const index = element.parentElement ? Array.from(element.parentElement.children).indexOf(element) : 0;
          const stagger = element.matches("article, figure, li") ? (index % 4) * 75 : 0;
          const animation = element.animate([
            { opacity: 0.15, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" }
          ], { duration: element.matches("h1, h2") ? 850 : 650, delay: stagger, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

      page.querySelectorAll("h1, h2, .nr-copy p, .nr-club-pillars li, .nr-experiences article, .nr-gallery figure").forEach(element => observer?.observe(element));
    };

    configure();
    scheduleProgress();
    preference.addEventListener("change", configure);
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", configure);
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      page.classList.remove("nr-motion-enabled");
    };
  }, []);

  return <div ref={progress} className="nr-reading-progress" aria-hidden="true" />;
}
