import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import { ParallaxCta, Sec, Split, Verse } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Léhar Studio | Sound Healing & Breathwork in Mulund East, Mumbai",
  description:
    "Léhar Studio by Kavitha Prasad: grounding, structured breathwork and immersive sound for stress relief and deep rest. Group, one-to-one and corporate sessions in Mumbai.",
  alternates: { canonical: "/" },
};

const ARC = [
  { icon: "fa-chair", title: "Arrive and settle", line: "Set the day down." },
  { icon: "fa-shoe-prints", title: "Grounding and guided relaxation", line: "Come home to the body." },
  { icon: "fa-wind", title: "Structured breathwork", line: "Let the breath lead." },
  { icon: "fa-bell", title: "Sound immersion", line: "Let the waves carry." },
  { icon: "fa-moon", title: "Silence and gentle return", line: "Rise in your own time." },
];

const SUPPORT = [
  { icon: "fa-leaf", title: "Anxiety & Stress", line: "When the mind is busy and the body will not settle." },
  { icon: "fa-moon", title: "Sleep & Rest", line: "When restful sleep feels far, or comes and goes." },
  { icon: "fa-heart", title: "Emotional Heaviness", line: "For moments tender, weighty, hard to put into words." },
  { icon: "fa-cloud", title: "Overthinking & Fatigue", line: "For overload and tiredness that ordinary rest cannot ease." },
  { icon: "fa-water", title: "Deep Relaxation", line: "Time to slow down, beyond the demands of the day." },
  { icon: "fa-bullseye", title: "Difficulty Settling & Focus", line: "For anyone who finds it difficult to settle or sustain attention." },
];

const WAYS = [
  {
    eyebrow: "Group experiences",
    title: "Breathwork & Sound Baths",
    line: "For communities, studios, private groups and curated gatherings.",
    href: "/group-immersions",
    cta: "Explore Group",
  },
  {
    eyebrow: "One-to-one",
    title: "Personalised 1:1",
    line: "A more individual sound, breath and healing experience, created around the person.",
    href: "/one-to-one",
    cta: "Explore 1:1",
  },
  {
    eyebrow: "Organisations",
    title: "Corporate & Retreats",
    line: "Wellbeing experiences for teams, leaders and retreats, designed to create meaningful pauses within demanding environments.",
    href: "/corporate-harmony-retreats",
    cta: "Explore Corporate",
  },
];

