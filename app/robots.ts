import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pawbiotics.us/sitemap.xml",
    host: "https://pawbiotics.us",
  };
}
