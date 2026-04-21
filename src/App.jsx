import { useEffect, useRef } from "react";
import content from "./content.html?raw";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = content;

    // Scroll reveal (replicate original script)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((n) => observer.observe(n));

    // Smooth scroll for nav links
    el.querySelectorAll("nav .nav-links a").forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = el.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
          const nav = el.querySelector(".nav-links");
          if (nav) nav.classList.remove("show");
        }
      });
    });

    return () => {
      el.querySelectorAll("nav .nav-links a").forEach((link) => {
        link.replaceWith(link.cloneNode(true));
      });
    };
  }, []);

  return <div ref={containerRef} />;
}
