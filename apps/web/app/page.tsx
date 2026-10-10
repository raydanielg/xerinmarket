import Link from "next/link"
import { cn } from "cn"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Baby01Icon,
  BadgeCheckIcon,
  Book01Icon,
  BrushIcon,
  CustomerSupportIcon,
  Dumbbell01Icon,
  Facebook01Icon,
  Globe02Icon,
  Home01Icon,
  InstagramIcon,
  NewTwitterIcon,
  PackageIcon,
  PerfumeIcon,
  ShieldCheckIcon,
  Shirt01Icon,
  SmartPhone01Icon,
  SneakerIcon,
  TiktokIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const products = [
  {
    name: "Arsenal Home Jersey 2025/26",
    price: "TZS 45,000.00",
    image: "/products/arsenal-jersey.jpg",
  },
  {
    name: "Walkaroo WTG5805",
    price: "TZS 17,750.00",
    was: "TZS 18,105.00",
    deal: "-2%",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Walkaroo WT5331",
    price: "TZS 16,000.00",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Walkaroo WTG5334",
    price: "TZS 17,000.00",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Ikigai — The Japanese Secret to a Long and Happy Life",
    price: "TZS 35,000.00",
    image: "/products/ikigai-book.jpg",
  },
  {
    name: "Hisense HFS90GA5EBL 90cm Gas Cooker with Electric Oven",
    price: "TZS 1,469,250.00",
    image: "/products/hisense-cooker.png",
  },
  {
    name: "Emerald by POISE — 50ml Alcohol-Free Perfume",
    price: "TZS 38,500.00",
    image: "/products/emerald-perfume.png",
  },
  {
    name: "Blush by POISE — Soft & Romantic Fragrance",
    price: "TZS 38,500.00",
    was: "TZS 42,733.00",
    deal: "-10%",
    image: "/products/blush-perfume.png",
  },
]

const categories: {
  name: string
  image?: string
  icon: typeof Shirt01Icon
  tint: string
}[] = [
  {
    name: "Electronics",
    icon: SmartPhone01Icon,
    tint: "bg-sky-100 text-sky-600",
  },
  {
    name: "Fashion",
    image: "/products/arsenal-jersey.jpg",
    icon: Shirt01Icon,
    tint: "bg-violet-100 text-violet-600",
  },
  {
    name: "Fresh Produce",
    icon: PackageIcon,
    tint: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Home & Living",
    image: "/products/hisense-hood.png",
    icon: Home01Icon,
    tint: "bg-amber-100 text-amber-600",
  },
  {
    name: "Appliances",
    image: "/products/hisense-cooker.png",
    icon: Home01Icon,
    tint: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Beauty & Care",
    image: "/products/blush-perfume.png",
    icon: BrushIcon,
    tint: "bg-rose-100 text-rose-600",
  },
  {
    name: "Sports",
    icon: Dumbbell01Icon,
    tint: "bg-cyan-100 text-cyan-600",
  },
  {
    name: "Baby & Kids",
    image: "/products/bumpie-diaper.png",
    icon: Baby01Icon,
    tint: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    name: "Books",
    image: "/products/ikigai-book.jpg",
    icon: Book01Icon,
    tint: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Fragrance",
    image: "/products/emerald-perfume.png",
    icon: PerfumeIcon,
    tint: "bg-teal-100 text-teal-600",
  },
  {
    name: "Footwear",
    image: "/products/walkaroo-sandal.jpg",
    icon: SneakerIcon,
    tint: "bg-orange-100 text-orange-600",
  },
]

