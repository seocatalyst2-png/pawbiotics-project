import { NextResponse } from "next/server";
import { getVetCityLabel } from "@/lib/vet-city";
import { getVetListingsForCity } from "@/lib/vet-listings";

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

  const result = await getVetListingsForCity(citySlug);
  if (!result) {
    return NextResponse.json(
      {
        error: "Unable to fetch live clinic listings",
        details: "Google Places data is temporarily unavailable.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json(result, { status: 200 });
}
