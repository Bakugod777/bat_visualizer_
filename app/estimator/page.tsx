import { Header } from "@/components/header"
import { BathroomEstimator } from "@/components/bathroom-estimator"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Free Bathroom Renovation Cost Calculator | PaintPower Estimator Tool",
  description:
    "Calculate your bathroom renovation costs instantly with PaintPower's professional estimator. Get detailed pricing for fixtures, tiles, vanities, labor, and permits. Accurate estimates for all US regions including Midwest, South, Northeast, West Coast, and Major Metro areas.",
  keywords: [
    "bathroom cost calculator",
    "renovation estimator",
    "bathroom remodel cost",
    "free bathroom quote",
    "bathroom renovation pricing tool",
  ],
  openGraph: {
    title: "Free Bathroom Renovation Cost Calculator - PaintPower",
    description:
      "Get instant, accurate bathroom renovation estimates. Professional calculator for all US regions with detailed pricing breakdown.",
  },
}

export default function EstimatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Professional Bathroom Renovation Cost Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Calculate accurate bathroom remodeling costs with PaintPower's comprehensive estimator. Get detailed
              pricing for fixtures, materials, labor, permits, and regional adjustments across all US markets.
            </p>
          </div>
          <BathroomEstimator />
        </div>
      </div>
      <Footer />
    </main>
  )
}
