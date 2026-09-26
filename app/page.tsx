import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Gallery } from "@/components/gallery"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Paint Power - NYC Bathroom Renovation Cost Estimator | Free Quote Manhattan Queens Brooklyn",
  description:
    "Transform your bathroom with Paint Power's professional renovation services in NYC & Hudson Valley. Get instant cost estimates for fixtures, materials, and labor. Licensed NYC DCA contractor serving Manhattan, Queens, Brooklyn, Bronx, Westchester since 2007. BBB A+ rated.",
  openGraph: {
    title: "Paint Power - NYC Bathroom Renovation Services | Licensed Since 2007",
    description: "Professional bathroom remodeling with instant cost estimates. Serving Manhattan, Queens, Brooklyn, Bronx, Westchester & Hudson Valley.",
    url: "https://paintpower.net",
    siteName: "Paint Power",
    images: [
      {
        url: "https://paintpower.net/Img/paint.jpg",
        width: 1200,
        height: 630,
        alt: "Paint Power - NYC Licensed Bathroom Renovation Contractor"
      }
    ],
    type: "website",
    locale: "en_US"
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Gallery />
      <Footer />
    </main>
  )
}
