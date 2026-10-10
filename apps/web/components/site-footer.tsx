import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Facebook01Icon,
  InstagramIcon,
  NewTwitterIcon,
  TiktokIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons"

const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/new-arrivals" },
      { label: "Best Sellers", href: "/best-sellers" },
      { label: "Flash Deals", href: "/flash-deals" },
      { label: "Categories", href: "/categories" },
      { label: "Brands", href: "/brands" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Sell on Xerin", href: "/sell" },
      { label: "Press & Blog", href: "/blog" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Track Your Order", href: "/track-order" },
      { label: "Shipping & Delivery", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Seller Policy", href: "/seller-policy" },
      { label: "Buyer Protection", href: "/buyer-protection" },
    ],
  },
]

const socials = [
  { name: "Facebook", icon: Facebook01Icon },
  { name: "Instagram", icon: InstagramIcon },
  { name: "TikTok", icon: TiktokIcon },
  { name: "X", icon: NewTwitterIcon },
  { name: "WhatsApp", icon: WhatsappIcon },
  { name: "YouTube", icon: YoutubeIcon },
]

const payments = [
  "M-Pesa",
  "Tigo Pesa",
  "Airtel Money",
  "Visa",
  "Mastercard",
  "Cash on Delivery",
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t bg-neutral-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_85%_0%,rgba(255,90,0,0.06),transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/xerin-logo.png"
                alt="Xerin Marketplace"
                className="h-9 w-auto rounded-md"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tanzania&apos;s marketplace for verified sellers and genuine
              products — delivered fast, everywhere.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <HugeiconsIcon
                    icon={social.icon}
                    strokeWidth={1.8}
                    className="size-4"
                  />
                </Link>
              ))}
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                {group.title}
              </h3>
              <span className="mt-2 block h-0.5 w-8 rounded-full bg-primary" />
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t py-6">
          <p className="text-xs font-semibold tracking-wide uppercase">
            We accept
          </p>
          <div className="flex flex-wrap gap-2">
            {payments.map((payment) => (
              <span
                key={payment}
                className="rounded-md border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Xerin Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="transition-colors hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
