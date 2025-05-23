import type { Metadata } from "next";
import { Montserrat, Poppins, Orbitron } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ThemeProvider } from "@/providers/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import SplashCursor from "@/components/SplashCursor";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/veltron-logo.png' }],
    shortcut: [{ url: '/veltron-logo.png' }],
    apple: [{ url: '/veltron-logo.png' }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/veltron-logo.png',
      }
    ],
  },
  title: "Veltron Sysmatic Solution - Leading Technology Solutions & Professional Training in Chennai",
  description: "Veltron offers comprehensive technology solutions and professional training in Chennai, Tamil Nadu. Specializing in Data Analytics, Web Development, SEO Services, Digital Marketing, Web Applications, Mobile App Development, Corporate Training and Skill Development Courses.",
  keywords: [
    "Data Analytics in Chennai", "Web Development in Chennai", "SEO Services in Chennai", "Digital Marketing in Chennai", 
    "Web Application Development in Chennai", "Mobile App Development in Tamil Nadu", "Corporate Training in Chennai", 
    "Skill Development Courses in Kolathur", "IT Solutions in Chennai", "Professional Training in Chennai", 
    "Business Technology Solutions in Tamil Nadu", "Career Development in Chennai", "Technology Consulting in Chennai", 
    "Software Development in Chennai", "IT Training in Kolathur", "Data Science Courses in Chennai", "Web Design in Chennai", 
    "UI/UX Design in Tamil Nadu", "Cloud Solutions in Chennai", "DevOps Training in Chennai"
  ],
  authors: [{ name: "Veltron Sysmatic Solution Pvt Ltd - Chennai" }],
  creator: "Veltron Sysmatic Solution - Chennai",
  publisher: "Veltron Sysmatic Solution - Tamil Nadu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://veltron.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Veltron Sysmatic Solution - Technology Solutions & Professional Training in Chennai",
    description: "Transform your business with our innovative technology solutions in Chennai, Tamil Nadu and upskill your career with our professional training programs in Kolathur.",
    url: "https://veltron.in",
    siteName: "Veltron Sysmatic Solution - Chennai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://veltron.in/images/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Veltron Sysmatic Solution - Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veltron Sysmatic Solution - Technology Solutions & Training in Chennai",
    description: "Transform your business with our innovative technology solutions in Chennai, Tamil Nadu and upskill your career with our professional training programs in Kolathur.",
    creator: "@veltron",
    images: ["https://veltron.in/images/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      me: ["info@veltron.in"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} ${orbitron.variable} min-h-screen flex flex-col antialiased`}>
        <SplashCursor 
          SPLAT_RADIUS={0.25}
          SPLAT_FORCE={8000}
          COLOR_UPDATE_SPEED={15}
          SHADING={true}
          BACK_COLOR={{ r: 0.3, g: 0.1, b: 0.6 }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <SmoothScroll>
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingButtons />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
