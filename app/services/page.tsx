import type { Metadata } from "next";
import Link from "next/link";
import { PhotoBanner, Sec, Split, Verse } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services | Group, One-to-One & Corporate Sound Immersion | Léhar Studio",
  description:
    "Compare Léhar Studio’s pathways: Group Sound Baths, personalised One-to-One Immersions, bespoke Corporate Harmony & Retreat experiences and Music Therapy in Mumbai.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    title: "Group Sound Baths",
    verse: "Rest together, side by side.",
    text: "A shared 60-minute journey for small groups, held at the organiser's space. For communities, studios, private groups and curated gatherings.",
    href: "/group-immersions",
    cta: "Explore Group Immersions",
  },
  {
    title: "One-to-One Immersions",
    verse: "Made for you, and shaped as you go.",
    text: "A more individual sound, breath and healing experience that begins with a conversation, at Léhar Studio in Mulund East.",
    href: "/one-to-one",
    cta: "Explore 1:1 Immersions",
  },
  {
    title: "Corporate Harmony & Retreats",
    verse: "Bring the pause to where you gather.",
    text: "Wellbeing experiences for teams, leaders and retreats, designed to create meaningful pauses within demanding environments.",
    href: "/corporate-harmony-retreats",
    cta: "Explore Corporate & Retreats",
  },
  {
    title: "Music Therapy",
    verse: "Where words fall silent, music speaks.",
    text: "Raaga, rhythm, voice and frequency, shaped around you, to support emotional ease and a quieter mind.",
    href: "/music-therapy",
    cta: "Explore Music Therapy",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PhotoBanner
        img="service-overview-banner.avif"
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        eyebrow="Services"
        title="Ways to Ride the Wave"
      />

      <Sec>
        <Split img="service-overview-intro.avif" still>
          <Verse lines={["Sound, breath and music, ways to receive:", "shared, personal, or made for a team."]} />
          <p>
            Each Léhar Studio experience is a calm, guided space where you step away from everyday activity, settle
            comfortably and receive, without needing to meditate, concentrate hard or reach any outcome.
          </p>
        </Split>
      </Sec>

      <Sec alt bg="service-main-cards-bg.avif">
        <div className="cards c4">
          {SERVICES.map((s) => (
            <article key={s.title} className="glass-card aligned" style={{ "--rows": "4" } as React.CSSProperties}>
              <h3>{s.title}</h3>
              <Verse lines={[s.verse]} />
              <div>
                <p>{s.text}</p>
              </div>
              <p>
                <Link className="btn ghost" href={s.href}>
                  {s.cta}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="services-science" bg="service-overview-anchor-breath-bg.avif">
        <h2>Why Every Session Begins With Anchor and Breath</h2>
        <div className="cards c2">
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-anchor" />
              </span>
              Arriving in the Body: Anchoring &amp; Grounding
            </h3>
            <p>
              Attention often arrives carrying the pace of the day. Grounding is a gentle pause: we notice the support
              beneath us and the natural movement of the breath, and attention returns to the here and now. There is no
              need to force relaxation. Simply noticing is enough.
            </p>
            <Verse lines={["Grounding is the bridge between the busyness of the day and the listening space of Léhar Studio."]} />
          </article>
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-wind" />
              </span>
              Breathwork: A Pause in the Pace of Modern Life
            </h3>
            <p>
              Deadlines, screens and notifications keep the body on alert. Breathwork is a simple, guided way to pause
              and reconnect with the body. Before a sound immersion, it helps us arrive and meet the sounds with greater
              attention.
            </p>
            <Verse lines={["Follow at a comfortable pace, and pause whenever you need."]} />
          </article>
        </div>
      </Sec>

      <Sec alt bg="service-overview-which-bg.avif">
        <h2>Which one is for me?</h2>
        <Verse
          lines={[
            "Whichever wave you choose, the intention stays: a welcome, an unhurried pace, nothing to perform, and every response to sound respected.",
          ]}
        />
        <p>Not sure yet? Tell us a little about yourself and we will help you choose.</p>
        <p>
          <Link className="btn" href="/booking">
            Ask for Details
          </Link>
          <Link className="btn ghost" href="/faqs">
            Read the FAQs
          </Link>
        </p>
      </Sec>
    </>
  );
}
