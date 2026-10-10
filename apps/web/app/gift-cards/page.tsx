"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  FavouriteIcon,
  FlashIcon,
  GiftIcon,
  LockPasswordIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import { cn } from "cn"

const tiers = [
  {
    value: "TZS 25,000",
    desc: "Perfect for small treats",
    card: "bg-gradient-to-br from-zinc-800 to-zinc-950",
  },
  {
    value: "TZS 50,000",
    desc: "Our most popular choice",
    card: "bg-gradient-to-br from-orange-500 to-rose-600",
  },
  {
    value: "TZS 100,000",
    desc: "Great for electronics & appliances",
    card: "bg-gradient-to-br from-violet-600 to-indigo-800",
  },
  {
    value: "TZS 250,000",
    desc: "The generous one",
    card: "bg-gradient-to-br from-emerald-500 to-teal-800",
  },
]

const perks = [
  { title: "Instant delivery", desc: "Sent by email or SMS in seconds" },
  { title: "Never expires", desc: "Use it whenever you want" },
  { title: "Any product", desc: "Valid across all stores on Xerin" },
]

export default function GiftCardsPage() {
  const [signInPrompt, setSignInPrompt] = useState(false)
  const [selected, setSelected] = useState("")

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Xerin Gift Cards"
        description="Give the gift of choice — delivered instantly by email or SMS."
      >
        <div className="flex items-center gap-3 rounded-2xl bg-zinc-900 p-5 text-white">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
            <HugeiconsIcon icon={FlashIcon} strokeWidth={2} className="size-6" />
          </div>
          <div>
            <p className="font-bold">Bonus Weekend — 10% extra value</p>
            <p className="text-xs text-white/60">
              Buy a TZS 50,000 card, they get TZS 55,000. Ends soon.
            </p>
          </div>
          <div className="ms-auto flex shrink-0 gap-1.5">
            {["19", "07", "44"].map((unit, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-bold tabular-nums">
                  {unit}
                </span>
                {i < 2 && <span className="text-white/40">:</span>}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div key={tier.value}>
              <div
                className={cn(
                  "relative aspect-[8/5] overflow-hidden rounded-2xl p-5 text-white shadow-md",
                  tier.card
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_90%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">
                      Xerin Gift Card
                    </p>
                    <HugeiconsIcon
                      icon={GiftIcon}
                      strokeWidth={1.8}
                      className="size-5 opacity-80"
                    />
                  </div>
                  <p className="mt-auto text-2xl font-bold tracking-tight sm:text-3xl">
                    {tier.value}
                  </p>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="text-xs tracking-[0.25em] opacity-70">
                      •••• •••• ••••
                    </p>
                    <p className="text-[10px] font-medium uppercase opacity-70">
                      No expiry
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">{tier.desc}</p>
                <Button
                  size="sm"
                  className="shrink-0"
                  onClick={() => {
                    setSelected(tier.value)
                    setSignInPrompt(true)
                  }}
                >
                  Buy Gift Card
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {perks.map((item) => (
            <div key={item.title} className="rounded-xl border p-4">
              <HugeiconsIcon
                icon={FavouriteIcon}
                strokeWidth={1.8}
                className="size-5 text-primary"
              />
              <p className="mt-2.5 text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </InfoPage>
      <Dialog open={signInPrompt} onOpenChange={setSignInPrompt}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon
                icon={LockPasswordIcon}
                strokeWidth={1.8}
                className="size-6"
              />
            </div>
            <DialogTitle className="text-center">Sign in to buy</DialogTitle>
            <DialogDescription className="text-center">
              You need a Xerin account to purchase the {selected} gift card —
              it takes less than a minute.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2.5">
            <Button render={<Link href="/login" />} className="w-full">
              Sign In
            </Button>
            <Button
              variant="outline"
              render={<Link href="/signup" />}
              className="w-full"
            >
              Create Account
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <SiteFooter />
    </div>
  )
}
