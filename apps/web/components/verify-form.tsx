"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "cn"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldGroup } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export function VerifyForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter()
  const [code, setCode] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (code.length === 6) router.push("/dashboard")
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
            <HugeiconsIcon
              icon={SmartPhone01Icon}
              strokeWidth={2}
              className="size-7 text-primary"
            />
          </div>
          <h1 className="text-2xl font-bold">Check your phone</h1>
          <p className="text-sm text-balance text-muted-foreground">
            We sent a 6-digit verification code to{" "}
            <span className="font-medium text-foreground">
              +255 712 345 678
            </span>
          </p>
        </div>
        <Field className="items-center">
          <InputOTP
            maxLength={6}
            value={code}
            onChange={setCode}
            containerClassName="justify-center"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Field>
        <Field>
          <Button type="submit" disabled={code.length < 6}>
            Verify
          </Button>
        </Field>
        <p className="text-center text-sm text-muted-foreground">
          Didn&apos;t get the code?{" "}
          <button
            type="button"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Resend code
          </button>
        </p>
      </FieldGroup>
      <p className="text-center text-sm">
        <Link
          href="/signup"
          className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground"
        >
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            strokeWidth={2}
            className="size-4"
          />
          Back to sign up
        </Link>
      </p>
    </form>
  )
}
