import type { Metadata } from "next";
import Link from "next/link";
import FaqExplorer from "@/components/FaqExplorer";
import { ParallaxCta, PhotoBanner, Sec } from "@/components/ui";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQs | Sound Healing, Safety, Booking | Léhar Studio",
  description:
    "Answers about sound baths, sessions, safety and suitability, one-to-one and corporate experiences, booking, payment and aftercare at Léhar Studio, Mumbai.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PhotoBanner
        img="faq-banner.avif"
        crumbs={[{ href: "/", label: "Home" }, { label: "FAQs" }]}
        eyebrow="FAQs"
        title="Frequently Asked Questions"
      />

      <Sec bg="faq-questions-bg.avif">
        <FaqExplorer groups={FAQS} />
      </Sec>

      <ParallaxCta img="faq-cta.avif">
        <h2>Still unsure?</h2>
        <p>A question is a fine first step.</p>
        <Link className="btn" href="/booking">
          Ask on the Booking page
        </Link>
      </ParallaxCta>
    </>
  );
}
