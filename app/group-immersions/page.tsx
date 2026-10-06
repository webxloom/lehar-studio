import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Group Sound Baths in Mumbai | Léhar Studio",
  description:
    "Guided 60-minute Group Sound Baths for up to ten people: Himalayan singing bowls, gong and resonant sound, held at your venue. Enquire with Léhar Studio.",
  alternates: { canonical: "/group-immersions" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `group-immersions.html` once his instructions file arrives.
export default function GroupImmersionsPage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Group Sound Baths</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