const newArrivals = [
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
    name: "Walkaroo WTG5805 Sport Sandals",
    price: "TZS 17,750.00",
    image: "/products/walkaroo-wtg5805.png",
  },
  {
    name: "Bumpie Baby Diapers — Jumbo Pack",
    price: "TZS 12,500.00",
    image: "/products/bumpie-diaper.png",
  },
  {
    name: "Hisense 90cm Kitchen Chimney Hood",
    price: "TZS 385,000.00",
    image: "/products/hisense-hood.png",
  },
  {
    name: "Emerald by POISE — 50ml Alcohol-Free Perfume",
    price: "TZS 38,500.00",
    image: "/products/emerald-perfume.png",
  },
  {
    name: "Blush by POISE — Soft & Romantic Fragrance",
    price: "TZS 38,500.00",
    image: "/products/blush-perfume.png",
  },
  {
    name: "Hisense HFS90GA5EBL 90cm Gas Cooker",
    price: "TZS 1,469,250.00",
    image: "/products/hisense-cooker.png",
  },
  {
    name: "Arsenal Home Jersey 2025/26",
    price: "TZS 45,000.00",
    image: "/products/arsenal-jersey.jpg",
  },
  {
    name: "Walkaroo Classic Everyday Slides",
    price: "TZS 14,500.00",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Ikigai — The Japanese Secret to a Long and Happy Life",
    price: "TZS 35,000.00",
    image: "/products/ikigai-book.jpg",
  },
]

const bestSellers = [
  {
    name: "Ikigai — The Japanese Secret to a Long and Happy Life",
    price: "TZS 35,000.00",
    sold: "2.4k sold",
    image: "/products/ikigai-book.jpg",
  },
  {
    name: "Arsenal Home Jersey 2025/26",
    price: "TZS 45,000.00",
    sold: "1.8k sold",
    image: "/products/arsenal-jersey.jpg",
  },
  {
    name: "Walkaroo WTG5805 Sport Sandals",
    price: "TZS 17,750.00",
    sold: "1.5k sold",
    image: "/products/walkaroo-wtg5805.png",
  },
  {
    name: "Emerald by POISE — 50ml Alcohol-Free Perfume",
    price: "TZS 38,500.00",
    sold: "1.2k sold",
    image: "/products/emerald-perfume.png",
  },
  {
    name: "Bumpie Baby Diapers — Jumbo Pack",
    price: "TZS 12,500.00",
    sold: "980 sold",
    image: "/products/bumpie-diaper.png",
  },
  {
    name: "Blush by POISE — Soft & Romantic Fragrance",
    price: "TZS 38,500.00",
    sold: "870 sold",
    image: "/products/blush-perfume.png",
  },
  {
    name: "Walkaroo WT5331 Casual Sandals",
    price: "TZS 16,000.00",
    sold: "760 sold",
    image: "/products/walkaroo-wt5331.png",
  },
  {
    name: "Hisense HFS90GA5EBL 90cm Gas Cooker",
    price: "TZS 1,469,250.00",
    sold: "540 sold",
    image: "/products/hisense-cooker.png",
  },
  {
    name: "Walkaroo WTG5334 Comfort Sandals",
    price: "TZS 17,000.00",
    sold: "430 sold",
    image: "/products/walkaroo-wtg5334.png",
  },
  {
    name: "Hisense 90cm Kitchen Chimney Hood",
    price: "TZS 385,000.00",
    sold: "310 sold",
    image: "/products/hisense-hood.png",
  },
  {
    name: "Walkaroo Classic Everyday Slides",
    price: "TZS 14,500.00",
    sold: "290 sold",
    image: "/products/walkaroo-sandal.jpg",
  },
  {
    name: "Arsenal Third Jersey 2025/26",
    price: "TZS 45,000.00",
    sold: "210 sold",
    image: "/products/arsenal-jersey.jpg",
  },
]

