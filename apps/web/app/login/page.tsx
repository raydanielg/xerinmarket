"use client"

import { AuthSplit } from "@/components/auth-split"
import { LoginForm } from "@/components/login-form"
import {
  BadgeCheckIcon,
  CustomerSupportIcon,
  DeliveryTruck01Icon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons"

const features = [
  {
    icon: BadgeCheckIcon,
    title: "Verified Sellers",
    desc: "Trusted local vendors",
  },
  {
    icon: DeliveryTruck01Icon,
    title: "Fast Delivery",
    desc: "Same-day in your city",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure Payments",
    desc: "M-Pesa, cards & more",
  },
  {
    icon: CustomerSupportIcon,
    title: "24/7 Support",
    desc: "We're always here",
  },
]

export default function LoginPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Soko lako lote, mahali pamoja."
      description="Discover products from thousands of sellers, all on Xerin Marketplace."
      features={features}
    >
      <LoginForm />
    </AuthSplit>
  )
}
