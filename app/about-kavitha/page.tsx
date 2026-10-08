import type { Metadata } from "next";
import Link from "next/link";
import { Img, ParallaxCta, PhotoBanner, Sec, Verse } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Kavitha Prasad | Founder of Léhar Studio, Mumbai",
  description:
    "Meet Kavitha Prasad, certified sound healing practitioner and founder of Léhar Studio in Mulund East, Mumbai. Her story, vision, mission and guiding principles.",
  alternates: { canonical: "/about-kavitha" },
};

const STORY = [
  {
    title: "Two callings",
    img: "about-kavitha-two-callings.avif",
    text: "For more than 25 years, I balanced a demanding corporate career with raising my child as a single parent and caring for the people who depended on me. It taught me resilience, and how easily rest slides to the bottom of the list.",
  },
  {
    title: "Music, always",
    img: "about-kavitha-music-always.avif",
    text: "Music never left. Slowly it became a way to pause, notice and return to myself, and I grew curious about how sound, rhythm, breath and silence change a moment.",
  },
  {
    title: "The training",
    img: "about-kavitha-training.avif",
    text: "That curiosity led me deeper into sound-based practice, bringing together Himalayan singing bowls, resonant instruments, structured breathwork, Indian raagas, Solfeggio frequencies, mantra and voice.",
    creds: [
      ["Level 3 Certified Sound Healing Practitioner", "Vinyasa Yoga Ashram, Rishikesh"],
      ["Integrated Therapy in Sound, Music and Breathwork", "Harmony Heals Academy"],
    ],
  },
  {
    title: "A doorway into stillness",
    img: "about-kavitha-doorway.avif",
    text: "Many people find silence hard, or worry they are not meditating “correctly”. A sound immersion asks for none of that. You lie down, let your breath settle and see what unfolds.",
  },
  {
    title: "Léhar Studio is born",
    img: "about-kavitha-lehar.avif",
    text: "Léhar Studio weaves the strands of my life: career, parenthood and caregiving, music, and my training in sound and breath. A space where nothing needs to be solved, performed or held together.",
  },
];

const PRINCIPLES = [
  { title: "Safety and comfort", line: "Your physical and emotional comfort always come first." },
  { title: "Respect for individual experience", line: "There is no correct way to respond to sound." },
  { title: "Intention without expectation", line: "Every element is chosen with care; no result is promised." },
  { title: "Simplicity and accessibility", line: "No experience needed. Arrive exactly as you are." },
  { title: "Care and presence", line: "The quality of attention matters as much as the instruments." },
];

export default function AboutKavithaPage() {
  return (
    <>
      <PhotoBanner
        img="About-banner.avif"
        pos="right"
        crumbs={[{ href: "/", label: "Home" }, { label: "Meet Kavitha Prasad" }]}
        eyebrow={
          <>
            Founder and guiding practitioner, <span className="no-caps">Léhar Studio</span>
          </>
        }
        title="Meet Kavitha Prasad"
      />

      <Sec>
        <div className="intro-grid">
          <div className="portrait" aria-hidden="true">
            <Img name="about-kp-portrait.avif" sizes="(max-width: 1000px) 90vw, 380px" />
          </div>
          <div>
            <Verse lines={["She kept the world going, year on year,", "and now she helps you pause right here."]} />
            <p>
              After more than 25 years in corporate leadership, alongside raising her child as a single parent and caring
              for others, Kavitha now designs and guides personalised one-to-one immersions and intimate group sound
              experiences, built on one belief: there is nothing to perform or achieve.
            </p>
          </div>
        </div>
      </Sec>

      <Sec alt>
        <h2>The One Who Kept Going</h2>
        <ol className="story uniform">
          {STORY.map((c) => (
            <li key={c.title} className="chap">
              <div className="chap-text">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                {c.creds?.map(([what, where]) => (
                  <span key={what} className="cred">
                    <b>{what}</b> · {where}
                  </span>
                ))}
              </div>
              <figure className="chap-img">
                <Img name={c.img} />
              </figure>
            </li>
          ))}
        </ol>
        <blockquote className="verse pull verse-center">
          <p>
            I do not believe anyone needs to be “fixed”, or that there is one correct way to experience sound. What I can
            offer is a carefully held space where you feel safe enough to slow down. You are welcome exactly as you are.
          </p>
          <cite>Kavitha Prasad</cite>
        </blockquote>
      </Sec>

      <Sec bg="about-mission-vision-bg.avif">
        <div className="cards">
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-eye" />
              </span>
              Vision
            </h3>
            <p>
              Spaces where people step away from the noise and pace of life and rediscover the ability to simply pause,
              listen and reconnect.
            </p>
          </article>
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-bullseye" />
              </span>
              Mission
            </h3>
            <p>
              Carefully guided experiences of sound, breath and music, where everyone feels welcomed, unhurried and cared
              for.
            </p>
          </article>
          <article className="glass-card">
            <h3 className="has-ico">
              <span className="card-ico">
                <i aria-hidden="true" className="fa-solid fa-water" />
              </span>
              Philosophy of the Wave
            </h3>
            <p>
              Léhar means wave. A wave does not force its way; it carries. Here there is nothing to perform and no need to
              quiet the mind. Just lie down, and let the sound carry you.
            </p>
          </article>
        </div>
      </Sec>

      <Sec alt>
        <h2>The Principles That Guide My Work</h2>
        <div className="principles-layout">
          <div className="principles">
            {PRINCIPLES.map((p, i) => (
              <article key={p.title} className="glass-card principle">
                <span className="principle-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.line}</p>
                </div>
              </article>
            ))}
          </div>
          <figure className="principles-image">
            <Img
              name="about-principles.avif"
              alt="Singing bowls and a peaceful space reflecting the principles of Léhar Studio"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>
        </div>
      </Sec>

      <ParallaxCta img="about-cta.avif" id="next">
        <h2>Begin With a Conversation</h2>
        <Verse lines={["Ready to book, or just to ask,", "the first step is a gentle task."]} />
        <p>
          <Link className="btn" href="/booking">
            Book a Session
          </Link>
          <Link className="btn ghost" href="/services">
            Explore the Services
          </Link>
        </p>
      </ParallaxCta>
    </>
  );
}
