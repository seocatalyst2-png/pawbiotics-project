import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SEOPageTemplate from "@/components/seo/SEOPageTemplate";
import {
  getSupportedCitySlugs,
  generateVetCityPageContent,
  isSupportedCitySlug,
} from "@/lib/programmatic-content";
import { programmaticContentOverrides } from "@/data/programmatic-overrides";
import { generateVetCityMeta } from "@/lib/meta";
import { normalizeCitySlug, slugToWords } from "@/lib/seo";
import { getVetCityLabel } from "@/lib/vet-city";
import LiveVetListings from "@/components/vets/LiveVetListings";
import { getVetListingsForCity } from "@/lib/vet-listings";

type PageProps = {
  params: Promise<{ city: string }>;
};

export const dynamicParams = false;
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return getSupportedCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const citySlug = normalizeCitySlug(decodeURIComponent(city));
  const data = generateVetCityPageContent(citySlug);
  const cityParts = data.slug.split("-");
  const state = cityParts.at(-1)?.toUpperCase() ?? "TX";
  const cityName = slugToWords(cityParts.slice(0, -1).join("-") || data.slug);
  const override = programmaticContentOverrides.vets[data.slug];
  const meta = generateVetCityMeta(cityName, state, {
    manualTitle: override?.metaTitle,
    manualDescription: override?.metaDescription,
    canonicalPath: `/vets/${data.slug}`,
    openGraphTitle: data.title,
    openGraphType: "website",
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

export default async function VetCityPage({ params }: PageProps) {
  const { city } = await params;
  const citySlug = normalizeCitySlug(decodeURIComponent(city));
  if (!isSupportedCitySlug(citySlug)) notFound();
  const cityName = getVetCityLabel(citySlug) ?? slugToWords(citySlug);
  const data = generateVetCityPageContent(citySlug);
  const initialVetListings = await getVetListingsForCity(citySlug);

  const hasCustomListings = data.sections.some(
    (s) => s.listings && s.listings.length > 0
  );

  return (
    <>
      <SEOPageTemplate
        {...data}
        breadcrumbs={[
          { label: "Home", href: "https://pawbiotics.us/" },
          { label: "Local Vets", href: "https://pawbiotics.us/vets" },
          { label: cityName, href: `https://pawbiotics.us/vets/${data.slug}` },
        ]}
        eyebrow="Local Vet Guide"
        schemaType={data.schemaType}
        cityName={cityName}
        pageUrl={`https://pawbiotics.us/vets/${data.slug}`}
        disclaimer="Listings are for informational purposes and should be verified directly with each clinic before booking."
        afterQuickAnswer={
          hasCustomListings ? null : (
            <LiveVetListings
              citySlug={citySlug}
              fallbackCityName={cityName}
              initialData={initialVetListings}
            />
          )
        }
      />
    </>
  );
}
