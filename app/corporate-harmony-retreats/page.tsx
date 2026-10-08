import type { Metadata } from "next";
import Link from "next/link";
import { ParallaxCta, PhotoBanner, Sec, Split, Verse } from "@/components/ui";

export const metadata: Metadata = {
  title: "Corporate Sound Wellbeing & Retreat Experiences | Léhar Studio",
  description:
    "Bespoke sound, breath and music experiences for teams, organisations and retreats in Mumbai and beyond. Plan your venue, format and quotation with Léhar Studio.",
  alternates: { canonical: "/corporate-harmony-retreats" },
};

const WHO = [
  { icon: "fa-people-group", text: "Teams in fast-paced or high-responsibility environments" },
  { icon: "fa-chess-king", text: "Leadership and management groups" },
  { icon: "fa-mountain-sun", text: "Off-sites, team gatherings and strategy retreats" },
  { icon: "fa-heart-pulse", text: "Organisations investing in employee wellbeing" },
  { icon: "fa-spa", text: "Wellness, yoga and mindfulness retreats" },
  { icon: "fa-door-open", text: "A calm opening or closing inside a larger programme" },
];

const CORPORATE = ["Full Group Sound Immersion", "Short Workplace Reset", "Small-Group Series", "Opening or Closing Experience"];
const RETREAT = ["Arrival and Grounding", "Full Sound Immersion", "Sunrise or Evening Experience", "Closing and Integration"];

const FACTS = [
  ["Recommended", "60 minutes"],
  ["Batch size", "Customisable as per requirements"],
  ["Setting", "Quiet indoor closed room"],
];

export default function CorporateHarmonyRetreatsPage() {
  return (
    <>
      <PhotoBanner
        img="service-corp-banner.avif"
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "Pause, Reset and Reconnect" }]}
        eyebrow="Corporate Harmony & Retreats"
        title="Pause, Reset and Reconnect"
      />

      <Sec>
        {/* TODO(Aji): swap for the 7-chakra image requested in the change request (not in the media folder yet). */}
        <Split img="service-corp-intro.avif" still>
          <Verse lines={["Busy calendars, back-to-back days,", "make room for a pause that quietly stays."]} />
          <p>
            Léhar Studio creates guided sound, breath and music experiences for teams, leaders and retreats, designed to
            create meaningful pauses within demanding environments. No prior knowledge of meditation, breathwork or sound
            is needed, and nobody is asked to speak or perform in front of colleagues.
          </p>
        </Split>
      </Sec>

      <Sec alt bg="service-corp-who-bg.avif">
        <h2>Who these experiences are designed for</h2>
        <div className="who-cards">
          {WHO.map((w) => (
            <article key={w.text} className="glass-card who-card">
              <span className="card-ico">
                <i aria-hidden="true" className={`fa-solid ${w.icon}`} />
              </span>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec bg="service-corp-format-bg.avif">
        <div className="two card-pair">
          <article className="glass-card">
            <h2 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-briefcase" />
              </span>
              Corporate formats
            </h2>
            <ul>
              {CORPORATE.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </article>
          <article className="glass-card">
            <h2 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-umbrella-beach" />
              </span>
              Retreat formats
            </h2>
            <ul>
              {RETREAT.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="gold-note">A single session, or a sequence across your programme.</p>
      </Sec>

      <Sec alt bg="service-corp-duration-bg.avif">
        <div className="two card-pair">
          <article className="glass-card">
            <h2 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-hourglass-half" />
              </span>
              Duration &amp; size
            </h2>
            <dl className="facts">
              {FACTS.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p>
              Every experience begins with a conversation and is shaped around your purpose, group, time available and
              venue. Léhar Studio brings the instruments.
            </p>
          </article>
          <article className="glass-card">
            <h2 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-indian-rupee-sign" />
              </span>
              Pricing &amp; quotation
            </h2>
            <p>
              Corporate and retreat experiences are priced individually, depending on format, group size, venue and
              travel.
            </p>
            <p>A written quotation is provided before booking is confirmed.</p>
          </article>
        </div>
      </Sec>

      <ParallaxCta img="service-corp-cta.avif" id="enquire">
        <h2>Start the conversation</h2>
        <Verse lines={["Tell us the place, the time, the crew,", "and we will shape a calm for you."]} />
        <p>
          <Link className="btn" href="/booking?service=corp">
            Request a Quotation
          </Link>
        </p>
      </ParallaxCta>
    </>
  );
}
