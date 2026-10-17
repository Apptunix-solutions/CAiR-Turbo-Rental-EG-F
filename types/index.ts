import type { LucideIcon } from "lucide-react"

export type CarCategory = "sedan" | "suv" | "jeep" | "economy" | "exotic"

export type Car = {
  name: string
  image: string
  category: CarCategory
  badge?: string
  seats: number
  doors: number
  topSpeed: string
  fuel: "Petrol" | "Diesel"
  price: number
  featured: boolean
}

export type Review = {
  name: string
  role: string
  stars: number
  text: string
  active?: boolean
  car?: string
  location?: string
}

export type FAQ = {
  num: string
  q: string
  bold: string
  answer: string
}

export type NavLink = {
  label: string
  href: string
}

export type Service = {
  icon: LucideIcon
  title: string
  description: string
}
