import { ContentSection, FAQItem, QuickAnswer, slugToWords } from "@/lib/seo";
import { programmaticContentOverrides } from "@/data/programmatic-overrides";

type TopicType = "dog-probiotics" | "cat-health" | "health-condition";
type SchemaType = "local-business" | "article";

/**
 * PROGRAMMATIC SEO CONTENT ENGINE
 *
 * This file is the single source of structured SEO content for dynamic pages.
 * Later, you can replace hardcoded strings with CMS/CSV/JSON/database values.
 *
 * Quick edit map for beginners:
 * - Update tone/wording globally:
 *   - buildConditionKeywordVariations()
 *   - buildCommonConditionSections()
 *   - buildConditionFaqs()
 * - Update page-type specific content:
 *   - generateVetCityPageContent()
 *   - generateDogProbioticConditionContent()
 *   - generateCatHealthConditionContent()
 *   - generateHealthConditionContent()
 * - Update internal-link strategy:
 *   - buildDogConditionInternalLinks()
 *   - buildCatConditionInternalLinks()
 *   - buildPetConditionInternalLinks()
 */

export type InternalLink = {
  label: string;
  href: string;
};

export type SEOPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  quickAnswer: QuickAnswer;
  bulletPoints: string[];
  sections: ContentSection[];
  faqs: FAQItem[];
  keywordVariations: string[];
  internalLinks: InternalLink[];
  schemaType: SchemaType;
  // Backward-compat for existing template usage
  mainKeyword: string;
};

export type ContentOverride = Partial<
  Omit<SEOPageData, "slug" | "schemaType" | "mainKeyword">
> & {
  keywordVariations?: string[];
  internalLinks?: InternalLink[];
};

function normalizeCondition(conditionSlug: string) {
  const slug = conditionSlug.toLowerCase().trim();
  const label = slugToWords(slug);
  return { slug, label, lowerLabel: label.toLowerCase() };
}

function mergeOverride(base: SEOPageData, override?: ContentOverride): SEOPageData {
  if (!override) return base;
  return {
    ...base,
    ...override,
    quickAnswer: override.quickAnswer ?? base.quickAnswer,
    bulletPoints: override.bulletPoints ?? base.bulletPoints,
    sections: override.sections ?? base.sections,
    faqs: override.faqs ?? base.faqs,
    keywordVariations: override.keywordVariations ?? base.keywordVariations,
    internalLinks: override.internalLinks ?? base.internalLinks,
    mainKeyword: (override.keywordVariations ?? base.keywordVariations)[0] ?? base.mainKeyword,
  };
}

// Edit this function if you want to change your SEO keyword variation strategy.
function buildConditionKeywordVariations(
  condition: string,
  audience: "dogs" | "cats" | "pets"
): string[] {
  const baseAudience = audience === "pets" ? "dogs and cats" : audience;
  return [
    `${condition} in ${baseAudience}`,
    `how to help ${baseAudience} with ${condition}`,
    `best treatment support for ${condition} in ${baseAudience}`,
    `when to see a vet for ${condition} in ${baseAudience}`,
    `${condition} symptoms in ${baseAudience}`,
  ];
}

// Edit shared condition sections here (applies to dog/cat/general condition pages).
function buildCommonConditionSections(
  conditionLabel: string,
  audienceText: string
): ContentSection[] {
  const lower = conditionLabel.toLowerCase();
  return [
    {
      title: `What ${lower} means in ${audienceText}`,
      body: [
        `${conditionLabel} can range from mild and short-term to more serious cases. Early observation helps you act faster and support recovery.`,
        "Use this section as a content block you can later replace with vet-reviewed guidance from your CMS or database.",
      ],
    },
    {
      title: "Practical care steps",
      body: [
        "A simple home plan can reduce stress and help you monitor progress clearly.",
      ],
      bullets: [
        "Track appetite, stool quality, hydration, and energy level",
        "Avoid sudden food switches while symptoms are active",
        "Use only vet-approved probiotics and dosage guidance",
        "Book a vet visit when symptoms persist or worsen",
      ],
    },
    {
      title: "When to seek urgent veterinary care",
      body: [
        "Get immediate help if you see blood, repeated vomiting, severe lethargy, dehydration, or refusal to eat and drink.",
      ],
    },
  ];
}

