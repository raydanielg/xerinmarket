"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { cn } from "cn"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar01Icon,
  EyeIcon,
  EyeOffIcon,
  Location01Icon,
  LockPasswordIcon,
  SmartPhone01Icon,
  Store01Icon,
  User02Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
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
import { Calendar } from "@workspace/ui/components/calendar"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { MapPickerDialog } from "@/components/map-picker-dialog"

const COUNTRIES = [
  "Tanzania",
  "Kenya",
  "Uganda",
  "Rwanda",
  "Burundi",
  "Zambia",
  "Malawi",
  "South Africa",
  "Nigeria",
  "Egypt",
  "United Arab Emirates",
  "China",
  "India",
  "United Kingdom",
  "United States",
  "Other",
]

interface SignupFormProps extends React.ComponentProps<"form"> {
  variant?: "customer" | "seller"
}

export function SignupForm({
  className,
  variant = "customer",
  ...props
}: SignupFormProps) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [dob, setDob] = useState<Date>()
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const isSeller = variant === "seller"

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={(e) => {
        e.preventDefault()
        router.push("/verify")
      }}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Sign up as a {isSeller ? "seller" : "customer"}
          </p>
        </div>
        {isSeller && (
          <Field>
            <FieldLabel htmlFor="business">Business name</FieldLabel>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <HugeiconsIcon icon={Store01Icon} strokeWidth={2} />
              </InputGroupAddon>
              <InputGroupInput
                id="business"
                type="text"
                placeholder="e.g. Mwangi Electronics"
                autoComplete="organization"
                required
              />
            </InputGroup>
          </Field>
        )}
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="outline"
                  type="button"
                  className={cn(
                    "w-full justify-start font-normal",
                    !dob && "text-muted-foreground"
                  )}
                />
              }
            >
              <HugeiconsIcon
                icon={Calendar01Icon}
                strokeWidth={2}
                className="me-2 text-muted-foreground"
              />
              {dob ? format(dob, "do MMMM yyyy") : "Select your date of birth"}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={dob}
                onSelect={setDob}
                captionLayout="dropdown"
                defaultMonth={dob ?? new Date(2000, 0)}
                startMonth={new Date(1940, 0)}
                endMonth={new Date()}
              />
            </PopoverContent>
          </Popover>
          <input
            type="hidden"
            id="dob"
            name="dob"
            value={dob ? format(dob, "yyyy-MM-dd") : ""}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="phone"
              type="tel"
              placeholder="+255 7XX XXX XXX"
              autoComplete="tel"
              required
            />
          </InputGroup>
        </Field>
        {isSeller && (
          <>
            <Field>
              <FieldLabel htmlFor="country">Country</FieldLabel>
              <NativeSelect
                id="country"
                className="w-full"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <NativeSelectOption value="" disabled>
                  Select your country
                </NativeSelectOption>
                {COUNTRIES.map((c) => (
                  <NativeSelectOption key={c} value={c}>
                    {c}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
              {country && (
                <p className="text-xs text-muted-foreground">
                  You&apos;ll be listed as a{" "}
                  <span className="font-medium text-foreground">
                    {country === "Tanzania" ? "local" : "international"} seller
                  </span>
                </p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="address">Business address</FieldLabel>
              <div className="flex gap-2">
                <InputGroup className="flex-1">
                  <InputGroupAddon align="inline-start">
                    <HugeiconsIcon icon={Location01Icon} strokeWidth={2} />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="address"
                    type="text"
                    placeholder="Where is your business?"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </InputGroup>
                <MapPickerDialog onPick={setAddress} />
              </div>
            </Field>
          </>
        )}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <HugeiconsIcon icon={LockPasswordIcon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
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
        <Field orientation="horizontal" className="items-start">
          <Checkbox id="terms" required />
          <FieldLabel
            htmlFor="terms"
            className="font-normal leading-snug text-muted-foreground"
          >
            I agree to the{" "}
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4 hover:no-underline"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4 hover:no-underline"
            >
              Policy
            </a>
          </FieldLabel>
        </Field>
        <Field>
          <Button type="submit">Agree and Continue</Button>
        </Field>
      </FieldGroup>
      <div className="h-px w-full bg-border" />
      <div className="flex flex-col gap-2 text-center text-sm">
        <p className="text-muted-foreground">
          Already have an account?{" "}
          <Link
            href={isSeller ? "/login/seller" : "/login"}
            className="font-medium text-foreground underline underline-offset-4"
          >
            Login
          </Link>
        </p>
        <p className="text-muted-foreground">
          {isSeller ? "Are you a customer? " : "Are you a seller? "}
          <Link
            href={isSeller ? "/signup" : "/signup/seller"}
            className="font-medium text-foreground underline underline-offset-4"
          >
            {isSeller ? "Sign up" : "Seller sign up"}
          </Link>
        </p>
      </div>
    </form>
  )
}
