import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  FilterIcon,
  StarIcon,
} from "@hugeicons/core-free-icons"

const allProducts = [
  { name: "Arsenal Home Jersey 2025/26", brand: "Arsenal FC", category: "Fashion", price: "TZS 45,000.00", was: "TZS 58,000.00", deal: "-22%", image: "/products/arsenal-jersey.jpg" },
  { name: "Walkaroo WTG5805 Sport Sandals", brand: "Walkaroo", category: "Footwear", price: "TZS 17,750.00", was: "TZS 18,105.00", deal: "-2%", image: "/products/walkaroo-wtg5805.png" },
  { name: "Ikigai — The Japanese Secret", brand: "Penguin Books", category: "Books", price: "TZS 35,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Emerald by POISE — 50ml Perfume", brand: "POISE", category: "Fragrance", price: "TZS 38,500.00", image: "/products/emerald-perfume.png" },
  { name: "Hisense 90cm Gas Cooker + Oven", brand: "Hisense", category: "Home & Living", price: "TZS 1,469,250.00", image: "/products/hisense-cooker.png" },
  { name: "Bumpie Baby Diapers — Jumbo Pack", brand: "Bumpie", category: "Baby & Kids", price: "TZS 12,500.00", image: "/products/bumpie-diaper.png" },
  { name: "Blush by POISE — Soft Fragrance", brand: "POISE", category: "Fragrance", price: "TZS 38,500.00", was: "TZS 42,733.00", deal: "-10%", image: "/products/blush-perfume.png" },
  { name: "Walkaroo WT5331 Casual Sandals", brand: "Walkaroo", category: "Footwear", price: "TZS 16,000.00", image: "/products/walkaroo-wt5331.png" },
  { name: "Walkaroo WTG5334 Comfort Sandals", brand: "Walkaroo", category: "Footwear", price: "TZS 17,000.00", image: "/products/walkaroo-wtg5334.png" },
  { name: "Hisense 90cm Kitchen Chimney Hood", brand: "Hisense", category: "Home & Living", price: "TZS 385,000.00", image: "/products/hisense-hood.png" },
  { name: "Walkaroo Classic Everyday Slides", brand: "Walkaroo", category: "Footwear", price: "TZS 14,500.00", image: "/products/walkaroo-sandal.jpg" },
  { name: "Arsenal Third Jersey 2025/26", brand: "Arsenal FC", category: "Fashion", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg" },
  { name: "POISE Fragrance Duo — Gift Set", brand: "POISE", category: "Fragrance", price: "TZS 72,000.00", image: "/products/emerald-perfume.png" },
  { name: "Atomic Habits — James Clear", brand: "Penguin Books", category: "Books", price: "TZS 32,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Walkaroo WTG5805 — Black Edition", brand: "Walkaroo", category: "Footwear", price: "TZS 18,500.00", image: "/products/walkaroo-wtg5805.png" },
  { name: "Hisense Built-in Oven 60cm", brand: "Hisense", category: "Home & Living", price: "TZS 820,000.00", image: "/products/hisense-cooker.png" },
  { name: "Bumpie Wipes — 3 Pack Bundle", brand: "Bumpie", category: "Baby & Kids", price: "TZS 9,800.00", image: "/products/bumpie-diaper.png" },
  { name: "Blush by POISE — Travel Size 30ml", brand: "POISE", category: "Fragrance", price: "TZS 24,000.00", image: "/products/blush-perfume.png" },
  { name: "Walkaroo WT5331 — Brown", brand: "Walkaroo", category: "Footwear", price: "TZS 16,500.00", image: "/products/walkaroo-wt5331.png" },
  { name: "Arsenal Away Jersey 2025/26", brand: "Arsenal FC", category: "Fashion", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg" },
  { name: "Walkaroo WTG5334 — Navy", brand: "Walkaroo", category: "Footwear", price: "TZS 17,500.00", image: "/products/walkaroo-wtg5334.png" },
  { name: "Hisense Cooker Hood — Slim 60cm", brand: "Hisense", category: "Home & Living", price: "TZS 295,000.00", was: "TZS 340,000.00", deal: "-13%", image: "/products/hisense-hood.png" },
  { name: "Emerald by POISE — Gift Wrap", brand: "POISE", category: "Fragrance", price: "TZS 42,000.00", image: "/products/emerald-perfume.png" },
  { name: "Deep Work — Cal Newport", brand: "Penguin Books", category: "Books", price: "TZS 30,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Safari Gear Training Tee", brand: "Safari Gear", category: "Fashion", price: "TZS 28,000.00", image: "/products/arsenal-jersey.jpg" },
  { name: "Beauty Lab Care Set", brand: "Beauty Lab", category: "Beauty & Care", price: "TZS 55,000.00", image: "/products/blush-perfume.png" },
]

const filterCategories = [
  { name: "Fashion", count: 86 },
  { name: "Footwear", count: 54 },
  { name: "Fragrance", count: 23 },
  { name: "Beauty & Care", count: 41 },
  { name: "Baby & Kids", count: 37 },
  { name: "Home & Living", count: 62 },
  { name: "Books", count: 18 },
]

const priceRanges = [
  "Under TZS 25,000",
  "TZS 25,000 — 50,000",
  "TZS 50,000 — 150,000",
  "TZS 150,000 — 500,000",
  "Over TZS 500,000",
]

const brands = [
  { name: "Walkaroo", count: 31 },
  { name: "POISE", count: 12 },
  { name: "Hisense", count: 24 },
  { name: "Bumpie", count: 9 },
  { name: "Arsenal FC", count: 7 },
  { name: "Penguin Books", count: 18 },
  { name: "Safari Gear", count: 5 },
  { name: "Beauty Lab", count: 11 },
]

function Filters({
  activeBrand,
  activeCategory,
}: {
  activeBrand?: string
  activeCategory?: string
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold">Category</h3>
        <ul className="mt-3 space-y-2">
          {filterCategories.map((cat) => (
            <li key={cat.name}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <input
                  type="checkbox"
                  defaultChecked={cat.name === activeCategory}
                  className="size-4 rounded accent-primary"
                />
                <span className="flex-1">{cat.name}</span>
                <span className="text-xs text-muted-foreground/70">
                  {cat.count}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-6">
        <h3 className="text-sm font-semibold">Price</h3>
        <ul className="mt-3 space-y-2">
          {priceRanges.map((range) => (
            <li key={range}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <input
                  type="radio"
                  name="price"
                  className="size-4 accent-primary"
                />
                {range}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-6">
        <h3 className="text-sm font-semibold">Brand</h3>
        <ul className="mt-3 space-y-2">
          {brands.map((brand) => (
            <li key={brand.name}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <input
                  type="checkbox"
                  defaultChecked={brand.name === activeBrand}
                  className="size-4 rounded accent-primary"
                />
                <span className="flex-1">{brand.name}</span>
                <span className="text-xs text-muted-foreground/70">
                  {brand.count}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-6">
        <h3 className="text-sm font-semibold">Rating</h3>
        <ul className="mt-3 space-y-2">
          {[4, 3].map((stars) => (
            <li key={stars}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <input
                  type="checkbox"
                  className="size-4 rounded accent-primary"
                />
                <span className="flex items-center gap-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <HugeiconsIcon
                      key={i}
                      icon={StarIcon}
                      className="size-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs">& up</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-6">
        <label className="flex cursor-pointer items-center justify-between text-sm">
          <span className="font-semibold">On Sale Only</span>
          <input type="checkbox" className="size-4 rounded accent-primary" />
        </label>
      </div>
    </div>
  )
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ brand?: string; category?: string }>
}) {
  const { brand, category } = await searchParams
  const title = brand ?? category ?? "All Products"
  const products = allProducts.filter(
    (p) =>
      (!brand || p.brand === brand) &&
      (!category || p.category === category)
  )

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
            <span className="font-medium text-foreground">{title}</span>
          </nav>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {products.length} products
              </p>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sort by:</span>
              <select className="h-9 rounded-lg border bg-background px-3 text-sm font-medium outline-none focus:border-primary">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rated</option>
                <option>Most Sold</option>
              </select>
            </label>
          </div>
          {(brand || category) && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Filtered by:</span>
              {brand && (
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {brand}
                  <Link
                    href={category ? `/products?category=${encodeURIComponent(category)}` : "/products"}
                    aria-label="Clear brand filter"
                    className="hover:opacity-70"
                  >
                    ✕
                  </Link>
                </span>
              )}
              {category && (
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {category}
                  <Link
                    href={brand ? `/products?brand=${encodeURIComponent(brand)}` : "/products"}
                    aria-label="Clear category filter"
                    className="hover:opacity-70"
                  >
                    ✕
                  </Link>
                </span>
              )}
            </div>
          )}
          <details className="group mt-5 rounded-xl border lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 p-3.5 text-sm font-semibold [&::-webkit-details-marker]:hidden">
              <HugeiconsIcon icon={FilterIcon} strokeWidth={2} className="size-4" />
              Filters
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                className="ms-auto size-4 -rotate-90 transition-transform group-open:rotate-90"
              />
            </summary>
            <div className="border-t p-4">
              <Filters activeBrand={brand} activeCategory={category} />
            </div>
          </details>
          <div className="mt-6 grid gap-8 lg:grid-cols-[230px_1fr]">
            <aside className="hidden self-start lg:block">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-sm font-semibold">
                  <HugeiconsIcon icon={FilterIcon} strokeWidth={2} className="size-4" />
                  Filters
                </h2>
                <button className="text-xs font-medium text-primary hover:underline">
                  Clear all
                </button>
              </div>
              <Filters activeBrand={brand} activeCategory={category} />
            </aside>
            <div className="grid grid-cols-2 gap-3 self-start sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
              {products.length === 0 && (
                <p className="col-span-full py-16 text-center text-sm text-muted-foreground">
                  No products found for this filter yet —{" "}
                  <Link
                    href="/products"
                    className="font-medium text-primary hover:underline"
                  >
                    browse all products
                  </Link>
                </p>
              )}
              {products.map((product) => (
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
                    <span className="text-xs font-semibold">
                      {product.price}
                    </span>
                    {product.was && (
                      <span className="text-[10px] text-muted-foreground line-through">
                        {product.was}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
