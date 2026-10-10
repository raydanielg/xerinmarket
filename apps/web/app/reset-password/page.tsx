"use client"

import { AuthSplit } from "@/components/auth-split"
import { ResetPasswordForm } from "@/components/reset-password-form"
import {
  BadgeCheckIcon,
  CustomerSupportIcon,
  ShieldCheckIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons"

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Secure by Default",
    desc: "Your data stays safe",
  },
  {
    icon: SmartPhone01Icon,
    title: "Back in Minutes",
    desc: "Quick recovery",
  },
  {
    icon: BadgeCheckIcon,
    title: "Verified Only",
    desc: "Real people only",
  },
  {
    icon: CustomerSupportIcon,
    title: "24/7 Support",
    desc: "We're always here",
  },
]

export default function ResetPasswordPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Karibu tena — karibu uingie."
      description="Choose a new password and you're back in business."
      features={features}
    >
      <ResetPasswordForm />
    </AuthSplit>
  )
}
