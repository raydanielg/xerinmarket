"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"

const data = [
  { day: "Sep 29", revenue: 420 },
  { day: "Sep 30", revenue: 510 },
  { day: "Oct 1", revenue: 380 },
  { day: "Oct 2", revenue: 640 },
  { day: "Oct 3", revenue: 590 },
  { day: "Oct 4", revenue: 820 },
  { day: "Oct 5", revenue: 760 },
  { day: "Oct 6", revenue: 910 },
  { day: "Oct 7", revenue: 700 },
  { day: "Oct 8", revenue: 1050 },
  { day: "Oct 9", revenue: 980 },
  { day: "Oct 10", revenue: 1240 },
]

const config = {
  revenue: {
    label: "Revenue (TSh '000)",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <ChartContainer config={config} className="h-64 w-full">
      <AreaChart data={data} margin={{ left: 8, right: 8, top: 8 }}>
        <defs>
          <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.4} />
            <stop offset="100%" stopColor="var(--color-revenue)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          interval="preserveStartEnd"
          tickFormatter={(v: string) => v.slice(4)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="var(--color-revenue)"
          strokeWidth={2}
          fill="url(#revenue)"
        />
      </AreaChart>
    </ChartContainer>
  )
}
