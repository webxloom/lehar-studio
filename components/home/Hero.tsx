"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";

const noop = () => () => {};

// Video hero with Aji's staged CSS entrance (title → logo at 4s → tagline at 9.5s).
// The <video> renders client-only so browser extensions that touch media
// elements can't cause hydration mismatches (lesson from Rent Worx).
export default function Hero() {
  const mounted = useSyncExternalStore(noop, () => true, () => false);

  return (
    <section className="hero" aria-label="Welcome">
      {mounted && (
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/images/hero-clip-waves-and-sunlight.mp4" type="video/mp4" />
        </video>
      )}
      <div className="hero-in">
        <h1>Where Sound Meets Stillness</h1>
        <div className="hero-logo-wrap">
          <Image
            className="hero-logo"
            src="/images/lehar-logo-simple-Tran.avif"
            alt="Léhar Studio logo"
            width={1377}
            height={1054}
            sizes="360px"
            priority
          />
        </div>
        <p className="hero-tag">Grounding | Breathwork | Sound Immersion</p>
      </div>
      <a className="scroll-cue" href="#intro" aria-label="Scroll to introduction">
        <svg viewBox="0 0 46 20" aria-hidden="true">
          <path d="M2 10 Q8 2 14 10 T26 10 T38 10 T46 10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </section>
  );
}
