"use client"

import { AuthSplit } from "@/components/auth-split"
import { ForgotPasswordForm } from "@/components/forgot-password-form"
import {
  BadgeCheckIcon,
  CustomerSupportIcon,
  DeliveryTruck01Icon,
  ShieldCheckIcon,
} from "@hugeicons/core-free-icons"

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Secure by Default",
    desc: "Your data stays safe",
  },
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
    icon: CustomerSupportIcon,
    title: "24/7 Support",
    desc: "We're always here",
  },
]

export default function ForgotPasswordPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Sahau password? Hakuna shida."
      description="We'll get you back into your account in minutes — your cart is waiting."
      features={features}
    >
      <ForgotPasswordForm />
    </AuthSplit>
  )
}
