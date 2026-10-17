"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons"
import { business } from "@/data"

export function Hero() {
  const [openDropdown, setOpenDropdown] = useState<"location" | "pickup" | "return" | null>(null)
  const [location, setLocation] = useState<string>("")
  const [pickupDate, setPickupDate] = useState<string>("")
  const [returnDate, setReturnDate] = useState<string>("")

  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col justify-end pb-24 pt-28 px-4 sm:px-6 lg:px-8 bg-inverse">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Luxury car available for rent with CAiR Turbo in Cairo, Egypt"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse/90 via-inverse/10 to-transparent" />
      </div>

      {/* Stats + social icons — right rail (clear of the headline text) */}
      <div className="absolute top-32 right-6 sm:right-10 z-10 text-right space-y-3 hidden sm:block">
        <div>
          <p className="text-white font-extrabold text-sm uppercase tracking-wider">20+ LUXURY CARS</p>
          <p className="text-white/60 text-xs uppercase tracking-wider">MERCEDES · ROLLS ROYCE · FERRARI</p>
        </div>
        <div>
          <p className="text-white font-extrabold text-sm uppercase tracking-wider">24/7 SUPPORT</p>
          <p className="text-white/60 text-xs uppercase tracking-wider">AVAILABLE 365 DAYS A YEAR</p>
        </div>
        <div>
          <p className="text-white font-extrabold text-sm uppercase tracking-wider">100% INSURED</p>
          <p className="text-white/60 text-xs uppercase tracking-wider">FULL COVERAGE INCLUDED</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 justify-end pt-4">
          {[
            { icon: <FacebookIcon />, label: "Facebook", href: business.facebook },
            { icon: <InstagramIcon />, label: "Instagram", href: business.instagram },
            { icon: <WhatsAppIcon />, label: "WhatsApp", href: business.whatsapp },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition text-white/70 hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Headline */}
        <div className="max-w-2xl mb-8">
          <p className="text-gold font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-4">
            Premium Car Rental in Egypt
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight uppercase">
            Drive Luxury. <span className="text-gold">Explore Egypt.</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base mt-6 leading-relaxed">
            Experience Cairo&apos;s finest luxury car fleet — from the iconic G-Wagon to Rolls Royce
            Cullinan. Professional service, comprehensive insurance, and worldwide background
            verification.
          </p>
        </div>

        {/* Booking Form — always dark pill */}
        <div className="bg-inverse-raised p-2 rounded-full flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full shadow-2xl mt-12">

          <div className="flex-1 min-w-0">
            <Select
              value={location}
              onValueChange={(val) => {
                setLocation(val)
                setOpenDropdown(null)
              }}
              open={openDropdown === "location"}
              onOpenChange={(isOpen) => setOpenDropdown(isOpen ? "location" : null)}
            >
              <SelectTrigger aria-label="Pick-up location" className="w-full bg-inverse text-inverse-foreground/60 border-0 rounded-full px-6 py-7 shadow-none hover:bg-inverse transition text-sm font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent position="popper" align="start">
                <SelectItem value="cairo">Cairo</SelectItem>
                <SelectItem value="giza">Giza</SelectItem>
                <SelectItem value="airport">Cairo International Airport</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 min-w-0">
            <Select
              value={pickupDate}
              onValueChange={(val) => {
                setPickupDate(val)
                setOpenDropdown(null)
              }}
              open={openDropdown === "pickup"}
              onOpenChange={(isOpen) => setOpenDropdown(isOpen ? "pickup" : null)}
            >
              <SelectTrigger aria-label="Pick-up date" className="w-full bg-inverse text-inverse-foreground/60 border-0 rounded-full px-6 py-7 shadow-none hover:bg-inverse transition text-sm font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Pick-up Date" />
              </SelectTrigger>
              <SelectContent position="popper" align="start">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 min-w-0">
            <Select
              value={returnDate}
              onValueChange={(val) => {
                setReturnDate(val)
                setOpenDropdown(null)
              }}
              open={openDropdown === "return"}
              onOpenChange={(isOpen) => setOpenDropdown(isOpen ? "return" : null)}
            >
              <SelectTrigger aria-label="Return date" className="w-full bg-inverse text-inverse-foreground/60 border-0 rounded-full px-6 py-7 shadow-none hover:bg-inverse transition text-sm font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Return Date" />
              </SelectTrigger>
              <SelectContent position="popper" align="start">
                <SelectItem value="1-day">1 Day</SelectItem>
                <SelectItem value="3-days">3 Days</SelectItem>
                <SelectItem value="1-week">1 Week</SelectItem>
                <SelectItem value="1-month">1 Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Link
            href="#contact"
            className="bg-gold text-on-gold rounded-full px-8 py-4 flex items-center justify-center gap-3 hover:bg-gold-light hover:shadow-gold transition-all flex-shrink-0 font-extrabold text-sm"
          >
            Book Now
            <div className="bg-on-gold/15 w-6 h-6 rounded-full flex items-center justify-center">
              <ArrowUpRight size={12} className="text-on-gold" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}
