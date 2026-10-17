"use client"

import { useState } from "react"
import { ArrowUpRight, User, DoorOpen, Gauge, Fuel } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cars, fleetFilters } from "@/data"
import { formatEgp } from "@/lib/currency"
import type { CarCategory } from "@/types"

/**
 * Fleet Showcase Component
 * Single Responsibility: Displays the luxury car fleet catalog with category filtering and specs.
 */
export function Fleet() {
  const [filter, setFilter] = useState<"all" | CarCategory>("all")
  const visibleCars = filter === "all" ? cars : cars.filter((car) => car.category === filter)

  return (
    <section id="fleet" className="w-full bg-muted pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header: image card + title */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Left: preview card */}
          <div className="relative rounded-[2rem] overflow-hidden h-56 sm:h-64 md:h-72 w-full">
            <Image src="/hero.jpg" alt="CAiR Turbo luxury car rental in Cairo" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
              <div className="self-end bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                <span className="text-white font-bold tracking-widest text-xs">CAiR TURBO</span>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10">
                  LUXURY FLEET IN CAIRO & GIZA
                </span>
                <br />
                <span className="inline-block bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10">
                  FULL INSURANCE INCLUDED
                </span>
              </div>
            </div>
          </div>

          {/* Right: title + description */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight uppercase tracking-tight">
              OUR LUXURY FLEET
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              Browse our complete collection of premium vehicles — from powerful SUVs and elegant
              sedans to exotic supercars, all insured and available across Cairo.
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter fleet by category">
          {fleetFilters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                filter === value
                  ? "bg-foreground text-background"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {visibleCars.map((car) => (
            <div
              key={car.name}
              className="group bg-card rounded-[2rem] p-5 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:bg-muted"
            >
              {/* Image — full-width inside the card, rounded to match the card */}
              <div className="relative w-full h-44 rounded-[1.4rem] overflow-hidden mb-4 flex-shrink-0 bg-muted">
                <Image
                  src={car.image}
                  alt={`${car.name} available for rent with CAiR Turbo`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                {car.badge && (
                  <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {car.badge}
                  </span>
                )}
              </div>

              <div className="text-center mb-4">
                <h3 className="text-foreground font-semibold text-sm uppercase tracking-wide">
                  {car.name}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <User size={12} aria-hidden /> {car.seats} Seats
                </div>
                <div className="flex items-center gap-1">
                  <DoorOpen size={12} aria-hidden /> {car.doors} Doors
                </div>
                <div className="flex items-center gap-1">
                  <Gauge size={12} aria-hidden /> {car.topSpeed}
                </div>
                <div className="flex items-center gap-1">
                  <Fuel size={12} aria-hidden /> {car.fuel}
                </div>
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div>
                  <div>
                    <span className="text-foreground font-extrabold text-lg">{formatEgp(car.price)}</span>
                    <span className="text-foreground text-xs font-medium"> / day</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] font-medium mt-0.5">
                    ${car.price} USD / day
                  </p>
                </div>
                <Link
                  href="#contact"
                  aria-label={`Get a quote for the ${car.name}`}
                  className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center cursor-pointer hover:bg-foreground/80 transition group/link flex-shrink-0"
                >
                  <ArrowUpRight size={16} className="text-background group-hover/link:scale-110 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center md:justify-end">
          <Link href="#contact" className="bg-foreground text-background px-8 py-3.5 rounded-full font-bold text-sm hover:bg-foreground/80 transition">
            Book Your Car Now
          </Link>
        </div>

      </div>
    </section>
  )
}

// Backwards compatibility alias
export { Fleet as Pricing }
