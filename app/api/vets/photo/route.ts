import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const photoName = searchParams.get("name")?.trim() ?? "";
  const maxHeightRaw = searchParams.get("maxHeightPx")?.trim() ?? "300";
  const parsedMaxHeight = Number.parseInt(maxHeightRaw, 10);
  const maxHeightPx = Number.isFinite(parsedMaxHeight) && parsedMaxHeight > 0 ? parsedMaxHeight : 300;

  if (!photoName) {
    return NextResponse.json({ error: "Missing required query param: name" }, { status: 400 });
  }
  if (!photoName.startsWith("places/") || !photoName.includes("/photos/")) {
    return NextResponse.json({ error: "Invalid photo name format" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing server configuration for Google Places API key" }, { status: 500 });
  }

  const googlePhotoUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=${maxHeightPx}&key=${apiKey}`;

  try {
    const response = await fetch(googlePhotoUrl, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      console.warn("[vets/photo] Google photo request failed", {
        status: response.status,
        photoNamePreview: photoName.slice(0, 80),
      });
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
  } catch (error) {
    console.warn("[vets/photo] Photo proxy exception", {
      message: error instanceof Error ? error.message : "unknown",
      photoNamePreview: photoName.slice(0, 80),
    });
    return NextResponse.json({ error: "Photo request failed" }, { status: 502 });
  }
}
