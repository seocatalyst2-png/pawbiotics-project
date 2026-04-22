import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedCitySlugs,
  generateVetCityPageContent,
  isSupportedCitySlug,
} from "@/lib/programmatic-content";
import { normalizeCitySlug, slugToWords } from "@/lib/seo";

type PageProps = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSupportedCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const citySlug = normalizeCitySlug(decodeURIComponent(city));
  const data = generateVetCityPageContent(citySlug);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://pawbiotics.us/vets/${data.slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://pawbiotics.us/vets/${data.slug}`,
      type: "website",
    },
  };
}

export default async function VetCityPage({ params }: PageProps) {
  const { city } = await params;
  const citySlug = normalizeCitySlug(decodeURIComponent(city));
  if (!isSupportedCitySlug(citySlug)) notFound();
  const cityName = slugToWords(citySlug);
  const data = generateVetCityPageContent(citySlug);

  return (
    <SEOPageTemplate
      {...data}
      breadcrumbs={[
        { label: "Home", href: "https://pawbiotics.us/" },
        { label: "Local Vets", href: "https://pawbiotics.us/" },
        { label: cityName, href: `https://pawbiotics.us/vets/${data.slug}` },
      ]}
      eyebrow="Local Vet Guide"
      schemaType={data.schemaType}
      cityName={cityName}
      pageUrl={`https://pawbiotics.us/vets/${data.slug}`}
    />
  );
}
