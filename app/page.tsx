import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import { Img, ParallaxCta, Sec, Split, Verse } from "@/components/ui";
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

const STAGES = [
  { icon: "fa-wind", time: "First 15 min", title: "Ground & Breathe", line: "Arrive, settle the body and let the breath lead." },
  { icon: "fa-bell", time: "Next 40 min", title: "Immerse in Sound", line: "Bowls and resonant instruments carry you into deep rest." },
  { icon: "fa-moon", time: "Last 5 min", title: "Rest in Quiet", line: "The sound fades and you return in your own time." },
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
    img: "home-group-sound-bath.avif",
    cta: "Explore Group",
  },
  {
    eyebrow: "One-to-one",
    title: "Personalised 1:1",
    line: "A more individual sound, breath and healing experience, created around the person.",
    href: "/one-to-one",
    img: "home-1-1-immersion.avif",
    cta: "Explore 1:1",
  },
  {
    eyebrow: "Organisations",
    title: "Corporate & Retreats",
    line: "Wellbeing experiences for teams, leaders and retreats, designed to create meaningful pauses within demanding environments.",
    href: "/corporate-harmony-retreats",
    img: "home-corp-harmony.avif",
    cta: "Explore Corporate",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Sec id="intro">
        <h2>Experience The Resonance</h2>
        <Split img="home-resonance-intro.avif">
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
        <Split img="home-first-time-visit.avif">
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
        <div className="cards stage-cards">
          {STAGES.map((st) => (
            <article key={st.title} className="glass-card stage-card">
              <span className="card-ico">
                <i aria-hidden="true" className={`fa-solid ${st.icon}`} />
              </span>
              <p className="stage-time">{st.time}</p>
              <h3>{st.title}</h3>
              <p>{st.line}</p>
            </article>
          ))}
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
        <div className="focus-list c3">
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
        <h2>Ways to Ride the Wave</h2>
        <div className="cards">
          {WAYS.map((w) => (
            <article key={w.title} className="glass-card offer-card">
              <figure className="offer-img">
                <Img name={w.img} sizes="(max-width: 1000px) 90vw, 360px" />
              </figure>
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
