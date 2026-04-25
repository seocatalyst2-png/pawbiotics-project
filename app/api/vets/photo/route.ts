import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const photoName = searchParams.get("name")?.trim();
  const maxHeightPx = searchParams.get("maxHeightPx")?.trim() || "300";

  if (!photoName) {
    return NextResponse.json({ error: "Missing required query param: name" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing server configuration for Google Places API key" }, { status: 500 });
  }

  const googlePhotoUrl = `https://places.googleapis.com/v1/${encodeURIComponent(
    photoName
  )}/media?maxHeightPx=${encodeURIComponent(maxHeightPx)}&key=${encodeURIComponent(apiKey)}`;

  try {
    const response = await fetch(googlePhotoUrl, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to fetch place photo" }, { status: 502 });
    }

    const contentType = response.headers.get("content-type") ?? "image/jpeg";
    const imageBuffer = await response.arrayBuffer();
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ error: "Photo request failed" }, { status: 502 });
  }
}
