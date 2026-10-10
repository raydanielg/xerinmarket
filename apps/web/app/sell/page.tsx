import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  MoneyBag02Icon,
  Store01Icon,
  TruckDeliveryIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const benefits = [
  {
    icon: Store01Icon,
    title: "Free store setup",
    desc: "Create your shop in minutes — no monthly fees to start.",
  },
  {
    icon: TruckDeliveryIcon,
    title: "We handle delivery",
    desc: "Our logistics network delivers to all 26 regions of Tanzania.",
  },
  {
    icon: MoneyBag02Icon,
    title: "Fast payouts",
    desc: "Get paid to M-Pesa or your bank within 48 hours of delivery.",
  },
]

const steps = [
  "Create your seller account",
  "Add your products with photos",
  "Start receiving orders",
  "Get paid — it's that simple",
]

export default function SellPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Sell on Xerin"
        description="Reach millions of buyers across Tanzania. Join 8,400+ sellers already growing with us."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border p-5">
              <HugeiconsIcon
                icon={b.icon}
                strokeWidth={1.8}
                className="size-6 text-primary"
              />
              <p className="mt-3 font-semibold">{b.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-neutral-100 p-6">
            <h2 className="font-bold">How it works</h2>
            <ol className="mt-4 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-zinc-900 p-6 text-white">
            <h2 className="text-xl font-bold">Ready to start selling?</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "0% commission for your first 30 days",
                "Free product photography tips & tools",
                "Dedicated seller support in Swahili & English",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    className="size-4 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-fit" render={<Link href="/signup" />}>
              Open Your Store — Free
            </Button>
          </div>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
