export const SUPPORTED_VET_CITY_LABELS: Record<string, string> = {
  "houston-tx": "Houston, TX",
  "dallas-tx": "Dallas, TX",
  "austin-tx": "Austin, TX",
  "miami-fl": "Miami, FL",
  "phoenix-az": "Phoenix, AZ",
};

export function getVetCityLabel(slug: string): string | undefined {
  return SUPPORTED_VET_CITY_LABELS[slug.toLowerCase().trim()];
}
