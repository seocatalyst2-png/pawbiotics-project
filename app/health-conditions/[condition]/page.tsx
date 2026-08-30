import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedHealthConditionSlugs,
  generateHealthConditionContent,
  isSupportedHealthConditionSlug,
} from "@/lib/programmatic-content";
import { programmaticContentOverrides } from "@/data/programmatic-overrides";
import { generateHealthConditionMeta } from "@/lib/meta";

type PageProps = {
  params: Promise<{ condition: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSupportedHealthConditionSlugs().map((condition) => ({ condition }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { condition } = await params;
  const data = generateHealthConditionContent(condition);
  const override = programmaticContentOverrides.healthConditions[data.slug];
  const meta = generateHealthConditionMeta(data.slug, {
    manualTitle: override?.metaTitle,
    manualDescription: override?.metaDescription,
    canonicalPath: `/health-conditions/${data.slug}`,
    openGraphTitle: data.title,
    openGraphType: "article",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: meta.openGraph,
  };
}

export default async function HealthConditionDetailPage({ params }: PageProps) {
  const { condition } = await params;
  if (!isSupportedHealthConditionSlug(condition)) notFound();
  const data = generateHealthConditionContent(condition);

  let afterQuickAnswer = null;

  if (condition === "urinary-blockage-cats") {
    afterQuickAnswer = (
      <section className="py-6">
        <Container className="space-y-6">
          {/* Emergency Triage & Guide Callout */}
          <div className="rounded-3xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  🚨 High-Risk Emergency
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                  Cat Straining in the Litter Box? Act Within 24 Hours
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
                  Urethral blockage is a rapidly fatal condition causing toxic potassium accumulation (hyperkalemia) and cardiac arrest. If zero urine is coming out, transport to emergency care immediately.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
                <Link
                  href="/blog/urinary-tract-blockage-in-cats"
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-800"
                >
                  <span>📖 In-Depth Medical Guide</span>
                </Link>
                <Link
                  href="/vets"
                  className="flex items-center justify-center gap-2 rounded-xl border border-rose-300 bg-white px-5 py-3 text-sm font-bold text-rose-700 shadow-sm transition hover:bg-rose-50"
                >
                  <span>🏥 Find 24/7 Emergency Vets</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Infographic Banner */}
          <figure className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="p-4 sm:p-6 bg-gradient-to-b from-gray-50/80 to-white border-b border-gray-100">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                Visual Warning Signs: Feline Urethral Obstruction
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                Key clinical signs distinguishing a life-threatening blocked cat from non-obstructive bladder issues.
              </p>
            </div>
            <div className="p-4 sm:p-6 flex justify-center bg-white">
              <Image
                src="/images/blog/cat-urinary-blockage-signs.png"
                alt="Cat Urinary Blockage Warning Signs and Symptoms Infographic"
                width={1200}
                height={700}
                className="rounded-2xl w-full h-auto object-cover border border-gray-100"
                priority
              />
            </div>
            <figcaption className="border-t border-gray-100 bg-gray-50/50 px-6 py-3 text-xs text-gray-600">
              Clinical triad of feline obstruction: frantic litter box visits with zero urine, howling in pain, and raw genital licking.
            </figcaption>
          </figure>

          {/* Clinical Comparison Table */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Clinical Quick Check: Blocked vs. Non-Blocked vs. Constipation
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Use this veterinary comparison matrix to assess urgency when your cat is posturing in the litter box:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100 text-left text-sm">
                <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-600">
                  <tr>
                    <th scope="col" className="px-4 py-3">Clinical Indicator</th>
                    <th scope="col" className="px-4 py-3">Non-Blocked Cystitis (FIC)</th>
                    <th scope="col" className="px-4 py-3 bg-rose-50 text-rose-900 font-bold">Complete Blockage (Blocked Cat)</th>
                    <th scope="col" className="px-4 py-3">Constipation / Megacolon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Urine Output</td>
                    <td className="px-4 py-3">Frequent small puddles (dimes/quarters)</td>
                    <td className="px-4 py-3 bg-rose-50/50 font-semibold text-rose-800">ZERO urine produced despite straining</td>
                    <td className="px-4 py-3">Normal urination; zero feces</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Bladder Palpation</td>
                    <td className="px-4 py-3">Small, soft, non-distended</td>
                    <td className="px-4 py-3 bg-rose-50/50 font-semibold text-rose-800">Rock-hard, swollen, grapefruit-sized</td>
                    <td className="px-4 py-3">Soft, normal bladder size</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Pain Vocalization</td>
                    <td className="px-4 py-3">Mild whining or pacing</td>
                    <td className="px-4 py-3 bg-rose-50/50 font-semibold text-rose-800">Agonizing howling, crying, screaming</td>
                    <td className="px-4 py-3">Straining with grunting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Urgency Level</td>
                    <td className="px-4 py-3">Vet visit within 24 hours</td>
                    <td className="px-4 py-3 bg-rose-50/50 font-bold text-rose-700">EMERGENCY: 24/7 ER Vet Immediately</td>
                    <td className="px-4 py-3">Contact vet for laxative guidance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <SEOPageTemplate
      {...data}
      breadcrumbs={[
        { label: "Home", href: "https://pawbiotics.us/" },
        { label: "Health Conditions", href: "https://pawbiotics.us/health-conditions" },
        {
          label: data.title,
          href: `https://pawbiotics.us/health-conditions/${data.slug}`,
        },
      ]}
      eyebrow="Pet Health Guide"
      schemaType={data.schemaType}
      pageUrl={`https://pawbiotics.us/health-conditions/${data.slug}`}
      disclaimer="Educational only. Always consult a licensed veterinarian for diagnosis or treatment."
      afterQuickAnswer={afterQuickAnswer}
    />
  );
}
