import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const steps = [
  {
    title: "Request a return",
    desc: "Go to your orders and tap 'Return item' within 7 days of delivery.",
  },
  {
    title: "Pack it up",
    desc: "Use the original packaging. Our courier picks it up for free.",
  },
  {
    title: "Get your refund",
    desc: "Once the seller confirms the item, money is back in 48 hours.",
  },
]

const rules = [
  "Items must be unused and in original packaging",
  "7-day return window from delivery date",
  "Underwear, earrings & perishables can't be returned",
  "Free returns — we cover the courier",
]

export default function ReturnsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Returns & Refunds"
        description="Changed your mind? Returning is free and takes minutes."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border p-5">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h2 className="mt-3 font-semibold">{s.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-neutral-100 p-6">
          <h2 className="font-bold">Return policy — the short version</h2>
          <ul className="mt-4 space-y-2.5">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-2.5 text-sm">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Button render={<Link href="/contact" />} variant="outline">
            Need help with a return? Contact us
          </Button>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
