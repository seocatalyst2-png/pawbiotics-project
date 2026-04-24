import type { MetadataRoute } from "next";
import { getBlogPostSlugs } from "@/data/blog-posts";
import {
  getSupportedCatConditionSlugs,
  getSupportedCitySlugs,
  getSupportedDogConditionSlugs,
  getSupportedHealthConditionSlugs,
} from "@/lib/programmatic-content";

const SITE_URL = "https://pawbiotics.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/dogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/cats`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE_URL}/probiotics`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/health-conditions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tools/dog-food-calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tools/probiotic-calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tools/puppy-feeding-schedule`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const vetCityRoutes: MetadataRoute.Sitemap = getSupportedCitySlugs().map((city) => ({
    url: `${SITE_URL}/vets/${city}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const dogConditionRoutes: MetadataRoute.Sitemap = getSupportedDogConditionSlugs().map(
    (condition) => ({
      url: `${SITE_URL}/dogs/probiotics/${condition}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const catConditionRoutes: MetadataRoute.Sitemap = getSupportedCatConditionSlugs().map(
    (condition) => ({
      url: `${SITE_URL}/cats/health/${condition}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const healthConditionRoutes: MetadataRoute.Sitemap =
    getSupportedHealthConditionSlugs().map((condition) => ({
      url: `${SITE_URL}/health-conditions/${condition}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const blogPostRoutes: MetadataRoute.Sitemap = getBlogPostSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...vetCityRoutes,
    ...dogConditionRoutes,
    ...catConditionRoutes,
    ...healthConditionRoutes,
    ...blogPostRoutes,
  ];
}