// Edit shared FAQ logic here (applies across condition page types).
function buildConditionFaqs(conditionLabel: string, audienceText: string): FAQItem[] {
  const lower = conditionLabel.toLowerCase();
  return [
    {
      question: `What causes ${lower} in ${audienceText}?`,
      answer:
        "Common causes include diet changes, stress, infections, allergies, medication effects, and underlying health conditions.",
    },
    {
      question: `Can probiotics help with ${lower}?`,
      answer:
        "In many cases, probiotics can support gut balance and stool quality. Always use pet-specific strains and ask your veterinarian first.",
    },
    {
      question: "How long should I monitor symptoms before seeing a vet?",
      answer:
        "If symptoms are severe, or if mild symptoms continue beyond 24 to 48 hours, contact your veterinarian.",
    },
  ];
}

// Edit dog-page internal links here.
function buildDogConditionInternalLinks(slug: string): InternalLink[] {
  return [
    { label: "Dog probiotics guide", href: "/probiotics" },
    { label: "Dog health category", href: "/dogs" },
    { label: "Pet health conditions", href: "/health-conditions" },
    { label: "Related dog condition page", href: `/dogs/probiotics/${slug}` },
  ];
}

// Edit cat-page internal links here.
function buildCatConditionInternalLinks(slug: string): InternalLink[] {
  return [
    { label: "Cat health category", href: "/cats" },
    { label: "Probiotics overview", href: "/probiotics" },
    { label: "Pet health conditions", href: "/health-conditions" },
    { label: "Related cat condition page", href: `/cats/health/${slug}` },
  ];
}

// Edit general condition-page internal links here.
function buildPetConditionInternalLinks(slug: string): InternalLink[] {
  return [
    { label: "All health conditions", href: "/health-conditions" },
    { label: "Dog condition pages", href: "/dogs" },
    { label: "Cat condition pages", href: "/cats" },
    { label: "Related condition page", href: `/health-conditions/${slug}` },
  ];
}

export function generateVetCityPageContent(citySlug: string): SEOPageData {
  // Edit city page wording here (great place to inject city-specific CMS data later).
  const slug = citySlug.toLowerCase().trim();
  const cityName = slugToWords(slug);
  const cityLower = cityName.toLowerCase();
  const keywordVariations = [
    `vets in ${cityLower}`,
    `best veterinary clinics in ${cityLower}`,
    `cheap veterinary doctor near ${cityLower}`,
    `24 hour vet in ${cityLower}`,
    `emergency vet in ${cityLower}`,
  ];

  const base: SEOPageData = {
    slug,
    title: `Best Vets in ${cityName}`,
    metaTitle: `Vets in ${cityName} | Best Veterinary Clinics & Pet Care`,
    metaDescription: `Find trusted vets in ${cityName}. Compare veterinary clinics, emergency options, pricing tips, and pet care services near you.`,
    h1: `Best Vets in ${cityName}`,
    intro: `Looking for trusted vets in ${cityName}? This local guide helps pet parents compare veterinary clinics, emergency care access, and everyday wellness services in one place.`,
    quickAnswer: {
      title: `Quick answer: finding a vet in ${cityName}`,
      answer:
        "Start with licensed clinics that have recent positive reviews, clear pricing, and emergency support. Call two to three clinics to compare wait time and care options.",
      bullets: [
        "Check credentials and latest reviews",
        "Compare exam fees and package pricing",
        "Confirm same-day and after-hours options",
      ],
    },
    bulletPoints: [
      "Compare local clinics by services and ratings",
      "Ask about preventive plans and vaccination bundles",
      "Save an emergency clinic contact before you need it",
    ],
    sections: [
      {
        title: `How to choose the right vet clinic in ${cityName}`,
        body: [
          "Use this section as a local SEO template. Replace these paragraphs later with real clinic records from CSV, JSON, CMS, or database sources.",
        ],
        bullets: [
          "Clinic license and veterinarian experience",
          "Distance, hours, and appointment availability",
          "Transparent pricing and payment options",
          "Diagnostics, dental, surgery, and preventive services",
        ],
      },
      {
        title: "Affordable care tips for pet parents",
        body: [
          "Many clinics offer wellness bundles and package pricing. Ask for complete quotes including follow-up visit costs.",
        ],
      },
      {
        title: "Emergency and urgent care planning",
        body: [
          "Keep one general clinic and one emergency clinic saved in your phone so you can act quickly during urgent situations.",
        ],
      },
    ],
    faqs: [
      {
        question: `How much does a vet visit cost in ${cityName}?`,
        answer:
          "Costs vary by clinic and service. Call local clinics for updated exam fees and package pricing.",
      },
      {
        question: `How do I find an affordable veterinarian in ${cityName}?`,
        answer:
          "Compare multiple clinics, ask about wellness plans, and check local rescue groups for low-cost recommendations.",
      },
      {
        question: "Should I choose a general clinic or emergency vet?",
        answer:
          "Use a general clinic for routine care. For severe symptoms or after-hours emergencies, choose an emergency veterinary hospital.",
      },
    ],
    keywordVariations,
    internalLinks: [
      { label: "Dog health guides", href: "/dogs" },
      { label: "Cat health guides", href: "/cats" },
      { label: "Pet health conditions", href: "/health-conditions" },
      { label: `Vets in ${cityName}`, href: `/vets/${slug}` },
    ],
    schemaType: "local-business",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.vets[slug]);
}

