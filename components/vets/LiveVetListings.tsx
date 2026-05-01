"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import type { VetListingsResult } from "@/lib/vet-listings";

type LiveVetListingsProps = {
  citySlug: string;
  fallbackCityName: string;
  initialData?: VetListingsResult | null;
};

const cardClasses = [
  "border-teal-100 bg-teal-50/70",
  "border-amber-100 bg-amber-50/70",
  "border-violet-100 bg-violet-50/70",
];

const FALLBACK_MESSAGE =
  "Live clinic listings are temporarily unavailable. Please check Google Maps or contact a local veterinarian directly.";

export default function LiveVetListings({
  citySlug,
  fallbackCityName,
  initialData = null,
}: LiveVetListingsProps) {
  const [data, setData] = useState<VetListingsResult | null>(initialData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    let isMounted = true;

    async function loadListings() {
      try {
        const response = await fetch(`/api/vets?city=${encodeURIComponent(citySlug)}`, {
          method: "GET",
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Live listings request failed");
        }
        const payload = (await response.json()) as VetListingsResult;
        if (isMounted) {
          setData(payload);
          setHasError(false);
        }
      } catch {
        if (isMounted) {
          setHasError(true);
          setData(initialData);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadListings();
    return () => {
      isMounted = false;
    };
  }, [citySlug, initialData]);

  const cityName = data?.city ?? fallbackCityName;
  const listings = data?.listings ?? [];
  const hasListings = listings.length > 0;

  const sectionBody = useMemo(() => {
    if (isLoading) {
      return (
        <p className="text-sm leading-7 text-gray-600">
          Loading live veterinary clinic listings for {cityName}...
        </p>
      );
    }

    if (hasError && !hasListings) {
      return (
        <p className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm leading-7 text-amber-900">
          {FALLBACK_MESSAGE}
        </p>
      );
    }

    if (!hasListings) {
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "General veterinary clinic",
              body: `Use a regular clinic in ${cityName} for wellness exams, vaccines, dental planning, and non-urgent symptom checks.`,
            },
            {
              title: "Emergency animal hospital",
              body: `Save one after-hours hospital near ${cityName} before breathing trouble, collapse, severe pain, or repeated vomiting happens.`,
            },
            {
              title: "Affordable preventive care",
              body: `Ask local clinics for exam, vaccine, recheck, and diagnostic ranges so routine care stays easier to budget.`,
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-100 bg-brand-50/45 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
            </article>
          ))}
        </div>
      );
    }

    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {listings.map((listing, index) => {
          const mapsHref =
            listing.googleMapsUrl ??
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${listing.name ?? "Veterinary clinic"} ${listing.address ?? cityName}`
            )}`;
          const displayName = listing.name ?? "Name unavailable";
          const displayAddress = listing.address ?? "Address unavailable";
          const photoUrl = listing.photoName
            ? `/api/vets/photo?name=${encodeURIComponent(listing.photoName)}&maxHeightPx=300`
            : null;
          const ratingText =
            listing.rating !== null
              ? `⭐ ${listing.rating.toFixed(1)}${
                  listing.reviewCount !== null ? ` (${listing.reviewCount} reviews)` : ""
                }`
              : "⭐ Rating unavailable";

          return (
            <article
              key={`${listing.name ?? "clinic"}-${listing.address ?? "address"}-${index}`}
              className={`rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cardClasses[index % cardClasses.length]}`}
            >
              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/80">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={`${displayName} clinic`}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-brand-50 to-teal-50 text-center text-sm font-semibold text-gray-500">
                    Photo unavailable
                  </div>
                )}
              </div>

              <h3 className="mt-4 font-serif text-xl font-semibold text-gray-900">{displayName}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">{displayAddress}</p>
              <p className="mt-2 text-sm font-semibold text-gray-800">{ratingText}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-brand-200 bg-brand-50/70 px-4 py-2 text-sm font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  View on Maps
                </Link>
                {listing.website ? (
                  <Link
                    href={listing.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-brand-200 hover:text-brand-700"
                  >
                    Visit Website
                  </Link>
                ) : null}
                {listing.phone ? (
                  <Link
                    href={`tel:${listing.phone}`}
                    className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-brand-200 hover:text-brand-700"
                  >
                    Call Now
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    );
  }, [cityName, hasError, hasListings, isLoading, listings]);

  return (
    <section className="py-6">
      <Container>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-gray-900">
            Veterinary Clinics Found Near {cityName}
          </h2>
          <p className="mt-2 text-sm leading-7 text-gray-600">
            Use these clinic details as a starting point, then verify hours, services,
            pricing, and appointment availability directly before booking.
          </p>
          <div className="mt-4">{sectionBody}</div>
          <p className="mt-4 text-xs text-gray-500">
            {data?.attribution ?? "Place information provided by Google."}
          </p>
        </div>
      </Container>
    </section>
  );
}
