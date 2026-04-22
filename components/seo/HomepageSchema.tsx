import { FAQItem } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomepageSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Pawbiotics",
        url: "https://pawbiotics.us/",
        description:
          "Expert pet gut health education with probiotics and prebiotics for dogs and cats.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://pawbiotics.us/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        name: "Pawbiotics",
        url: "https://pawbiotics.us/",
        logo: "https://pawbiotics.us/wp-content/uploads/2025/03/cropped-cropped-cropped-pawbiotics-logo-4.png",
        sameAs: [
          "https://www.facebook.com/share/1HCAosbEtn/",
          "https://x.com/pawbiotics_",
          "https://www.instagram.com/pawbiotics.us",
          "https://www.pinterest.com/pawbiotics_us",
        ],
      },
    ],
  };

  return <JsonLd data={schema} />;
}
