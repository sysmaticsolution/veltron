/**
 * Structured data schema for courses - improves SEO with rich snippets
 */

export const generateCourseSchema = (course: {
  name: string;
  description: string;
  provider?: string;
  url: string;
}) => {
  const provider = course.provider || "Veltron Sysmatic Solution";
  
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "sameAs": "https://veltron.in"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "0", // Can be updated with actual price if available
      "validFrom": "2025-01-01" // Can be updated with actual date
    },
    "courseCode": course.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 10).toUpperCase(),
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["ONLINE", "CLASSROOM"],
      "courseWorkload": "PT10H",
      "instructor": {
        "@type": "Person",
        "name": "Industry Expert"
      },
      "location": {
        "@type": "Place",
        "name": "Veltron Training Center",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    }
  };
};
