"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import type { MapPoint } from "./leaflet-map"

const LeafletMap = dynamic(() => import("./leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="h-80 w-full animate-pulse rounded-md bg-muted" />
  ),
})

export function MapPickerDialog({
  onPick,
}: {
  onPick: (address: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [point, setPoint] = useState<MapPoint | null>(null)
  const [loading, setLoading] = useState(false)

  async function confirm() {
    if (!point) return
    setLoading(true)
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${point.lat}&lon=${point.lng}`
      )
      const data = await res.json()
      onPick(
        data.display_name ??
          `${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`
      )
    } catch {
      onPick(`${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`)
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" type="button" />}>
        <HugeiconsIcon icon={Location01Icon} strokeWidth={2} />
        Choose on map
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Pick a location</DialogTitle>
          <DialogDescription>
            Click anywhere on the map to drop a pin at your location.
          </DialogDescription>
        </DialogHeader>
        <LeafletMap point={point} onSelect={setPoint} />
        <DialogFooter>
          <Button type="button" onClick={confirm} disabled={!point || loading}>
            {loading ? "Locating..." : "Use this location"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
