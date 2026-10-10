"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "cn"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Chat01Icon,
  CheckmarkBadge02Icon,
  FavouriteIcon,
  Location01Icon,
  MinusIcon,
  PlusSignIcon,
  ReturnRequestIcon,
  Share01Icon,
  ShieldCheckIcon,
  ShoppingCart01Icon,
  StarHalfIcon,
  StarIcon,
  Store01Icon,
  TruckDeliveryIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const product = {
  name: "Arsenal Home Jersey 2025/26 — Player Edition",
  price: "TZS 45,000.00",
  was: "TZS 58,000.00",
  deal: "-22%",
  rating: 4.8,
  reviews: 214,
  sold: "1.8k sold",
  stock: 12,
  images: [
    "/products/arsenal-jersey.jpg",
    "/products/arsenal-jersey.jpg",
    "/products/arsenal-jersey.jpg",
    "/products/arsenal-jersey.jpg",
  ],
}

const sizes = ["S", "M", "L", "XL", "2XL"]

const perks = [
  {
    icon: TruckDeliveryIcon,
    title: "Fast Delivery",
    desc: "Free above TZS 100k",
  },
  {
    icon: ReturnRequestIcon,
    title: "7-Day Returns",
    desc: "Easy & free returns",
  },
  {
    icon: ShieldCheckIcon,
    title: "Buyer Protection",
    desc: "Full refund guarantee",
  },
]

const specs = [
  ["Brand", "Arsenal FC"],
  ["Season", "2025/26"],
  ["Material", "100% Recycled Polyester"],
  ["Fit", "Player Edition — Slim Fit"],
  ["Technology", "AEROREADY moisture-wicking"],
  ["Care", "Machine wash cold"],
]

const reviews = [
  {
    name: "Baraka M.",
    rating: 5,
    date: "2 days ago",
    text: "Jersey ni original kabisa, material ni nzuri sana. Imefikia ndani ya siku 2 — nimefurahi sana na huduma.",
  },
  {
    name: "Neema K.",
    rating: 5,
    date: "1 week ago",
    text: "Quality is excellent, exactly as pictured. Sizing runs a bit small so order one size up.",
  },
  {
    name: "Juma S.",
    rating: 4,
    date: "2 weeks ago",
    text: "Nzuri sana kwa bei hiyo. Delivery ilichelewa kidogo lakini bidhaa yenyewe ni bora.",
  },
]

const related = [
  {
    name: "Walkaroo WTG5805 Sport Sandals",
    price: "TZS 17,750.00",
    image: "/products/walkaroo-wtg5805.png",
  },
  {
    name: "Walkaroo WT5331 Casual Sandals",
    price: "TZS 16,000.00",
    image: "/products/walkaroo-wt5331.png",
  },
  {
    name: "Walkaroo WTG5334 Comfort Sandals",
    price: "TZS 17,000.00",
    image: "/products/walkaroo-wtg5334.png",
  },
  {
    name: "Walkaroo Classic Slides",
    price: "TZS 14,500.00",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Ikigai — The Japanese Secret",
    price: "TZS 35,000.00",
    image: "/products/ikigai-book.jpg",
  },
  {
    name: "Emerald by POISE — 50ml",
    price: "TZS 38,500.00",
    image: "/products/emerald-perfume.png",
  },
  {
    name: "Blush by POISE — Soft Fragrance",
    price: "TZS 38,500.00",
    image: "/products/blush-perfume.png",
  },
  {
    name: "Hisense 90cm Kitchen Hood",
    price: "TZS 385,000.00",
    image: "/products/hisense-hood.png",
  },
  {
    name: "Hisense 90cm Gas Cooker",
    price: "TZS 1,469,250.00",
    image: "/products/hisense-cooker.png",
  },
  {
    name: "Bumpie Baby Diapers — Jumbo",
    price: "TZS 12,500.00",
    image: "/products/bumpie-diaper.png",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) =>
        rating >= i ? (
          <HugeiconsIcon
            key={i}
            icon={StarIcon}
            className="size-4 fill-amber-400 text-amber-400"
          />
        ) : rating > i - 1 ? (
          <HugeiconsIcon
            key={i}
            icon={StarHalfIcon}
            className="size-4 fill-amber-400 text-amber-400"
          />
        ) : (
          <HugeiconsIcon
            key={i}
            icon={StarIcon}
            className="size-4 text-neutral-300"
          />
        )
      )}
    </span>
  )
}

