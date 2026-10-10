"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkBadge02Icon,
  Globe02Icon,
  Location01Icon,
  PackageIcon,
  StarIcon,
  Store01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const filters = [
  { id: "all", label: "All Stores" },
  { id: "local", label: "Local Stores" },
  { id: "international", label: "International" },
]

const stores = [
  { name: "Xerin Sports Hub", category: "Sports & Fashion", rating: "4.9", products: 240, sold: "48k", location: "Dar es Salaam", origin: "local", tint: "bg-violet-100 text-violet-600" },
  { name: "POISE Fragrances", category: "Fragrance & Beauty", rating: "4.8", products: 32, sold: "31k", location: "Arusha", origin: "local", tint: "bg-teal-100 text-teal-600" },
  { name: "Hisense Official", category: "Home Appliances", rating: "4.8", products: 124, sold: "29k", location: "Guangzhou, CN", origin: "international", tint: "bg-sky-100 text-sky-600" },
  { name: "Walkaroo TZ", category: "Footwear", rating: "4.7", products: 86, sold: "26k", location: "Mwanza", origin: "local", tint: "bg-orange-100 text-orange-600" },
  { name: "TrendWear London", category: "Fashion", rating: "4.6", products: 310, sold: "21k", location: "London, UK", origin: "international", tint: "bg-indigo-100 text-indigo-600" },
  { name: "Bumpie Baby Store", category: "Baby & Kids", rating: "4.7", products: 54, sold: "19k", location: "Dar es Salaam", origin: "local", tint: "bg-fuchsia-100 text-fuchsia-600" },
  { name: "HomeStyle Dubai", category: "Home & Living", rating: "4.5", products: 180, sold: "16k", location: "Dubai, AE", origin: "international", tint: "bg-amber-100 text-amber-600" },
  { name: "BookHouse", category: "Books & Stationery", rating: "4.6", products: 410, sold: "15k", location: "Dodoma", origin: "local", tint: "bg-indigo-100 text-indigo-600" },
  { name: "TechMart Nairobi", category: "Electronics", rating: "4.6", products: 205, sold: "14k", location: "Nairobi, KE", origin: "international", tint: "bg-cyan-100 text-cyan-600" },
  { name: "Fresh Basket", category: "Fresh Produce", rating: "4.6", products: 78, sold: "12k", location: "Mbeya", origin: "local", tint: "bg-emerald-100 text-emerald-600" },
  { name: "GadgetZone", category: "Electronics", rating: "4.5", products: 156, sold: "11k", location: "Dar es Salaam", origin: "local", tint: "bg-cyan-100 text-cyan-600" },
  { name: "Shenzhen Gadgets", category: "Electronics", rating: "4.4", products: 480, sold: "10k", location: "Shenzhen, CN", origin: "international", tint: "bg-slate-100 text-slate-600" },
  { name: "HomeNest Living", category: "Home & Living", rating: "4.5", products: 203, sold: "9k", location: "Tanga", origin: "local", tint: "bg-amber-100 text-amber-600" },
  { name: "BeautyBox", category: "Beauty & Care", rating: "4.4", products: 97, sold: "8k", location: "Morogoro", origin: "local", tint: "bg-rose-100 text-rose-600" },
]

const rankStyles = [
  "bg-amber-400 text-amber-950",
  "bg-zinc-300 text-zinc-700",
  "bg-amber-700 text-amber-50",
]

export default function StoresPage() {
  const [filter, setFilter] = useState("all")
  const filtered =
    filter === "all" ? stores : stores.filter((s) => s.origin === filter)

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Top Stores"
        description="Ranked by sales, ratings, and customer satisfaction — updated weekly."
      >
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "hover:border-primary hover:text-primary"
              )}
            >
              {f.id === "international" && (
                <HugeiconsIcon icon={Globe02Icon} className="size-3.5" />
              )}
              {f.id === "local" && (
                <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
              )}
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((store, i) => (
            <div
              key={store.name}
              className="group relative flex flex-col rounded-2xl border p-5 transition-all hover:border-primary hover:shadow-sm"
            >
              <span
                className={cn(
                  "absolute end-4 top-4 flex size-7 items-center justify-center rounded-full text-[11px] font-bold",
                  rankStyles[i] ?? "bg-neutral-100 text-muted-foreground"
                )}
              >
                {i + 1}
              </span>
              <span
                className={cn(
                  "flex size-14 items-center justify-center rounded-2xl",
                  store.tint
                )}
              >
                <HugeiconsIcon
                  icon={Store01Icon}
                  strokeWidth={1.8}
                  className="size-7"
                />
              </span>
              <div className="mt-3.5 flex items-center gap-1.5">
                <h2 className="truncate font-semibold group-hover:text-primary">
                  {store.name}
                </h2>
                <HugeiconsIcon
                  icon={CheckmarkBadge02Icon}
                  className="size-4 shrink-0 fill-primary text-primary-foreground"
                />
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {store.category}
              </p>
              {store.origin === "international" && (
                <span className="mt-2 flex w-fit items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-[9px] font-bold text-sky-700">
                  <HugeiconsIcon icon={Globe02Icon} className="size-3" />
                  INTERNATIONAL
                </span>
              )}
              <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <HugeiconsIcon
                    icon={StarIcon}
                    className="size-3.5 fill-amber-400 text-amber-400"
                  />
                  {store.rating}
                  <span className="font-normal text-muted-foreground">
                    · {store.sold} sold
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={PackageIcon} className="size-3.5" />
                  {store.products} products
                </span>
                <span className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                  {store.location}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                render={<Link href="/store" />}
              >
                Visit Store
              </Button>
            </div>
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
