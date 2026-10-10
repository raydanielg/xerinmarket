import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AgreementIcon,
  CreditCardIcon,
  Megaphone01Icon,
  TruckDeliveryIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const partners = [
  {
    icon: TruckDeliveryIcon,
    title: "Logistics partners",
    desc: "Courier companies and transporters delivering across all 26 regions.",
  },
  {
    icon: CreditCardIcon,
    title: "Payment partners",
    desc: "Mobile money providers, banks, and fintechs powering secure checkout.",
  },
  {
    icon: Megaphone01Icon,
    title: "Media & marketing",
    desc: "Campaigns, sponsorships, and brand collaborations.",
  },
  {
    icon: AgreementIcon,
    title: "Wholesale & B2B",
    desc: "Bulk supply deals for businesses and institutions.",
  },
]

export default function PartnershipsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Partner with Xerin"
        description="Let's grow together — logistics, payments, media, and B2B opportunities."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {partners.map((p) => (
            <div key={p.title} className="rounded-2xl border p-6">
              <HugeiconsIcon
                icon={p.icon}
                strokeWidth={1.8}
                className="size-7 text-primary"
              />
              <h2 className="mt-3 font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-zinc-900 p-8 text-center text-white">
          <h2 className="text-xl font-bold">Interested in partnering?</h2>
          <p className="max-w-md text-sm text-white/70">
            Tell us about your business and how you'd like to work with us.
          </p>
          <Button render={<Link href="/contact" />} className="mt-2">
            Get in Touch
          </Button>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
