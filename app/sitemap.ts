import type { MetadataRoute } from "next";

const BASE = "https://kktransportation.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/drivers", "/contact", "/terms"];
  const now = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
}
