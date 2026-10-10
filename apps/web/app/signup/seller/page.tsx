"use client"

import { AuthSplit } from "@/components/auth-split"
import { SignupForm } from "@/components/signup-form"
import {
  AnalyticsUpIcon,
  MoneyReceiveCircleIcon,
  Store01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

const features = [
  {
    icon: Store01Icon,
    title: "Free Storefront",
    desc: "Open in minutes",
  },
  {
    icon: UserGroupIcon,
    title: "Ready Buyers",
    desc: "Thousands daily",
  },
  {
    icon: MoneyReceiveCircleIcon,
    title: "Fast Payouts",
    desc: "Straight to M-Pesa",
  },
  {
    icon: AnalyticsUpIcon,
    title: "Grow Smarter",
    desc: "Know what sells",
  },
]

export default function SellerSignupPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Anza kuuza leo — bure kabisa."
      description="Join thousands of sellers already growing their business on Xerin Marketplace."
      features={features}
    >
      <SignupForm variant="seller" />
    </AuthSplit>
  )
}
