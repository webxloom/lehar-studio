import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, STUDIO } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div className="foot-brand">
          <Link className="logo flogo has-img" href="/" aria-label="Léhar Studio home">
            <Image className="logo-for-light" src="/images/lehar-logo-dark.avif" alt="" width={512} height={512} />
            <Image className="logo-for-dark" src="/images/lehar-logo-light.avif" alt="" width={512} height={512} />
          </Link>
          <div className="fb-text">
            <Link className="fb-name" href="/">
              Léhar Studio
            </Link>
            <svg viewBox="0 0 120 18" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 9 Q15 0 30 9 T60 9 T90 9 T120 9" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="foot-tag">
              Sound, breath, and a quiet space,
              <br />
              Léhar: a wave to set your pace.
            </p>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Say hello</h3>
          <ul>
            <li>
              <i className="fa-solid fa-phone" aria-hidden="true" /> <a href={STUDIO.phoneHref}>{STUDIO.phone}</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope" aria-hidden="true" /> <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
            </li>
            <li>
              <i className="fa-brands fa-instagram" aria-hidden="true" />{" "}
              <a href={STUDIO.instagram} rel="noopener">
                {STUDIO.instagramHandle}
              </a>
            </li>
            <li>
              <i className="fa-solid fa-location-dot" aria-hidden="true" /> <span>{STUDIO.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        Sound immersion is a wellbeing experience and is not a substitute for medical, psychological or psychiatric care.
        No particular outcome is promised.
        <br />© {new Date().getFullYear()} Léhar Studio. All rights reserved.
        <br />
        <span className="credit">
          Developed and maintained by{" "}
          <a href="https://webxloom.com" target="_blank" rel="noopener">
            WebXLoom
          </a>
        </span>
      </div>
    </footer>
  );
}
