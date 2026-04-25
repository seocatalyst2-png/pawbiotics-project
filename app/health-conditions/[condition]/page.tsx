import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      eyebrow="Pet Health Condition"
      schemaType={data.schemaType}
      pageUrl={`https://pawbiotics.us/health-conditions/${data.slug}`}
    />
  );
}
