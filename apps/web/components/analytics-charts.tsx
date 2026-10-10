"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  XAxis,
} from "recharts"

import { HugeiconsIcon } from "@hugeicons/react"
import { TrendingUpIcon } from "@hugeicons/core-free-icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"

const salesData = [
  { month: "Apr", sales: 820 },
  { month: "May", sales: 940 },
  { month: "Jun", sales: 760 },
  { month: "Jul", sales: 1120 },
  { month: "Aug", sales: 980 },
  { month: "Sep", sales: 1310 },
  { month: "Oct", sales: 1540 },
]

const salesConfig = {
  sales: { label: "Sales (TSh '000)", color: "var(--primary)" },
} satisfies ChartConfig

const trafficData = [
  { month: "Apr", visitors: 5200, buyers: 620 },
  { month: "May", visitors: 6800, buyers: 840 },
  { month: "Jun", visitors: 6100, buyers: 790 },
  { month: "Jul", visitors: 8400, buyers: 1150 },
  { month: "Aug", visitors: 7900, buyers: 1030 },
  { month: "Sep", visitors: 9800, buyers: 1420 },
  { month: "Oct", visitors: 11600, buyers: 1780 },
]

const trafficConfig = {
  visitors: { label: "Visitors", color: "var(--primary)" },
  buyers: { label: "Buyers", color: "#10b981" },
} satisfies ChartConfig

const ordersData = [
  { month: "May", orders: 186, returns: 12 },
  { month: "Jun", orders: 205, returns: 9 },
  { month: "Jul", orders: 247, returns: 15 },
  { month: "Aug", orders: 231, returns: 11 },
  { month: "Sep", orders: 289, returns: 14 },
  { month: "Oct", orders: 342, returns: 10 },
]

const ordersConfig = {
  orders: { label: "Orders", color: "var(--primary)" },
  returns: { label: "Returns", color: "#d4d4d4" },
} satisfies ChartConfig

const categoryData = [
  { category: "electronics", value: 38, fill: "var(--color-electronics)" },
  { category: "fashion", value: 27, fill: "var(--color-fashion)" },
  { category: "fresh", value: 21, fill: "var(--color-fresh)" },
  { category: "home", value: 14, fill: "var(--color-home)" },
]

const categoryConfig = {
  electronics: { label: "Electronics", color: "#ff5b00" },
  fashion: { label: "Fashion", color: "#8b5cf6" },
  fresh: { label: "Fresh Produce", color: "#10b981" },
  home: { label: "Home & Living", color: "#0ea5e9" },
} satisfies ChartConfig

const radarData = [
  { metric: "Sales", score: 86 },
  { metric: "Orders", score: 92 },
  { metric: "Traffic", score: 78 },
  { metric: "Reviews", score: 84 },
  { metric: "Stock", score: 65 },
  { metric: "Speed", score: 73 },
]

const radarConfig = {
  score: { label: "Score", color: "var(--primary)" },
} satisfies ChartConfig

const targetData = [{ target: 72, fill: "var(--primary)" }]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>
            Monthly sales for the last 7 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={salesConfig} className="h-64 w-full">
            <AreaChart data={salesData} margin={{ left: 8, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-sales)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--color-sales)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="var(--color-sales)"
                strokeWidth={2}
                fill="url(#sales)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600">
            <HugeiconsIcon icon={TrendingUpIcon} strokeWidth={2} className="size-4" />
            +17.6%
          </span>
          <span className="ms-1.5">growth this month</span>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Target</CardTitle>
          <CardDescription>October sales goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <ChartContainer
              config={{ target: { label: "Target", color: "var(--primary)" } }}
              className="mx-auto h-64 w-full"
            >
              <RadialBarChart
                data={targetData}
                startAngle={90}
                endAngle={-270}
                innerRadius={80}
                outerRadius={130}
              >
                <RadialBar dataKey="target" cornerRadius={12} background />
              </RadialBarChart>
            </ChartContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">72%</span>
              <span className="text-xs text-muted-foreground">of target</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          TSh 1.54M of TSh 2.14M reached
        </CardFooter>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Store Traffic</CardTitle>
          <CardDescription>Visitors vs buyers per month</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={trafficConfig} className="h-64 w-full">
            <LineChart data={trafficData} margin={{ left: 8, right: 8, top: 8 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="var(--color-visitors)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="buyers"
                stroke="var(--color-buyers)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600">
            <HugeiconsIcon icon={TrendingUpIcon} strokeWidth={2} className="size-4" />
            +18.4%
          </span>
          <span className="ms-1.5">more visitors this month</span>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sales by Category</CardTitle>
          <CardDescription>Share of total revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={categoryConfig} className="mx-auto h-64 w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="category" hideLabel />} />
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="category"
                innerRadius={60}
                outerRadius={100}
                strokeWidth={4}
                stroke="var(--background)"
              >
                {categoryData.map((entry) => (
                  <Cell key={entry.category} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="category" />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="justify-center text-sm text-muted-foreground">
          Electronics leads with 38% of sales
        </CardFooter>
      </Card>

      <Card className="md:col-span-2 lg:col-span-2">
        <CardHeader>
          <CardTitle>Orders vs Returns</CardTitle>
          <CardDescription>Monthly orders and returns</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={ordersConfig} className="h-64 w-full">
            <BarChart data={ordersData} margin={{ left: 8, right: 8, top: 8 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="orders" fill="var(--color-orders)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="returns" fill="var(--color-returns)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600">
            <HugeiconsIcon icon={TrendingUpIcon} strokeWidth={2} className="size-4" />
            +18.3%
          </span>
          <span className="ms-1.5">orders vs last month</span>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Store Performance</CardTitle>
          <CardDescription>Score across key metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={radarConfig} className="mx-auto h-64 w-full">
            <RadarChart data={radarData}>
              <ChartTooltip content={<ChartTooltipContent />} />
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <Radar
                dataKey="score"
                stroke="var(--color-score)"
                fill="var(--color-score)"
                fillOpacity={0.45}
              />
            </RadarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="justify-center text-sm text-muted-foreground">
          Orders is your strongest metric
        </CardFooter>
      </Card>
    </div>
  )
}
