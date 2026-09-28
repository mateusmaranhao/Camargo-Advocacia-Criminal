const SITE_URL = 'https://camargoadvocaciacriminal.com.br';

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Camargo Advocacia Criminal",
  "image": `${SITE_URL}/og-image.webp`,
  "@id": SITE_URL,
  "url": SITE_URL,
  "telephone": "+5519991084001",
  "email": "contato@camargoadvocaciacriminal.com.br",
  "priceRange": "$$$$",
  "description": "Advocacia especializada em Direito Criminal em Campinas e região. Plantão 24h, audiência de custódia, flagrantes, inquérito policial, habeas corpus e tribunal do júri.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Campos Sales, 532 - Sl 61 - Centro",
    "addressLocality": "Campinas",
    "addressRegion": "SP",
    "postalCode": "13010-080",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-22.9056",
    "longitude": "-47.0608"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://instagram.com/camargoadvocaciacriminal"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Campinas"
    },
    {
      "@type": "City",
      "name": "Sumaré"
    },
    {
      "@type": "City",
      "name": "Hortolândia"
    },
    {
      "@type": "City",
      "name": "Americana"
    },
    {
      "@type": "City",
      "name": "Valinhos"
    },
    {
      "@type": "City",
      "name": "Vinhedo"
    },
    {
      "@type": "City",
      "name": "Indaiatuba"
    },
    {
      "@type": "City",
      "name": "Paulínia"
    },
    {
      "@type": "State",
      "name": "São Paulo"
    }
  ]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Camargo Advocacia Criminal",
  "url": SITE_URL
};

export const generateBreadcrumbSchema = (items: { name: string, item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      ...items.map((breadcrumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": breadcrumb.name,
        "item": `${SITE_URL}${breadcrumb.item}`
      }))
    ]
  };
};

export const generateServiceSchema = (name: string, description: string, urlPath: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Direito Criminal",
    "provider": {
      "@id": SITE_URL,
      "@type": "LegalService",
      "name": "Camargo Advocacia Criminal"
    },
    "name": name,
    "description": description,
    "url": `${SITE_URL}${urlPath}`
  };
};

export const generateFAQSchema = (faqs: { question: string, answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
