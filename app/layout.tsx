import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const defaultTitle =
  "Domenica’s Cleaning | Residential, Move & RV Cleaning in Wisconsin";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "house cleaning Wisconsin",
    "apartment cleaning Wisconsin",
    "deep cleaning Wisconsin",
    "move-in move-out cleaning Wisconsin",
    "camper cleaning Wisconsin",
    "RV cleaning Wisconsin",
    "local cleaning service",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Domenica’s Cleaning | Local Wisconsin Cleaning Service",
    description: siteConfig.description,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.contact.phone,
  areaServed: {
    "@type": "State",
    name: siteConfig.location.businessState,
  },
  makesOffer: [
    "Regular house cleaning",
    "Apartment cleaning",
    "Deep cleaning",
    "Move-in and move-out cleaning",
    "Camper and RV cleaning",
    "Custom cleaning requests",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
