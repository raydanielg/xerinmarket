"use client"

import { useEffect } from "react"
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"

export interface MapPoint {
  lat: number
  lng: number
}

function ClickHandler({
  onSelect,
}: {
  onSelect: (point: MapPoint) => void
}) {
  useMapEvents({
    click(e) {
      onSelect({ lat: e.latlng.lat, lng: e.latlng.lng })
    },
  })
  return null
}

function Recenter({ point }: { point: MapPoint | null }) {
  const map = useMap()
  useEffect(() => {
    if (point) {
      map.setView(point, Math.max(map.getZoom(), 14))
    }
  }, [map, point])
  return null
}

export default function LeafletMap({
  point,
  onSelect,
}: {
  point: MapPoint | null
  onSelect: (point: MapPoint) => void
}) {
  return (
    <MapContainer
      center={point ?? { lat: -6.7924, lng: 39.2083 }}
      zoom={point ? 14 : 6}
      scrollWheelZoom
      className="z-0 h-80 w-full rounded-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <ClickHandler onSelect={onSelect} />
      <Recenter point={point} />
      {point && (
        <CircleMarker
          center={point}
          radius={9}
          pathOptions={{
            color: "#ff5b00",
            weight: 3,
            fillColor: "#ff5b00",
            fillOpacity: 0.7,
          }}
        />
      )}
    </MapContainer>
  )
}
