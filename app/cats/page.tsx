import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Cat Health & Probiotics",
  description:
    "Cat health guides on digestion, hairballs, immunity, and indoor wellness. Learn how probiotics can support your cat's daily health.",
  alternates: {
    canonical: "https://pawbiotics.us/cats",
  },
  openGraph: {
    title: "Cat Health & Probiotics",
    description:
      "Cat health guides on digestion, hairballs, immunity, and indoor wellness. Learn how probiotics can support your cat's daily health.",
    url: "https://pawbiotics.us/cats",
    type: "website",
  },
};

const topics = [
  {
    href: "/health-conditions",
    title: "Digestive Health",
    description: "Support a balanced gut and reduce stomach upset in cats.",
    icon: "🐟",
  },
  {
    href: "/health-conditions",
    title: "Hairballs",
    description: "Reduce hairballs with diet, grooming, and gut support.",
    icon: "🧶",
  },
  {
    href: "/health-conditions",
    title: "Urinary Health",
    description: "Support urinary tract health and hydration.",
    icon: "💧",
  },
  {
    href: "/probiotics",
    title: "Probiotics for Cats",
    description: "Choosing the right probiotic for your cat's needs.",
    icon: "🌿",
  },
  {
    href: "/health-conditions",
    title: "Kitten Care",
    description: "Feeding, litter training, and early wellness tips.",
    icon: "🐾",
  },
  {
    href: "/health-conditions",
    title: "Senior Cat Wellness",
    description: "Kidney, joint, and digestive care for older cats.",
    icon: "💛",
  },
];

export default function CatsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cats"
        title="Cat Health & Wellness"
        description="Clear, practical guidance for your cat's digestion, immunity, and everyday comfort."
      />

      <section className="py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <CategoryCard key={t.title} {...t} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
