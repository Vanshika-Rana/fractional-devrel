import { EMAIL, faqs, profiles, retainer, sprint, task } from "@/lib/content";
import {
  SHORT_DESCRIPTION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

// "$300-$1,800" -> [300, 1800], "$4,000/month" -> [4000]
function amounts(price: string) {
  return (price.match(/\$[\d,]+/g) ?? []).map((value) =>
    Number(value.replace(/[$,]/g, "")),
  );
}

function rangeOffer(price: string) {
  const [min, max] = amounts(price);
  return {
    "@type": "PriceSpecification",
    priceCurrency: "USD",
    minPrice: min,
    maxPrice: max ?? min,
  };
}

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#service`;
const SITE_ID = `${SITE_URL}/#website`;

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": SERVICE_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: "https://van.codes",
      email: EMAIL,
      jobTitle: "Fractional Developer Relations",
      description: SHORT_DESCRIPTION,
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      knowsAbout: [
        "Developer relations",
        "Technical writing",
        "API documentation",
        "Developer onboarding",
        "Developer community building",
        "Sample apps and demos",
      ],
      sameAs: profiles.map((profile) => profile.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": SERVICE_ID,
      name: `${SITE_NAME}, fractional DevRel`,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: EMAIL,
      description: SITE_DESCRIPTION,
      provider: { "@id": PERSON_ID },
      areaServed: "Worldwide",
      availableLanguage: "English",
      priceRange: "$300-$6,000",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      sameAs: profiles.map((profile) => profile.href),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Developer relations services",
        itemListElement: [
          {
            "@type": "Offer",
            priceSpecification: rangeOffer(task.price),
            itemOffered: {
              "@type": "Service",
              name: task.name,
              description: task.summary,
            },
          },
          {
            "@type": "Offer",
            priceSpecification: rangeOffer(sprint.price),
            itemOffered: {
              "@type": "Service",
              name: sprint.name,
              description: sprint.summary,
            },
          },
          {
            "@type": "Offer",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "USD",
              price: amounts(retainer.price)[0],
              unitCode: "MON",
            },
            itemOffered: {
              "@type": "Service",
              name: retainer.name,
              description: retainer.summary,
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

// "<" is escaped so the JSON can never close the script tag early.
export const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
