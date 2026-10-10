"use client"

import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CallIcon,
  CustomerSupportIcon,
  Location01Icon,
  Mail01Icon,
  TimeQuarterIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-80 w-full animate-pulse rounded-2xl bg-neutral-100" />
  ),
})

const HQ = { lat: -6.816, lng: 39.2803 }

const channels = [
  {
    icon: WhatsappIcon,
    title: "WhatsApp",
    value: "+255 700 000 000",
    desc: "Fastest — replies in minutes",
  },
  {
    icon: CallIcon,
    title: "Phone",
    value: "+255 22 000 0000",
    desc: "Mon–Sun, 8 AM – 8 PM",
  },
  {
    icon: Mail01Icon,
    title: "Email",
    value: "support@xerin.co.tz",
    desc: "Replies within 24 hours",
  },
]

const branches = [
  {
    name: "Dar es Salaam — HQ",
    address: "Samora Avenue, Posta",
    phone: "+255 22 000 0000",
    hours: "Mon–Sat · 8 AM – 6 PM",
  },
  {
    name: "Arusha",
    address: "Sokoine Road, Clock Tower",
    phone: "+255 27 000 000",
    hours: "Mon–Fri · 9 AM – 5 PM",
  },
  {
    name: "Mwanza",
    address: "Nyerere Road, City Centre",
    phone: "+255 28 000 000",
    hours: "Mon–Fri · 9 AM – 5 PM",
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Contact Us"
        description="Questions, problems, or feedback — we're here 7 days a week."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="flex items-center gap-3.5 rounded-2xl border p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HugeiconsIcon icon={c.icon} strokeWidth={1.8} className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{c.title}</p>
                <p className="truncate text-sm font-semibold">{c.value}</p>
                <p className="text-[11px] text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-bold">
              <HugeiconsIcon
                icon={CustomerSupportIcon}
                strokeWidth={2}
                className="size-5 text-primary"
              />
              Send us a message
            </h2>
            <form
              className="mt-4 grid gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="ct-name">Name</FieldLabel>
                  <InputGroup>
                    <InputGroupInput id="ct-name" placeholder="Your name" />
                  </InputGroup>
                </Field>
                <Field>
                  <FieldLabel htmlFor="ct-email">Email</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                    </InputGroupAddon>
                    <InputGroupInput
                      id="ct-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </InputGroup>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="ct-msg">Message</FieldLabel>
                <textarea
                  id="ct-msg"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </Field>
              <Button type="submit" className="w-fit">
                Send Message
              </Button>
            </form>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-2xl border lg:min-h-0">
            <LeafletMap point={HQ} onSelect={() => {}} />
            <div className="absolute inset-x-3 bottom-3 z-[400] flex items-center gap-2.5 rounded-xl border bg-background/95 p-3 shadow-sm backdrop-blur">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HugeiconsIcon
                  icon={Location01Icon}
                  strokeWidth={2}
                  className="size-4.5"
                />
              </div>
              <div>
                <p className="text-xs font-semibold">Xerin HQ — Dar es Salaam</p>
                <p className="text-[11px] text-muted-foreground">
                  Samora Avenue, Posta
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-10 font-bold">Our Branches</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {branches.map((b) => (
            <div key={b.name} className="rounded-2xl border p-5">
              <p className="font-semibold">{b.name}</p>
              <div className="mt-2.5 space-y-1.5 text-xs text-muted-foreground">
                <p className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                  {b.address}
                </p>
                <p className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={CallIcon} className="size-3.5" />
                  {b.phone}
                </p>
                <p className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={TimeQuarterIcon} className="size-3.5" />
                  {b.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
