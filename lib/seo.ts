export type FAQItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  title: string;
  body: string[];
  bullets?: string[];
  listings?: VetClinicListing[];
};

export type VetClinicListing = {
  name: string;
  area: string;
  description: string;
  services: string[];
  rating: string;
  viewHref: string;
  callHref: string;
};

export type QuickAnswer = {
  title: string;
  answer: string;
  bullets?: string[];
};

export function slugToWords(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function normalizeCitySlug(city: string): string {
  return city.trim().toLowerCase().replace(/\s+/g, "-");
}

export function toTitleCase(value: string): string {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}
