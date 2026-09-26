import { useState, useEffect } from 'react'
import type { EstimateData, RenovationItems } from '@/lib/types'

const STORAGE_KEY = 'paintpower_bathroom_estimate'

interface EstimateState {
  estimateData: EstimateData
  selectedItems: RenovationItems
  timestamp: number
}

/**
 * Hook personalizado para persistencia de datos del estimador
 * Guarda automáticamente en localStorage y restaura al montar
 */
export function useEstimatePersistence(
  initialEstimateData: EstimateData,
  initialSelectedItems: RenovationItems
) {
  const [estimateData, setEstimateData] = useState<EstimateData>(initialEstimateData)
  const [selectedItems, setSelectedItems] = useState<RenovationItems>(initialSelectedItems)
  const [isHydrated, setIsHydrated] = useState(false)

  // Restaurar datos al montar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed: EstimateState = JSON.parse(saved)
        // Solo restaurar si fue guardado hace menos de 7 días
        if (Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000) {
          setEstimateData(parsed.estimateData)
          setSelectedItems(parsed.selectedItems)
        }
      }
    } catch (error) {
      console.warn('Error restaurando estimado guardado:', error)
    }
    setIsHydrated(true)
  }, [])

  // Guardar cambios en localStorage
  useEffect(() => {
    if (!isHydrated) return // No guardar hasta que esté hidratado

    try {
      const state: EstimateState = {
        estimateData,
        selectedItems,
        timestamp: Date.now(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.warn('Error guardando estimado:', error)
    }
  }, [estimateData, selectedItems, isHydrated])

  const clearEstimate = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setEstimateData(initialEstimateData)
      setSelectedItems(initialSelectedItems)
    } catch (error) {
      console.warn('Error limpiando estimado:', error)
    }
  }

  return {
    estimateData,
    setEstimateData,
    selectedItems,
    setSelectedItems,
    clearEstimate,
    isHydrated,
  }
}
