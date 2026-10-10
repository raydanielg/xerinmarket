"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AiSparklesIcon,
  Baby01Icon,
  Book01Icon,
  BrushIcon,
  Delete02Icon,
  FootballIcon,
  Globe02Icon,
  Home01Icon,
  Menu01Icon,
  MinusIcon,
  PackageIcon,
  PlusSignIcon,
  Search01Icon,
  ShoppingBag01Icon,
  ShoppingCart01Icon,
  SmartPhone01Icon,
  Store01Icon,
  TruckDeliveryIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const currencies = [
  { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling" },
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
  { code: "UGX", symbol: "USh", name: "Ugandan Shilling" },
  { code: "RWF", symbol: "RF", name: "Rwandan Franc" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
]

const categories = [
  { name: "Electronics", icon: SmartPhone01Icon },
  { name: "Fashion", icon: ShoppingBag01Icon },
  { name: "Fresh Produce", icon: PackageIcon },
  { name: "Home & Living", icon: Home01Icon },
  { name: "Beauty & Care", icon: BrushIcon },
  { name: "Sports", icon: FootballIcon },
  { name: "Baby & Kids", icon: Baby01Icon },
  { name: "Books", icon: Book01Icon },
]

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "sw", label: "Kiswahili", short: "SW" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "AR" },
]

const initialCart = [
  {
    name: "Arsenal Home Jersey 2025/26",
    price: 45000,
    qty: 1,
    image: "/products/arsenal-jersey.jpg",
  },
  {
    name: "Walkaroo WTG5805 Sport Sandals",
    price: 17750,
    qty: 1,
    image: "/products/walkaroo-wtg5805.png",
  },
  {
    name: "Emerald by POISE — 50ml Perfume",
    price: 38500,
    qty: 2,
    image: "/products/emerald-perfume.png",
  },
]

const FREE_SHIPPING = 100000

const formatPrice = (n: number) => `TZS ${n.toLocaleString("en-US")}`

