import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { services } from "@/content/services";
import { registrations } from "@/content/registrations";
import { resources } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths = ["", "/services", "/registration", "/about", "/contact", "/resources"];
  const servicePaths = services.map((s) => `/services/${s.slug}`);
  const registrationPaths = registrations.map((r) => `/registration/${r.slug}`);
  const resourcePaths = resources.map((a) => `/resources/${a.slug}`);

  return [...staticPaths, ...servicePaths, ...registrationPaths, ...resourcePaths].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path.includes("/resources/") ? 0.6 : 0.8,
    }),
  );
}
