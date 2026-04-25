import { NextResponse } from "next/server";
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
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const citySlug = searchParams.get("city")?.trim().toLowerCase();

  if (!citySlug) {
    return NextResponse.json({ error: "Missing required query param: city" }, { status: 400 });
  }

  const cityLabel = getVetCityLabel(citySlug);
  if (!cityLabel) {
    return NextResponse.json({ error: "Unsupported city slug" }, { status: 404 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing server configuration for Google Places API key" }, { status: 500 });
  }

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
      cache: "no-store",
    });

    if (!response.ok) {
      const googleError = await response.text();
      return NextResponse.json(
        {
          error: "Google Places API request failed",
          details: googleError || "Unknown Google API error",
        },
        { status: 502 }
      );
    }

    const payload = (await response.json()) as { places?: GooglePlace[] };
    const listings = (payload.places ?? []).slice(0, 3).map((place) => ({
      name: place.displayName?.text ?? "Veterinary Clinic",
      address: place.formattedAddress ?? "Address unavailable",
      rating: place.rating ?? null,
      reviewCount: place.userRatingCount ?? null,
      phone: place.nationalPhoneNumber ?? null,
      website: place.websiteUri ?? null,
      googleMapsUrl: place.googleMapsUri ?? null,
      types: place.types ?? [],
    }));

    return NextResponse.json(
      {
        city: cityLabel,
        listings,
        attribution: "Place information provided by Google.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to fetch live clinic listings",
        details: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 502 }
    );
  }
}
