/**
 * Etiquetas y constantes para el estimador de Paint Power
 */

export const REGIONAL_LABELS: Record<string, string> = {
  "nyc-manhattan": "Manhattan, NYC",
  "brooklyn": "Brooklyn, NYC",
  "queens": "Queens, NYC",
  "bronx": "Bronx, NYC",
  "westchester": "Westchester County",
  "hudson-valley": "Hudson Valley",
  "upstate": "Upstate NY",
  "midwest": "Midwest (Base)",
  "south": "South",
  "west": "West Coast",
}

export const REGIONAL_MULTIPLIERS: Record<string, number> = {
  "nyc-manhattan": 1.4,
  "brooklyn": 1.35,
  "queens": 1.3,
  "bronx": 1.25,
  "westchester": 1.2,
  "hudson-valley": 1.15,
  "upstate": 1.05,
  "midwest": 0.9,
  "south": 0.85,
  "west": 0.95,
}

export const REGIONS = [
  { id: "nyc-manhattan", label: "Manhattan, NYC", note: "+40% premium pricing" },
  { id: "brooklyn", label: "Brooklyn, NYC", note: "+35% premium pricing" },
  { id: "queens", label: "Queens, NYC", note: "+30% premium pricing" },
  { id: "bronx", label: "Bronx, NYC", note: "+25% premium pricing" },
  { id: "westchester", label: "Westchester County", note: "+20% premium pricing" },
  { id: "hudson-valley", label: "Hudson Valley", note: "+15% premium pricing" },
  { id: "upstate", label: "Upstate NY", note: "+5% premium pricing" },
  { id: "midwest", label: "Midwest (Base Pricing)", note: "Reference pricing" },
  { id: "south", label: "South", note: "-15% vs base pricing" },
  { id: "west", label: "West Coast", note: "-5% vs base pricing" },
] as const

export const BATHROOM_TYPES = [
  { id: "half", label: "Half Bathroom", description: "Toilet & Sink only" },
  { id: "three-quarter", label: "¾ Bathroom", description: "Toilet, Sink & Shower" },
  { id: "full", label: "Full Bathroom", description: "Toilet, Sink, Shower & Tub" },
  { id: "master", label: "Master Suite", description: "Multiple fixtures & luxury options" },
] as const

export const FIXTURE_TIERS = [
  { id: "budget", label: "Budget", description: "Cost-effective, reliable", color: "bg-blue-100 text-blue-900" },
  { id: "standard", label: "Standard", description: "Good quality, popular choices", color: "bg-green-100 text-green-900" },
  { id: "premium", label: "Premium", description: "High-end, luxury finishes", color: "bg-purple-100 text-purple-900" },
] as const

export const FLOORING_OPTIONS = [
  { id: "vinyl", label: "Luxury Vinyl", price: 4, description: "Affordable, water-resistant" },
  { id: "ceramic", label: "Ceramic Tile", price: 12, description: "Durable, easy to clean" },
  { id: "porcelain", label: "Porcelain Tile", price: 16, description: "Premium durability" },
  { id: "natural-stone", label: "Natural Stone", price: 30, description: "Luxury appearance" },
] as const

export const WALL_OPTIONS = [
  { id: "ceramic", label: "Ceramic Tile", price: 12, description: "Classic and affordable" },
  { id: "porcelain", label: "Porcelain Tile", price: 16, description: "More durable" },
  { id: "glass", label: "Glass Tile", price: 25, description: "Modern, luxurious" },
  { id: "natural-stone", label: "Natural Stone", price: 35, description: "Premium look" },
  { id: "none", label: "Paint Only", price: 0, description: "Budget-friendly option" },
] as const

export const PAINT_FINISHES = [
  { id: "budget", label: "Standard Paint", cost: 35 },
  { id: "standard", label: "Quality Paint", cost: 50 },
  { id: "premium", label: "Premium/Mold-Resistant", cost: 75 },
] as const

export const SHOWER_TYPES = [
  { id: "none", label: "No Shower", cost: 0 },
  { id: "standard", label: "Standard Shower Stall", cost: 1200 },
  { id: "tile", label: "Tile Shower", cost: 3800 },
  { id: "premium", label: "Premium Frameless Glass", cost: 8500 },
] as const

export const BATHTUB_TYPES = [
  { id: "alcove", label: "Alcove Tub", cost: 800 },
  { id: "drop-in", label: "Drop-in Tub", cost: 1500 },
  { id: "freestanding", label: "Freestanding Tub", cost: 2800 },
  { id: "walk-in", label: "Walk-in Tub", cost: 5500 },
] as const

/**
 * Descripciones de cada paso del estimador
 */
export const STEP_DESCRIPTIONS: Record<string, string> = {
  selection: "Choose which areas of your bathroom you want to renovate",
  dimensions: "Tell us the size and type of your bathroom",
  fixtures: "Select your toilet, sink, shower, and bathtub options",
  flooring: "Choose your flooring material and options",
  walls: "Pick your wall tiles and finishes",
  plumbing: "Select any plumbing upgrades needed",
  lighting: "Choose your lighting fixtures",
  ventilation: "Select ventilation options",
  storage: "Choose storage and organizational features",
  accessibility: "Add accessibility features if needed",
  labor: "Tell us about your project timeline and location",
}

/**
 * Textos de validación y feedback
 */
export const FEEDBACK_MESSAGES = {
  selections: {
    success: "Great choices! You've selected {{count}} renovation items.",
    empty: "Please select at least one area to renovate.",
  },
  estimate: {
    calculating: "Calculating your estimate...",
    ready: "Your detailed estimate is ready!",
  },
  contact: {
    success: "Thanks! We'll be in touch within 24 hours.",
    error: "Something went wrong. Please try again.",
  },
} as const

/**
 * URLs y enlaces de Paint Power
 */
export const PAINTPOWER_LINKS = {
  website: "https://paintpower.net",
  phone: "+1-555-PAINT-01", // Reemplazar con número real
  email: "estimates@paintpower.net",
  instagram: "https://instagram.com/paintpowernyc",
  facebook: "https://facebook.com/paintpowernyc",
  bbb: "https://www.bbb.org/", // Reemplazar con perfil real
} as const

/**
 * Tooltip help texts
 */
export const HELP_TEXTS: Record<string, string> = {
  demolition: "Includes removal of old fixtures and materials before installation",
  waterproofing: "Prevents water damage and mold growth - recommended for all bathrooms",
  heated_floor: "Radiant floor heating for comfort during cold months",
  accessibility: "Universal design features for aging in place or accessibility needs",
  regional_pricing: "Costs vary by region. We've adjusted based on your location and labor rates.",
} as const
