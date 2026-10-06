import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Booking & Contact | Léhar Studio, Mulund East, Mumbai",
  description:
    "Book a Group Sound Bath, One-to-One Immersion or Corporate & Retreat experience. Contact Kavitha by WhatsApp, phone, email or Instagram. Policies and preparation included.",
  alternates: { canonical: "/booking" },
};

// SCAFFOLD PLACEHOLDER — page content is ported from Aji's
// `booking.html` once his instructions file arrives.
export default function BookingPage() {
  return (
    <section className="banner">
      <div className="wrap">
        <p className="eyebrow">Coming soon</p>
        <h1>Take the First Step</h1>
        <p className="sub">This page is being migrated to Next.js.</p>
      </div>
      <WaveDivider />
    </section>
  );
}
