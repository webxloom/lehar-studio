import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import { Verse } from "@/components/ui";
import { STUDIO, WA_GREETING, waLink } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/music-therapy", label: "Music Therapy" },
  { href: "/faqs", label: "FAQs" },
  { href: "/booking", label: "Booking" },
];

// Shared look for the 404 and error pages: the dark wave banner, a verse,
// a way back, and a direct line to Kavitha.
export default function ErrorScreen({
  code,
  title,
  lines,
  children,
}: {
  code: string;
  title: string;
  lines: string[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="banner err-banner">
        <div className="wrap">
          <p className="eyebrow">{code}</p>
          <h1>{title}</h1>
          <p className="sub">Even waves lose their way sometimes.</p>
        </div>
        <WaveDivider />
      </section>
      <section className="sec center">
        <div className="wrap narrow">
          <Verse lines={lines} />
          {children}
          <ul className="chips err-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <p className="mini">
            Need help? Message Kavitha on{" "}
            <a href={waLink(WA_GREETING)} target="_blank" rel="noopener">
              WhatsApp
            </a>{" "}
            or call <a href={STUDIO.phoneHref}>{STUDIO.phone}</a>.
          </p>
        </div>
        <WaveDivider />
      </section>
    </>
  );
}
