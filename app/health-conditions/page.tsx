import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Pet Health Conditions",
  description:
    "Browse common health conditions in dogs and cats. Learn the basics, signs to watch, and supportive care options.",
};

const conditions = [
  {
    href: "/health-conditions",
    title: "Diarrhea & Upset Stomach",
    description: "Common causes, when to see a vet, and supportive care.",
    icon: "💧",
  },
  {
    href: "/health-conditions",
    title: "Allergies",
    description: "Food, skin, and environmental allergies explained simply.",
    icon: "🌾",
  },
  {
    href: "/health-conditions",
    title: "Itchy Skin",
    description: "Causes of itching and how to calm irritated skin.",
    icon: "✨",
  },
  {
    href: "/health-conditions",
    title: "Yeast Imbalance",
    description: "Signs of yeast overgrowth and supportive steps.",
    icon: "🍃",
  },
  {
    href: "/health-conditions",
    title: "Urinary Health",
    description: "UTIs, hydration, and urinary support for pets.",
    icon: "🫧",
  },
  {
    href: "/health-conditions",
    title: "Bad Breath",
    description: "Dental hygiene and gut factors behind pet breath.",
    icon: "🦷",
  },
  {
    href: "/health-conditions",
    title: "Weight Management",
    description: "Practical tips for healthy weight in pets.",
    icon: "⚖️",
  },
  {
    href: "/health-conditions",
    title: "Anxiety & Stress",
    description: "Calming strategies and the gut-brain connection.",
    icon: "🧘",
  },
];

export default function HealthConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Health Conditions"
        title="Common Pet Health Conditions"
        description="Clear, friendly explanations of common health concerns in dogs and cats — plus supportive care ideas to discuss with your vet."
      />

      <section className="py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-gray-500">
            This information is educational and not a substitute for
            professional veterinary advice. Always consult your veterinarian for
            diagnosis and treatment.
          </p>
        </Container>
      </section>
    </>
  );
}
