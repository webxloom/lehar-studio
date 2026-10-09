"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import "./globals.css";

// Last-resort page when the root layout itself fails. It replaces the whole
// document, so it brings its own <html>/<body> and the global stylesheet
// (no header, footer or web fonts; Georgia fallbacks apply).
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" data-theme="light">
      <body>
        <title>Something went wrong | Léhar Studio</title>
        <main id="main">
          <section className="banner err-banner">
            <div className="wrap">
              <p className="eyebrow">Léhar Studio</p>
              <h1>A small pause in the music</h1>
              <p className="sub">Something interrupted the site. Please try again in a moment.</p>
            </div>
          </section>
          <section className="sec center">
            <div className="wrap narrow">
              <p>
                <button type="button" className="btn" onClick={() => retry()}>
                  Try again
                </button>
                {/* Plain link: the router may be unavailable here */}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a className="btn ghost" href="/">
                  Back to Home
                </a>
              </p>
              <p className="mini">
                Need help? Call <a href="tel:+919769733003">+91 97697 33003</a> or email{" "}
                <a href="mailto:studiolehar@gmail.com">studiolehar@gmail.com</a>.
              </p>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
