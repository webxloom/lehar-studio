import type { Metadata, Viewport } from "next";
import { Elsie, Fraunces, Poltawski_Nowy } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import PageEffects from "@/components/PageEffects";
import { SITE_URL } from "@/lib/site";

const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-elsie",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const poltawski = Poltawski_Nowy({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poltawski",
  display: "swap",
});

const title = "Léhar Studio | Sound Healing & Breathwork in Mulund East, Mumbai";
const description =
  "Léhar Studio by Kavitha Prasad: grounding, structured breathwork and immersive sound for stress relief and deep rest. Group, one-to-one and corporate sessions in Mumbai.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s" },
  description,
  openGraph: { type: "website", siteName: "Léhar Studio", title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/images/lehar-logo-dark.avif" },
};

export const viewport: Viewport = {
  themeColor: "#F7F9FA",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${elsie.variable} ${fraunces.variable} ${poltawski.variable}`}
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning on <html>/<body>: ThemeScript sets data-theme
          and the `js` class before hydration, and extensions like Grammarly
          inject body attributes. Children are still checked. */}
      <body suppressHydrationWarning>
        <ThemeScript />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <PageEffects />
      </body>
    </html>
  );
}
