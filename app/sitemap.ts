import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = [
  "",
  "/about-kavitha",
  "/services",
  "/group-immersions",
  "/one-to-one",
  "/corporate-harmony-retreats",
  "/music-therapy",
  "/faqs",
  "/booking",
];

// Update when page content meaningfully changes.
const LAST_UPDATED = new Date("2026-10-09");

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
