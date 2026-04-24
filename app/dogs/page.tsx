import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Dog Health & Probiotics",
  description:
    "Dog health guides on digestion, skin & coat, immunity, and daily wellness. Learn how probiotics can help your dog feel their best.",
  alternates: {
    canonical: "https://pawbiotics.us/dogs",
  },
  openGraph: {
    title: "Dog Health & Probiotics",
    description:
      "Dog health guides on digestion, skin & coat, immunity, and daily wellness. Learn how probiotics can help your dog feel their best.",
    url: "https://pawbiotics.us/dogs",
    type: "website",
  },
};

const topics = [
  {
    href: "/health-conditions",
    title: "Digestive Health",
    description: "Help your dog with upset stomach, diarrhea, and gut balance.",
    icon: "🦴",
  },
  {
    href: "/health-conditions",
    title: "Skin & Coat",
    description: "Tips for itchy skin, shedding, and a shiny healthy coat.",
    icon: "✨",
  },
  {
    href: "/health-conditions",
    title: "Immunity & Allergies",
    description: "Support a strong immune system and manage common allergies.",
    icon: "🛡️",
  },
  {
    href: "/probiotics",
    title: "Probiotics for Dogs",
    description: "How to choose and use probiotics safely for your dog.",
    icon: "🌿",
  },
  {
    href: "/health-conditions",
    title: "Puppy Care",
    description: "Early nutrition, vaccinations, and growing up healthy.",
    icon: "🐾",
  },
  {
    href: "/health-conditions",
    title: "Senior Dog Wellness",
    description: "Joint support, digestion, and comfort for aging dogs.",
    icon: "💛",
  },
];

export default function DogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dogs"
        title="Dog Health & Wellness"
        description="Trusted guides on feeding, digestion, skin, and immunity — so your dog can live a healthier, happier life."
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