const WHO = [
  { icon: "fa-briefcase", title: "Professionals and leaders under sustained pressure" },
  { icon: "fa-people-roof", title: "Women balancing career, family and caregiving" },
  { icon: "fa-graduation-cap", title: "Students facing academic demands or trouble settling and focusing" },
  { icon: "fa-feather", title: "Anyone seeking a quieter space to pause and reconnect" },
  { icon: "fa-people-group", title: "Corporate teams" },
  { icon: "fa-spa", title: "Wellness centres & yoga studios" },
  { icon: "fa-person-running", title: "Dance & movement studios" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Sec id="intro">
        <h2>A Gentle Pause in a Loud World</h2>
        <Split img="home-gentle-pause-bowl.avif">
          <Verse
            lines={[
              "The world is loud, the days run fast,",
              "and rest feels like a thing from the past.",
              "Whether you lead, or love, or care,",
              "true quiet is hard to find out there.",
            ]}
          />
          <p>
            Léhar Studio creates immersive wellbeing experiences that bring together grounding, conscious breathwork,
            sound and music, creating space for the body to slow down, the mind to settle and stillness to emerge.
          </p>
          <p>
            Sound and vibration create an environment in which you can gradually slow down, turn inward and experience a
            deeper sense of rest and stillness.
          </p>
        </Split>
      </Sec>

      <Sec id="arc" alt bg="home-arc-bg.avif">
        <h2>The Arc of a Léhar Session</h2>
        <Verse lines={["Five steps, one wave."]} />
        <ol className="arc circles">
          {ARC.map((s) => (
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

      <Sec id="first-visit">
        <h2>What can a first-time visitor expect?</h2>
        <p className="eyebrow">Grounding · Breath · Sound</p>
        <Split img="home-firsttime-expect.avif">
          <Verse
            lines={[
              "Always switched on, always on the run,",
              "the mind stays noisy, the body undone.",
              "Here, for one unhurried hour,",
              "nothing is asked, and rest has power.",
            ]}
          />
          <p>
            A session begins with grounding, bringing attention back to the body. Structured breathwork calms the nervous
            system so mind and body can receive sound and vibration with ease. You return lighter and steadier, with
            clearer focus and more mental space.
          </p>
        </Split>
        <div
          className="timebar labelled"
          role="img"
          aria-label="One hour: Ground & Breathe for the first 15 minutes, Immerse in Sound for the next 40 minutes, Rest in Quiet for the last 5 minutes"
        >
          <span style={{ flex: "0 0 25%", background: "var(--wash)" }}>
            <b>Ground &amp; Breathe</b> first 15 min
          </span>
          <span style={{ flex: "1 1 66%", background: "var(--accent)", color: "var(--bg)" }}>
            <b>Immerse in Sound</b> next 40 min
          </span>
          <span style={{ flex: "0 0 8.3%", minWidth: "7.5rem", background: "var(--surface)", border: "1px solid var(--line)" }}>
            <b>Rest in Quiet</b> last 5 min
          </span>
        </div>
      </Sec>

      <Sec id="intentions" alt>
        <h2>What We Gently Support</h2>
        <Split img="home-gentle-support.avif">
          <Verse lines={["Sound does not only fill the air,", "it moves through you, and tension eases there."]} />
          <p>
            Lie down, close your eyes, and receive. Nothing to learn, nothing to perform, nothing to get right. The thing
            people say most afterwards is simply how relaxed they feel.
          </p>
        </Split>
        <div className="focus-list">
          {SUPPORT.map((s) => (
            <article key={s.title} className="glass-card focus-item">
              <div className="focus-ico">
                <i aria-hidden="true" className={`fa-solid ${s.icon}`} />
              </div>
              <div className="focus-body">
                <h3>{s.title}</h3>
                <p>{s.line}</p>
              </div>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="ways" bg="home-three-ways-bg.avif">
        <h2>Three Ways to Ride the Wave</h2>
        <div className="cards">
          {WAYS.map((w) => (
            <article key={w.title} className="glass-card aligned" style={{ "--rows": "4" } as React.CSSProperties}>
              <p className="eyebrow">{w.eyebrow}</p>
              <h3>{w.title}</h3>
              <div>
                <p>{w.line}</p>
              </div>
              <p>
                <Link className="btn ghost" href={w.href}>
                  {w.cta}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec id="who">
        <h2>Who is Léhar Studio for?</h2>
        <div className="who-cards">
          {WHO.map((w) => (
            <article key={w.title} className="glass-card who-card">
              <span className="card-ico">
                <i aria-hidden="true" className={`fa-solid ${w.icon}`} />
              </span>
              <h3>{w.title}</h3>
            </article>
          ))}
        </div>
        <p className="note">
          <b>Note, with love.</b> Our sessions are holistic wellbeing journeys to help you feel amazing. They are not
          medical diagnoses or cures.
        </p>
      </Sec>

      <Sec id="philosophy" alt bg="home-philosophy-wave-bg.avif">
        <h2>The Philosophy of the Wave</h2>
        <Split img="home-philosophy-wave.avif">
          <Verse
            lines={[
              "A wave does not force its way,",
              "it carries, it shifts, it lets things sway.",
              "Léhar means wave, and here you will find",
              "nothing to perform, no need to quiet the mind.",
              "Just lie down, and let the sound carry you.",
            ]}
          />
        </Split>
        <article className="glass-card how-card">
          <p>
            <b>How each session is held.</b> Every session is an experience held with care, intention and respect for the
            person receiving it. A personalised session begins with a conversation about what feels most present for you.
            Group sessions follow a thoughtfully shaped journey, with room to respond to the people in the space.
          </p>
          <p>
            Each begins gently with grounding and guided relaxation, then structured breathwork. Sound arrives gradually
            through Himalayan singing bowls, gong and other resonant instruments, and may also bring Solfeggio
            frequencies, Indian raagas, mantra or voice. The close is slow, so you return without hurry.
          </p>
        </article>
        <p>
          <Link href="/about-kavitha">Read Kavitha&apos;s story →</Link>
        </p>
      </Sec>

      <Testimonials items={TESTIMONIALS} />

      <ParallaxCta img="home-cta.avif" id="begin">
        <h2>The First Step</h2>
        <Verse
          lines={[
            "Give yourself one hour of real quiet.",
            "Let bowls and frequencies find the parts of you that forgot how to switch off.",
          ]}
        />
        <p>Begin with a single session. If the calm feels like home, we can weave an ongoing rhythm into your life.</p>
        <p>
          <Link className="btn" href="/booking">
            Book Your First Step
          </Link>
        </p>
      </ParallaxCta>
    </>
  );
}
