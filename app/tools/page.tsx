import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pet Health & Nutrition Calculators & Interactive Tools | Pawbiotics",
  description:
    "Free veterinary-aligned interactive calculators for dogs and cats. Calculate exact daily food portions, probiotic CFU dosages, and puppy feeding schedules.",
  alternates: {
    canonical: "https://pawbiotics.us/tools",
  },
  openGraph: {
    title: "Pet Health & Nutrition Calculators | Pawbiotics",
    description:
      "Free veterinary-aligned interactive calculators for dogs and cats. Calculate exact daily food portions, probiotic CFU dosages, and puppy feeding schedules.",
    url: "https://pawbiotics.us/tools",
    type: "website",
  },
};

interface ToolCard {
  title: string;
  description: string;
  href: string;
  icon: string;
  badge: string;
  features: string[];
}

const tools: ToolCard[] = [
  {
    title: "Dog Food Portion Calculator",
    description:
      "Calculate your dog's exact daily caloric requirement (RER / MER), portion sizes in cups and grams, and macronutrient targets based on weight, body condition, and activity level.",
    href: "/tools/dog-food-calculator",
    icon: "🥣",
    badge: "Nutrition & Weight",
    features: [
      "Resting Energy Requirement (RER) formula",
      "Tailored for neutered, intact, active & weight-loss dogs",
      "Supports dry kibble, wet food, and homemade diets",
    ],
  },
  {
    title: "Pet Probiotic Dosage Calculator",
    description:
      "Determine the clinically effective Colony Forming Unit (CFU) probiotic dosage for your dog or cat based on body weight, species, and active health conditions.",
    href: "/tools/probiotic-calculator",
    icon: "🦠",
    badge: "Gut Health & Immunity",
    features: [
      "Dosing for dogs and cats by body weight",
      "Adjusts for acute diarrhea, antibiotic recovery & maintenance",
      "Veterinary guidance on multi-strain spore probiotics",
    ],
  },
  {
    title: "Puppy Feeding Schedule Calculator",
    description:
      "Find the optimal daily feeding frequency, cup portions, and transition schedule for growing puppies from 8 weeks to adulthood based on expected adult breed size.",
    href: "/tools/puppy-feeding-schedule",
    icon: "🐶",
    badge: "Puppy Growth",
    features: [
      "Age-based meal frequency recommendations (2 to 4 meals/day)",
      "Portion adjustments for toy, medium, large, and giant breeds",
      "Smooth 7-day transition timelines to adult food",
    ],
  },
];

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pet Health & Nutrition Interactive Tools",
    description:
      "Free veterinary-aligned interactive calculators for dogs and cats. Calculate exact daily food portions, probiotic CFU dosages, and puppy feeding schedules.",
    url: "https://pawbiotics.us/tools",
    publisher: {
      "@type": "Organization",
      name: "Pawbiotics",
      logo: {
        "@type": "ImageObject",
        url: "https://pawbiotics.us/logo.png",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pawbiotics.us/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://pawbiotics.us/tools",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-[#faf6f0] min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-[#2c1f0e]/10 bg-gradient-to-b from-brand-50/60 to-white py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-500">
                <li>
                  <Link href="/" className="hover:text-brand-700">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-700 font-medium">Tools & Calculators</li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-brand-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
              Interactive Veterinary Calculators
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#2c1f0e] sm:text-5xl">
              Pet Health & Nutrition Tools
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5a4535] sm:text-lg">
              Evidence-based, clinically aligned calculators to help you optimize
              daily food portions, calculate probiotic colony-forming units (CFUs),
              and build age-appropriate feeding schedules for your pets.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool.href}
                  className="flex flex-col justify-between rounded-2xl border border-[#2c1f0e]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
                        {tool.icon}
                      </span>
                      <span className="rounded-full bg-[#f4ebe1] px-3 py-1 text-xs font-medium text-[#5a4535]">
                        {tool.badge}
                      </span>
                    </div>

                    <h2 className="mt-5 font-serif text-xl font-bold text-[#2c1f0e]">
                      {tool.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-6 text-[#5a4535]">
                      {tool.description}
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Key Features
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {tool.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs leading-5 text-gray-600"
                          >
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={tool.href}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#2c1f0e] px-4 py-3 text-sm font-semibold text-[#faf6f0] transition hover:bg-[#e8734a] hover:shadow-md"
                    >
                      Open Calculator →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use Pawbiotics Calculators Section */}
        <section className="border-t border-[#2c1f0e]/10 bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="font-serif text-2xl font-bold text-[#2c1f0e] sm:text-3xl">
              Grounded in Veterinary Science
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#5a4535]">
              Our algorithms use standard WSAVA (World Small Animal Veterinary
              Association) and AAHA (American Animal Hospital Association)
              metabolic energy formulas to provide accurate nutritional and probiotic
              guidelines.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
              <div className="rounded-xl border border-gray-100 bg-[#faf6f0]/60 p-5">
                <div className="text-2xl font-bold text-brand-700">01</div>
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  Precise Metabolic Formulas
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-600">
                  Calculates exact Resting Energy Requirements tailored to pet lifestyle and life stage.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-[#faf6f0]/60 p-5">
                <div className="text-2xl font-bold text-brand-700">02</div>
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  Condition-Specific Adjustments
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-600">
                  Adjusts recommendations for acute digestive upset, antibiotic recovery, post-surgery, or weight management.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-[#faf6f0]/60 p-5">
                <div className="text-2xl font-bold text-brand-700">03</div>
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  100% Free & No Sign-Up
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-gray-600">
                  Instant results with zero paywalls, account creation, or email collection requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
