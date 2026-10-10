"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  Home01Icon,
  PackageIcon,
  Search01Icon,
  Store01Icon,
  TruckDeliveryIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const timeline = [
  {
    icon: CheckmarkCircle02Icon,
    title: "Order Confirmed",
    desc: "We received your order #XR-10482",
    time: "Oct 9, 10:24 AM",
    done: true,
  },
  {
    icon: Store01Icon,
    title: "Seller Packed Your Items",
    desc: "Xerin Sports Hub packed your order",
    time: "Oct 9, 2:40 PM",
    done: true,
  },
  {
    icon: PackageIcon,
    title: "Picked Up by Courier",
    desc: "Handed to Xerin Logistics, Dar es Salaam hub",
    time: "Oct 10, 8:15 AM",
    done: true,
  },
  {
    icon: TruckDeliveryIcon,
    title: "Out for Delivery",
    desc: "Driver is on the way — ETA today before 6 PM",
    time: "In progress",
    done: false,
  },
  {
    icon: Home01Icon,
    title: "Delivered",
    desc: "Package handed to recipient",
    time: "Pending",
    done: false,
  },
]

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("")
  const [tracked, setTracked] = useState(false)

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Track Your Order"
        description="Enter your order number to see exactly where your package is."
      >
        <form
          className="flex max-w-md gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            if (orderId.trim()) setTracked(true)
          }}
        >
          <InputGroup className="flex-1">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Order number e.g. XR-10482"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </InputGroup>
          <Button type="submit">Track</Button>
        </form>
        {tracked && (
          <div className="mt-8 max-w-2xl rounded-2xl border p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-bold">Order #{orderId.toUpperCase()}</p>
                <p className="text-xs text-muted-foreground">
                  3 items · Arriving today
                </p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Out for Delivery
              </span>
            </div>
            <ol className="mt-6 space-y-0">
              {timeline.map((event, i) => (
                <li key={event.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full border-2",
                        event.done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground"
                      )}
                    >
                      <HugeiconsIcon icon={event.icon} className="size-4.5" />
                    </span>
                    {i < timeline.length - 1 && (
                      <span
                        className={cn(
                          "h-10 w-0.5",
                          timeline[i + 1]?.done ? "bg-primary" : "bg-border"
                        )}
                      />
                    )}
                  </div>
                  <div className="pb-6">
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        !event.done && "text-muted-foreground"
                      )}
                    >
                      {event.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{event.desc}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                      {event.time}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
