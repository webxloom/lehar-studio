"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Site-wide behaviours from Aji's script, re-run on every route change:
// - `.reveal` blocks fade up the first time they scroll into view
// - `details.acc` accordions keep one open per section
export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((r) => io!.observe(r));
    } else {
      reveals.forEach((r) => r.classList.add("in"));
    }

    const accs = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.acc"));
    const onToggle = (e: Event) => {
      const d = e.currentTarget as HTMLDetailsElement;
      if (!d.open) return;
      const scope = d.closest("section") ?? document;
      scope.querySelectorAll<HTMLDetailsElement>("details.acc[open]").forEach((o) => {
        if (o !== d) o.open = false;
      });
    };
    accs.forEach((d) => d.addEventListener("toggle", onToggle));

    return () => {
      io?.disconnect();
      accs.forEach((d) => d.removeEventListener("toggle", onToggle));
    };
  }, [pathname]);

  return null;
}
