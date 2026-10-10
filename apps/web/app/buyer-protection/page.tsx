import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalPage } from "@/components/legal-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { ShieldCheckIcon } from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const sections = [
  {
    title: "How your money stays safe",
    body: [
      "When you pay on Xerin, your money doesn't go straight to the seller. We hold it securely in escrow — the seller only gets paid after your order is delivered and confirmed.",
      "If anything goes wrong along the way, the money is still yours. That's the entire idea: shop first, worry never.",
    ],
  },
  {
    title: "When you're covered",
    body: [
      "Your order never arrives? Full refund, including delivery fees. It arrives damaged or broken? Refund or replacement — your choice.",
      "The item turns out to be fake or nothing like the description? Full refund. Wrong size, color, or item sent? Free return and refund. Seller goes silent for 5 days? Automatic refund — you don't lift a finger.",
    ],
  },
  {
    title: "Opening a dispute",
    body: [
      "If something's off, open a dispute within 7 days of delivery from your orders page. Describe the issue, attach a photo if you can — most disputes resolve within 48 hours.",
      "While a dispute is open, your payment stays locked in escrow. The seller can't touch it, and neither can we — it only moves once you're happy or the dispute is decided.",
    ],
  },
  {
    title: "What to expect",
    body: [
      "Most issues get sorted directly with the seller — they're incentivized to fix things fast. If you can't agree, our protection team steps in, reviews both sides, and makes a final call within 5 business days.",
      "Refunds go back the way you paid: M-Pesa to M-Pesa, card to card. Cash on Delivery orders get refunded via M-Pesa or store credit, whichever you prefer.",
    ],
  },
  {
    title: "The fine print (honest version)",
    body: [
      "Buyer Protection covers purchases paid through Xerin — that's it. If a seller asks you to pay outside the platform 'for a discount', that's the scam we built this to stop. Report it and keep your money on-platform.",
      "Disputes must be opened within 7 days of delivery, so check your items when they arrive — not a month later.",
    ],
  },
]

export default function BuyerProtectionPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <LegalPage
        title="Buyer Protection"
        updated="October 2026"
        intro="Shop with zero risk — your money only reaches the seller after you confirm delivery."
        sections={sections}
      >
        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl bg-zinc-900 p-8 text-white sm:flex-row sm:items-center">
          <HugeiconsIcon
            icon={ShieldCheckIcon}
            strokeWidth={1.5}
            className="size-12 shrink-0 text-primary"
          />
          <div className="flex-1">
            <h2 className="text-lg font-bold">100% money-back guarantee</h2>
            <p className="mt-1 text-sm text-white/70">
              Every order on Xerin is protected — no exceptions, no fine print.
            </p>
          </div>
          <Button render={<Link href="/help" />} className="shrink-0">
            Open a Dispute
          </Button>
        </div>
      </LegalPage>
      <SiteFooter />
    </div>
  )
}
