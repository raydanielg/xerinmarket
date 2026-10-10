import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalPage } from "@/components/legal-page"

const sections = [
  {
    title: "The short version",
    body: [
      "We collect what we need to deliver your order safely — your name, phone number, address, and payment details. We use it to run the marketplace, we share it only with the people delivering your order, and we never sell it. That's the deal, and this policy explains it in full.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you create an account or place an order, we collect the basics: your name, phone number, email address, and delivery address. If you're a seller, we also collect your ID and business details for verification.",
      "We also collect how you use Xerin — what you search for, which products you view, and how the app performs on your device. This helps us fix problems and recommend things you'll actually like.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "Your information exists to serve your orders: processing payments, arranging delivery, and reaching you when something needs your attention — like a courier calling to find your street.",
      "We also use it to keep the marketplace safe (fraud checks, fake listing detection) and to make shopping better — better search results, relevant deals, and faster checkout.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "Only the partners who need it to serve you: sellers receive your delivery details to fulfil your order, couriers get your address and phone number to reach you, and payment providers process your payment securely.",
      "We don't sell your personal information to advertisers or data brokers — never have, never will.",
    ],
  },
  {
    title: "How we protect it",
    body: [
      "All traffic to Xerin is encrypted, and payment details are tokenized — we never store your full card number. Access to personal data inside Xerin is limited to the people who need it, and every access is logged and audited.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Your data is yours. You can view, correct, or download your personal information anytime from your account settings. Want it deleted? Email privacy@xerin.co.tz and we'll remove it within 30 days — except where the law requires us to keep records.",
      "You can also opt out of marketing messages anytime without affecting your orders or account.",
    ],
  },
  {
    title: "Questions?",
    body: [
      "If anything in this policy is unclear, or you'd like to exercise your rights, reach us at privacy@xerin.co.tz — a real person will reply within 24 hours.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <LegalPage
        title="Privacy Policy"
        updated="October 2026"
        intro="How we collect, use, and protect your information — written plainly, on purpose."
        sections={sections}
      />
      <SiteFooter />
    </div>
  )
}
