import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { PackageIcon, TruckDeliveryIcon } from "@hugeicons/core-free-icons"

const zones = [
  { zone: "Dar es Salaam", time: "Same day — 2 days", fee: "Free over TZS 100,000 · TZS 3,000 below" },
  { zone: "Major cities (Arusha, Mwanza, Dodoma, Mbeya)", time: "2 — 3 days", fee: "Free over TZS 100,000 · TZS 5,000 below" },
  { zone: "Other regions", time: "3 — 5 days", fee: "Free over TZS 100,000 · TZS 7,500 below" },
  { zone: "Remote areas", time: "5 — 8 days", fee: "TZS 10,000 flat" },
]

export default function ShippingPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Shipping & Delivery"
        description="How fast your order gets to you, and what it costs."
      >
        <div className="overflow-hidden rounded-2xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 text-start">
                <th className="px-5 py-3 text-start font-semibold">Zone</th>
                <th className="px-5 py-3 text-start font-semibold">
                  Delivery Time
                </th>
                <th className="px-5 py-3 text-start font-semibold">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {zones.map((z) => (
                <tr key={z.zone}>
                  <td className="px-5 py-3.5 font-medium">{z.zone}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{z.time}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{z.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <HugeiconsIcon
              icon={TruckDeliveryIcon}
              strokeWidth={1.8}
              className="size-6 text-primary"
            />
            <h2 className="mt-3 font-semibold">Tracked delivery</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Every order gets a tracking number. Watch your package move in
              real time on the Track Order page — from the seller&apos;s shelf
              to your door.
            </p>
          </div>
          <div className="rounded-2xl border p-5">
            <HugeiconsIcon
              icon={PackageIcon}
              strokeWidth={1.8}
              className="size-6 text-primary"
            />
            <h2 className="mt-3 font-semibold">Safe packaging</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fragile items are packed with extra protection at no cost. If
              anything arrives damaged, return it free within 7 days.
            </p>
          </div>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
