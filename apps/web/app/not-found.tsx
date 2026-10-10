import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  Search01Icon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const quickLinks = [
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Flash Deals", href: "/flash-deals" },
  { label: "All Stores", href: "/stores" },
]

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(255,90,0,0.08),transparent_70%)]" />
        <div className="relative flex max-w-lg flex-col items-center text-center">
          <div className="relative">
            <p className="text-[9rem] leading-none font-black tracking-tighter text-neutral-100 select-none sm:text-[12rem]">
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-20 items-center justify-center rounded-3xl bg-primary/10 text-primary sm:size-24">
                <HugeiconsIcon
                  icon={ShoppingBag01Icon}
                  strokeWidth={1.5}
                  className="size-10 sm:size-12"
                />
              </div>
            </div>
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
            Oops — this page got lost in the market
          </h1>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or was moved.
            Let&apos;s get you back to the good stuff.
          </p>
          <div className="mt-6 flex gap-2.5">
            <Button render={<Link href="/" />} className="gap-2">
              <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
              Back Home
            </Button>
            <Button
              variant="outline"
              render={<Link href="/products" />}
              className="gap-2"
            >
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
              Browse Products
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground">Popular:</span>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
