import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
} from "@/components/seo/Schema";
import FaqAccordion from "@/components/seo/FaqAccordion";
import { getSupportedCitySlugs } from "@/lib/programmatic-content";
import { getVetCityLabel } from "@/lib/vet-city";
import type { FAQItem } from "@/lib/seo";

const SITE_URL = "https://pawbiotics.us";

export const metadata: Metadata = {
  title: "Local Vet Directory | Find Vets Near You by City - Pawbiotics",
  description:
    "Browse Pawbiotics' local vet directory by city. Compare veterinary clinics and animal hospitals, get emergency-planning tips, and know what to ask before you book.",
  alternates: {
    canonical: `${SITE_URL}/vets`,
  },
  openGraph: {
    title: "Local Vet Directory | Find Vets Near You by City",
    description:
      "Browse Pawbiotics' local vet directory by city for clinic comparison, emergency planning, and booking questions.",
    url: `${SITE_URL}/vets`,
    type: "website",
  },
};

type CityItem = {
  slug: string;
  label: string;
  state: string;
};

const stateNames: Record<string, string> = {
  AK: "Alaska",
  AL: "Alabama",
  AR: "Arkansas",
  AZ: "Arizona",
  CA: "California",
  CO: "Colorado",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  IA: "Iowa",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  MA: "Massachusetts",
  MD: "Maryland",
  MI: "Michigan",
  MN: "Minnesota",
  MO: "Missouri",
  NC: "North Carolina",
  NE: "Nebraska",
  NJ: "New Jersey",
  NM: "New Mexico",
  NV: "Nevada",
  NY: "New York",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  TN: "Tennessee",
  TX: "Texas",
  VA: "Virginia",
  WA: "Washington",
  WI: "Wisconsin",
};

const featuredCitySlugs = [
  "houston-tx",
  "dallas-tx",
  "austin-tx",
  "miami-fl",
  "new-york-ny",
  "los-angeles-ca",
  "chicago-il",
  "phoenix-az",
];

const localVetFaqs: FAQItem[] = [
  {
    question: "How should I compare vets near me?",
    answer:
      "Start with distance, hours, services, and emergency process. Then compare communication quality, exam fee ranges, review patterns, and whether the clinic can handle diagnostics or referrals.",
  },
  {
    question: "Should I choose the closest vet or the highest rated vet?",
    answer:
      "For routine care, convenience helps you stay consistent. For complex issues, diagnostics, emergency access, and clear communication may matter more than distance alone.",
  },
  {
    question: "What should every local vet plan include?",
    answer:
      "Save one regular clinic, one after-hours emergency hospital, your pet's medication list, vaccine records, and a simple transport plan before an urgent situation happens.",
  },
  {
    question: "Are Pawbiotics city vet pages official clinic rankings?",
    answer:
      "No. The city guides are educational comparison pages. Always verify hours, services, pricing, and availability directly with each veterinary clinic before booking.",
  },
];

function buildLocalVetFaqs(cityCount: number): FAQItem[] {
  return [
    ...localVetFaqs,
    {
      question: "How many cities does Pawbiotics cover?",
      answer: `Pawbiotics maintains local vet guides for ${cityCount} U.S. cities, grouped by state below. If your city isn't listed yet, use the same comparison checklist with any nearby clinic, or contact us and we'll consider adding it.`,
    },
  ];
}

function buildCityItems(): CityItem[] {
  return getSupportedCitySlugs()
    .map((slug) => {
      const label = getVetCityLabel(slug) ?? slug.replace(/-/g, " ");
      const state = label.split(",").at(-1)?.trim() ?? "";
      return { slug, label, state };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

function groupCitiesByState(cities: CityItem[]): Array<[string, CityItem[]]> {
  const groups = new Map<string, CityItem[]>();
  cities.forEach((city) => {
    const key = city.state || "Other";
    groups.set(key, [...(groups.get(key) ?? []), city]);
  });

  return Array.from(groups.entries()).sort(([stateA], [stateB]) => {
    const nameA = stateNames[stateA] ?? stateA;
    const nameB = stateNames[stateB] ?? stateB;
    return nameA.localeCompare(nameB);
  });
}

export default function VetsHubPage() {
  const cities = buildCityItems();
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((city) => city.slug === slug))
    .filter((city): city is CityItem => Boolean(city));
  const groupedCities = groupCitiesByState(cities);
  const pageFaqs = buildLocalVetFaqs(cities.length);
  const breadcrumbs = [
    { label: "Home", href: `${SITE_URL}/` },
    { label: "Local Vets", href: `${SITE_URL}/vets` },
  ];

  return (
    <>
      <WebPageSchema
        title="Local Vet Directory | Find Vets Near You by City"
        description="Browse Pawbiotics' local vet directory by city for clinic comparison, emergency planning, and booking questions."
        pageUrl={`${SITE_URL}/vets`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={pageFaqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-700">Local Vets</li>
            </ol>
          </nav>

          <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Local Vet Directory
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a Local Vet Near You, City by City
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Search our local vet directory to compare veterinary clinics and animal
            hospitals in your city. Every guide covers what to ask before booking with a
            pet clinic, how to plan for emergencies, and how to weigh cost against care
            quality.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="rounded-full border border-brand-100 bg-white px-4 py-2">
              {cities.length} city guides
            </span>
            <span className="rounded-full border border-brand-100 bg-white px-4 py-2">
              Emergency planning tips
            </span>
            <span className="rounded-full border border-brand-100 bg-white px-4 py-2">
              Clinic comparison checklists
            </span>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900">Popular Vet Guides by City</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Start with a major metro guide below, or browse the full local vet directory
              by state further down the page.
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/vets/${city.slug}`}
                className="rounded-2xl border border-brand-100 bg-brand-50/45 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {stateNames[city.state] ?? city.state}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Vets in {city.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Compare clinic access, urgent-care planning, and booking questions.
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900">What to Check Before Booking</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Use the same comparison criteria on every city page so you can make a
              fast, practical decision without relying on star ratings alone.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Routine Care Fit",
                body: "Confirm wellness exams, vaccines, dental care, diagnostics, and follow-up process.",
              },
              {
                title: "Emergency Backup",
                body: "Save the nearest after-hours animal hospital and ask your regular clinic where they refer urgent cases.",
              },
              {
                title: "Cost Clarity",
                body: "Ask for exam, recheck, lab, vaccine, and urgent-visit ranges before you need care.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900">Browse Vet Guides by State</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">
              Each city guide gives a local starting point for comparing vet clinics,
              emergency access, and practical care questions for dog and cat owners.
            </p>
          </div>
          <div className="mt-8 space-y-8">
            {groupedCities.map(([state, stateCities]) => (
              <section key={state} aria-labelledby={`state-${state}`}>
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-gray-100 pb-3">
                  <h3 id={`state-${state}`} className="text-xl font-semibold text-gray-900">
                    {stateNames[state] ?? state}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {stateCities.length} {stateCities.length === 1 ? "city" : "cities"}
                  </p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {stateCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/vets/${city.slug}`}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700"
                    >
                      Vets in {city.label}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-12">
        <Container>
          <FaqAccordion items={pageFaqs} />
          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t see your city yet?{" "}
            <Link href="/contact" className="font-medium text-brand-700 hover:underline">
              Contact us
            </Link>{" "}
            and we&apos;ll consider adding a local vet guide for it.
          </p>
        </Container>
      </section>
    </>
  );
}
