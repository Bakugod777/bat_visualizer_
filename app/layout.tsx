import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Paint Power - NYC Bathroom Renovation Cost Estimator | Licensed Contractor Since 2007",
  description:
    "Get accurate bathroom renovation cost estimates with Paint Power - Licensed NYC contractor serving Manhattan, Queens, Brooklyn, Bronx, Westchester & Hudson Valley since 2007. BBB A+ rated. Free instant quotes for your bathroom remodel project.",
  keywords: [
    "bathroom renovation NYC",
    "bathroom remodel Manhattan",
    "bathroom renovation Queens",
    "bathroom remodeling Brooklyn",
    "bathroom renovation Bronx",
    "bathroom remodel Westchester",
    "bathroom renovation Hudson Valley",
    "NYC bathroom cost estimator",
    "Paint Power",
    "licensed bathroom contractor NYC",
    "bathroom renovation Orange County NY",
    "bathroom remodel Nassau County",
    "bathroom renovation Suffolk County",
    "bathroom fixtures cost NYC",
    "bathroom renovation estimate Manhattan",
    "NYC DCA licensed contractor",
    "bathroom remodeling near me",
  ],
  authors: [{ name: "Paint Power Painting & Remodeling" }],
  creator: "Paint Power",
  publisher: "Paint Power",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paintpower.net",
    siteName: "Paint Power Bathroom Renovation Estimator",
    title: "Paint Power - NYC Bathroom Renovation Cost Estimator | Licensed Since 2007",
    description:
      "Get accurate bathroom renovation estimates for NYC & Hudson Valley. Licensed contractor serving Manhattan, Queens, Brooklyn, Bronx, Westchester since 2007. BBB A+ rated.",
    images: [
      {
        url: "https://paintpower.net/Img/paint.jpg",
        width: 1200,
        height: 630,
        alt: "Paint Power Painting & Remodeling - NYC Licensed Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Power - NYC Bathroom Renovation Cost Estimator",
    description:
      "Licensed NYC bathroom contractor since 2007. Serving Manhattan, Queens, Brooklyn, Bronx, Westchester & Hudson Valley. Free estimates.",
    images: ["https://paintpower.net/Img/paint.jpg"],
    creator: "@PAINTPOWER_NET",
  },
  alternates: {
    canonical: "https://paintpower.net",
  },
  generator: "paint.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
          {/* Favicon: served from /public/images/icon.ico */}
          <link rel="icon" href="/images/icon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Paint Power Painting & Remodeling",
              description: "Professional bathroom renovation and remodeling services in NYC & Hudson Valley - Licensed contractor since 2007",
              url: "https://paintpower.net",
              logo: "https://paintpower.net/Img/paint.jpg",
              image: "https://paintpower.net/Img/paint.jpg",
              telephone: "+1-800-351-4820",
              email: "info@paintpower.net",
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Woodland Way N",
                addressLocality: "Ellenville",
                addressRegion: "NY",
                postalCode: "12428",
                addressCountry: "US"
              },
              areaServed: [
                { "@type": "City", name: "Manhattan", containedInPlace: { "@type": "State", name: "New York" } },
                { "@type": "City", name: "Queens", containedInPlace: { "@type": "State", name: "New York" } },
                { "@type": "City", name: "Brooklyn", containedInPlace: { "@type": "State", name: "New York" } },
                { "@type": "City", name: "Bronx", containedInPlace: { "@type": "State", name: "New York" } },
                { "@type": "AdministrativeArea", name: "Westchester County" },
                { "@type": "AdministrativeArea", name: "Nassau County" },
                { "@type": "AdministrativeArea", name: "Suffolk County" },
                { "@type": "AdministrativeArea", name: "Orange County" },
                { "@type": "AdministrativeArea", name: "Ulster County" },
                { "@type": "AdministrativeArea", name: "Sullivan County" }
              ],
              serviceType: [
                "Bathroom Renovation",
                "Bathroom Remodeling",
                "Kitchen Remodeling",
                "Interior Painting",
                "Exterior Painting",
                "Home Improvement"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "100+",
                bestRating: "5",
                worstRating: "1"
              },
              foundingDate: "2007",
              slogan: "Professional Painting & Remodeling in New York",
              sameAs: [
                "https://www.facebook.com/PAINTPOWER",
                "https://www.instagram.com/paint_power/",
                "https://twitter.com/PAINTPOWER_NET",
                "https://www.linkedin.com/in/paintpower/",
                "https://www.pinterest.com/paintpower/",
                "https://www.houzz.com/browseReviews/paint_power/paint-power"
              ]
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
