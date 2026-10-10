import Link from "next/link"
import { cn } from "cn"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Chat01Icon,
  CheckmarkBadge02Icon,
  Globe02Icon,
  Location01Icon,
  StarIcon,
  Store01Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const store = {
  name: "Xerin Sports Hub",
  cover: "/marketplace-hero.png",
  rating: "4.9",
  reviews: "3.2k",
  products: 240,
  followers: "12.4k",
  response: "98%",
  responseTime: "~1 hr",
  location: "Dar es Salaam, Tanzania",
  origin: "local" as "local" | "international",
  joined: "2021",
  description:
    "Official sports & lifestyle store — authentic jerseys, footwear, and gear delivered across Tanzania.",
}

const filters = [
  "All Products",
  "Jerseys",
  "Footwear",
  "Sportswear",
  "Accessories",
  "Clearance",
]

const storeProducts = [
  {
    name: "Arsenal Home Jersey 2025/26 — Player Edition",
    price: "TZS 45,000.00",
    was: "TZS 58,000.00",
    deal: "-22%",
    sold: "1.2k sold",
    image: "/products/arsenal-jersey.jpg",
  },
  {
    name: "Walkaroo WTG5805 Sport Sandals",
    price: "TZS 17,750.00",
    was: "TZS 18,105.00",
    deal: "-2%",
    sold: "1.5k sold",
    image: "/products/walkaroo-wtg5805.png",
  },
  {
    name: "Walkaroo WT5331 Casual Sandals",
    price: "TZS 16,000.00",
    sold: "980 sold",
    image: "/products/walkaroo-wt5331.png",
  },
  {
    name: "Walkaroo WTG5334 Comfort Sandals",
    price: "TZS 17,000.00",
    sold: "610 sold",
    image: "/products/walkaroo-wtg5334.png",
  },
  {
    name: "Walkaroo Classic Everyday Slides",
    price: "TZS 14,500.00",
    sold: "1.1k sold",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Ikigai — The Japanese Secret to a Long and Happy Life",
    price: "TZS 35,000.00",
    sold: "340 sold",
    image: "/products/ikigai-book.jpg",
  },
  {
    name: "Emerald by POISE — 50ml Alcohol-Free Perfume",
    price: "TZS 38,500.00",
    sold: "720 sold",
    image: "/products/emerald-perfume.png",
  },
  {
    name: "Blush by POISE — Soft & Romantic Fragrance",
    price: "TZS 38,500.00",
    was: "TZS 42,733.00",
    deal: "-10%",
    sold: "450 sold",
    image: "/products/blush-perfume.png",
  },
  {
    name: "Hisense 90cm Kitchen Chimney Hood",
    price: "TZS 385,000.00",
    sold: "210 sold",
    image: "/products/hisense-hood.png",
  },
  {
    name: "Bumpie Baby Diapers — Jumbo Pack",
    price: "TZS 12,500.00",
    sold: "890 sold",
    image: "/products/bumpie-diaper.png",
  },
  {
    name: "Arsenal Away Jersey 2025/26",
    price: "TZS 45,000.00",
    sold: "530 sold",
    image: "/products/arsenal-jersey.jpg",
  },
  {
    name: "Walkaroo WTG5805 — Black Edition",
    price: "TZS 18,500.00",
    sold: "410 sold",
    image: "/products/walkaroo-wtg5805.png",
  },
]

const stats = [
  { label: "Products", value: String(store.products) },
  { label: "Followers", value: store.followers },
  { label: "Response Rate", value: store.response },
  { label: "Joined", value: store.joined },
]

export default function StorePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-40 overflow-hidden sm:h-52">
          <img
            src={store.cover}
            alt={`${store.name} cover`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/30 to-transparent" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="relative -mt-12 flex flex-col gap-4 rounded-2xl border bg-background p-5 shadow-sm sm:-mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:size-20">
                <HugeiconsIcon
                  icon={Store01Icon}
                  strokeWidth={1.6}
                  className="size-8 sm:size-10"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {store.name}
                  </h1>
                  <HugeiconsIcon
                    icon={CheckmarkBadge02Icon}
                    className="size-5 shrink-0 fill-primary text-primary-foreground"
                  />
                  <span
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide",
                      store.origin === "local"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-sky-100 text-sky-700"
                    )}
                  >
                    <HugeiconsIcon
                      icon={
                        store.origin === "local" ? Location01Icon : Globe02Icon
                      }
                      className="size-3"
                    />
                    {store.origin === "local"
                      ? "LOCAL STORE"
                      : "INTERNATIONAL STORE"}
                  </span>
                </div>
                <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
                  {store.description}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 font-medium text-foreground">
                    <HugeiconsIcon
                      icon={StarIcon}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                    {store.rating}
                    <span className="font-normal text-muted-foreground">
                      ({store.reviews} reviews)
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                    {store.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Chat01Icon} className="size-3.5" />
                    Responds {store.responseTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5">
              <Button className="flex-1 gap-2 sm:flex-none">
                <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={2} />
                Follow
              </Button>
              <Button variant="outline" className="flex-1 gap-2 sm:flex-none">
                <HugeiconsIcon icon={Chat01Icon} strokeWidth={2} />
                Chat
              </Button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-4 text-center">
                <p className="text-lg font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Store Products
            </h2>
            <span className="text-sm text-muted-foreground">
              {store.products} items
            </span>
          </div>
          <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:border-primary hover:text-primary"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 pb-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {storeProducts.map((product) => (
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
                </div>
                <h3 className="mt-1.5 line-clamp-2 text-xs leading-snug font-medium">
                  {product.name}
                </h3>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="text-xs font-semibold">{product.price}</span>
                  {product.was && (
                    <span className="text-[10px] text-muted-foreground line-through">
                      {product.was}
                    </span>
                  )}
                </div>
                <span className="mt-0.5 block text-[10px] text-muted-foreground">
                  {product.sold}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
