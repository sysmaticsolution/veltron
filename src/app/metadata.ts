import { Metadata } from "next";

// Homepage metadata
export const metadata: Metadata = {
  title: "Veltron Sysmatic Solution - Leading Technology Solutions & Training in Chennai",
  description: "Transform your business with our comprehensive technology solutions including Data Analytics, Web Development, SEO, Digital Marketing based in Chennai, Tamil Nadu. Advance your career with our professional training programs in Kolathur.",
  metadataBase: new URL('https://veltron.in'),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Data Analytics Services in Chennai", "Web Development Company in Chennai", "SEO Services in Chennai", 
    "Digital Marketing Agency in Chennai", "Web Application Development in Tamil Nadu", 
    "Mobile App Development in Chennai", "Corporate IT Training in Chennai", 
    "Professional Skill Development in Kolathur", "Technology Solutions Provider in Chennai", 
    "Career Advancement Courses Chennai", "Business Technology Solutions in Tamil Nadu",
    "IT Training Institute Kolathur", "Chennai Tech Company", "Software Services Chennai"
  ],
  openGraph: {
    type: 'website',
    url: 'https://veltron.in',
    title: 'Veltron Sysmatic Solution - Technology Solutions & Training in Chennai',
    description: 'Transform your business with our Chennai-based technology solutions and advance your career with professional training programs in Kolathur, Chennai.',
    siteName: 'Veltron Sysmatic Solution Pvt Ltd - Chennai',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Veltron Sysmatic Solution Pvt Ltd - Chennai'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veltron Sysmatic Solution - Technology Solutions & Training in Chennai',
    description: 'Transform your business with our Chennai-based technology solutions and advance your career with professional training programs in Kolathur, Tamil Nadu.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Chennai',
    'geo.position': '13.1226;80.2232',
    'ICBM': '13.1226, 80.2232'
  }
};
