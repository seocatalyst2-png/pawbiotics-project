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
      url: `${SITE_URL}/vets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/vet-approved-homemade-dog-food-recipes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/homemade-chicken-dog-food-recipes-vet-approved`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/vet-approved-homemade-dog-food-recipes-for-large-dogs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/how-to-portion-homemade-dog-food`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/how-much-homemade-dog-food-should-i-feed-my-dog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/dog-spewing-yellow`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/dog-vomiting-yellow-bile`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/dog-throwing-up-yellow-foam`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/dog-vomiting-yellow-in-the-morning`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/why-is-my-cat-sneezing-a-lot`,
      lastModified: now,
      changeFrequency: "monthly",
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
