import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons"

const brands = [
  { name: "Walkaroo", products: 31, image: "/products/walkaroo-wtg5805.png", verified: true },
  { name: "POISE", products: 12, image: "/products/emerald-perfume.png", verified: true },
  { name: "Hisense", products: 24, image: "/products/hisense-cooker.png", verified: true },
  { name: "Bumpie", products: 9, image: "/products/bumpie-diaper.png", verified: true },
  { name: "Arsenal FC", products: 7, image: "/products/arsenal-jersey.jpg", verified: true },
  { name: "Penguin Books", products: 18, image: "/products/ikigai-book.jpg", verified: true },
  { name: "Safari Gear", products: 5, image: "/products/arsenal-jersey.jpg", verified: false },
  { name: "Beauty Lab", products: 11, image: "/products/blush-perfume.png", verified: false },
]

export default function BrandsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="All Brands"
        description="Shop directly from official and verified brand stores."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="group flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="flex items-center justify-center gap-1 text-xs font-semibold group-hover:text-primary">
                  {brand.name}
                  {brand.verified && (
                    <HugeiconsIcon
                      icon={CheckmarkBadge02Icon}
                      className="size-3.5 fill-primary text-primary-foreground"
                    />
                  )}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {brand.products} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
