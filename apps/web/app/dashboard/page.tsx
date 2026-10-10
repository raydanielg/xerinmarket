import { cn } from "cn"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { RevenueChart } from "@/components/revenue-chart"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MoneyReceiveCircleIcon,
  PackageIcon,
  ShoppingCart01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const stats = [
  {
    title: "Today's Revenue",
    value: "TSh 1,240,500",
    change: "+12.4%",
    note: "from yesterday",
    icon: MoneyReceiveCircleIcon,
    tint: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Orders",
    value: "38",
    change: "+8",
    note: "new orders today",
    icon: ShoppingCart01Icon,
    tint: "bg-primary/10 text-primary",
  },
  {
    title: "Products",
    value: "214",
    change: "+4",
    note: "added this week",
    icon: PackageIcon,
    tint: "bg-sky-500/10 text-sky-600",
  },
  {
    title: "Customers",
    value: "1,847",
    change: "+3.2%",
    note: "vs last month",
    icon: UserGroupIcon,
    tint: "bg-violet-500/10 text-violet-600",
  },
]

const orders = [
  {
    id: "#XRN-1042",
    customer: "Neema Joseph",
    product: "Samsung Galaxy A15",
    status: "Paid",
    amount: "TSh 385,000",
  },
  {
    id: "#XRN-1041",
    customer: "Baraka Kimaro",
    product: "Vitenge (6 pcs)",
    status: "Pending",
    amount: "TSh 120,000",
  },
  {
    id: "#XRN-1040",
    customer: "Aisha Salim",
    product: "Fresh Avocados (10kg)",
    status: "Paid",
    amount: "TSh 45,000",
  },
  {
    id: "#XRN-1039",
    customer: "David Mushi",
    product: "Bluetooth Speaker",
    status: "Shipped",
    amount: "TSh 95,000",
  },
  {
    id: "#XRN-1038",
    customer: "Fatuma Ali",
    product: "Kitchen Blender",
    status: "Delivered",
    amount: "TSh 150,000",
  },
]

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader title="Dashboard" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex items-start gap-3 rounded-xl bg-muted/40 p-4"
              >
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg",
                    stat.tint
                  )}
                >
                  <HugeiconsIcon
                    icon={stat.icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="mt-0.5 text-xl font-bold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    <span className="font-medium text-emerald-600">
                      {stat.change}
                    </span>{" "}
                    {stat.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>
                  Daily revenue for the last 12 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Latest activity in your store
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-end">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-xs text-muted-foreground">
                            {order.id} · {order.product}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Paid" ||
                              order.status === "Delivered"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-end font-medium whitespace-nowrap">
                          {order.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
