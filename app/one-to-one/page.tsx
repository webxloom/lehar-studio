import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Personalised One-to-One Sound Immersion | Léhar Studio, Mulund East",
  description:
    "An eight-session personalised sound immersion course at Léhar Studio, Mulund East, shaped around you with grounding, breathwork and sound. Begin with a conversation.",
  alternates: { canonical: "/one-to-one" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `one-to-one.html` once his instructions file arrives.
export default function OneToOnePage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Personalised One-to-One Sound Immersion</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