export function generateDogProbioticConditionContent(
  conditionSlug: string
): SEOPageData {
  // Edit dog probiotic condition wording here.
  const { slug, label, lowerLabel } = normalizeCondition(conditionSlug);
  const keywordVariations = [
    `probiotics for ${lowerLabel} in dogs`,
    ...buildConditionKeywordVariations(lowerLabel, "dogs"),
    `dog gut health support for ${lowerLabel}`,
  ];

  const base: SEOPageData = {
    slug,
    title: `${label} Support for Dogs`,
    metaTitle: `Dog Probiotics for ${label} | Gut Health Support Guide`,
    metaDescription: `Learn how probiotics may support dogs with ${lowerLabel}. Understand symptoms, care steps, and when to contact your veterinarian.`,
    h1: `${label} Support for Dogs`,
    intro: `This guide explains ${lowerLabel} in dogs in simple language. You will learn practical care steps, probiotic support options, and warning signs that need veterinary attention.`,
    quickAnswer: {
      title: `Quick answer: probiotics for dogs with ${lowerLabel}`,
      answer:
        "Probiotics can support gut balance and stool quality in many dogs. They work best with hydration, consistent feeding, and veterinary guidance.",
      bullets: [
        "Use dog-specific probiotic strains",
        "Track changes in stool and appetite",
        "Contact your vet for persistent symptoms",
      ],
    },
    bulletPoints: [
      "Simple symptom checklist for dog owners",
      "Beginner-friendly probiotic guidance",
      "Clear thresholds for when to call a vet",
    ],
    sections: buildCommonConditionSections(label, "dogs"),
    faqs: buildConditionFaqs(label, "dogs"),
    keywordVariations,
    internalLinks: buildDogConditionInternalLinks(slug),
    schemaType: "article",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.dogProbiotics[slug]);
}

export function generateCatHealthConditionContent(conditionSlug: string): SEOPageData {
  // Edit cat health condition wording here.
  const { slug, label, lowerLabel } = normalizeCondition(conditionSlug);
  const keywordVariations = [
    `cat health guide for ${lowerLabel}`,
    ...buildConditionKeywordVariations(lowerLabel, "cats"),
    `cat gut health support for ${lowerLabel}`,
  ];

  const base: SEOPageData = {
    slug,
    title: `${label} Support for Cats`,
    metaTitle: `Cat Health for ${label} | Gut and Wellness Guide`,
    metaDescription: `Understand ${lowerLabel} in cats with practical care guidance, symptom tracking tips, and cat-safe probiotic support information.`,
    h1: `${label} Support for Cats`,
    intro: `This cat health page explains ${lowerLabel} in a clear and practical way. Use it to understand symptoms, support gut health, and decide when to contact your vet.`,
    quickAnswer: {
      title: `Quick answer: cat health support for ${lowerLabel}`,
      answer:
        "Cats can benefit from calm feeding routines, hydration support, and vet-approved probiotics when digestive symptoms appear.",
      bullets: [
        "Keep diet changes gradual and predictable",
        "Monitor litter box patterns daily",
        "Use feline-safe probiotic products only",
      ],
    },
    bulletPoints: [
      "Cat-focused symptom and behavior signals",
      "Clear daily monitoring checklist",
      "Practical support before and after vet visits",
    ],
    sections: buildCommonConditionSections(label, "cats"),
    faqs: buildConditionFaqs(label, "cats"),
    keywordVariations,
    internalLinks: buildCatConditionInternalLinks(slug),
    schemaType: "article",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.catHealth[slug]);
}

