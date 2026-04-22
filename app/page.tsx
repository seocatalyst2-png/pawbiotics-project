import type { Metadata } from "next";
import HomeAnswerBlock from "@/components/home/HomeAnswerBlock";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeComparisonSection from "@/components/home/HomeComparisonSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHero from "@/components/home/HomeHero";
import HomeIntentStrip from "@/components/home/HomeIntentStrip";
import HomeLocalSeoSection from "@/components/home/HomeLocalSeoSection";
import HomeNavbar from "@/components/home/HomeNavbar";
import HomeSignsSection from "@/components/home/HomeSignsSection";
import HomeStrainsSection from "@/components/home/HomeStrainsSection";
import HomepageSchema from "@/components/seo/HomepageSchema";
import { homeFaqItems } from "@/data/home-faq";

export const metadata: Metadata = {
  title: "Pawbiotics | Probiotics for Dogs & Cats - Pet Gut Health Guide",
  description:
    "Pawbiotics is your trusted source for pet probiotic education. Learn how probiotics and prebiotics support digestion, immunity, and overall wellness for dogs and cats.",
  keywords: [
    "probiotics for dogs",
    "probiotics for cats",
    "pet gut health",
    "best probiotics for pets",
    "dog gut health",
    "cat gut health",
  ],
  alternates: {
    canonical: "https://pawbiotics.us/",
  },
  openGraph: {
    title: "Pawbiotics - Probiotics for Dogs & Cats | Pet Gut Health",
    description:
      "Science-backed gut health education for pet owners. Discover the best probiotics and digestive tips for your dog or cat.",
    url: "https://pawbiotics.us/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="bg-[#faf6f0] text-[#2c1f0e]">
      <HomepageSchema faqs={homeFaqItems} />
      <HomeNavbar />
      <main>
        <HomeHero />
        <HomeIntentStrip />
        <HomeAnswerBlock />
        <HomeSignsSection />
        <HomeStrainsSection />
        <HomeComparisonSection />
        <HomeBlogSection />
        <HomeLocalSeoSection />
        <HomeFaqSection items={homeFaqItems} />
        <HomeCtaSection />
      </main>
      <HomeFooter />
    </div>
  );
}
