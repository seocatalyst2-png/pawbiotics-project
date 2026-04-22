import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedDogConditionSlugs,
  generateDogProbioticConditionContent,
  isSupportedDogConditionSlug,
} from "@/lib/programmatic-content";

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

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pawbiotics.us/dogs/probiotics/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://pawbiotics.us/dogs/probiotics/${data.slug}`,
      type: "article",
    },
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