export function generateHealthConditionContent(conditionSlug: string): SEOPageData {
  // Edit general health condition wording here.
  const { slug, label, lowerLabel } = normalizeCondition(conditionSlug);
  const keywordVariations = [
    `pet health condition ${lowerLabel}`,
    ...buildConditionKeywordVariations(lowerLabel, "pets"),
    `${lowerLabel} in dogs and cats`,
  ];

  const base: SEOPageData = {
    slug,
    title: `${label} in Dogs and Cats`,
    metaTitle: `${label} in Pets | Dog and Cat Health Guide`,
    metaDescription: `Understand ${lowerLabel} in dogs and cats. Learn common signs, supportive care steps, and when to seek veterinary help.`,
    h1: `${label} in Dogs and Cats`,
    intro: `This health condition guide covers ${lowerLabel} in both dogs and cats. It gives practical steps for pet parents and clear advice on when to involve a veterinarian.`,
    quickAnswer: {
      title: `Quick answer: ${label} in pets`,
      answer:
        "Most cases improve with early monitoring and supportive care, but persistent or severe symptoms need veterinary evaluation.",
      bullets: [
        "Track symptoms and duration",
        "Use consistent feeding and hydration routines",
        "Escalate quickly when symptoms worsen",
      ],
    },
    bulletPoints: [
      "Shared signs across dogs and cats",
      "Simple first-step care guidance",
      "Clear escalation rules for urgent symptoms",
    ],
    sections: buildCommonConditionSections(label, "dogs and cats"),
    faqs: buildConditionFaqs(label, "dogs and cats"),
    keywordVariations,
    internalLinks: buildPetConditionInternalLinks(slug),
    schemaType: "article",
    mainKeyword: keywordVariations[0],
  };

  return mergeOverride(base, programmaticContentOverrides.healthConditions[slug]);
}

// Backward-compatible wrappers used by existing routes/components.
export function buildConditionPageData(
  conditionSlug: string,
  topicType: TopicType
): SEOPageData {
  if (topicType === "dog-probiotics") {
    return generateDogProbioticConditionContent(conditionSlug);
  }
  if (topicType === "cat-health") {
    return generateCatHealthConditionContent(conditionSlug);
  }
  return generateHealthConditionContent(conditionSlug);
}

export function buildVetCityPageData(citySlug: string): SEOPageData {
  return generateVetCityPageContent(citySlug);
}

export const sampleCitySlugs = [
  "houston-tx",
  "dallas-tx",
  "austin-tx",
  "miami-fl",
  "phoenix-az",
];
export const sampleConditionSlugs = [
  "diarrhea",
  "gut-health",
  "immunity",
  "itchy-skin",
  "food-allergy",
  "bad-breath",
];

/**
 * Supported slug helpers for crawl safety.
 * These are used by dynamic route pages to return 404 for invalid slugs.
 */
const supportedCitySlugSet = new Set([
  ...sampleCitySlugs,
  ...Object.keys(programmaticContentOverrides.vets),
]);
const supportedDogConditionSlugSet = new Set([
  ...sampleConditionSlugs,
  ...Object.keys(programmaticContentOverrides.dogProbiotics),
]);
const supportedCatConditionSlugSet = new Set([
  ...sampleConditionSlugs,
  ...Object.keys(programmaticContentOverrides.catHealth),
]);
const supportedHealthConditionSlugSet = new Set([
  ...sampleConditionSlugs,
  ...Object.keys(programmaticContentOverrides.healthConditions),
]);

export function isSupportedCitySlug(slug: string): boolean {
  return supportedCitySlugSet.has(slug.toLowerCase().trim());
}

export function isSupportedDogConditionSlug(slug: string): boolean {
  return supportedDogConditionSlugSet.has(slug.toLowerCase().trim());
}

export function isSupportedCatConditionSlug(slug: string): boolean {
  return supportedCatConditionSlugSet.has(slug.toLowerCase().trim());
}

export function isSupportedHealthConditionSlug(slug: string): boolean {
  return supportedHealthConditionSlugSet.has(slug.toLowerCase().trim());
}

export function getSupportedCitySlugs(): string[] {
  return Array.from(supportedCitySlugSet);
}

export function getSupportedDogConditionSlugs(): string[] {
  return Array.from(supportedDogConditionSlugSet);
}

export function getSupportedCatConditionSlugs(): string[] {
  return Array.from(supportedCatConditionSlugSet);
}

export function getSupportedHealthConditionSlugs(): string[] {
  return Array.from(supportedHealthConditionSlugSet);
}
