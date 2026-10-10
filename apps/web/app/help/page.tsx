import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CallIcon,
  CreditCardIcon,
  CustomerSupportIcon,
  PackageIcon,
  ReturnRequestIcon,
  Search01Icon,
  ShieldCheckIcon,
  Store01Icon,
  TruckDeliveryIcon,
  User02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const topics = [
  {
    icon: PackageIcon,
    title: "Track an Order",
    desc: "See where your package is in real time",
    href: "/track-order",
  },
  {
    icon: TruckDeliveryIcon,
    title: "Shipping & Delivery",
    desc: "Delivery times, zones, and fees",
    href: "/shipping",
  },
  {
    icon: ReturnRequestIcon,
    title: "Returns & Refunds",
    desc: "Return items free within 7 days",
    href: "/returns",
  },
  {
    icon: ShieldCheckIcon,
    title: "Buyer Protection",
    desc: "How we keep your money safe",
    href: "/buyer-protection",
  },
  {
    icon: Store01Icon,
    title: "Selling on Xerin",
    desc: "Start and grow your store",
    href: "/sell",
  },
  {
    icon: User02Icon,
    title: "Account & Payment",
    desc: "Login, payments, and settings",
    href: "/contact",
  },
]

const popular = [
  { q: "Where is my order?", href: "/track-order" },
  { q: "How do I return an item?", href: "/returns" },
  { q: "Is my payment safe?", href: "/buyer-protection" },
  { q: "How much is delivery?", href: "/shipping" },
  { q: "How do I become a seller?", href: "/sell" },
]

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Dar es Salaam: same day to 2 days. Major cities: 2–3 days. Other regions: 3–5 business days depending on the seller's location.",
  },
  {
    q: "How do I pay?",
    a: "We accept M-Pesa, Tigo Pesa, Airtel Money, Visa, Mastercard, and Cash on Delivery in select areas.",
  },
  {
    q: "Can I return a product?",
    a: "Yes — most items can be returned within 7 days for a full refund, as long as they're unused and in original packaging. Returns are free.",
  },
  {
    q: "Is my payment safe?",
    a: "Your money is held securely until you confirm delivery. If something goes wrong, Buyer Protection refunds you in full.",
  },
  {
    q: "How do I become a seller?",
    a: "Visit the Sell on Xerin page and create a free seller account — after verification you can start listing products the same day.",
  },
  {
    q: "What if the seller doesn't respond?",
    a: "If a seller goes quiet for 5 days, the order is cancelled and you're automatically refunded — you don't have to do anything.",
  },
  {
    q: "Can I change my delivery address?",
    a: "Yes, as long as the order hasn't been picked up by the courier. Go to your orders and edit the delivery details.",
  },
  {
    q: "Do gift cards expire?",
    a: "No — Xerin gift cards never expire and work on every store and product on the marketplace.",
  },
]

export default function HelpPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Help Center"
        description="Find answers fast, or reach our support team — 7 days a week."
      >
        <InputGroup className="max-w-md">
          <InputGroupAddon align="inline-start">
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search help topics..." />
        </InputGroup>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted-foreground">Popular:</span>
          {popular.map((p) => (
            <Link
              key={p.q}
              href={p.href}
              className="rounded-full border px-3 py-1 font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {p.q}
            </Link>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group flex items-center gap-3.5 rounded-2xl border p-4 transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HugeiconsIcon icon={t.icon} strokeWidth={1.8} className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold group-hover:text-primary">
                  {t.title}
                </p>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </Link>
          ))}
        </div>
        <h2 className="mt-8 text-lg font-bold">Frequently Asked</h2>
        <div className="mt-4 divide-y rounded-2xl border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                {faq.q}
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-zinc-900 p-6 text-white">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-start">
            <div className="flex-1">
              <p className="font-bold">Still need help?</p>
              <p className="mt-1 text-sm text-white/60">
                Our team replies within a few hours — every day of the week.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <HugeiconsIcon icon={CustomerSupportIcon} className="size-4" />
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
              >
                <HugeiconsIcon icon={WhatsappIcon} className="size-4" />
                WhatsApp
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
              >
                <HugeiconsIcon icon={CallIcon} className="size-4" />
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