export function SiteHeader() {
  const [currency, setCurrency] = useState("TZS")
  const [language, setLanguage] = useState("en")
  const [cart, setCart] = useState(initialCart)
  const active = currencies.find((c) => c.code === currency)

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shippingProgress = Math.min(subtotal / FREE_SHIPPING, 1)

  const updateQty = (name: string, delta: number) =>
    setCart((items) =>
      items.map((item) =>
        item.name === name
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    )
  const removeItem = (name: string) =>
    setCart((items) => items.filter((item) => item.name !== name))

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 md:gap-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/xerin-logo.png"
            alt="Xerin Marketplace"
            width={110}
            height={34}
            priority
            className="h-8 w-auto rounded-sm"
          />
        </Link>
        <div className="hidden flex-1 justify-center sm:flex">
          <InputGroup className="w-full max-w-xl">
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search products, brands, sellers..." />
          </InputGroup>
        </div>
        <div className="ms-auto flex items-center gap-1.5 sm:ms-0 sm:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="sm" />}
            >
              {active?.symbol} {currency}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuRadioGroup
                value={currency}
                onValueChange={setCurrency}
              >
                {currencies.map((c) => (
                  <DropdownMenuRadioItem
                    key={c.code}
                    value={c.code}
                    className="flex items-center justify-between gap-6"
                  >
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">{c.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {c.code}
                      </span>
                    </span>
                    <span className="ms-auto text-sm font-bold text-primary">
                      {c.symbol}
                    </span>
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="relative" />
              }
            >
              <HugeiconsIcon
                icon={ShoppingCart01Icon}
                strokeWidth={2}
                className="size-5"
              />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -end-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </SheetTrigger>
            <SheetContent className="w-full gap-0 p-0 sm:max-w-md">
              <SheetHeader className="border-b">
                <SheetTitle className="flex items-center gap-2 text-base font-bold">
                  <HugeiconsIcon
                    icon={ShoppingCart01Icon}
                    strokeWidth={2}
                    className="size-5"
                  />
                  Your Cart
                  {cartCount > 0 && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      {cartCount} {cartCount === 1 ? "item" : "items"}
                    </span>
                  )}
                </SheetTitle>
              </SheetHeader>
              {cart.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-neutral-100 text-muted-foreground">
                    <HugeiconsIcon
                      icon={ShoppingBag01Icon}
                      strokeWidth={1.5}
                      className="size-8"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Your cart is empty</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Looks like you haven&apos;t added anything yet.
                    </p>
                  </div>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href="/products"
                        className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
                      />
                    }
                  >
                    Start Shopping
                  </SheetClose>
                </div>
              ) : (
                <>
                  <div className="border-b p-4">
                    <div className="flex items-center gap-2 text-xs">
                      <HugeiconsIcon
                        icon={TruckDeliveryIcon}
                        strokeWidth={2}
                        className="size-4 shrink-0 text-primary"
                      />
                      {subtotal >= FREE_SHIPPING ? (
                        <span className="font-medium text-emerald-600">
                          You&apos;ve unlocked FREE delivery!
                        </span>
                      ) : (
                        <span className="text-muted-foreground">
                          Add{" "}
                          <span className="font-semibold text-foreground">
                            {formatPrice(FREE_SHIPPING - subtotal)}
                          </span>{" "}
                          more for free delivery
                        </span>
                      )}
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${shippingProgress * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto p-4">
                    {cart.map((item) => (
                      <div key={item.name} className="flex gap-3">
                        <div className="size-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <p className="line-clamp-2 text-sm leading-snug font-medium">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm font-semibold">
                            {formatPrice(item.price)}
                          </p>
                          <div className="mt-auto flex items-center justify-between pt-1.5">
                            <div className="flex items-center rounded-md border">
                              <button
                                onClick={() => updateQty(item.name, -1)}
                                disabled={item.qty <= 1}
                                aria-label="Decrease quantity"
                                className="flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
                              >
                                <HugeiconsIcon
                                  icon={MinusIcon}
                                  className="size-3.5"
                                />
                              </button>
                              <span className="w-8 text-center text-xs font-semibold">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQty(item.name, 1)}
                                aria-label="Increase quantity"
                                className="flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                              >
                                <HugeiconsIcon
                                  icon={PlusSignIcon}
                                  className="size-3.5"
                                />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.name)}
                              aria-label={`Remove ${item.name}`}
                              className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                            >
                              <HugeiconsIcon
                                icon={Delete02Icon}
                                className="size-4"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto space-y-3 border-t p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-base font-bold">
                        {formatPrice(subtotal)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Shipping & taxes calculated at checkout
                    </p>
                    <Button
                      size="lg"
                      className="w-full"
                      render={<Link href="/checkout" />}
                    >
                      Proceed to Checkout
                    </Button>
                    <SheetClose
                      render={
                        <Button variant="ghost" className="w-full" size="sm" />
                      }
                    >
                      Continue Shopping
                    </SheetClose>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
          <Button render={<Link href="/login" />} size="sm">
            Sign in
          </Button>
        </div>
      </div>
      <div className="hidden border-t md:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center gap-1 px-4">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="sm" />}
            >
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
              All Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {categories.map((category) => (
                <DropdownMenuItem key={category.name}>
                  <HugeiconsIcon
                    icon={category.icon}
                    strokeWidth={2}
                    className="text-muted-foreground"
                  />
                  <span>{category.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <nav className="flex min-w-0 items-center gap-1 overflow-x-auto">
            <Link
              href="/worldwide"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} className="size-4" />
              Worldwide
            </Link>
            <Link
              href="/stores"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <HugeiconsIcon icon={Store01Icon} strokeWidth={2} className="size-4" />
              Stores
            </Link>
            <Link
              href="/xerin-ai"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-primary transition-colors hover:bg-primary/10"
            >
              <HugeiconsIcon icon={AiSparklesIcon} strokeWidth={2} className="size-4" />
              XerinAI
            </Link>
          </nav>
          <div className="ms-auto shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="ghost" size="sm" />}
              >
                <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
                {languages.find((l) => l.code === language)?.short}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={setLanguage}
                >
                  {languages.map((l) => (
                    <DropdownMenuRadioItem
                      key={l.code}
                      value={l.code}
                      className="flex items-center gap-2"
                    >
                      <span className="flex size-6 items-center justify-center rounded bg-muted text-[9px] font-bold">
                        {l.short}
                      </span>
                      <span className="text-sm font-medium">{l.label}</span>
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="border-t px-4 py-2 sm:hidden">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search products, brands, sellers..." />
        </InputGroup>
      </div>
    </header>
  )
}