const moreProducts = [
  { name: "Arsenal Home Jersey 2025/26", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg" },
  { name: "Walkaroo WT5331 Casual Sandals", price: "TZS 16,000.00", image: "/products/walkaroo-wt5331.png" },
  { name: "Emerald by POISE — 50ml Perfume", price: "TZS 38,500.00", image: "/products/emerald-perfume.png" },
  { name: "Bumpie Baby Diapers — Jumbo Pack", price: "TZS 12,500.00", image: "/products/bumpie-diaper.png" },
  { name: "Ikigai — The Japanese Secret", price: "TZS 35,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Hisense 90cm Kitchen Chimney Hood", price: "TZS 385,000.00", image: "/products/hisense-hood.png" },
  { name: "Blush by POISE — Soft Fragrance", price: "TZS 38,500.00", image: "/products/blush-perfume.png" },
  { name: "Walkaroo WTG5805 Sport Sandals", price: "TZS 17,750.00", deal: "-2%", image: "/products/walkaroo-wtg5805.png" },
  { name: "Hisense 90cm Gas Cooker + Oven", price: "TZS 1,469,250.00", image: "/products/hisense-cooker.png" },
  { name: "Walkaroo WTG5334 Comfort Sandals", price: "TZS 17,000.00", image: "/products/walkaroo-wtg5334.png" },
  { name: "Walkaroo Classic Everyday Slides", price: "TZS 14,500.00", image: "/products/walkaroo-sandal.jpg" },
  { name: "POISE Fragrance Duo — Gift Set", price: "TZS 72,000.00", image: "/products/emerald-perfume.png" },
  { name: "Arsenal Third Jersey 2025/26", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg" },
  { name: "Bumpie Wipes — 3 Pack Bundle", price: "TZS 9,800.00", image: "/products/bumpie-diaper.png" },
  { name: "Atomic Habits — James Clear", price: "TZS 32,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Walkaroo WTG5805 — Black Edition", price: "TZS 18,500.00", image: "/products/walkaroo-wtg5805.png" },
  { name: "Hisense Cooker Hood — Slim 60cm", price: "TZS 295,000.00", deal: "-13%", image: "/products/hisense-hood.png" },
  { name: "Emerald by POISE — Gift Wrap", price: "TZS 42,000.00", image: "/products/emerald-perfume.png" },
  { name: "Deep Work — Cal Newport", price: "TZS 30,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Walkaroo WT5331 — Brown", price: "TZS 16,500.00", image: "/products/walkaroo-wt5331.png" },
  { name: "Blush by POISE — Travel Size 30ml", price: "TZS 24,000.00", image: "/products/blush-perfume.png" },
]

const collections = [
  {
    title: "Trend, Meet Timeless",
    cta: "Discover Products",
    items: [
      { name: "Men's Clothing", image: "/products/arsenal-jersey.jpg" },
      { name: "Footwear", image: "/products/walkaroo-wtg5805.png" },
    ],
  },
  {
    title: "Modern Essentials for Home",
    cta: "Explore Further",
    items: [
      { name: "Home Appliances", image: "/products/hisense-cooker.png" },
      { name: "Kitchen", image: "/products/hisense-hood.png" },
    ],
  },
  {
    title: "Everything For Your Baby",
    cta: "Explore Items",
    items: [
      { name: "Health & Hygiene (Baby Care)", image: "/products/bumpie-diaper.png" },
      { name: "Baby & Toddler Gear", image: "/products/walkaroo-wt5331.png" },
    ],
  },
  {
    title: "Beauty & Self Care",
    cta: "Shop Beauty",
    items: [
      { name: "Fragrances", image: "/products/emerald-perfume.png" },
      { name: "Soft Scents", image: "/products/blush-perfume.png" },
    ],
  },
  {
    title: "For the Love of Reading",
    cta: "Browse Books",
    items: [
      { name: "Bestsellers", image: "/products/ikigai-book.jpg" },
      { name: "New Titles", image: "/products/ikigai-book.jpg" },
    ],
  },
]

const trust = [
  {
    icon: Globe02Icon,
    title: "WORLDWIDE DELIVERY",
    desc: "Fast shipping, everywhere",
  },
  {
    icon: BadgeCheckIcon,
    title: "VERIFIED VENDORS",
    desc: "Sellers vetted",
  },
  {
    icon: ShieldCheckIcon,
    title: "SECURE PAYMENT",
    desc: "Mobile Money, Cards, Cash",
  },
  {
    icon: CustomerSupportIcon,
    title: "SUPPORT TEAM",
    desc: "7 days a week",
  },
]

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-7xl px-4 pt-6">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="relative flex min-h-72 flex-col justify-center overflow-hidden rounded-2xl bg-zinc-900 p-8 lg:col-span-2 lg:min-h-[340px] lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_70%_20%,rgba(255,90,0,0.35),transparent_70%)]" />
              <HugeiconsIcon
                icon={Shirt01Icon}
                strokeWidth={1.5}
                className="absolute -end-8 -bottom-10 size-48 text-white/5"
              />
              <div className="relative flex max-w-sm flex-col items-start gap-4">
                <h2 className="text-3xl font-bold text-balance text-white lg:text-4xl">
                  New arrivals are back in stock!
                </h2>
                <p className="text-sm text-white/70">
                  Fresh fashion drops from verified sellers — jerseys, sneakers
                  and more.
                </p>
                <Button render={<Link href="#" />} className="gap-2">
                  SHOP NOW
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-neutral-100 p-6">
                <HugeiconsIcon
                  icon={SneakerIcon}
                  strokeWidth={1.5}
                  className="absolute -end-6 -bottom-8 size-32 text-neutral-900/5"
                />
                <div className="relative flex flex-col items-start gap-3">
                  <div>
                    <h3 className="font-semibold">Sneaker season</h3>
                    <p className="text-xs text-muted-foreground">
                      Top picks from TSh 25,000
                    </p>
                  </div>
                  <Button
                    size="sm"
                    render={<Link href="#" />}
                    className="gap-1.5"
                  >
                    SHOP NOW
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-neutral-100 p-6">
                <HugeiconsIcon
                  icon={Book01Icon}
                  strokeWidth={1.5}
                  className="absolute -end-6 -bottom-8 size-32 text-neutral-900/5"
                />
                <div className="relative flex flex-col items-start gap-3">
                  <div>
                    <h3 className="font-semibold">Bestseller books</h3>
                    <p className="text-xs text-muted-foreground">
                      Ikigai, Atomic Habits & more
                    </p>
                  </div>
                  <Button
                    size="sm"
                    render={<Link href="#" />}
                    className="gap-1.5"
                  >
                    SHOP NOW
                    <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border lg:grid-cols-4">
            {trust.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 bg-background p-4"
              >
                <HugeiconsIcon
                  icon={item.icon}
                  strokeWidth={2}
                  className="size-6 shrink-0 text-primary"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 py-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Today&apos;s Best Deals For You!
            </h2>
            <Link
              href="/products"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              See All Products
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                className="size-4"
              />
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {products.map((product) => (
              <a key={product.name} href="/product" className="group">
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
              </a>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 pb-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Shop by Categories
            </h2>
            <Link
              href="#"
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
          <div className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-1 sm:gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="group flex w-20 shrink-0 snap-start flex-col items-center gap-2 sm:w-24"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-full ring-1 ring-border transition-all duration-300 group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={cn(
                        "flex size-full items-center justify-center",
                        category.tint
                      )}
                    >
                      <HugeiconsIcon
                        icon={category.icon}
                        strokeWidth={1.8}
                        className="size-8 transition-transform duration-300 group-hover:scale-110 sm:size-9"
                      />
                    </div>
                  )}
                </div>
                <span className="text-center text-xs leading-tight font-medium group-hover:text-primary">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 pb-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                New Arrivals
              </h2>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary">
                JUST IN
              </span>
            </div>
            <Link
              href="#"
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
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {newArrivals.map((product) => (
              <Link key={product.name} href="/product" className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute start-1.5 top-1.5 rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    NEW
                  </span>
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
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 pb-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Best Sellers
              </h2>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary">
                MOST LOVED
              </span>
            </div>
            <Link
              href="#"
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
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {bestSellers.map((product, index) => (
              <Link key={product.name} href="/product" className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute start-1.5 top-1.5 rounded bg-zinc-900/85 px-1 py-0.5 text-[10px] font-semibold text-white">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="mt-1.5 line-clamp-2 text-xs leading-snug font-medium">
                  {product.name}
                </h3>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="text-xs font-semibold">{product.price}</span>
                  <span className="text-[10px] text-muted-foreground">
                    {product.sold}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 pb-12">
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-1">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="flex w-64 shrink-0 snap-start flex-col rounded-2xl bg-[#e9efea] p-4 sm:w-72"
              >
                <h3 className="text-base font-bold tracking-tight text-balance">
                  {collection.title}
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {collection.items.map((item) => (
                    <Link key={item.name} href="#" className="group">
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-white/60">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-1 text-[11px] leading-tight font-medium">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <Link
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  {collection.cta}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    strokeWidth={2}
                    className="size-3.5"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 pb-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              More to Love
            </h2>
            <Link
              href="/products"
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
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
            {moreProducts.map((product) => (
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
                <span className="mt-0.5 block text-xs font-semibold">
                  {product.price}
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
