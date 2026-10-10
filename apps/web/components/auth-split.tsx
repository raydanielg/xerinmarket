"use client"

import Image from "next/image"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

export interface AuthFeature {
  icon: IconSvgElement
  title: string
  desc: string
}

interface AuthSplitProps {
  image: string
  imageAlt: string
  title: string
  description: string
  features: AuthFeature[]
  children: React.ReactNode
}

export function AuthSplit({
  image,
  imageAlt,
  title,
  description,
  features,
  children,
}: AuthSplitProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <Image
              src="/xerin-logo.png"
              alt="Xerin Marketplace"
              width={150}
              height={47}
              priority
              className="rounded-md"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-x-8 bottom-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <p className="text-2xl font-semibold text-white">{title}</p>
            <p className="text-sm text-white/70">{description}</p>
          </div>
          <div className="h-px w-full bg-white/15" />
          <div className="flex gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex-1 rounded-xl border border-white/25 bg-white/15 p-3 backdrop-blur-md"
              >
                <HugeiconsIcon
                  icon={feature.icon}
                  strokeWidth={2}
                  className="size-5 text-white"
                />
                <p className="mt-2 text-sm leading-tight font-medium text-white">
                  {feature.title}
                </p>
                <p className="mt-0.5 text-xs leading-tight text-white/70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
