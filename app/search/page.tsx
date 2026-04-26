import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllBlogPosts } from "@/data/blog-posts";
import { getSupportedCitySlugs, getSupportedHealthConditionSlugs } from "@/lib/programmatic-content";
import { getVetCityLabel } from "@/lib/vet-city";
import { slugToWords } from "@/lib/seo";

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

type SearchItem = {
  title: string;
  description: string;
  type: "Blog" | "Tool" | "Health Condition" | "Local Vet";
  url: string;
};

const toolPages: SearchItem[] = [
  {
    title: "Dog Food Calculator",
    description: "Estimate daily feeding portions for dogs by weight and activity.",
    type: "Tool",
    url: "/tools/dog-food-calculator",
  },
  {
    title: "Probiotic Dosage Calculator",
    description: "Get practical probiotic range estimates to discuss with your vet.",
    type: "Tool",
    url: "/tools/probiotic-calculator",
  },
  {
    title: "Puppy Feeding Schedule",
    description: "Age-based feeding timing guidance for puppy routines.",
    type: "Tool",
    url: "/tools/puppy-feeding-schedule",
  },
];

const typeBadgeClass: Record<SearchItem["type"], string> = {
  Blog: "border-teal-100 bg-teal-50 text-teal-700",
  Tool: "border-amber-100 bg-amber-50 text-amber-700",
  "Health Condition": "border-violet-100 bg-violet-50 text-violet-700",
  "Local Vet": "border-rose-100 bg-rose-50 text-rose-700",
};

export const metadata: Metadata = {
  title: "Search",
  description: "Search Pawbiotics guides, tools, health condition pages, and local vet pages.",
  robots: {
    index: false,
    follow: true,
  },
};

function buildSearchItems(): SearchItem[] {
  const blogItems: SearchItem[] = getAllBlogPosts().map((post) => ({
    title: post.title,
    description: post.metaDescription,
    type: "Blog",
    url: `/blog/${post.slug}`,
  }));

  const healthConditionItems: SearchItem[] = getSupportedHealthConditionSlugs().map((slug) => ({
    title: `${slugToWords(slug)} in Dogs and Cats`,
    description: `Practical signs, care options, and vet escalation steps for ${slug.replace(
      /-/g,
      " "
    )}.`,
    type: "Health Condition",
    url: `/health-conditions/${slug}`,
  }));

  const localVetItems: SearchItem[] = getSupportedCitySlugs().map((slug) => {
    const cityLabel = getVetCityLabel(slug) ?? slugToWords(slug);
    return {
      title: `Vets in ${cityLabel}`,
      description: `Find a veterinary clinic, affordable vet options, emergency vet near me support, and nearby animal hospital care in ${cityLabel}.`,
      type: "Local Vet",
      url: `/vets/${slug}`,
    };
  });

  return [...blogItems, ...toolPages, ...healthConditionItems, ...localVetItems];
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const query = resolvedSearchParams.q?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();
  const allItems = buildSearchItems();

  const matchedItems = normalizedQuery
    ? allItems.filter((item) =>
        `${item.title} ${item.description} ${item.type} ${item.url}`
          .toLowerCase()
          .includes(normalizedQuery)
      )
    : [];

  return (
    <>
      <section className="border-b border-gray-100 bg-gradient-to-b from-brand-50/60 to-white py-14">
        <Container className="text-center">
          <p className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Site Search
          </p>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Search Pawbiotics</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Search blog guides, tools, health condition pages, and local vet pages in one place.
          </p>
          <form action="/search" method="get" className="mx-auto mt-6 max-w-2xl">
            <label htmlFor="site-search-page" className="sr-only">
              Search site
            </label>
            <input
              id="site-search-page"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Try: dog coughing, kidney disease, houston vet..."
              className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-700 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-100"
            />
          </form>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {normalizedQuery ? (
            <p className="mb-5 text-sm text-gray-600">
              Found <strong>{matchedItems.length}</strong>{" "}
              {matchedItems.length === 1 ? "result" : "results"} for <strong>{query}</strong>.
            </p>
          ) : (
            <p className="mb-5 text-sm text-gray-600">
              Enter a search term to find pages across Pawbiotics.
            </p>
          )}

          {normalizedQuery && matchedItems.length === 0 ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-900">
              No results found. Try broader terms like <em>cat sneezing</em>, <em>probiotic</em>,{" "}
              <em>diarrhea</em>, or a city like <em>dallas</em>.
            </div>
          ) : null}

          {matchedItems.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {matchedItems.map((item) => (
                <article
                  key={`${item.type}-${item.url}`}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${typeBadgeClass[item.type]}`}
                  >
                    {item.type}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  <p className="mt-3 break-all text-xs text-gray-500">{item.url}</p>
                  <Link
                    href={item.url}
                    className="mt-4 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-100"
                  >
                    Open page &rarr;
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
