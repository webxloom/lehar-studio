import type { Metadata } from "next";
import Link from "next/link";
import { PhotoBanner, Sec, Split, Verse } from "@/components/ui";

export const metadata: Metadata = {
  title: "Personalised One-to-One Sound Immersion | Léhar Studio, Mulund East",
  description:
    "A personalised sound immersion journey at Léhar Studio, Mulund East, shaped around you with grounding, breathwork and sound. Begin with a conversation.",
  alternates: { canonical: "/one-to-one" },
};

const ELEMENTS = [
  { icon: "fa-shoe-prints", text: "Grounding and guided relaxation" },
  { icon: "fa-wind", text: "Structured breathwork" },
  { icon: "fa-bell", text: "Himalayan singing bowls" },
  { icon: "fa-record-vinyl", text: "Gong and resonant instruments" },
  { icon: "fa-music", text: "Indian raagas and mindful music" },
  { icon: "fa-microphone-lines", text: "Voice and mantra" },
  { icon: "fa-wave-square", text: "Selected Solfeggio tones" },
  { icon: "fa-moon", text: "Silence and integration" },
];

const STEPS = [
  { icon: "fa-comments", title: "Arrival and check-in", line: "A brief chat about how you are feeling." },
  { icon: "fa-wind", title: "Ground and breathe", line: "Settle the body, then a gentle breathing practice." },
  { icon: "fa-bell", title: "Personalised sound immersion", line: "Bowls, gong, music, voice or mantra, chosen for you." },
  { icon: "fa-moon", title: "Silence and integration", line: "Rest as the last sounds fade." },
  { icon: "fa-hand-holding-heart", title: "Gentle return", line: "Notice the body, return unhurried." },
];

const FACTS = [
  ["Each session", "About 60 minutes"],
  ["Structure", "Customisable as per requirements"],
  ["Where", "Léhar Studio, Mulund East"],
  ["Age", "10+ (10–17 with guardian consent)"],
  ["Investment", "On request"],
];

export default function OneToOnePage() {
  return (
    <>
      <PhotoBanner
        img="service-one-banner.avif"
        tall
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: "Personalised One-to-One Sound Immersion" },
        ]}
        eyebrow="A more individual sound, breath and healing experience"
        title="Personalised One-to-One Sound Immersion"
      />

      <Sec>
        <Split img="service-one-intro.avif" still>
          <Verse lines={["Just you, and the sound made to meet you,", "a journey that listens as it leads you."]} />
          <p>
            An individual experience created around what feels most present for you. Kavitha understands your needs,
            chooses the right sound and musical elements, and adjusts as the journey develops. No experience with
            meditation, breathwork or sound is needed.
          </p>
        </Split>
      </Sec>

      <Sec alt bg="service-one-begin-bg.avif">
        <h2>It begins with a conversation</h2>
        <p>
          Kavitha takes time to understand why you are coming and what you hope to receive. The sessions may then draw on
          a considered mix of:
        </p>
        <div className="who-cards">
          {ELEMENTS.map((e) => (
            <article key={e.text} className="glass-card who-card">
              <span className="card-ico">
                <i aria-hidden="true" className={`fa-solid ${e.icon}`} />
              </span>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
        <p>
          Sessions may be shaped around anxiety and stress, sleep and rest, emotional heaviness, overthinking and
          fatigue, deep relaxation, or difficulty settling and focus.
        </p>
        <p className="note">
          These are not medical diagnoses, and the sessions do not claim to treat or cure any health condition.
        </p>
      </Sec>

      <Sec bg="service-one-session-bg.avif">
        <h2>Your session, step by step</h2>
        <ol className="arc circles">
          {STEPS.map((s) => (
            <li key={s.title}>
              <span className="ico">
                <i aria-hidden="true" className={`fa-solid ${s.icon}`} />
              </span>
              <b>{s.title}</b>
              <span className="s">{s.line}</span>
            </li>
          ))}
        </ol>
      </Sec>

      <Sec alt bg="service-one-course-bg.avif">
        <h2>The course</h2>
        <dl className="facts">
          {FACTS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p>
          Sessions are in person, because the resonance of live instruments and Kavitha&apos;s real-time response cannot
          be recreated online.
        </p>
      </Sec>

      <Sec bg="service-one-first-step-bg.avif">
        <h2>The first step is a conversation</h2>
        <Verse lines={["Lie down, and let it come to you,", "nothing to do, and no one to be."]} />
        <p>
          Tell Kavitha what has led you here. She will explain the format, discuss suitability and arrange the sessions
          with you.
        </p>
        <p>
          <Link className="btn" href="/booking?service=one">
            Begin With a Conversation
          </Link>
        </p>
        <p className="mini">
          Sound immersion is a wellbeing experience, not a replacement for medical, psychological or psychiatric care.
        </p>
      </Sec>
    </>
  );
}
