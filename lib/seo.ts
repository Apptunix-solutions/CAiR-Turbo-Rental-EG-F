import { business, faqs } from "@/data"

/**
 * Verified Schema.org structured data graph.
 * Single Responsibility: Generates AutoRental and FAQPage JSON-LD schemas
 * mirroring the official schema published on turbocar.autos.
 */
export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRental",
        name: business.name,
        description:
          "Premium luxury car rental in Cairo & Giza, Egypt. Mercedes G-Wagon, Rolls Royce, Ferrari and more.",
        url: business.url,
        telephone: "+201063706666",
        address: {
          "@type": "PostalAddress",
          streetAddress: "King Faisal Street",
          addressLocality: "Giza",
          addressRegion: "Giza Governorate",
          addressCountry: "EG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.0571,
          longitude: 31.1957,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "4",
        },
        priceRange: "$$-$$$$",
        sameAs: [business.facebook, business.instagram],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }
}
