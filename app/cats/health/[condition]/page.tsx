import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedCatConditionSlugs,
  generateCatHealthConditionContent,
  isSupportedCatConditionSlug,
} from "@/lib/programmatic-content";

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

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pawbiotics.us/cats/health/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://pawbiotics.us/cats/health/${data.slug}`,
      type: "article",
    },
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
