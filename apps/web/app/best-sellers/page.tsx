import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage, ProductGridCard } from "@/components/info-page"

const products = [
  { name: "Ikigai — The Japanese Secret", price: "TZS 35,000.00", image: "/products/ikigai-book.jpg" },
  { name: "Arsenal Home Jersey 2025/26", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg" },
  { name: "Walkaroo WTG5805 Sport Sandals", price: "TZS 17,750.00", image: "/products/walkaroo-wtg5805.png" },
  { name: "Emerald by POISE — 50ml Perfume", price: "TZS 38,500.00", image: "/products/emerald-perfume.png" },
  { name: "Bumpie Baby Diapers — Jumbo Pack", price: "TZS 12,500.00", image: "/products/bumpie-diaper.png" },
  { name: "Blush by POISE — Soft Fragrance", price: "TZS 38,500.00", image: "/products/blush-perfume.png" },
  { name: "Walkaroo WT5331 Casual Sandals", price: "TZS 16,000.00", image: "/products/walkaroo-wt5331.png" },
  { name: "Hisense 90cm Gas Cooker", price: "TZS 1,469,250.00", image: "/products/hisense-cooker.png" },
  { name: "Walkaroo WTG5334 Comfort Sandals", price: "TZS 17,000.00", image: "/products/walkaroo-wtg5334.png" },
  { name: "Hisense 90cm Kitchen Chimney Hood", price: "TZS 385,000.00", image: "/products/hisense-hood.png" },
  { name: "Walkaroo Classic Everyday Slides", price: "TZS 14,500.00", image: "/products/walkaroo-sandal.jpg" },
  { name: "Arsenal Third Jersey 2025/26", price: "TZS 45,000.00", image: "/products/arsenal-jersey.jpg" },
]

export default function BestSellersPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Best Sellers"
        description="The most loved products on Xerin — ranked by what customers actually buy."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((p, i) => (
            <ProductGridCard key={p.name} product={p} badge={`#${i + 1}`} />
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
