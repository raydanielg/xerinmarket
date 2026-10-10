import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BadgeCheckIcon,
  Globe02Icon,
  ShieldCheckIcon,
  Store01Icon,
} from "@hugeicons/core-free-icons"

const stats = [
  { value: "1.2M+", label: "Happy customers" },
  { value: "8,400+", label: "Verified sellers" },
  { value: "26", label: "Regions served" },
  { value: "4.8", label: "Average rating" },
]

const values = [
  {
    icon: BadgeCheckIcon,
    title: "Verified Sellers",
    desc: "Every seller is vetted before they can list a single product.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Buyer Protection",
    desc: "Full refund if your order doesn't arrive or isn't as described.",
  },
  {
    icon: Store01Icon,
    title: "Local First",
    desc: "We champion Tanzanian businesses and help them reach customers.",
  },
  {
    icon: Globe02Icon,
    title: "Everywhere",
    desc: "From Dar es Salaam to Kigoma — we deliver to every region.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="About Xerin"
        description="We're building Tanzania's most trusted marketplace — connecting verified sellers with millions of buyers."
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/two-women-viewing-content-phone-local-african-market.jpg"
            alt="Shopping on Xerin"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
        <div className="mt-8 grid max-w-3xl gap-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Xerin Marketplace started in Dar es Salaam with a simple idea:
            buying online in Tanzania should be safe, fast, and fair. Too many
            people were getting fake products or waiting weeks for delivery —
            we set out to fix that.
          </p>
          <p>
            Today we connect thousands of verified sellers with buyers across
            all 26 regions of Tanzania. Every seller is vetted, every payment
            is protected, and every order is tracked from warehouse to your
            doorstep.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 text-center">
              <p className="text-2xl font-bold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border p-5">
              <HugeiconsIcon
                icon={value.icon}
                strokeWidth={1.8}
                className="size-6 text-primary"
              />
              <p className="mt-3 text-sm font-semibold">{value.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
