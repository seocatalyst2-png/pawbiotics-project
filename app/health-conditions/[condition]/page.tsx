import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedHealthConditionSlugs,
  generateHealthConditionContent,
  isSupportedHealthConditionSlug,
} from "@/lib/programmatic-content";

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

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pawbiotics.us/health-conditions/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://pawbiotics.us/health-conditions/${data.slug}`,
      type: "article",
    },
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
