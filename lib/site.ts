// Single source of truth for studio details + navigation,
// taken from Aji's static build (header, footer, JSON-LD).

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com"; // TODO: real domain from Aji

export const STUDIO = {
  name: "Léhar Studio",
  founder: "Kavitha Prasad",
  phone: "+91 97697 33003",
  phoneHref: "tel:+919769733003",
  whatsapp: "919769733003",
  email: "studiolehar@gmail.com",
  instagram: "https://www.instagram.com/leharstudio",
  instagramHandle: "@leharstudio",
  location: "Léhar Studio, Mulund East, Mumbai",
  areaServed: "Mumbai",
};

export const WA_GREETING = "Hello Kavitha, I would like to know more about Léhar Studio.";

export function waLink(text?: string) {
  return `https://wa.me/${STUDIO.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-kavitha", label: "About Kavitha" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "Overview" },
      { href: "/group-immersions", label: "Group Immersions" },
      { href: "/one-to-one", label: "1:1 Immersions" },
      { href: "/corporate-harmony-retreats", label: "Corporate Harmony & Retreats" },
      { href: "/music-therapy", label: "Music Therapy" },
    ],
  },
  { href: "/faqs", label: "FAQs" },
  { href: "/booking", label: "Booking" },
];

export const FOOTER_LINKS = [
  { href: "/about-kavitha", label: "About Kavitha" },
  { href: "/services", label: "Services" },
  { href: "/group-immersions", label: "Group Immersions" },
  { href: "/one-to-one", label: "1:1 Immersions" },
  { href: "/corporate-harmony-retreats", label: "Corporate Harmony & Retreats" },
  { href: "/music-therapy", label: "Music Therapy" },
  { href: "/faqs", label: "FAQs" },
  { href: "/booking", label: "Booking" },
];
