/**
 * Central Data Store
 * Aggregates all domain data modules while maintaining modular separation of concerns.
 */

export * from "./business"
export * from "./fleet"
export * from "./services"
export * from "./reviews"
export * from "./faqs"
export * from "./navigation"

// Re-export currency helpers for backwards compatibility
export { formatEgp, egpPerUsd } from "@/lib/currency"
