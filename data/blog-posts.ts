import type { FAQItem } from "@/lib/seo";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogInternalLink = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Dogs" | "Cats" | "Gut Health" | "Health Conditions" | "Local Vets";
  publishedDate: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  faqs: FAQItem[];
  internalLinks: BlogInternalLink[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-a-vet-in-houston",
    title: "How to Choose a Vet in Houston",
    metaTitle: "How to Choose a Vet in Houston | Pawbiotics Blog",
    metaDescription:
      "Learn how to compare veterinary clinics in Houston with a simple checklist for quality, pricing, and emergency support.",
    category: "Local Vets",
    publishedDate: "2026-04-20",
    readingTime: "6 min read",
    intro:
      "Houston has many veterinary options, so it helps to compare clinics in a structured way. This guide gives you simple, practical steps to choose a trusted long-term vet.",
    sections: [
      {
        heading: "Start with the basics",
        paragraphs: [
          "Begin by shortlisting clinics near your home or work. Travel time matters more than most pet parents expect, especially during urgent situations.",
          "Look for consistent recent reviews and clear communication style when you call.",
        ],
        bullets: [
          "Confirm license and veterinarian availability",
          "Ask about routine exam and follow-up pricing",
          "Check same-day and after-hours emergency process",
        ],
      },
      {
        heading: "Compare full visit value, not just exam fee",
        paragraphs: [
          "A low exam fee can still lead to a costly visit if diagnostics and rechecks are unclear. Ask for complete pricing ranges before your first appointment.",
        ],
      },
      {
        heading: "Build an emergency plan now",
        paragraphs: [
          "Save one general clinic and one emergency hospital in your phone. This small step can reduce panic during high-stress moments.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I ask on my first call to a Houston vet?",
        answer:
          "Ask about appointment wait times, exam fees, emergency referrals, and how follow-up care is handled.",
      },
      {
        question: "Is the closest clinic always the best choice?",
        answer:
          "Not always. Choose a clinic that balances convenience, communication quality, and care capability.",
      },
    ],
    internalLinks: [
      { label: "Vets in Houston page", href: "/vets/houston-tx" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Cat health guides", href: "/cats" },
    ],
  },
  {
    slug: "do-dogs-need-probiotics",
    title: "Do Dogs Need Probiotics?",
    metaTitle: "Do Dogs Need Probiotics? A Beginner Guide | Pawbiotics Blog",
    metaDescription:
      "Understand when probiotics may help dogs, what signs to watch for, and how to use pet-safe products with vet guidance.",
    category: "Dogs",
    publishedDate: "2026-04-18",
    readingTime: "5 min read",
    intro:
      "Not every dog needs a daily probiotic, but many can benefit during digestive stress, after antibiotics, or with recurring stool issues. This guide explains when probiotics are useful.",
    sections: [
      {
        heading: "When probiotics can help",
        paragraphs: [
          "Probiotics may support gut balance, stool consistency, and immune function in many dogs.",
        ],
        bullets: [
          "Loose stool or sensitive digestion",
          "Recovery after antibiotics",
          "Stress-related digestive changes",
        ],
      },
      {
        heading: "How to choose a product safely",
        paragraphs: [
          "Pick dog-specific products with clearly listed strains and dosage instructions. Avoid generic supplements with unclear labels.",
        ],
      },
      {
        heading: "Track progress week by week",
        paragraphs: [
          "Look for appetite stability, improved stool, and reduced gas over 1 to 2 weeks. Contact your veterinarian if symptoms continue.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I give human probiotics to my dog?",
        answer:
          "It is better to use dog-specific products because strain selection and dosing are designed for canine needs.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Many dogs show digestive improvement within one to two weeks of consistent use.",
      },
    ],
    internalLinks: [
      { label: "Dog probiotics page", href: "/probiotics" },
      { label: "Dog diarrhea support", href: "/dogs/probiotics/diarrhea" },
      { label: "Pet health conditions", href: "/health-conditions" },
    ],
  },
  {
    slug: "cat-gut-health-guide",
    title: "Cat Gut Health Guide",
    metaTitle: "Cat Gut Health Guide for Pet Parents | Pawbiotics Blog",
    metaDescription:
      "A practical cat gut health guide covering signs of imbalance, daily care habits, and when to ask your vet for help.",
    category: "Cats",
    publishedDate: "2026-04-16",
    readingTime: "7 min read",
    intro:
      "Cats often hide discomfort, so early gut health signs can be easy to miss. This guide helps you track common digestive signals and build healthy daily routines.",
    sections: [
      {
        heading: "Common signs of gut imbalance in cats",
        paragraphs: [
          "Watch for changes in appetite, vomiting frequency, stool pattern, and litter box behavior.",
        ],
        bullets: [
          "Frequent hairball-like vomiting",
          "Soft stool or constipation cycles",
          "Reduced appetite or sudden pickiness",
        ],
      },
      {
        heading: "Daily habits that support feline digestion",
        paragraphs: [
          "Cats do best with stable feeding schedules, gradual diet transitions, and steady hydration support.",
        ],
      },
      {
        heading: "When to involve your veterinarian",
        paragraphs: [
          "If digestive symptoms persist beyond a couple of days or include weight loss, seek veterinary evaluation early.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do indoor cats also get gut issues?",
        answer:
          "Yes. Indoor cats can still have gut imbalance from stress, diet changes, medication, or food sensitivity.",
      },
      {
        question: "Can probiotics help cats with sensitive digestion?",
        answer:
          "Many cats benefit from feline-safe probiotics, especially when used consistently with veterinary guidance.",
      },
    ],
    internalLinks: [
      { label: "Cat health category", href: "/cats" },
      { label: "Cat gut health condition page", href: "/cats/health/gut-health" },
      { label: "General probiotics guide", href: "/probiotics" },
    ],
  },
  {
    slug: "dog-probiotics-for-diarrhea",
    title: "Dog Probiotics for Diarrhea",
    metaTitle: "Dog Probiotics for Diarrhea: What Helps | Pawbiotics Blog",
    metaDescription:
      "Learn practical steps for mild dog diarrhea and how probiotics may support recovery, plus warning signs that need urgent vet care.",
    category: "Gut Health",
    publishedDate: "2026-04-14",
    readingTime: "6 min read",
    intro:
      "Mild diarrhea in dogs can improve quickly with hydration, feeding consistency, and gut support. This post explains what to do first and when to escalate.",
    sections: [
      {
        heading: "First steps at home",
        paragraphs: [
          "Focus on hydration and simple feeding. Avoid sudden food changes while symptoms are active.",
        ],
        bullets: [
          "Offer fresh water frequently",
          "Track stool frequency and consistency",
          "Use dog-specific probiotics only",
        ],
      },
      {
        heading: "What probiotics can and cannot do",
        paragraphs: [
          "Probiotics can support gut balance, but they are not a replacement for urgent care when severe symptoms appear.",
        ],
      },
      {
        heading: "Red flags to treat as urgent",
        paragraphs: [
          "Seek prompt veterinary care for blood in stool, repeated vomiting, severe lethargy, or signs of dehydration.",
        ],
      },
    ],
    faqs: [
      {
        question: "How soon should dog diarrhea improve?",
        answer:
          "Mild cases often improve within 24 to 48 hours. If not, contact your veterinarian.",
      },
      {
        question: "Can stress cause diarrhea in dogs?",
        answer:
          "Yes. Stress can affect gut balance and trigger temporary stool changes in some dogs.",
      },
    ],
    internalLinks: [
      { label: "Dog diarrhea support page", href: "/dogs/probiotics/diarrhea" },
      { label: "Dog health guides", href: "/dogs" },
      { label: "Pet diarrhea guide", href: "/health-conditions/diarrhea" },
    ],
  },
  {
    slug: "pet-immunity-and-gut-health",
    title: "Pet Immunity and Gut Health",
    metaTitle: "Pet Immunity and Gut Health: What to Know | Pawbiotics Blog",
    metaDescription:
      "Discover how gut health supports immunity in dogs and cats, with simple habits that improve long-term wellness.",
    category: "Health Conditions",
    publishedDate: "2026-04-12",
    readingTime: "6 min read",
    intro:
      "A large part of immune function is connected to gut health. This guide explains how daily nutrition, digestion, and probiotics can support stronger resilience in pets.",
    sections: [
      {
        heading: "Why the gut-immune link matters",
        paragraphs: [
          "The gut microbiome helps regulate immune signals. When balance is off, pets may be more sensitive to inflammation and recurring issues.",
        ],
      },
      {
        heading: "Simple daily habits for stronger immunity",
        paragraphs: [
          "Long-term consistency matters more than short-term supplements. Focus on hydration, stable meals, and preventive veterinary care.",
        ],
        bullets: [
          "Keep meal timing and quality consistent",
          "Use species-appropriate probiotics when needed",
          "Follow your vet's vaccine and preventive schedule",
        ],
      },
      {
        heading: "When to seek medical review",
        paragraphs: [
          "If your pet has frequent infections, prolonged digestive symptoms, or low energy, ask your veterinarian for a full evaluation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do probiotics boost immunity directly?",
        answer:
          "They support gut balance, which can help overall immune function as part of a complete care plan.",
      },
      {
        question: "Can both dogs and cats follow the same immunity routine?",
        answer:
          "The core principles are similar, but products and dosing should always be species-specific.",
      },
    ],
    internalLinks: [
      { label: "Pet immunity guide", href: "/health-conditions/immunity" },
      { label: "Probiotics overview", href: "/probiotics" },
      { label: "Cat gut health support", href: "/cats/health/gut-health" },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.toLowerCase().trim();
  return blogPosts.find((post) => post.slug === normalized);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
