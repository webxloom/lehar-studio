import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About Kavitha Prasad | Founder of Léhar Studio, Mumbai",
  description:
    "Meet Kavitha Prasad, certified sound healing practitioner and founder of Léhar Studio in Mulund East, Mumbai. Her story, vision, mission and guiding principles.",
  alternates: { canonical: "/about-kavitha" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `about-kavitha.html` once his instructions file arrives.
export default function AboutKavithaPage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Meet Kavitha Prasad</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
