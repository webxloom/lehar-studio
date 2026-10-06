import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Corporate Sound Wellbeing & Retreat Experiences | Léhar Studio",
  description:
    "Bespoke sound, breath and music experiences for teams, organisations and retreats in Mumbai and beyond. Plan your venue, format and quotation with Léhar Studio.",
  alternates: { canonical: "/corporate-harmony-retreats" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `corporate-harmony-retreats.html` once his instructions file arrives.
export default function CorporateHarmonyRetreatsPage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Pause, Reset and Reconnect</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
