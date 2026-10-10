"use client"

import { AuthSplit } from "@/components/auth-split"
import { SignupForm } from "@/components/signup-form"
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

export default function SignupPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Karibu — anza kununua leo."
      description="Create your free account and shop from thousands of verified sellers near you."
      features={features}
    >
      <SignupForm />
    </AuthSplit>
  )
}
