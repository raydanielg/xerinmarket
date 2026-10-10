import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage, ProductGridCard } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { FlashIcon } from "@hugeicons/core-free-icons"

const products = [
  { name: "Arsenal Home Jersey 2025/26", price: "TZS 45,000.00", was: "TZS 58,000.00", deal: "-22%", image: "/products/arsenal-jersey.jpg" },
  { name: "Blush by POISE — Soft Fragrance", price: "TZS 38,500.00", was: "TZS 42,733.00", deal: "-10%", image: "/products/blush-perfume.png" },
  { name: "Walkaroo WTG5805 Sport Sandals", price: "TZS 17,750.00", was: "TZS 18,105.00", deal: "-2%", image: "/products/walkaroo-wtg5805.png" },
  { name: "Hisense Cooker Hood — Slim 60cm", price: "TZS 295,000.00", was: "TZS 340,000.00", deal: "-13%", image: "/products/hisense-hood.png" },
  { name: "Emerald by POISE — 50ml Perfume", price: "TZS 34,650.00", was: "TZS 38,500.00", deal: "-10%", image: "/products/emerald-perfume.png" },
  { name: "Bumpie Baby Diapers — Jumbo Pack", price: "TZS 11,250.00", was: "TZS 12,500.00", deal: "-10%", image: "/products/bumpie-diaper.png" },
  { name: "Ikigai — The Japanese Secret", price: "TZS 28,000.00", was: "TZS 35,000.00", deal: "-20%", image: "/products/ikigai-book.jpg" },
  { name: "Walkaroo WT5331 Casual Sandals", price: "TZS 14,400.00", was: "TZS 16,000.00", deal: "-10%", image: "/products/walkaroo-wt5331.png" },
  { name: "Walkaroo WTG5334 Comfort Sandals", price: "TZS 15,300.00", was: "TZS 17,000.00", deal: "-10%", image: "/products/walkaroo-wtg5334.png" },
  { name: "Hisense 90cm Gas Cooker", price: "TZS 1,322,325.00", was: "TZS 1,469,250.00", deal: "-10%", image: "/products/hisense-cooker.png" },
  { name: "Walkaroo Classic Everyday Slides", price: "TZS 13,050.00", was: "TZS 14,500.00", deal: "-10%", image: "/products/walkaroo-sandal.jpg" },
  { name: "Arsenal Third Jersey 2025/26", price: "TZS 40,500.00", was: "TZS 45,000.00", deal: "-10%", image: "/products/arsenal-jersey.jpg" },
]

export default function FlashDealsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Flash Deals"
        description="Limited-time discounts — prices go back up when the clock runs out."
      >
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-zinc-900 p-5 text-white">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary/20 text-primary">
            <HugeiconsIcon icon={FlashIcon} strokeWidth={2} className="size-6" />
          </div>
          <div>
            <p className="font-bold">Flash Sale ends soon</p>
            <p className="text-xs text-white/60">
              Up to 22% off — while stock lasts
            </p>
          </div>
          <div className="ms-auto flex gap-1.5">
            {["08", "42", "15"].map((unit, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-bold tabular-nums">
                  {unit}
                </span>
                {i < 2 && <span className="text-white/40">:</span>}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((p) => (
            <ProductGridCard key={p.name} product={p} badge={p.deal} />
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
