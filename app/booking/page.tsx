import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { PhotoBanner, Sec } from "@/components/ui";
import { STUDIO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Booking & Contact | Léhar Studio, Mulund East, Mumbai",
  description:
    "Book a Group Sound Bath, One-to-One Immersion, Corporate & Retreat experience or Music Therapy. Contact Kavitha by WhatsApp, phone or email.",
  alternates: { canonical: "/booking" },
};

// Change request: booking kept as simple as possible, only the form matters.
export default function BookingPage() {
  return (
    <>
      <PhotoBanner
        img="book-banner.avif"
        crumbs={[{ href: "/", label: "Home" }, { label: "Booking" }]}
        eyebrow="Booking · Contact"
        title="Take the First Step"
        sub="One message is all it takes to start."
      />

      <Sec id="enquire" alt bg="book-tell-us-bg.avif">
        <h2>Tell us a little, and we take it from there</h2>
        <Suspense>
          <EnquiryForm />
        </Suspense>
        <p className="mini">
          Prefer to talk? Call <a href={STUDIO.phoneHref}>{STUDIO.phone}</a> or email{" "}
          <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>.
        </p>
      </Sec>
    </>
  );
}
