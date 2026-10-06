import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "FAQs | Sound Healing, Safety, Booking | Léhar Studio",
  description:
    "Answers about sound baths, sessions, safety and suitability, one-to-one and corporate experiences, booking, payment and aftercare at Léhar Studio, Mumbai.",
  alternates: { canonical: "/faqs" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `faqs.html` once his instructions file arrives.
export default function FaqsPage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Frequently Asked Questions</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
