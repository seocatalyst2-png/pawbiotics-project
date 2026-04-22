import { FAQItem } from "@/lib/seo";

type FAQSchemaProps = {
  faqs: FAQItem[];
};

type LocalBusinessSchemaProps = {
  cityName: string;
  pageUrl: string;
};

type ArticleSchemaProps = {
  headline: string;
  description: string;
  pageUrl: string;
};

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return <JsonLd data={schema} />;
}

export function LocalBusinessSchema({ cityName, pageUrl }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: `Veterinary Clinics in ${cityName}`,
    description: `Local guide to veterinary clinics, pricing, and emergency pet care in ${cityName}.`,
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "Pawbiotics",
      url: "https://pawbiotics.us",
    },
  };

  return <JsonLd data={schema} />;
}

export function ArticleSchema({
  headline,
  description,
  pageUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Pawbiotics",
    },
    publisher: {
      "@type": "Organization",
      name: "Pawbiotics",
      logo: {
        "@type": "ImageObject",
        url: "https://pawbiotics.us/logo.png",
      },
    },
  };

  return <JsonLd data={schema} />;
}
