import { getVetCityLabel } from "@/lib/vet-city";

const GOOGLE_PLACES_TEXT_SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const GOOGLE_FIELD_MASK = [
  "places.displayName",
  "places.formattedAddress",
  "places.rating",
  "places.userRatingCount",
  "places.nationalPhoneNumber",
  "places.websiteUri",
  "places.googleMapsUri",
  "places.types",
  "places.photos",
].join(",");

type GooglePlace = {
  displayName?: { text?: string };
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  nationalPhoneNumber?: string;
  websiteUri?: string;
  googleMapsUri?: string;
  types?: string[];
  photos?: Array<{ name?: string }>;
};

export type VetListing = {
  name: string | null;
  address: string | null;
  rating: number | null;
  reviewCount: number | null;
  phone: string | null;
  website: string | null;
  googleMapsUrl: string | null;
  types: string[];
  photoName: string | null;
};

export type VetListingsResult = {
  city: string;
  listings: VetListing[];
  attribution: string;
};

export async function getVetListingsForCity(
  citySlug: string
): Promise<VetListingsResult | null> {
  const cityLabel = getVetCityLabel(citySlug);
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!cityLabel || !apiKey) return null;

  try {
    const response = await fetch(GOOGLE_PLACES_TEXT_SEARCH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": GOOGLE_FIELD_MASK,
      },
      body: JSON.stringify({
        textQuery: `veterinary clinic in ${cityLabel}`,
      }),
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as { places?: GooglePlace[] };
    const listings = (payload.places ?? []).slice(0, 3).map((place) => ({
      name: place.displayName?.text ?? null,
      address: place.formattedAddress ?? null,
      rating: place.rating ?? null,
      reviewCount: place.userRatingCount ?? null,
      phone: place.nationalPhoneNumber ?? null,
      website: place.websiteUri ?? null,
      googleMapsUrl: place.googleMapsUri ?? null,
      types: place.types ?? [],
      photoName: place.photos?.[0]?.name ?? null,
    }));

    return {
      city: cityLabel,
      listings,
      attribution: "Place information provided by Google.",
    };
  } catch {
    return null;
  }
}
