import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedDogConditionSlugs,
  generateDogProbioticConditionContent,
  isSupportedDogConditionSlug,
} from "@/lib/programmatic-content";
import { programmaticContentOverrides } from "@/data/programmatic-overrides";
import { generateDogProbioticMeta } from "@/lib/meta";

type PageProps = {
  params: Promise<{ condition: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSupportedDogConditionSlugs().map((condition) => ({ condition }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { condition } = await params;
  const data = generateDogProbioticConditionContent(condition);
  const override = programmaticContentOverrides.dogProbiotics[data.slug];
  const meta = generateDogProbioticMeta(data.slug, {
    manualTitle: override?.metaTitle,
    manualDescription: override?.metaDescription,
    canonicalPath: `/dogs/probiotics/${data.slug}`,
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

export default async function DogConditionPage({ params }: PageProps) {
  const { condition } = await params;
  if (!isSupportedDogConditionSlug(condition)) notFound();
  const data = generateDogProbioticConditionContent(condition);

  return (
    <SEOPageTemplate
      {...data}
      breadcrumbs={[
        { label: "Home", href: "https://pawbiotics.us/" },
        { label: "Dogs", href: "https://pawbiotics.us/dogs" },
        { label: "Probiotics", href: "https://pawbiotics.us/probiotics" },
        {
          label: data.title,
          href: `https://pawbiotics.us/dogs/probiotics/${data.slug}`,
        },
      ]}
      eyebrow="Dog Probiotic Guide"
      schemaType={data.schemaType}
      pageUrl={`https://pawbiotics.us/dogs/probiotics/${data.slug}`}
    />
  );
}
