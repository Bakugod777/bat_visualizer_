"use client"

import { Card } from "@/components/ui/card"
import { DollarSign, TrendingUp, MapPin } from "lucide-react"
import { calculateEstimate } from "@/lib/calculate-estimate"
import type { EstimateData, RenovationItems } from "@/lib/types"
import { REGIONAL_LABELS } from "@/lib/constants" // Necesario crear

interface EstimatePreviewProps {
  estimateData: EstimateData
  selectedItems: RenovationItems
  className?: string
}

/**
 * Componente que muestra el rango de precios actual del estimado
 * Se actualiza en tiempo real mientras el usuario navega
 */
export function EstimatePreview({
  estimateData,
  selectedItems,
  className = "",
}: EstimatePreviewProps) {
  // No calcular si no hay nada seleccionado
  const hasSelection = Object.values(selectedItems).some(Boolean)
  if (!hasSelection) return null

  const estimate = calculateEstimate(estimateData)
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  })

  const regionLabel = REGIONAL_LABELS[estimateData.labor?.region || "midwest"] || "Your Region"
  const regionMultiplier = (estimateData.labor?.region || "midwest") // Se obtendría del resultado mejorado

  return (
    <Card className={`sticky top-4 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 ${className}`}>
      <div className="p-4 md:p-6">
        {/* Título */}
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">Current Estimate</h3>
        </div>

        {/* Rango de precios */}
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-2">Estimated Cost Range</div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {formatter.format(estimate.range.low)} – {formatter.format(estimate.range.high)}
            </div>
            <div className="text-xs text-muted-foreground">
              Based on your selections and current market prices
            </div>
          </div>
        </div>

        {/* Región */}
        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg mb-4">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{regionLabel}</span>
          <span className="text-xs text-muted-foreground ml-auto">
            ×{regionMultiplier.toFixed(2)}
          </span>
        </div>

        {/* Desglose rápido */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fixtures</span>
            <span className="font-medium">{formatter.format(estimate.breakdown.fixtures)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Materials & Labor</span>
            <span className="font-medium">{formatter.format(estimate.breakdown.materials)}</span>
          </div>
        </div>

        {/* Nota de descargo */}
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg">
          <div className="flex gap-2">
            <TrendingUp className="h-4 w-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-200">
              This is a preliminary estimate. Final pricing will be determined after an on-site consultation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full mt-4 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          Get Detailed Estimate
        </button>
      </div>
    </Card>
  )
}
