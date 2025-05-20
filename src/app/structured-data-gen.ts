// JSON-LD structured data for SEO
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://veltron.in/#organization",
        "name": "Veltron Sysmatic Solution Pvt Ltd",
        "url": "https://veltron.in",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://veltron.in/#logo",
          "inLanguage": "en-US",
          "url": "https://veltron.in/images/logo.png",
          "contentUrl": "https://veltron.in/images/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Veltron Sysmatic Solution"
        },
        "image": {
          "@id": "https://veltron.in/#logo"
        },
        "sameAs": [
          "https://www.facebook.com/veltron",
          "https://www.linkedin.com/company/veltron",
          "https://twitter.com/veltron"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "330, 2nd Street, Swamy Ramalingam Colony, Kolathur",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600110",
          "addressCountry": "IN"
        },
        "telephone": "+919345111211",
        "email": "info@veltron.in"
      },
      {
        "@type": "WebSite",
        "@id": "https://veltron.in/#website",
        "url": "https://veltron.in",
        "name": "Veltron Sysmatic Solution - Professional Training & IT Services",
        "description": "Veltron offers professional training in Data Analytics, Web Development, and IT services for businesses across India.",
        "publisher": {
          "@id": "https://veltron.in/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };
};

export default generateStructuredData;
