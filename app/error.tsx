"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import ErrorScreen from "@/components/ErrorScreen";

// Shown inside the normal header and footer when a page fails to render.
export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <title>Something went wrong | Léhar Studio</title>
      <ErrorScreen
        code="Something went wrong"
        title="A small pause in the music"
        lines={["Something interrupted this page.", "Take a breath, and let us try again."]}
      >
        <p>
          <button type="button" className="btn" onClick={() => retry()}>
            Try again
          </button>
          <Link className="btn ghost" href="/">
            Back to Home
          </Link>
        </p>
        {error.digest && <p className="mini">Reference: {error.digest}</p>}
      </ErrorScreen>
    </>
  );
}
