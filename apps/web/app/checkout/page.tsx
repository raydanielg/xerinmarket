"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "cn"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MapPickerDialog } from "@/components/map-picker-dialog"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  CheckmarkCircle02Icon,
  CreditCardIcon,
  Edit02Icon,
  Location01Icon,
  LockPasswordIcon,
  Mail01Icon,
  ShieldCheckIcon,
  SmartPhone01Icon,
  TruckDeliveryIcon,
  User02Icon,
} from "@hugeicons/core-free-icons"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import { Spinner } from "@workspace/ui/components/spinner"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const cartItems = [
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

const COUNTRIES = ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"]

const REGIONS: Record<string, string[]> = {
  Tanzania: [
    "Dar es Salaam",
    "Arusha",
    "Dodoma",
    "Mwanza",
    "Mbeya",
    "Kilimanjaro",
    "Morogoro",
    "Tanga",
    "Pwani",
    "Zanzibar (Mjini Magharibi)",
    "Iringa",
    "Mara",
    "Kagera",
    "Mtwara",
    "Tabora",
    "Shinyanga",
    "Kigoma",
    "Lindi",
    "Ruvuma",
    "Rukwa",
    "Geita",
    "Simiyu",
    "Singida",
    "Njombe",
    "Katavi",
    "Songwe",
    "Manyara",
  ],
  Kenya: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"],
  Uganda: ["Kampala", "Entebbe", "Jinja", "Mbarara", "Gulu"],
  Rwanda: ["Kigali", "Butare", "Gisenyi", "Ruhengeri"],
  Burundi: ["Bujumbura", "Gitega", "Ngozi"],
}

const paymentMethods = [
  {
    id: "mobile",
    name: "Mobile Money",
    desc: "M-Pesa, Tigo Pesa, Airtel Money",
    badges: ["M-Pesa", "Tigo Pesa", "Airtel"],
  },
  {
    id: "card",
    name: "Credit Card",
    desc: "Pay securely with your card",
    badges: ["VISA", "Mastercard", "Amex"],
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    desc: "Pay when your order arrives",
    badges: ["Cash"],
  },
]

const steps = ["Account", "Delivery", "Review & Pay"]

const dialCodes = ["+255", "+254", "+256", "+250", "+257"]

const FREE_SHIPPING = 100000
const formatPrice = (n: number) => `TZS ${n.toLocaleString("en-US")}`

export default function CheckoutPage() {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")
  const [delivery, setDelivery] = useState({
    name: "",
    code: "+255",
    phone: "",
    street: "",
    country: "Tanzania",
    region: "",
  })
  const [sameAsDelivery, setSameAsDelivery] = useState(true)
  const [billing, setBilling] = useState({
    name: "",
    code: "+255",
    phone: "",
    street: "",
    country: "Tanzania",
    region: "",
  })
  const [payment, setPayment] = useState("mobile")
  const [payOpen, setPayOpen] = useState(false)
  const [payStage, setPayStage] = useState<"input" | "waiting">("input")
  const [payPhone, setPayPhone] = useState("")
  const [payCode, setPayCode] = useState("+255")
  const [placed, setPlaced] = useState(false)

  function handlePay() {
    if (payment === "cod") {
      setPlaced(true)
      return
    }
    setPayStage("input")
    setPayOpen(true)
  }

  function confirmPay() {
    setPayStage("waiting")
    setTimeout(() => {
      setPayOpen(false)
      setPlaced(true)
    }, 4000)
  }

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal >= FREE_SHIPPING ? 0 : 5000
  const total = subtotal + shipping

  const deliveryReady =
    delivery.name.trim() &&
    delivery.phone.trim() &&
    delivery.street.trim() &&
    delivery.region

  if (placed) {
    return (
      <div className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <div className="flex max-w-md flex-col items-center gap-4 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                strokeWidth={1.8}
                className="size-9"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Order placed successfully!
            </h1>
            <p className="text-sm text-muted-foreground">
              Order <span className="font-semibold text-foreground">#XR-10482</span>{" "}
              is confirmed. We&apos;ll send delivery updates to{" "}
              {delivery.phone || "your phone"}.
            </p>
            <div className="flex gap-2.5">
              <Button render={<Link href="/products" />}>
                Continue Shopping
              </Button>
              <Button variant="outline" render={<Link href="/" />}>
                Back Home
              </Button>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Checkout
          </h1>
          <ol className="mt-5 flex items-center gap-2 sm:gap-3">
            {steps.map((label, i) => (
              <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors",
                    i < step
                      ? "border-primary bg-primary text-primary-foreground"
                      : i === step
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                  )}
                >
                  {i < step ? (
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      className="size-4"
                    />
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={cn(
                    "hidden text-sm font-medium sm:block",
                    i <= step ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className={cn(
                      "h-0.5 flex-1 rounded-full",
                      i < step ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]">
            <div>
              {step === 0 && (
                <div className="max-w-lg">
                  <h2 className="text-lg font-bold tracking-tight">
                    Sign in for a faster checkout
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Track orders and checkout quicker next time.
                  </p>
                  <form
                    className="mt-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setStep(1)
                    }}
                  >
                    <FieldGroup className="grid gap-4">
                      <Field>
                        <FieldLabel htmlFor="co-email">Email</FieldLabel>
                        <InputGroup>
                          <InputGroupAddon align="inline-start">
                            <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                          </InputGroupAddon>
                          <InputGroupInput
                            id="co-email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="co-pass">Password</FieldLabel>
                        <InputGroup>
                          <InputGroupAddon align="inline-start">
                            <HugeiconsIcon
                              icon={LockPasswordIcon}
                              strokeWidth={2}
                            />
                          </InputGroupAddon>
                          <InputGroupInput
                            id="co-pass"
                            type="password"
                            placeholder="Your password"
                            autoComplete="current-password"
                          />
                        </InputGroup>
                      </Field>
                    </FieldGroup>
                    <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                      <Button type="submit" className="flex-1">
                        Sign In & Continue
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Continue as Guest
                      </Button>
                    </div>
                  </form>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    New to Xerin?{" "}
                    <Link
                      href="/signup"
                      className="font-medium text-primary hover:underline"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              )}
              {step === 1 && (
                <div className="max-w-2xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold tracking-tight">
                      Delivery Details
                    </h2>
                    <button
                      onClick={() => setStep(0)}
                      className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      <HugeiconsIcon
                        icon={ArrowLeft01Icon}
                        className="size-3.5"
                      />
                      Back
                    </button>
                  </div>
                  <FieldGroup className="mt-5 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="d-name">
                          Recipient&apos;s full name
                        </FieldLabel>
                        <InputGroup>
                          <InputGroupAddon align="inline-start">
                            <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
                          </InputGroupAddon>
                          <InputGroupInput
                            id="d-name"
                            placeholder="e.g. Amina Juma"
                            autoComplete="name"
                            value={delivery.name}
                            onChange={(e) =>
                              setDelivery({ ...delivery, name: e.target.value })
                            }
                          />
                        </InputGroup>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="d-phone">Phone number</FieldLabel>
                        <InputGroup>
                          <InputGroupAddon align="inline-start">
                            <HugeiconsIcon
                              icon={SmartPhone01Icon}
                              strokeWidth={2}
                            />
                            <select
                              aria-label="Country code"
                              value={delivery.code}
                              onChange={(e) =>
                                setDelivery({
                                  ...delivery,
                                  code: e.target.value,
                                })
                              }
                              className="bg-transparent text-sm font-medium outline-none"
                            >
                              {dialCodes.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </InputGroupAddon>
                          <InputGroupInput
                            id="d-phone"
                            type="tel"
                            placeholder="7XX XXX XXX"
                            autoComplete="tel"
                            value={delivery.phone}
                            onChange={(e) =>
                              setDelivery({
                                ...delivery,
                                phone: e.target.value,
                              })
                            }
                          />
                        </InputGroup>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="d-street">
                        Street / Neighbourhood (Mtaa)
                      </FieldLabel>
                      <div className="flex gap-2">
                        <InputGroup className="flex-1">
                          <InputGroupAddon align="inline-start">
                            <HugeiconsIcon
                              icon={Location01Icon}
                              strokeWidth={2}
                            />
                          </InputGroupAddon>
                          <InputGroupInput
                            id="d-street"
                            placeholder="e.g. Sinza, Kinondoni"
                            value={delivery.street}
                            onChange={(e) =>
                              setDelivery({
                                ...delivery,
                                street: e.target.value,
                              })
                            }
                          />
                        </InputGroup>
                        <MapPickerDialog
                          onPick={(address) =>
                            setDelivery({ ...delivery, street: address })
                          }
                        />
                      </div>
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="d-country">Country</FieldLabel>
                        <NativeSelect
                          id="d-country"
                          className="w-full"
                          value={delivery.country}
                          onChange={(e) =>
                            setDelivery({
                              ...delivery,
                              country: e.target.value,
                              region: "",
                            })
                          }
                        >
                          {COUNTRIES.map((c) => (
                            <NativeSelectOption key={c} value={c}>
                              {c}
                            </NativeSelectOption>
                          ))}
                        </NativeSelect>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="d-region">
                          Region (Mkoa)
                        </FieldLabel>
                        {REGIONS[delivery.country] ? (
                          <NativeSelect
                            id="d-region"
                            className="w-full"
                            value={delivery.region}
                            onChange={(e) =>
                              setDelivery({
                                ...delivery,
                                region: e.target.value,
                              })
                            }
                          >
                            <NativeSelectOption value="" disabled>
                              Select your region
                            </NativeSelectOption>
                            {(REGIONS[delivery.country] ?? []).map((r) => (
                              <NativeSelectOption key={r} value={r}>
                                {r}
                              </NativeSelectOption>
                            ))}
                          </NativeSelect>
                        ) : (
                          <InputGroup>
                            <InputGroupInput
                              id="d-region"
                              placeholder="Enter your region"
                              value={delivery.region}
                              onChange={(e) =>
                                setDelivery({
                                  ...delivery,
                                  region: e.target.value,
                                })
                              }
                            />
                          </InputGroup>
                        )}
                      </Field>
                    </div>
                    <div className="border-t pt-5">
                      <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium">
                        <Checkbox
                          checked={sameAsDelivery}
                          onCheckedChange={(v) =>
                            setSameAsDelivery(v === true)
                          }
                        />
                        Billing address is the same as delivery address
                      </label>
                      {!sameAsDelivery && (
                        <FieldGroup className="mt-4 grid gap-4 rounded-xl bg-neutral-50 p-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="b-name">
                                Billing full name
                              </FieldLabel>
                              <InputGroup>
                                <InputGroupAddon align="inline-start">
                                  <HugeiconsIcon
                                    icon={User02Icon}
                                    strokeWidth={2}
                                  />
                                </InputGroupAddon>
                                <InputGroupInput
                                  id="b-name"
                                  placeholder="Billing name"
                                  value={billing.name}
                                  onChange={(e) =>
                                    setBilling({
                                      ...billing,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </InputGroup>
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="b-phone">
                                Phone number
                              </FieldLabel>
                              <InputGroup>
                                <InputGroupAddon align="inline-start">
                                  <HugeiconsIcon
                                    icon={SmartPhone01Icon}
                                    strokeWidth={2}
                                  />
                                  <select
                                    aria-label="Country code"
                                    value={billing.code}
                                    onChange={(e) =>
                                      setBilling({
                                        ...billing,
                                        code: e.target.value,
                                      })
                                    }
                                    className="bg-transparent text-sm font-medium outline-none"
                                  >
                                    {dialCodes.map((c) => (
                                      <option key={c} value={c}>
                                        {c}
                                      </option>
                                    ))}
                                  </select>
                                </InputGroupAddon>
                                <InputGroupInput
                                  id="b-phone"
                                  type="tel"
                                  placeholder="7XX XXX XXX"
                                  value={billing.phone}
                                  onChange={(e) =>
                                    setBilling({
                                      ...billing,
                                      phone: e.target.value,
                                    })
                                  }
                                />
                              </InputGroup>
                            </Field>
                          </div>
                          <Field>
                            <FieldLabel htmlFor="b-street">
                              Street / Neighbourhood
                            </FieldLabel>
                            <InputGroup>
                              <InputGroupAddon align="inline-start">
                                <HugeiconsIcon
                                  icon={Location01Icon}
                                  strokeWidth={2}
                                />
                              </InputGroupAddon>
                              <InputGroupInput
                                id="b-street"
                                placeholder="Billing street address"
                                value={billing.street}
                                onChange={(e) =>
                                  setBilling({
                                    ...billing,
                                    street: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </Field>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="b-country">
                                Country
                              </FieldLabel>
                              <NativeSelect
                                id="b-country"
                                className="w-full"
                                value={billing.country}
                                onChange={(e) =>
                                  setBilling({
                                    ...billing,
                                    country: e.target.value,
                                    region: "",
                                  })
                                }
                              >
                                {COUNTRIES.map((c) => (
                                  <NativeSelectOption key={c} value={c}>
                                    {c}
                                  </NativeSelectOption>
                                ))}
                              </NativeSelect>
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="b-region">
                                Region (Mkoa)
                              </FieldLabel>
                              {REGIONS[billing.country] ? (
                                <NativeSelect
                                  id="b-region"
                                  className="w-full"
                                  value={billing.region}
                                  onChange={(e) =>
                                    setBilling({
                                      ...billing,
                                      region: e.target.value,
                                    })
                                  }
                                >
                                  <NativeSelectOption value="" disabled>
                                    Select your region
                                  </NativeSelectOption>
                                  {(REGIONS[billing.country] ?? []).map((r) => (
                                    <NativeSelectOption key={r} value={r}>
                                      {r}
                                    </NativeSelectOption>
                                  ))}
                                </NativeSelect>
                              ) : (
                                <InputGroup>
                                  <InputGroupInput
                                    id="b-region"
                                    placeholder="Enter your region"
                                    value={billing.region}
                                    onChange={(e) =>
                                      setBilling({
                                        ...billing,
                                        region: e.target.value,
                                      })
                                    }
                                  />
                                </InputGroup>
                              )}
                            </Field>
                          </div>
                        </FieldGroup>
                      )}
                    </div>
                  </FieldGroup>
                  <Button
                    size="lg"
                    className="mt-6 w-full"
                    disabled={!deliveryReady}
                    onClick={() => setStep(2)}
                  >
                    Continue to Review
                  </Button>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold tracking-tight">
                        Delivery Address
                      </h2>
                      <button
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        <HugeiconsIcon icon={Edit02Icon} className="size-3.5" />
                        Edit
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 text-sm">
                      <p className="font-semibold">{delivery.name}</p>
                      <p className="text-muted-foreground">
                        {delivery.street}, {delivery.region},{" "}
                        {delivery.country}
                      </p>
                      <p className="text-muted-foreground">
                        {delivery.code} {delivery.phone}
                      </p>
                    </div>
                    <div className="mt-3 border-t pt-3 text-sm">
                      <p className="text-muted-foreground">
                        Billing:{" "}
                        <span className="font-medium text-foreground">
                          {sameAsDelivery
                            ? "Same as delivery address"
                            : `${billing.name || "—"}, ${billing.street || "—"}, ${billing.region || "—"}, ${billing.country}`}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h2 className="text-lg font-bold tracking-tight">
                      Choose a payment method
                    </h2>
                    <div className="mt-4 divide-y rounded-2xl border">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setPayment(method.id)}
                          className="flex w-full items-center gap-3 p-4 text-start transition-colors hover:bg-neutral-50"
                        >
                          <span
                            className={cn(
                              "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                              payment === method.id
                                ? "border-primary"
                                : "border-border"
                            )}
                          >
                            {payment === method.id && (
                              <span className="size-2.5 rounded-full bg-primary" />
                            )}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold">
                              {method.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {method.desc}
                            </span>
                          </span>
                          <span className="flex shrink-0 gap-1">
                            {method.badges.map((badge) => (
                              <span
                                key={badge}
                                className="rounded border bg-background px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-muted-foreground"
                              >
                                {badge}
                              </span>
                            ))}
                          </span>
                        </button>
                      ))}
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <HugeiconsIcon
                        icon={ShieldCheckIcon}
                        strokeWidth={2}
                        className="size-4 text-emerald-600"
                      />
                      Your payment is encrypted and secure
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="gap-1.5"
                  >
                    <HugeiconsIcon
                      icon={ArrowLeft01Icon}
                      className="size-4"
                    />
                    Back
                  </Button>
                </div>
              )}
            </div>
            <aside className="self-start rounded-2xl bg-neutral-50 p-6 lg:sticky lg:top-24">
              <h2 className="font-bold tracking-tight">Your Order</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {cartItems.reduce((s, i) => s + i.qty, 0)} items ·{" "}
                {step === 2 && delivery.region
                  ? `Delivery to ${delivery.region} · Est. 1–3 days`
                  : "Standard shipping"}
              </p>
              <div className="mt-4 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute -top-0 -end-0 flex size-4.5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                        {item.qty}
                      </span>
                    </div>
                    <p className="line-clamp-2 flex-1 text-xs leading-snug font-medium">
                      {item.name}
                    </p>
                    <p className="text-xs font-semibold">
                      {formatPrice(item.price * item.qty)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2 border-t pt-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal (incl. VAT)</span>
                  <span className="font-medium text-foreground">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span
                    className={cn(
                      "font-medium",
                      shipping === 0 ? "text-emerald-600" : "text-foreground"
                    )}
                  >
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-3 text-base font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              {step === 2 && (
                <div className="mt-5 border-t pt-4">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                      Have a promo or voucher code?
                      <HugeiconsIcon
                        icon={ArrowLeft01Icon}
                        className="ms-auto size-3.5 -rotate-90 transition-transform group-open:rotate-90"
                      />
                    </summary>
                    <div className="mt-3 flex gap-2">
                      <input
                        placeholder="Enter code"
                        className="h-9 flex-1 rounded-lg border bg-background px-3 text-sm outline-none focus:border-primary"
                      />
                      <Button variant="outline" size="sm" className="h-9">
                        Apply
                      </Button>
                    </div>
                  </details>
                  <Button
                    size="lg"
                    className="mt-4 w-full"
                    onClick={handlePay}
                  >
                    Pay {formatPrice(total)}
                  </Button>
                  <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
                    <HugeiconsIcon
                      icon={ShieldCheckIcon}
                      strokeWidth={2}
                      className="size-3.5"
                    />
                    Secure checkout · Payments protected
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Dialog open={payOpen} onOpenChange={setPayOpen}>
        <DialogContent className="sm:max-w-sm">
          {payStage === "input" ? (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={
                      payment === "card" ? CreditCardIcon : SmartPhone01Icon
                    }
                    strokeWidth={2}
                    className="size-5 text-primary"
                  />
                  {payment === "card"
                    ? "Pay with Card"
                    : "Pay with Mobile Money"}
                </DialogTitle>
                <DialogDescription>
                  {payment === "card"
                    ? "Enter your card details to complete the payment."
                    : "Enter your mobile money number — we'll send a payment request to your phone."}
                </DialogDescription>
              </DialogHeader>
              {payment === "card" ? (
                <div className="grid gap-3">
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Card number" inputMode="numeric" />
                  </InputGroup>
                  <div className="grid grid-cols-2 gap-3">
                    <InputGroup>
                      <InputGroupInput placeholder="MM / YY" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupInput placeholder="CVV" inputMode="numeric" />
                    </InputGroup>
                  </div>
                </div>
              ) : (
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={2} />
                    <select
                      aria-label="Country code"
                      value={payCode}
                      onChange={(e) => setPayCode(e.target.value)}
                      className="bg-transparent text-sm font-medium outline-none"
                    >
                      {dialCodes.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </InputGroupAddon>
                  <InputGroupInput
                    type="tel"
                    placeholder="7XX XXX XXX"
                    value={payPhone}
                    onChange={(e) => setPayPhone(e.target.value)}
                  />
                </InputGroup>
              )}
              <div className="flex gap-2.5">
                <DialogClose
                  render={<Button variant="ghost" className="flex-1" />}
                >
                  Cancel
                </DialogClose>
                <Button
                  className="flex-1"
                  disabled={payment !== "card" && !payPhone.trim()}
                  onClick={confirmPay}
                >
                  Lipa {formatPrice(total)}
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="relative flex size-16 items-center justify-center">
                <Spinner className="size-16 text-primary" />
                <HugeiconsIcon
                  icon={SmartPhone01Icon}
                  className="absolute size-6 text-primary"
                />
              </div>
              <div>
                <p className="font-bold">Waiting for confirmation</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {payment === "card"
                    ? "Contacting your bank — please wait..."
                    : `Check your phone (${payCode} ${payPhone}) and enter your PIN to confirm the payment.`}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                This window will update automatically — don&apos;t close it.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <SiteFooter />
    </div>
  )
}
