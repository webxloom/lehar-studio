import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Img, PhotoBanner, Sec, Split, Verse } from "@/components/ui";

export const metadata = pageMeta({
  title: "Group Sound Baths in Mumbai | Léhar Studio",
  description:
    "Guided 60-minute Group Sound Baths for up to ten people: Himalayan singing bowls, gong and resonant sound, held at your venue. Enquire with Léhar Studio.",
  path: "/group-immersions",
});

const FACTS = [
  ["Duration", "About 60 minutes"],
  ["Group size", "Up to 10, customisable*"],
  ["Where", "Organiser's indoor venue"],
  ["Age", "12+ (12–17 with guardian consent)"],
  ["Investment", "On request"],
];

const WHO = [
  { icon: "fa-briefcase", text: "Workplace teams and professional groups" },
  { icon: "fa-user-group", text: "Small private groups" },
  { icon: "fa-spa", text: "Wellness and movement studios" },
  { icon: "fa-hand-holding-heart", text: "Parents, caregivers and people with demanding responsibilities" },
  { icon: "fa-people-group", text: "Friends or communities seeking a shared experience" },
  { icon: "fa-seedling", text: "First-timers wanting a gentle introduction" },
];

export default function GroupImmersionsPage() {
  return (
    <>
      <PhotoBanner
        img="service-gsb-banner.avif"
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "Group Sound Baths" }]}
        eyebrow="Breathwork & sound baths, together"
        title="Group Sound Baths"
      />

      <Sec>
        <div className="group-intro">
          <Img
            name="service-gsb-intro.avif"
            alt="A group sound bath with Himalayan singing bowls"
            className="group-intro-image"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="group-intro-copy">
            <p>
              A guided, shared experience. You lie down comfortably and receive sound from Himalayan singing bowls, gong
              and other resonant instruments. There is nothing to learn, perform or get right. Simply get comfortable,
              listen, and let it unfold.
            </p>
            <Verse
              lines={["Lie down together, let the bowls take flight,", "and rest as one in the resonant light."]}
              className="verse-center"
            />
          </div>
        </div>
        <dl className="facts">
          {FACTS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mini">*Customisable: discuss your group size with Kavitha.</p>
      </Sec>

      <Sec alt>
        <Split img="service-gsb-journey.avif" still>
          <h2>A journey, not a performance</h2>
          <p>
            Ground and breathe, then sound, then quiet. Sound moves through different tones, volumes and silences, then
            softens, so you return at an unhurried pace.
          </p>
          <div
            className="timebar"
            role="img"
            aria-label="15 minutes grounding and breathwork; 40 minutes immersive sound; 5 minutes quiet"
          >
            <span style={{ flex: "0 0 25%", background: "var(--wash)" }}>15 · Ground</span>
            <span style={{ flex: "1 1 66%", background: "var(--accent)", color: "var(--bg)" }}>40 · Sound journey</span>
            <span style={{ flex: "0 0 8.3%", minWidth: "3.6rem", background: "var(--surface)", border: "1px solid var(--line)" }}>
              5 · Quiet
            </span>
          </div>
        </Split>
      </Sec>

      <Sec bg="service-gsb-who.avif" className="group-who-section">
        <h2>Who it is for</h2>
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
        <p className="note gold-note">No previous experience with meditation, breathwork or sound is required.</p>
      </Sec>

      <Sec alt bg="service-gsb-venue-bg.avif" className="group-venue-section">
        <div className="cards">
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-location-dot" />
              </span>
              Venue
            </h3>
            <p>
              Held at the organiser&apos;s chosen venue: a quiet, private, closed indoor room where everyone can lie down
              comfortably. <b>In person only</b>, because live resonance cannot be reproduced online.
            </p>
          </article>
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-person-walking-arrow-right" />
              </span>
              Come ready
            </h3>
            <ul>
              <li>Arrive 10 to 15 minutes early; doors close once the session begins.</li>
              <li>Keep phones off or on silent.</li>
              <li>Share any relevant health information with Kavitha in advance.</li>
            </ul>
          </article>
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-bell" />
              </span>
              Bring the bowls
            </h3>
            <p>Share your date, venue and group size, and Kavitha will talk through the arrangements before confirming.</p>
            <p>
              <Link className="btn" href="/booking?service=group">
                Enquire
              </Link>
            </p>
          </article>
        </div>
        <p className="mini">
          Everyone experiences sound differently and no outcome is guaranteed. Sound immersion is a wellbeing experience,
          not a substitute for medical or mental health care.
        </p>
      </Sec>
    </>
  );
}
