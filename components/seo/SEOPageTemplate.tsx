import Container from "@/components/Container";
import FaqAccordion from "@/components/seo/FaqAccordion";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  WebPageSchema,
} from "@/components/seo/Schema";
import type { InternalLink } from "@/lib/programmatic-content";
import { ContentSection, FAQItem, QuickAnswer, VetClinicListing } from "@/lib/seo";
import Link from "next/link";

type SEOPageTemplateProps = {
  breadcrumbs?: Array<{ label: string; href: string }>;
  eyebrow?: string;
  mainKeyword: string;
  h1: string;
  intro: string;
  bulletPoints: string[];
  keywordVariations: string[];
  internalLinks: InternalLink[];
  quickAnswer: QuickAnswer;
  sections: ContentSection[];
  faqs: FAQItem[];
  schemaType: "article" | "local-business";
  pageUrl: string;
  cityName?: string;
  disclaimer?: string;
};

const sectionCardClasses = [
  "border-teal-100 bg-teal-50/40",
  "border-amber-100 bg-amber-50/40",
  "border-emerald-100 bg-emerald-50/40",
  "border-sky-100 bg-sky-50/40",
  "border-violet-100 bg-violet-50/40",
  "border-rose-100 bg-rose-50/40",
];

const listingCardClasses = [
  "border-teal-100 bg-teal-50/70",
  "border-amber-100 bg-amber-50/70",
  "border-violet-100 bg-violet-50/70",
  "border-rose-100 bg-rose-50/70",
];

function getSectionIcon(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("cause")) return "🧩";
  if (lower.includes("symptom")) return "🔎";
  if (lower.includes("support")) return "🫶";
  if (lower.includes("prevent")) return "🛡️";
  if (lower.includes("mistake")) return "⚠️";
  if (lower.includes("vet")) return "🩺";
  if (lower.includes("local")) return "📍";
  return "📘";
}

function ListingCard({ listing, index }: { listing: VetClinicListing; index: number }) {
  const cardClass = listingCardClasses[index % listingCardClasses.length];
  return (
    <article
      className={`rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cardClass}`}
    >
      <h3 className="font-serif text-xl font-semibold text-gray-900">{listing.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{listing.area}</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">{listing.description}</p>

      <div className="mt-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Services</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {listing.services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-white/80 bg-white px-3 py-1 text-xs font-medium text-gray-700"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-3 text-sm font-semibold text-gray-800">Rating: {listing.rating}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={listing.viewHref}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-brand-200 hover:text-brand-700"
        >
          View
        </Link>
        <Link
          href={listing.callHref}
          className="rounded-full border border-brand-200 bg-brand-50/70 px-4 py-2 text-sm font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
        >
          Call
        </Link>
      </div>
    </article>
  );
}

export default function SEOPageTemplate({
  breadcrumbs = [],
  eyebrow,
  mainKeyword,
  h1,
  intro,
  bulletPoints,
  keywordVariations: _keywordVariations,
  internalLinks,
  quickAnswer,
  sections,
  faqs,
  schemaType,
  pageUrl,
  cityName,
  disclaimer,
}: SEOPageTemplateProps) {
  const emergencySection = sections.find((section) =>
    /when to call a vet|when to see a vet|urgent/i.test(section.title)
  );
  const emergencyItems = emergencySection?.bullets?.length
    ? emergencySection.bullets
    : emergencySection?.body ?? [];

  return (
    <>
      <WebPageSchema title={h1} description={intro} pageUrl={pageUrl} />
      {schemaType === "article" ? (
        <ArticleSchema headline={h1} description={intro} pageUrl={pageUrl} />
      ) : (
        <LocalBusinessSchema cityName={cityName ?? ""} pageUrl={pageUrl} />
      )}
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 via-[#f7fbfb] to-white py-14">
        <Container>
          {!!breadcrumbs.length && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href + item.label} className="flex items-center gap-2">
                    <Link href={item.href} className="hover:text-brand-700">
                      {item.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && <span>/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            {eyebrow ?? (schemaType === "article" ? "Pet Health Guide" : "Local Vet Guide")}
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">{h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">{intro}</p>
          {disclaimer ? (
            <p className="mt-5 max-w-3xl rounded-2xl border border-brand-100 bg-white px-4 py-3 text-sm leading-7 text-gray-700 shadow-sm">
              {disclaimer}
            </p>
          ) : null}
          <div className="mt-6 inline-flex rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-500">
            Focus topic: {mainKeyword}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-6 shadow-sm">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              <span aria-hidden>💬</span>
              Quick Answer
            </p>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-gray-900">{quickAnswer.title}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">{quickAnswer.answer}</p>
            {!!quickAnswer.bullets?.length && (
              <ul className="mt-4 space-y-2">
                {quickAnswer.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                    <span className="mt-1 text-brand-700" aria-hidden>
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Key Takeaways</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bulletPoints.map((point, index) => (
                <article
                  key={point}
                  className="rounded-2xl border border-brand-100 bg-brand-50/40 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold text-gray-900">Takeaway {index + 1}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-7 text-gray-700">
                    <span className="mt-1 text-brand-700" aria-hidden>
                      ✔
                    </span>
                    <span>{point}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container className="space-y-6">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${sectionCardClasses[index % sectionCardClasses.length]}`}
            >
              <h2 className="flex items-center gap-2 font-serif text-2xl font-semibold text-gray-900">
                <span aria-hidden>{getSectionIcon(section.title)}</span>
                <span>{section.title}</span>
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              {!!section.listings?.length && (
                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {section.listings.map((listing, listingIndex) => (
                    <ListingCard
                      key={`${listing.name}-${listing.area}`}
                      listing={listing}
                      index={listingIndex}
                    />
                  ))}
                </div>
              )}
              {!!section.bullets?.length && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                      <span className="mt-1 text-brand-700" aria-hidden>
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </Container>
      </section>

      {!!emergencyItems.length && (
        <section className="py-4">
          <Container>
            <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-amber-900">When to Call a Vet</h2>
              <p className="mt-3 text-sm leading-7 text-amber-900">
                If your pet shows severe, persistent, or escalating symptoms, prioritize professional
                care early. Quick action is often the safest path.
              </p>
              <ul className="mt-4 space-y-2">
                {emergencyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-7 text-amber-900">
                    <span className="mt-1" aria-hidden>
                      ⚠
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      <section className="py-4">
        <Container>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-gray-900">Related pages</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {internalLinks.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-full border border-gray-200 bg-brand-50/30 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-sm hover:text-brand-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/30 py-12">
        <Container>
          <FaqAccordion items={faqs} />
        </Container>
      </section>
    </>
  );
}
