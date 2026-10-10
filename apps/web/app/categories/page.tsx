import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Baby01Icon,
  Book01Icon,
  BrushIcon,
  Dumbbell01Icon,
  Home01Icon,
  PackageIcon,
  PerfumeIcon,
  Shirt01Icon,
  SmartPhone01Icon,
  SneakerIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "cn"

const categories = [
  { name: "Electronics", count: 214, icon: SmartPhone01Icon, tint: "bg-sky-100 text-sky-600" },
  { name: "Fashion", count: 386, image: "/products/arsenal-jersey.jpg", icon: Shirt01Icon, tint: "bg-violet-100 text-violet-600" },
  { name: "Fresh Produce", count: 92, icon: PackageIcon, tint: "bg-emerald-100 text-emerald-600" },
  { name: "Home & Living", count: 167, image: "/products/hisense-hood.png", icon: Home01Icon, tint: "bg-amber-100 text-amber-600" },
  { name: "Appliances", count: 89, filter: "Home & Living", image: "/products/hisense-cooker.png", icon: Home01Icon, tint: "bg-yellow-100 text-yellow-600" },
  { name: "Beauty & Care", count: 141, image: "/products/blush-perfume.png", icon: BrushIcon, tint: "bg-rose-100 text-rose-600" },
  { name: "Sports", count: 76, icon: Dumbbell01Icon, tint: "bg-cyan-100 text-cyan-600" },
  { name: "Baby & Kids", count: 118, image: "/products/bumpie-diaper.png", icon: Baby01Icon, tint: "bg-fuchsia-100 text-fuchsia-600" },
  { name: "Books", count: 64, image: "/products/ikigai-book.jpg", icon: Book01Icon, tint: "bg-indigo-100 text-indigo-600" },
  { name: "Fragrance", count: 47, image: "/products/emerald-perfume.png", icon: PerfumeIcon, tint: "bg-teal-100 text-teal-600" },
  { name: "Footwear", count: 103, image: "/products/walkaroo-sandal.jpg", icon: SneakerIcon, tint: "bg-orange-100 text-orange-600" },
]

export default function CategoriesPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="All Categories"
        description="Browse every department on Xerin Marketplace."
      >
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.filter ?? category.name)}`}
              className="group flex flex-col items-center gap-2.5 rounded-2xl border p-4 transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="relative size-16 overflow-hidden rounded-full">
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
                      strokeWidth={1.6}
                      className="size-7"
                    />
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold group-hover:text-primary">
                  {category.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {category.count} products
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
