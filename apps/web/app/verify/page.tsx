"use client"

import { AuthSplit } from "@/components/auth-split"
import { VerifyForm } from "@/components/verify-form"
import {
  BadgeCheckIcon,
  CustomerSupportIcon,
  ShieldCheckIcon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons"

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Secure Account",
    desc: "OTP protected",
  },
  {
    icon: SmartPhone01Icon,
    title: "Instant Access",
    desc: "Verify in seconds",
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

export default function VerifyPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Hatua moja tu — karibu ndani."
      description="Enter the code we sent to your phone and you're all set."
      features={features}
    >
      <VerifyForm />
    </AuthSplit>
  )
}
