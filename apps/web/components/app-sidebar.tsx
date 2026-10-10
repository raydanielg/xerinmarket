"use client"

import * as React from "react"
import Image from "next/image"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AnalyticsUpIcon,
  CustomerSupportIcon,
  DashboardSquare01Icon,
  Home01Icon,
  MoneyReceiveCircleIcon,
  PackageIcon,
  SentIcon,
  Settings05Icon,
  ShoppingBag01Icon,
  ShoppingCart01Icon,
  SmartPhone01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

const data = {
  user: {
    name: "Juma Mwangi",
    email: "juma@xerin.co.tz",
    avatar: "",
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />,
      isActive: true,
    },
    {
      title: "Products",
      url: "#",
      icon: <HugeiconsIcon icon={PackageIcon} strokeWidth={2} />,
      items: [
        { title: "All Products", url: "#" },
        { title: "Add Product", url: "#" },
        { title: "Inventory", url: "#" },
        { title: "Categories", url: "#" },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: <HugeiconsIcon icon={ShoppingCart01Icon} strokeWidth={2} />,
      items: [
        { title: "New Orders", url: "#" },
        { title: "Processing", url: "#" },
        { title: "Completed", url: "#" },
        { title: "Returns", url: "#" },
      ],
    },
    {
      title: "Customers",
      url: "#",
      icon: <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />,
      items: [
        { title: "All Customers", url: "#" },
        { title: "Reviews", url: "#" },
        { title: "Messages", url: "#" },
      ],
    },
    {
      title: "Payments",
      url: "#",
      icon: <HugeiconsIcon icon={MoneyReceiveCircleIcon} strokeWidth={2} />,
      items: [
        { title: "Payouts", url: "#" },
        { title: "Transactions", url: "#" },
        { title: "M-Pesa", url: "#" },
      ],
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} />,
      items: [
        { title: "Sales", url: "/dashboard/analytics" },
        { title: "Traffic", url: "/dashboard/analytics" },
        { title: "Reports", url: "/dashboard/analytics" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: <HugeiconsIcon icon={Settings05Icon} strokeWidth={2} />,
      items: [
        { title: "Store Profile", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Notifications", url: "#" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: <HugeiconsIcon icon={CustomerSupportIcon} strokeWidth={2} />,
    },
    {
      title: "Feedback",
      url: "#",
      icon: <HugeiconsIcon icon={SentIcon} strokeWidth={2} />,
    },
  ],
  categories: [
    {
      name: "Electronics",
      url: "#",
      icon: <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={2} />,
    },
    {
      name: "Fashion",
      url: "#",
      icon: <HugeiconsIcon icon={ShoppingBag01Icon} strokeWidth={2} />,
    },
    {
      name: "Fresh Produce",
      url: "#",
      icon: <HugeiconsIcon icon={PackageIcon} strokeWidth={2} />,
    },
    {
      name: "Home & Living",
      url: "#",
      icon: <HugeiconsIcon icon={Home01Icon} strokeWidth={2} />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/dashboard" />}>
              <div className="flex flex-col gap-1">
                <Image
                  src="/xerin-logo.png"
                  alt="Xerin Marketplace"
                  width={90}
                  height={28}
                  className="h-7 w-auto rounded-sm"
                />
                <span className="text-xs font-medium">Seller Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.categories} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
