"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import { Globe02Icon } from "@hugeicons/core-free-icons"

const countries = [
  "All",
  "Tanzania",
  "Kenya",
  "United Kingdom",
  "China",
  "United Arab Emirates",
  "United States",
  "India",
  "Türkiye",
]

const products = [
  { name: "Arsenal Home Jersey 2025/26", price: "TZS 45,000.00", deal: "-22%", image: "/products/arsenal-jersey.jpg", country: "United Kingdom", code: "GB", ships: "6–10 days" },
  { name: "Walkaroo WTG5805 Sport Sandals", price: "TZS 17,750.00", deal: "-2%", image: "/products/walkaroo-wtg5805.png", country: "India", code: "IN", ships: "7–12 days" },
  { name: "Ikigai — The Japanese Secret", price: "TZS 35,000.00", image: "/products/ikigai-book.jpg", country: "United States", code: "US", ships: "8–14 days" },
  { name: "Emerald by POISE — 50ml Perfume", price: "TZS 38,500.00", image: "/products/emerald-perfume.png", country: "Tanzania", code: "TZ", ships: "1–5 days" },
  { name: "Hisense 90cm Gas Cooker + Oven", price: "TZS 1,469,250.00", image: "/products/hisense-cooker.png", country: "China", code: "CN", ships: "7–14 days" },
  { name: "Bumpie Baby Diapers — Jumbo Pack", price: "TZS 12,500.00", image: "/products/bumpie-diaper.png", country: "Tanzania", code: "TZ", ships: "1–5 days" },
  { name: "Blush by POISE — Soft Fragrance", price: "TZS 38,500.00", deal: "-10%", image: "/products/blush-perfume.png", country: "United Arab Emirates", code: "AE", ships: "5–9 days" },
  { name: "Walkaroo WT5331 Casual Sandals", price: "TZS 16,000.00", image: "/products/walkaroo-wt5331.png", country: "Kenya", code: "KE", ships: "2–4 days" },
  { name: "Hisense 90cm Kitchen Chimney Hood", price: "TZS 385,000.00", image: "/products/hisense-hood.png", country: "China", code: "CN", ships: "7–14 days" },
  { name: "Walkaroo Classic Everyday Slides", price: "TZS 14,500.00", image: "/products/walkaroo-sandal.jpg", country: "Türkiye", code: "TR", ships: "7–12 days" },
  { name: "Arsenal Third Jersey 2025/26", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg", country: "United Kingdom", code: "GB", ships: "6–10 days" },
  { name: "POISE Fragrance Duo — Gift Set", price: "TZS 72,000.00", image: "/products/emerald-perfume.png", country: "United Arab Emirates", code: "AE", ships: "5–9 days" },
]

export default function WorldwidePage() {
  const [country, setCountry] = useState("All")
  const filtered =
    country === "All"
      ? products
      : products.filter((p) => p.country === country)

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Worldwide Shopping"
        description="Shop products from sellers around the world — delivered to your door in Tanzania."
      >
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setCountry(c)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                country === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "hover:border-primary hover:text-primary"
              )}
            >
              {c !== "All" && (
                <span className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-[7px] font-bold text-primary">
                  {products.find((p) => p.country === c)?.code}
                </span>
              )}
              {c === "All" && (
                <HugeiconsIcon icon={Globe02Icon} className="size-3.5" />
              )}
              {c === "All" ? "All Countries" : c}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          {filtered.length} products
          {country !== "All" && ` shipping from ${country}`}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((product) => (
            <Link key={product.name} href="/product" className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.deal && (
                  <span className="absolute start-1.5 top-1.5 rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    {product.deal}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/70 to-transparent px-2 pt-5 pb-1.5">
                  <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-white/90 text-[7px] font-bold text-zinc-900">
                    {product.code}
                  </span>
                  <span className="truncate text-[9px] font-semibold text-white">
                    {product.country}
                  </span>
                  <span className="ms-auto shrink-0 text-[9px] font-medium text-white/80">
                    {product.ships}
                  </span>
                </div>
              </div>
              <h3 className="mt-1.5 line-clamp-2 text-xs leading-snug font-medium">
                {product.name}
              </h3>
              <span className="mt-0.5 block text-xs font-semibold">
                {product.price}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-neutral-100 p-5">
          <HugeiconsIcon
            icon={Globe02Icon}
            strokeWidth={1.8}
            className="size-8 shrink-0 text-primary"
          />
          <p className="text-sm text-muted-foreground">
            Every worldwide order includes tracked delivery and Buyer Protection
            — your money is only released after your package arrives.
          </p>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
