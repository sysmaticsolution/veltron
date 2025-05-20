export default function generateStructuredData() {
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
          "https://twitter.com/veltron",
          "https://www.linkedin.com/company/veltron",
          "https://www.instagram.com/veltron"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://veltron.in/#website",
        "url": "https://veltron.in",
        "name": "Veltron Sysmatic Solution",
        "description": "Technology Solutions & Professional Training",
        "publisher": {
          "@id": "https://veltron.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://veltron.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://veltron.in/#webpage",
        "url": "https://veltron.in",
        "name": "Veltron Sysmatic Solution - Leading Technology Solutions & Professional Training",
        "isPartOf": {
          "@id": "https://veltron.in/#website"
        },
        "about": {
          "@id": "https://veltron.in/#organization"
        },
        "description": "Veltron offers comprehensive technology solutions and professional training in Data Analytics, Web Development, SEO Services, Digital Marketing, Web Applications, Mobile App Development, Corporate Training and Skill Development Courses.",
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "name": "Data Analytics",
        "description": "Transform your data into actionable insights with our advanced analytics solutions.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/data-analytics"
      },
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom web solutions tailored to meet your business needs and exceed user expectations.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/web-development"
      },
      {
        "@type": "Service",
        "name": "Web Application",
        "description": "Custom web applications with modern frameworks to streamline business operations and enhance productivity.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/web-application"
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "description": "Strategic digital marketing to grow your brand presence and drive measurable results.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/digital-marketing"
      },
      {
        "@type": "Service",
        "name": "SEO Services",
        "description": "Boost your online visibility and organic traffic with our expert search engine optimization strategies.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/seo-services"
      },
      {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/mobile-app-development"
      },
      {
        "@type": "Service",
        "name": "Corporate Training",
        "description": "Customized training programs to enhance your team's technical skills and professional development.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/services/corporate-training"
      },
      {
        "@type": "Service",
        "name": "Skill Development Courses",
        "description": "Professional courses designed to help individuals upskill and advance their careers in today's competitive job market.",
        "provider": {
          "@id": "https://veltron.in/#organization"
        },
        "url": "https://veltron.in/courses"
      }
    ]
  };
}
