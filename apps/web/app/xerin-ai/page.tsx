"use client"

import { useEffect, useRef, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AiSparklesIcon,
  SentIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const suggestions = [
  "Find me sneakers under TZS 20,000",
  "Best perfume for a gift?",
  "Cheapest gas cooker in stock",
  "Where is my order?",
  "What's trending in baby care?",
]

const replies = [
  {
    match: ["sneaker", "shoe", "sandal", "footwear"],
    text: "Great choice! The Walkaroo WTG5805 Sport Sandals are a top pick at TZS 17,750 — rated 4.7★ with over 1.5k sold. Want me to add them to your cart?",
  },
  {
    match: ["perfume", "fragrance", "gift", "scent"],
    text: "For gifts, I'd recommend Emerald by POISE (TZS 38,500) — it's alcohol-free and comes in a gift-ready box. Blush by POISE is on sale at -10% if you want a softer scent.",
  },
  {
    match: ["cooker", "oven", "kitchen", "hood"],
    text: "The Hisense 90cm Gas Cooker (TZS 1,469,250) is our best-rated cooker — 540 sold this month. Pair it with the Hisense Chimney Hood for a complete setup!",
  },
  {
    match: ["baby", "diaper", "kids"],
    text: "Bumpie Baby Diapers are trending right now — TZS 12,500 for the jumbo pack with 980+ sold. Free delivery over TZS 100k!",
  },
  {
    match: ["order", "track", "delivery", "package"],
    text: "I can help you track that — head to Track Order and enter your order number (like XR-10482) to see live updates from the courier.",
  },
  {
    match: ["sell", "store", "shop"],
    text: "Want to sell on Xerin? Verification takes under 48 hours — visit the Sell page and you'll be listing products the same day.",
  },
  {
    match: ["cheap", "deal", "discount", "sale", "offer"],
    text: "Best deals right now: Arsenal Home Jersey at -22%, Blush by POISE at -10%, and the Hisense Slim Hood at -13%. Check Flash Deals for the full list!",
  },
]

const fallback =
  "I can help you find products, compare prices, track orders, or discover stores. Try asking about sneakers, perfumes, or appliances!"

export default function XerinAiPage() {
  const [messages, setMessages] = useState<
    { role: "ai" | "user"; text: string }[]
  >([
    {
      role: "ai",
      text: "Habari! I'm XerinAI — your smart shopping assistant. Ask me about products, prices, orders, or stores.",
    },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  function send(text: string) {
    const message = text.trim()
    if (!message || typing) return
    const lower = message.toLowerCase()
    const reply =
      replies.find((r) => r.match.some((m) => lower.includes(m)))?.text ??
      fallback
    setMessages((m) => [...m, { role: "user", text: message }])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { role: "ai", text: reply }])
    }, 1200)
  }

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="relative flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon
                icon={AiSparklesIcon}
                strokeWidth={1.8}
                className="size-5"
              />
              <span className="absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-emerald-500" />
            </div>
            <div>
              <h1 className="font-bold tracking-tight">XerinAI</h1>
              <p className="text-xs text-muted-foreground">
                Online · replies instantly
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto py-5">
            {messages.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "ai" && (
                  <span className="me-2 mt-auto flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={AiSparklesIcon} className="size-4" />
                  </span>
                )}
                <p
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md bg-neutral-100"
                  )}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <span className="me-2 mt-auto flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HugeiconsIcon icon={AiSparklesIcon} className="size-4" />
                </span>
                <span className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-neutral-100 px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-3">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
          >
            <InputGroup className="h-11 flex-1">
              <InputGroupInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask XerinAI anything..."
              />
              <InputGroupAddon align="inline-end">
                <HugeiconsIcon
                  icon={AiSparklesIcon}
                  className="size-4 text-muted-foreground"
                />
              </InputGroupAddon>
            </InputGroup>
            <Button
              type="submit"
              size="icon"
              aria-label="Send message"
              className="size-11 rounded-xl"
            >
              <HugeiconsIcon icon={SentIcon} strokeWidth={2} className="size-5" />
            </Button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