export default function ProductPage() {
  const [image, setImage] = useState(0)
  const [size, setSize] = useState("M")
  const [qty, setQty] = useState(1)

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            <Link href="#" className="hover:text-foreground">
              Fashion
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            <Link href="#" className="hover:text-foreground">
              Jerseys
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            <span className="truncate font-medium text-foreground">
              {product.name}
            </span>
          </nav>
          <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={product.images[image]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute start-3 top-3 rounded bg-primary px-1.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                  {product.deal}
                </span>
                <div className="absolute end-3 top-3 flex flex-col gap-2">
                  <button
                    aria-label="Add to wishlist"
                    className="flex size-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-sm transition-colors hover:text-primary"
                  >
                    <HugeiconsIcon icon={FavouriteIcon} className="size-4.5" />
                  </button>
                  <button
                    aria-label="Share product"
                    className="flex size-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-sm transition-colors hover:text-primary"
                  >
                    <HugeiconsIcon icon={Share01Icon} className="size-4.5" />
                  </button>
                </div>
              </div>
              <div className="mt-3 flex gap-3">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setImage(i)}
                    className={cn(
                      "relative size-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-border transition-all",
                      image === i && "ring-2 ring-primary ring-offset-2"
                    )}
                  >
                    <img
                      src={src}
                      alt={`${product.name} view ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-primary uppercase">
                  Official Store
                </span>
                <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-emerald-700 uppercase">
                  In Stock
                </span>
              </div>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                {product.name}
              </h1>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                <span className="flex items-center gap-1.5">
                  <Stars rating={product.rating} />
                  <span className="font-semibold">{product.rating}</span>
                </span>
                <a href="#reviews" className="text-primary hover:underline">
                  {product.reviews} reviews
                </a>
                <span className="text-border">|</span>
                <span className="text-muted-foreground">{product.sold}</span>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold tracking-tight">
                  {product.price}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {product.was}
                </span>
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-semibold text-primary">
                  {product.deal}
                </span>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold">
                  Size: <span className="font-normal">{size}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={cn(
                        "flex h-10 min-w-12 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-all hover:border-primary",
                        size === s
                          ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                          : "border-border"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <p className="text-sm font-semibold">Quantity:</p>
                <div className="flex items-center rounded-lg border">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
                    disabled={qty <= 1}
                    aria-label="Decrease quantity"
                  >
                    <HugeiconsIcon icon={MinusIcon} className="size-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
                    className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
                    disabled={qty >= product.stock}
                    aria-label="Increase quantity"
                  >
                    <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
                  </button>
                </div>
                <span className="text-xs text-muted-foreground">
                  {product.stock} available
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Button size="lg" className="flex-1 gap-2">
                  <HugeiconsIcon icon={ShoppingCart01Icon} strokeWidth={2} />
                  Add to Cart
                </Button>
                <Button size="lg" variant="secondary" className="flex-1">
                  Buy Now
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border bg-border">
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="flex flex-col items-center gap-1.5 bg-background p-3.5 text-center"
                  >
                    <HugeiconsIcon
                      icon={perk.icon}
                      strokeWidth={1.8}
                      className="size-5 text-primary"
                    />
                    <p className="text-[11px] leading-tight font-semibold">
                      {perk.title}
                    </p>
                    <p className="text-[10px] leading-tight text-muted-foreground">
                      {perk.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HugeiconsIcon icon={Store01Icon} strokeWidth={1.8} className="size-7" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold">Xerin Sports Hub</h3>
                  <HugeiconsIcon
                    icon={CheckmarkBadge02Icon}
                    className="size-4 fill-primary text-primary-foreground"
                  />
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={StarIcon}
                      className="size-3.5 fill-amber-400 text-amber-400"
                    />
                    4.9 (3.2k)
                  </span>
                  <span>240 products</span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                    Dar es Salaam
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2.5 sm:w-auto">
              <Button
                variant="outline"
                className="flex-1 gap-2 sm:flex-none"
                render={<Link href="/store" />}
              >
                <HugeiconsIcon icon={Store01Icon} strokeWidth={2} />
                Visit Store
              </Button>
              <Button variant="secondary" className="flex-1 gap-2 sm:flex-none">
                <HugeiconsIcon icon={Chat01Icon} strokeWidth={2} />
                Chat
              </Button>
            </div>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold tracking-tight">
                Product Details
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The official Arsenal FC home jersey for the 2025/26 season.
                Player edition with an athletic slim fit, crafted from
                lightweight recycled polyester with AEROREADY technology that
                keeps you dry on and off the pitch. Features the embroidered
                club crest and iconic red body with white sleeves.
              </p>
              <dl className="mt-4 divide-y rounded-xl border text-sm">
                {specs.map(([key, value]) => (
                  <div key={key} className="grid grid-cols-3 gap-2 px-4 py-2.5">
                    <dt className="text-muted-foreground">{key}</dt>
                    <dd className="col-span-2 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div id="reviews">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold tracking-tight">
                  Customer Reviews
                </h2>
                <span className="flex items-center gap-1.5 text-sm">
                  <Stars rating={product.rating} />
                  <span className="font-semibold">{product.rating}/5</span>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                {reviews.map((review) => (
                  <div key={review.name} className="rounded-xl border p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {review.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{review.name}</p>
                          <Stars rating={review.rating} />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.date}
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <section className="mx-auto w-full max-w-7xl px-4 pb-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              You May Also Like
            </h2>
            <Link
              href="/"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              See All
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                className="size-4"
              />
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {related.map((item) => (
              <Link key={item.name} href="/product" className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-1.5 line-clamp-2 text-xs leading-snug font-medium">
                  {item.name}
                </h3>
                <span className="mt-0.5 block text-xs font-semibold">
                  {item.price}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
