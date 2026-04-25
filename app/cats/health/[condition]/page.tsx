import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedCatConditionSlugs,
  generateCatHealthConditionContent,
  isSupportedCatConditionSlug,
} from "@/lib/programmatic-content";
import { programmaticContentOverrides } from "@/data/programmatic-overrides";
import { generateCatHealthMeta } from "@/lib/meta";

type PageProps = {
  params: Promise<{ condition: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSupportedCatConditionSlugs().map((condition) => ({ condition }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { condition } = await params;
  const data = generateCatHealthConditionContent(condition);
  const override = programmaticContentOverrides.catHealth[data.slug];
  const meta = generateCatHealthMeta(data.slug, {
    manualTitle: override?.metaTitle,
    manualDescription: override?.metaDescription,
    canonicalPath: `/cats/health/${data.slug}`,
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

export default async function CatConditionPage({ params }: PageProps) {
  const { condition } = await params;
  if (!isSupportedCatConditionSlug(condition)) notFound();
  const data = generateCatHealthConditionContent(condition);

  return (
    <SEOPageTemplate
      {...data}
      breadcrumbs={[
        { label: "Home", href: "https://pawbiotics.us/" },
        { label: "Cats", href: "https://pawbiotics.us/cats" },
        { label: "Health", href: "https://pawbiotics.us/health-conditions" },
        { label: data.title, href: `https://pawbiotics.us/cats/health/${data.slug}` },
      ]}
      eyebrow="Cat Health Guide"
      schemaType={data.schemaType}
      pageUrl={`https://pawbiotics.us/cats/health/${data.slug}`}
    />
  );
}
