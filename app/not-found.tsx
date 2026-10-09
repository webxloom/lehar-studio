import type { Metadata } from "next";
import Link from "next/link";
import ErrorScreen from "@/components/ErrorScreen";

// Next.js adds noindex automatically for 404 responses.
export const metadata: Metadata = {
  title: { absolute: "Page not found | Léhar Studio" },
  description: "This page could not be found. Find your way back to Léhar Studio.",
};

export default function NotFound() {
  return (
    <ErrorScreen
      code="404 · Page not found"
      title="This wave has drifted away"
      lines={["The page you were looking for has moved,", "or never was. Let us guide you home."]}
    >
      <p>
        <Link className="btn" href="/">
          Back to Home
        </Link>
        <Link className="btn ghost" href="/booking">
          Book a Session
        </Link>
      </p>
    </ErrorScreen>
  );
}
