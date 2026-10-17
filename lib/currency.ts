/**
 * Currency Calculation and Formatting
 * Single Responsibility: Converts USD rates from turbocar.autos into Egyptian Pounds (EGP).
 */

/**
 * Verified exchange rate agreed with the business.
 * Displayed EGP amounts are rounded to the nearest 50.
 */
export const egpPerUsd = 48.5

/**
 * Formats a USD price into formatted EGP currency string rounded to the nearest 50.
 */
export function formatEgp(priceUsd: number): string {
  const egp = Math.round((priceUsd * egpPerUsd) / 50) * 50
  return `EGP ${egp.toLocaleString("en-US")}`
}
