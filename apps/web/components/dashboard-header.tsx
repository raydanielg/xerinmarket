"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CreditCardIcon,
  Logout01Icon,
  MoneyReceiveCircleIcon,
  Notification01Icon,
  PackageIcon,
  Search01Icon,
  Settings05Icon,
  ShoppingCart01Icon,
  StarIcon,
  Store01Icon,
  User02Icon,
} from "@hugeicons/core-free-icons"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Kbd } from "@workspace/ui/components/kbd"
import { Separator } from "@workspace/ui/components/separator"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"

const notifications = [
  {
    icon: ShoppingCart01Icon,
    title: "New order received",
    desc: "Neema Joseph ordered Samsung Galaxy A15",
    time: "2 min ago",
    unread: true,
  },
  {
    icon: MoneyReceiveCircleIcon,
    title: "Payment received",
    desc: "TSh 385,000 via M-Pesa",
    time: "1 hr ago",
    unread: true,
  },
  {
    icon: PackageIcon,
    title: "Low stock alert",
    desc: "Fresh Avocados — only 4 left",
    time: "3 hrs ago",
    unread: false,
  },
  {
    icon: StarIcon,
    title: "New 5-star review",
    desc: "Aisha Salim reviewed your store",
    time: "Yesterday",
    unread: false,
  },
]

export function DashboardHeader({ title }: { title: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ms-1" />
        <Separator
          orientation="vertical"
          className="me-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/dashboard">Seller Center</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2">
        <InputGroup className="hidden w-56 md:flex lg:w-72">
          <InputGroupAddon align="inline-start">
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search products, orders..." />
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" size="icon" className="relative" />}
          >
            <HugeiconsIcon
              icon={Notification01Icon}
              strokeWidth={2}
              className="size-5"
            />
            <span className="absolute top-1.5 end-1.5 size-2 rounded-full bg-primary" />
            <span className="sr-only">Notifications</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              Notifications
              <span className="text-xs font-normal text-muted-foreground">
                2 new
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n) => (
              <DropdownMenuItem
                key={n.title}
                className="flex items-start gap-3 p-3"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <HugeiconsIcon
                    icon={n.icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{n.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {n.desc}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {n.time}
                  </p>
                </div>
                {n.unread && (
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center font-medium text-primary">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" className="size-8 rounded-full p-0" />
            }
          >
            <Avatar className="size-8">
              <AvatarImage src="" alt="Juma Mwangi" />
              <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                JM
              </AvatarFallback>
            </Avatar>
            <span className="sr-only">Account menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                  JM
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">Juma Mwangi</p>
                <p className="truncate text-xs font-normal text-muted-foreground">
                  juma@xerin.co.tz
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <HugeiconsIcon
                icon={User02Icon}
                strokeWidth={2}
                className="text-muted-foreground"
              />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon
                icon={Store01Icon}
                strokeWidth={2}
                className="text-muted-foreground"
              />
              <span>Store Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon
                icon={CreditCardIcon}
                strokeWidth={2}
                className="text-muted-foreground"
              />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon
                icon={Settings05Icon}
                strokeWidth={2}
                className="text-muted-foreground"
              />
              <span>Preferences</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link href="/login" />}>
              <HugeiconsIcon
                icon={Logout01Icon}
                strokeWidth={2}
                className="text-muted-foreground"
              />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
