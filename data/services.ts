import type { Service } from "@/types"
import { CalendarDays, CarFront, ConciergeBell, Crown, Gem, Plane } from "lucide-react"

/**
 * Services offered by CAiR Turbo.
 * Source: turbocar.autos "Our Services"
 */
export const services: Service[] = [
  {
    icon: CarFront,
    title: "Self-Drive Rental",
    description:
      "Take the wheel of your dream car. Full insurance coverage and 24/7 roadside assistance included.",
  },
  {
    icon: ConciergeBell,
    title: "Chauffeur Service",
    description:
      "Sit back and relax with our professional, multilingual chauffeurs for a first-class experience.",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "Seamless VIP airport pickups and drop-offs at Cairo International and all Egyptian airports.",
  },
  {
    icon: Crown,
    title: "VIP Transfer",
    description:
      "Premium point-to-point transfers for business meetings, events, and exclusive occasions.",
  },
  {
    icon: Gem,
    title: "Wedding Cars",
    description:
      "Make your special day unforgettable with our stunning luxury wedding car fleet.",
  },
  {
    icon: CalendarDays,
    title: "Long-Term Rental",
    description:
      "Extended rental packages with competitive rates for business stays and extended vacations.",
  },
]
