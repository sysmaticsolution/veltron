import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ThemeProvider } from "@/providers/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veltron Sysmatic Solution - Leading Technology Solutions & Professional Training in Chennai",
  description: "Veltron offers comprehensive technology solutions and professional training in Chennai, Tamil Nadu. Specializing in Data Analytics, Web Development, SEO Services, Digital Marketing, Web Applications, Mobile App Development, Corporate Training and Skill Development Courses.",
  keywords: [
    "Data Analytics Chennai", "Web Development Chennai", "SEO Services Chennai", "Digital Marketing Chennai", 
    "Web Application Development Chennai", "Mobile App Development Tamil Nadu", "Corporate Training Chennai", 
    "Skill Development Courses Kolathur", "IT Solutions Chennai", "Professional Training Chennai", 
    "Business Technology Solutions Tamil Nadu", "Career Development Chennai", "Technology Consulting Chennai", 
    "Software Development Chennai", "IT Training Kolathur", "Data Science Courses Chennai", "Web Design Chennai", 
    "UI/UX Design Tamil Nadu", "Cloud Solutions Chennai", "DevOps Training Chennai"
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
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
