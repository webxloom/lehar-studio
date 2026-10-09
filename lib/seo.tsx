import type { Metadata } from "next";
import { SITE_URL, STUDIO } from "@/lib/site";

const OG_IMAGE = { url: "/og-lehar.png", width: 1200, height: 630, alt: "Léhar Studio: sound healing and breathwork in Mulund East, Mumbai" };

/**
 * Per-page metadata: canonical plus page-specific Open Graph and Twitter tags.
 * (A page that only sets `title` inherits the layout's openGraph object, which
 * gave every page the Home share title.)
 */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: STUDIO.name,
      locale: "en_IN",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export const absoluteUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

/** Renders a JSON-LD block. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
