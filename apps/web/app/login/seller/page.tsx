"use client"

import { AuthSplit } from "@/components/auth-split"
import { LoginForm } from "@/components/login-form"
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

export default function SellerLoginPage() {
  return (
    <AuthSplit
      image="/two-women-viewing-content-phone-local-african-market.jpg"
      imageAlt="Sellers at a local market"
      title="Biashara yako, kiwango kingine."
      description="Open your shop on Xerin today and put your products in front of thousands of buyers ready to pay."
      features={features}
    >
      <LoginForm variant="seller" />
    </AuthSplit>
  )
}
