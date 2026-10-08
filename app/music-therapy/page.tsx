import type { Metadata } from "next";
import Link from "next/link";
import MusicPlayer from "@/components/MusicPlayer";
import { Img, ParallaxCta, PhotoBanner, Sec, Verse } from "@/components/ui";

export const metadata: Metadata = {
  title: "Music Therapy | Raaga, Rhythm & Nāda | Léhar Studio, Mumbai",
  description:
    "Personalised music therapy at Léhar Studio, Mulund East: Indian raagas, rhythm, voice, mantra and frequency, shaped around you to support emotional ease, rest and a quieter mind.",
  alternates: { canonical: "/music-therapy" },
};

// New page from Aji's change request, laid out after the "Music Therapy"
// section of old_wireframe_index_v1.0.html, with copy drawn from the
// Léhar Studio content documents.
//
// Each chapter has a small player for its accompanying audio track.
const CHAPTERS: { eyebrow: string; title: string; img: string; text: string; track: string }[] = [
  {
    eyebrow: "Calming resonance",
    title: "Where Words Fall Silent",
    img: "music-fallSilent.avif",
    text: "Music can reach places that conversation sometimes cannot. Through rhythm, melody, pitch and sound, it offers a gentle way to express what is hard to put into words, to sit with difficult experiences, and to find a little more balance within.",
    track: "/audio/sound-bath-journey.mp3",
  },
  {
    eyebrow: "Shaped around you",
    title: "Sound Shaped for You",
    img: "music-soundShape.avif",
    text: "This is not music for listening or entertainment alone. Musical patterns are chosen thoughtfully for what feels most present for you, and raagas and tonal elements may be blended with mantra, voice, meditation and other sound techniques to guide mind and body into calm receptivity.",
    track: "/audio/blessings-in-nature.mp3",
  },
  {
    eyebrow: "Deep relaxation",
    title: "The Living Wisdom of Rāga",
    img: "music-wisdom.avif",
    text: "Raagas offer a distinctive musical language, and traditional wisdom holds that they influence mood, energy and states of mind. Chosen according to the atmosphere and intention of the session, never simply as background music, they may support rest, relaxation and emotional ease.",
    track: "/audio/sound-bath-journey.mp3",
  },
  {
    eyebrow: "The primordial sound",
    title: "A Return Through Nāda",
    img: "music-nada.avif",
    text: "Blending music therapy with ancient wisdom and experiential practice, each session is a gentle, personalised journey through Nāda, the primordial sound, guided at a pace that respects your comfort.",
    track: "/audio/solfeggio-bath-432hz.mp3",
  },
];

const ELEMENTS = [
  "Indian raagas and mindful music",
  "Voice and mantra",
  "Rhythm and melody",
  "Selected frequencies and tones",
  "Himalayan singing bowls",
  "Silence and integration",
];

export default function MusicTherapyPage() {
  return (
    <>
      <PhotoBanner
        img="music-banner.avif"
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "Music Therapy" }]}
        eyebrow="Acoustic therapy"
        title="Music Therapy"
        sub="Raaga, rhythm, voice and frequency, shaped around you."
      />

      <Sec className="music-therapy-intro">
        <Verse
          lines={["Where tones bring stillness, melody brings feeling,", "a raaga, a breath, and room for healing."]}
          className="verse-center music-intro-quote"
        />
        <div className="music-intro-layout">
          <figure className="float-img still music-intro-photo">
            <Img
              name="music-Listen.avif"
              alt="A singing bowl and music instruments arranged for a sound therapy session"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>
          <div className="music-intro-copy">
            <p>
              Music brings feeling, movement and expression into a session. While individual tones and frequencies create
              space and stillness, melody and raaga add another layer of emotional and cultural resonance.
            </p>
            <p>
              Kavitha&apos;s approach is rooted in her training in Integrated Therapy in Sound, Music and Breathwork, and
              in a lifelong personal connection with music. No musical knowledge is needed. Your role is simply to get
              comfortable and listen.
            </p>
          </div>
        </div>
      </Sec>

      {CHAPTERS.map((c, i) => (
        <Sec key={c.title} alt={i % 2 === 0}>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
          <div className={`split music-chap${i % 2 ? " flip" : ""}`}>
            <div className="split-text">
              <p>{c.text}</p>
              <MusicPlayer src={c.track} title={c.title} />
            </div>
            <figure className="float-img still">
              <Img name={c.img} />
            </figure>
          </div>
        </Sec>
      ))}

      <Sec alt>
        <h2>What a session may include</h2>
        <ul className="chips">
          {ELEMENTS.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <p>
          Each session begins with a conversation about what you would like it to support, then grounding and breath,
          before the music unfolds. Not every element is used in every session.
        </p>
        <p className="note">
          Music therapy at Léhar Studio is a wellbeing experience, not a substitute for medical, psychological or
          psychiatric care. Everyone responds differently, and no outcome is promised.
        </p>
      </Sec>

      <ParallaxCta img="music-cta.avif">
        <h2>Experience the Healing Frequencies</h2>
        <Verse lines={["Let the raaga find you, let the rhythm hold,", "a quieter mind, a story told."]} />
        <p>
          <Link className="btn" href="/booking?service=music">
            Enquire About Music Therapy
          </Link>
        </p>
      </ParallaxCta>
    </>
  );
}
