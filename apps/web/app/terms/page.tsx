import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalPage } from "@/components/legal-page"

const sections = [
  {
    title: "Welcome to Xerin",
    body: [
      "These terms explain the rules of using Xerin Marketplace. By creating an account or placing an order, you're agreeing to them. We've written them in plain language because legal text shouldn't need a lawyer to read.",
    ],
  },
  {
    title: "Your account",
    body: [
      "You need to be 18 or older (or have a guardian's consent) to shop on Xerin. Keep your login details private — anything that happens under your account is your responsibility.",
      "One account per person, please. If we spot abuse — fake reviews, fraud attempts, harassment — we may suspend or close the account.",
    ],
  },
  {
    title: "Orders and payments",
    body: [
      "All prices are shown in Tanzanian Shillings unless you switch currency. When you place an order, your payment is held securely and only released to the seller after you confirm delivery — that's Buyer Protection working for you.",
      "An order is confirmed once payment is authorized or Cash on Delivery is selected. Sellers then have 48 hours to pack and hand your items to the courier.",
    ],
  },
  {
    title: "Delivery",
    body: [
      "Delivery times depend on your location and the seller's — estimates are shown before you pay. Track any order in real time from the Track Order page.",
      "If a courier can't reach you after two attempts, the order returns to the seller and we refund you minus the delivery fee.",
    ],
  },
  {
    title: "Returns and refunds",
    body: [
      "Most items can be returned within 7 days of delivery, free of charge. Once the seller confirms the returned item, your refund is processed within 48 hours.",
      "A few things can't be returned — underwear, earrings, and perishables — for everyone's safety and hygiene.",
    ],
  },
  {
    title: "What's not allowed",
    body: [
      "Counterfeit goods, illegal items, and anything violating Tanzanian law may not be listed or sold on Xerin. Violating listings are removed, and repeat offenders lose their stores.",
      "Don't misuse the platform — no scraping, spamming sellers, or manipulating reviews.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these terms as the marketplace grows. When we do, we'll post the new version here — and for big changes, we'll email you. Continuing to use Xerin after an update means you accept the new terms.",
    ],
  },
  {
    title: "Get in touch",
    body: [
      "Questions about these terms? Write to legal@xerin.co.tz or visit our Help Center — we're happy to explain anything in plain language.",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <LegalPage
        title="Terms of Service"
        updated="October 2026"
        intro="The rules of using Xerin — written plainly, on purpose."
        sections={sections}
      />
      <SiteFooter />
    </div>
  )
}
