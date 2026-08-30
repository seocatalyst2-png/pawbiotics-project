import type { Metadata } from "next";

const SITE_URL = "https://pawbiotics.us";
const DEFAULT_BRAND = "Pawbiotics";

type MetaTitleOptions = {
  primaryKeyword: string;
  benefit?: string;
  trustModifier?: string;
  brand?: string;
  manualTitle?: string;
  maxLength?: number;
};

type MetaDescriptionOptions = {
  primaryKeyword: string;
  userBenefit: string;
  keywordVariation?: string;
  trustAngle?: string;
  manualDescription?: string;
  maxLength?: number;
};

type OpenGraphOptions = {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
};

type GeneratedPageMeta = {
  title: string;
  description: string;
  canonical: string;
  openGraph: Metadata["openGraph"];
};

type GeneratorOverrides = {
  manualTitle?: string;
  manualDescription?: string;
  canonicalPath?: string;
  openGraphTitle?: string;
  openGraphType?: "website" | "article";
  brand?: string;
};

function hasText(value?: string): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function trimToLength(input: string, maxLength: number): string {
  if (input.length <= maxLength) return input;
  return `${input.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
}

function normalizePhrase(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseCityAndState(cityName: string, state?: string): { city: string; state: string } {
  if (hasText(state)) return { city: cityName, state: state.toUpperCase() };
  const parts = cityName.split(",").map((part) => part.trim());
  if (parts.length === 2 && parts[1].length >= 2) {
    return { city: parts[0], state: parts[1].toUpperCase() };
  }
  return { city: cityName, state: "TX" };
}

/**
 * Generic title builder with fallback support.
 * Keeps titles concise and avoids empty results.
 */
export function createMetaTitle({
  primaryKeyword,
  benefit,
  trustModifier,
  brand = DEFAULT_BRAND,
  manualTitle,
  maxLength = 60,
}: MetaTitleOptions): string {
  if (hasText(manualTitle)) return manualTitle.trim();

  const parts = [normalizePhrase(primaryKeyword)];
  if (hasText(benefit)) parts.push(normalizePhrase(benefit));
  if (hasText(trustModifier)) parts.push(normalizePhrase(trustModifier));

  let title = parts.join(" | ");
  if (title.length < maxLength - 8 && hasText(brand)) {
    title = `${title} | ${brand}`;
  }

  return trimToLength(title, Math.max(45, maxLength));
}

/**
 * Generic description builder with fallback support.
 * Targets readable, useful SERP snippets around 145-160 chars.
 */
export function createMetaDescription({
  primaryKeyword,
  userBenefit,
  keywordVariation,
  trustAngle,
  manualDescription,
  maxLength = 160,
}: MetaDescriptionOptions): string {
  if (hasText(manualDescription)) return manualDescription.trim();

  const parts = [
    `${normalizePhrase(primaryKeyword)}: ${normalizePhrase(userBenefit)}`,
    hasText(keywordVariation) ? normalizePhrase(keywordVariation) : "",
    hasText(trustAngle) ? normalizePhrase(trustAngle) : "Practical, vet-informed guidance for pet parents.",
  ].filter(Boolean);

  return trimToLength(parts.join(" "), Math.max(120, maxLength));
}

export function createCanonicalUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function createOpenGraphMeta({
  title,
  description,
  url,
  type = "article",
}: OpenGraphOptions): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    type,
  };
}

/**
 * Example target:
 * - "vets in Houston"
 */
export function generateVetCityMeta(
  cityName: string,
  state?: string,
  overrides?: GeneratorOverrides
): GeneratedPageMeta {
  const { city, state: normalizedState } = parseCityAndState(cityName, state);
  const canonical = createCanonicalUrl(
    overrides?.canonicalPath ?? `/vets/${city.toLowerCase().replace(/\s+/g, "-")}-${normalizedState.toLowerCase()}`
  );

  const title = createMetaTitle({
    primaryKeyword: `Vets in ${city}, ${normalizedState}`,
    benefit: "Compare Clinics and Emergency Care",
    trustModifier: "Local Guide",
    manualTitle: overrides?.manualTitle,
    brand: overrides?.brand,
  });

  const description = createMetaDescription({
    primaryKeyword: `Find vets in ${city}, ${normalizedState}`,
    userBenefit: "Compare trusted clinics, emergency options, and practical cost tips near you.",
    keywordVariation: `Local veterinary care for dogs and cats in ${city}`,
    trustAngle: "Beginner-friendly and research-based for faster clinic decisions.",
    manualDescription: overrides?.manualDescription,
  });

  return {
    title,
    description,
    canonical,
    openGraph: createOpenGraphMeta({
      title: overrides?.openGraphTitle ?? `Best Vets in ${city}, ${normalizedState}`,
      description,
      url: canonical,
      type: overrides?.openGraphType ?? "website",
    }),
  };
}

/**
 * Example target:
 * - "dog probiotics for diarrhea"
 */
export function generateDogProbioticMeta(
  condition: string,
  overrides?: GeneratorOverrides
): GeneratedPageMeta {
  const conditionLabel = titleFromSlug(condition);
  const canonical = createCanonicalUrl(
    overrides?.canonicalPath ?? `/dogs/probiotics/${condition.toLowerCase()}`
  );

  const title = createMetaTitle({
    primaryKeyword: `Dog Probiotics for ${conditionLabel}`,
    benefit: "Gut Support and Care Tips",
    trustModifier: "Vet-Informed Guide",
    manualTitle: overrides?.manualTitle,
    brand: overrides?.brand,
  });

  const description = createMetaDescription({
    primaryKeyword: `Dog probiotics for ${conditionLabel.toLowerCase()}`,
    userBenefit: "Learn supportive care steps, symptom tracking, and when to contact your veterinarian.",
    keywordVariation: `Practical gut health guidance for dogs with ${conditionLabel.toLowerCase()}`,
    manualDescription: overrides?.manualDescription,
  });

  return {
    title,
    description,
    canonical,
    openGraph: createOpenGraphMeta({
      title: overrides?.openGraphTitle ?? `Dog Probiotics for ${conditionLabel}`,
      description,
      url: canonical,
      type: overrides?.openGraphType ?? "article",
    }),
  };
}

/**
 * Example target:
 * - "cat gut health"
 */
export function generateCatHealthMeta(
  condition: string,
  overrides?: GeneratorOverrides
): GeneratedPageMeta {
  const conditionLabel = titleFromSlug(condition);
  const canonical = createCanonicalUrl(
    overrides?.canonicalPath ?? `/cats/health/${condition.toLowerCase()}`
  );

  const title = createMetaTitle({
    primaryKeyword: `Cat Health for ${conditionLabel}`,
    benefit: "Symptoms and Daily Support",
    trustModifier: "Vet-Informed Guide",
    manualTitle: overrides?.manualTitle,
    brand: overrides?.brand,
  });

  const description = createMetaDescription({
    primaryKeyword: `Cat ${conditionLabel.toLowerCase()} support`,
    userBenefit: "Understand warning signs, daily care routines, and useful next steps for pet parents.",
    keywordVariation: "Feline-safe wellness guidance with practical monitoring tips.",
    manualDescription: overrides?.manualDescription,
  });

  return {
    title,
    description,
    canonical,
    openGraph: createOpenGraphMeta({
      title: overrides?.openGraphTitle ?? `Cat ${conditionLabel} Guide`,
      description,
      url: canonical,
      type: overrides?.openGraphType ?? "article",
    }),
  };
}

/**
 * Example target:
 * - "immunity"
 */
export function generateHealthConditionMeta(
  condition: string,
  overrides?: GeneratorOverrides
): GeneratedPageMeta {
  const isCat = /cats?$/i.test(condition) || /feline/i.test(condition);
  const isDog = /dogs?$/i.test(condition) || /canine/i.test(condition);
  const cleanLabel = titleFromSlug(condition).replace(/\s+(Cats?|Dogs?|Pets?)$/i, "").trim();
  const audiencePhrase = isCat ? "in Cats" : isDog ? "in Dogs" : "in Dogs and Cats";
  const audiencePetPhrase = isCat ? "in cats" : isDog ? "in dogs" : "in pets";

  const canonical = createCanonicalUrl(
    overrides?.canonicalPath ?? `/health-conditions/${condition.toLowerCase()}`
  );

  const title = createMetaTitle({
    primaryKeyword: `${cleanLabel} ${audiencePhrase}`,
    benefit: "Practical Symptom and Care Guide",
    trustModifier: "Vet-Informed",
    manualTitle: overrides?.manualTitle,
    brand: overrides?.brand,
  });

  const description = createMetaDescription({
    primaryKeyword: `${cleanLabel} ${audiencePetPhrase}`,
    userBenefit: "Get practical home-care steps, symptom guidance, and escalation cues for pet parents.",
    keywordVariation: "Vet-informed support and emergency triage.",
    manualDescription: overrides?.manualDescription,
  });

  return {
    title,
    description,
    canonical,
    openGraph: createOpenGraphMeta({
      title: overrides?.openGraphTitle ?? `${cleanLabel} ${audiencePhrase}`,
      description,
      url: canonical,
      type: overrides?.openGraphType ?? "article",
    }),
  };
}

export function generateBlogMeta(
  post: {
    slug: string;
    title: string;
    intro?: string;
    metaTitle?: string;
    metaDescription?: string;
  },
  overrides?: GeneratorOverrides
): GeneratedPageMeta {
  const canonical = createCanonicalUrl(overrides?.canonicalPath ?? `/blog/${post.slug}`);
  const title = createMetaTitle({
    primaryKeyword: post.title,
    benefit: "Pet Health Guide",
    trustModifier: "Pawbiotics",
    manualTitle: overrides?.manualTitle ?? post.metaTitle,
    brand: overrides?.brand,
  });
  const description = createMetaDescription({
    primaryKeyword: post.title,
    userBenefit:
      post.intro && post.intro.length > 20
        ? post.intro
        : "Learn practical, beginner-friendly guidance for pet health and nutrition.",
    keywordVariation: "Clear, educational steps with safety-first recommendations.",
    manualDescription: overrides?.manualDescription ?? post.metaDescription,
  });

  return {
    title,
    description,
    canonical,
    openGraph: createOpenGraphMeta({
      title: overrides?.openGraphTitle ?? post.title,
      description,
      url: canonical,
      type: overrides?.openGraphType ?? "article",
    }),
  };
}

export function generateToolMeta(
  tool: {
    slug: string;
    name: string;
    keywordIntent: string;
    userBenefit: string;
    metaTitle?: string;
    metaDescription?: string;
  },
  overrides?: GeneratorOverrides
): GeneratedPageMeta {
  const canonical = createCanonicalUrl(overrides?.canonicalPath ?? `/tools/${tool.slug}`);
  const title = createMetaTitle({
    primaryKeyword: tool.keywordIntent,
    benefit: tool.name,
    trustModifier: "Free Tool",
    manualTitle: overrides?.manualTitle ?? tool.metaTitle,
    brand: overrides?.brand,
  });
  const description = createMetaDescription({
    primaryKeyword: tool.keywordIntent,
    userBenefit: tool.userBenefit,
    keywordVariation: `${tool.name} with practical, vet-informed guidance.`,
    manualDescription: overrides?.manualDescription ?? tool.metaDescription,
  });

  return {
    title,
    description,
    canonical,
    openGraph: createOpenGraphMeta({
      title: overrides?.openGraphTitle ?? tool.name,
      description,
      url: canonical,
      type: overrides?.openGraphType ?? "website",
    }),
  };
}
