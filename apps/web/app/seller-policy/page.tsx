import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalPage } from "@/components/legal-page"
import { Button } from "@workspace/ui/components/button"

const sections = [
  {
    title: "Why these rules exist",
    body: [
      "Xerin works because buyers trust what they see. These rules keep every store honest — so customers know the photo matches the product and the seller matches the badge. Follow them and you'll thrive here.",
    ],
  },
  {
    title: "Verification",
    body: [
      "Every seller completes identity verification before listing — a NIDA card for individuals or business registration for companies. Verified stores earn the checkmark badge, which shoppers actively look for.",
      "Verification takes 24–48 hours. If we can't confirm your details, we'll tell you exactly what's missing.",
    ],
  },
  {
    title: "Honest listings",
    body: [
      "Use real photos of the actual product, write accurate descriptions, and price fairly. Stock levels must be real — 'available' means you can ship it within 48 hours.",
      "Counterfeit or misleading items get removed immediately, and may suspend your store. We take fakes seriously because buyers do.",
    ],
  },
  {
    title: "Fulfilment",
    body: [
      "Orders must be packed and handed to the courier within 48 hours. Consistent late dispatch lowers your store's ranking in search — fast shippers rise to the top.",
      "Pack items properly. Damaged-in-transit claims caused by poor packaging count against your store.",
    ],
  },
  {
    title: "Commissions and payouts",
    body: [
      "Commission ranges from 5% to 12% depending on category — the exact rate is always shown before you list, no surprises.",
      "Payouts go to your M-Pesa or bank account within 48 hours of confirmed delivery. You'll see every fee itemized on your statement.",
    ],
  },
  {
    title: "What happens when rules are broken",
    body: [
      "We use a three-strikes system: a warning first, then a temporary suspension, then permanent removal. Severe violations — fraud or counterfeits — skip the warnings entirely.",
      "Think we got it wrong? Every enforcement decision can be appealed — a human reviews every appeal within 5 business days.",
    ],
  },
]

export default function SellerPolicyPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <LegalPage
        title="Seller Policy"
        updated="October 2026"
        intro="The rules that keep Xerin safe for buyers and fair for sellers."
        sections={sections}
      >
        <div className="mt-10 rounded-2xl bg-neutral-100 p-6 text-center">
          <p className="font-bold">Ready to play by the rules?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Open your store today — verification takes under 48 hours.
          </p>
          <Button render={<Link href="/sell" />} className="mt-4">
            Start Selling on Xerin
          </Button>
        </div>
      </LegalPage>
      <SiteFooter />
    </div>
  )
}
