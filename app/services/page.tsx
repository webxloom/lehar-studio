import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Services | Group, One-to-One & Corporate Sound Immersion | Léhar Studio",
  description:
    "Compare Léhar Studio’s three pathways: Group Sound Baths, personalised One-to-One Immersions and bespoke Corporate Harmony & Retreat experiences in Mumbai.",
  alternates: { canonical: "/services" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `services.html` once his instructions file arrives.
export default function ServicesPage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Three Ways to Ride the Wave</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
