import Container from "@/components/Container";
import FAQ from "@/components/seo/FAQ";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
} from "@/components/seo/Schema";
import type { InternalLink } from "@/lib/programmatic-content";
import { ContentSection, FAQItem, QuickAnswer } from "@/lib/seo";
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
};

export default function SEOPageTemplate({
  breadcrumbs = [],
  eyebrow,
  mainKeyword,
  h1,
  intro,
  bulletPoints,
  keywordVariations,
  internalLinks,
  quickAnswer,
  sections,
  faqs,
  schemaType,
  pageUrl,
  cityName,
}: SEOPageTemplateProps) {
  return (
    <>
      {schemaType === "article" ? (
        <ArticleSchema headline={h1} description={intro} pageUrl={pageUrl} />
      ) : (
        <LocalBusinessSchema cityName={cityName ?? ""} pageUrl={pageUrl} />
      )}
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      <section className="border-b border-[#2c1f0e]/10 bg-gradient-to-b from-[#faf6f0] to-white py-14">
        <Container>
          {!!breadcrumbs.length && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-[#8a7060]">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href + item.label} className="flex items-center gap-2">
                    <Link href={item.href} className="hover:text-[#e8734a]">
                      {item.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && <span>/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8734a]">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#2c1f0e] sm:text-4xl">
            {h1}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#5a4535]">{intro}</p>
          <div className="mt-6 inline-flex rounded-full border border-[#2c1f0e]/10 bg-white px-3 py-1 text-xs text-[#8a7060]">
            Focus topic: {mainKeyword}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="rounded-3xl border border-[#e8734a]/20 bg-[#faf6f0] p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              {quickAnswer.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5a4535]">{quickAnswer.answer}</p>
            {!!quickAnswer.bullets?.length && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5a4535]">
                {quickAnswer.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="rounded-3xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">Key takeaways</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5a4535]">
              {bulletPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="rounded-3xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              Related search intent
            </h2>
            <p className="mt-2 text-sm text-[#8a7060]">
              This section keeps natural wording for SEO, NLP, and AI Overview.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {keywordVariations.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[#2c1f0e]/10 bg-[#faf6f0] px-3 py-1 text-xs text-[#5a4535]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container className="space-y-6">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#5a4535]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {!!section.bullets?.length && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5a4535]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="rounded-3xl border border-[#2c1f0e]/10 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-[#2c1f0e]">
              Related pages
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {internalLinks.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-full border border-[#2c1f0e]/10 bg-[#faf6f0] px-3 py-1 text-xs font-medium text-[#5a4535] hover:border-[#e8734a]/30 hover:text-[#e8734a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2ece2] py-12">
        <Container>
          <FAQ items={faqs} />
        </Container>
      </section>
    </>
  );
}
