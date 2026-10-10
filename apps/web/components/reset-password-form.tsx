"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "cn"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  EyeIcon,
  EyeOffIcon,
  LockPasswordIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false)
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <div className={cn("flex flex-col gap-6", className)}>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
            <HugeiconsIcon
              icon={CheckmarkCircle01Icon}
              strokeWidth={2}
              className="size-7 text-primary"
            />
          </div>
          <h1 className="text-2xl font-bold">Password updated</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Your password has been reset. You can now log in with your new
            password.
          </p>
        </div>
        <Button render={<Link href="/login" />}>Back to login</Button>
      </div>
    )
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Set a new password</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Almost there — choose a strong password to secure your account.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="password">New password</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={LockPasswordIcon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a new password"
              autoComplete="new-password"
              required
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <HugeiconsIcon
                  icon={showPassword ? EyeOffIcon : EyeIcon}
                  strokeWidth={2}
                />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={LockPasswordIcon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="confirm"
              type={showPassword ? "text" : "password"}
              placeholder="Repeat your password"
              autoComplete="new-password"
              required
            />
          </InputGroup>
        </Field>
        <Field>
          <Button type="submit">Reset password</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
