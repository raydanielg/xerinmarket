"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AiSparklesIcon,
  Cancel01Icon,
  SentIcon,
  Store01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import {
  InputGroup,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const suggestions = [
  "Find me sneakers",
  "Best perfume gift?",
  "Track my order",
  "Current deals",
]

const replies = [
  {
    match: ["sneaker", "shoe", "sandal", "footwear"],
    text: "The Walkaroo WTG5805 Sport Sandals are a top pick at TZS 17,750 — 4.7★ with 1.5k+ sold. Want me to add them to your cart?",
  },
  {
    match: ["perfume", "fragrance", "gift", "scent"],
    text: "For gifts, try Emerald by POISE (TZS 38,500) — alcohol-free in a gift-ready box. Blush is on sale at -10%!",
  },
  {
    match: ["cooker", "oven", "kitchen", "hood"],
    text: "The Hisense 90cm Gas Cooker (TZS 1,469,250) is our best-rated cooker — 540 sold this month.",
  },
  {
    match: ["baby", "diaper", "kids"],
    text: "Bumpie Baby Diapers are trending — TZS 12,500 for the jumbo pack, 980+ sold.",
  },
  {
    match: ["order", "track", "delivery", "package"],
    text: "Head to Track Order and enter your order number (like XR-10482) for live courier updates.",
  },
  {
    match: ["sell", "store", "shop"],
    text: "Selling on Xerin is easy — verification takes under 48 hours. Check the Sell page!",
  },
  {
    match: ["cheap", "deal", "discount", "sale", "offer"],
    text: "Hot right now: Arsenal Jersey -22%, Blush by POISE -10%, Hisense Slim Hood -13%. See Flash Deals!",
  },
]

const fallback =
  "I can help you find products, compare prices, track orders, or discover stores. Try asking about sneakers or perfumes!"

export function AiFab() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<
    { role: "ai" | "user"; text: string }[]
  >([
    {
      role: "ai",
      text: "Habari! Need help shopping? Ask me anything.",
    },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing, open])

  if (pathname === "/xerin-ai") return null

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
    <>
      {open && (
        <div className="fixed end-4 bottom-20 z-50 flex h-[26rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl sm:end-6">
          <div className="flex items-center gap-3 bg-zinc-900 px-4 py-3 text-white">
            <div className="relative flex size-9 items-center justify-center rounded-full bg-primary/20 text-primary">
              <HugeiconsIcon
                icon={AiSparklesIcon}
                strokeWidth={1.8}
                className="size-4.5"
              />
              <span className="absolute -end-0.5 -bottom-0.5 size-2 rounded-full border-2 border-zinc-900 bg-emerald-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">XerinAI</p>
              <p className="text-[10px] text-white/60">
                Online · replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 transition-colors hover:bg-white/10"
            >
              <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "ai" && (
                  <span className="me-1.5 mt-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon
                      icon={AiSparklesIcon}
                      className="size-3.5"
                    />
                  </span>
                )}
                <p
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed",
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
                <span className="me-1.5 mt-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HugeiconsIcon icon={AiSparklesIcon} className="size-3.5" />
                </span>
                <span className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-neutral-100 px-3.5 py-2.5">
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
          <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-t px-3 py-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {s}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t p-3"
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
          >
            <InputGroup className="h-9 flex-1">
              <InputGroupInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
            </InputGroup>
            <Button
              type="submit"
              size="icon"
              aria-label="Send message"
              className="size-9 rounded-lg"
            >
              <HugeiconsIcon icon={SentIcon} strokeWidth={2} className="size-4" />
            </Button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Need help? Ask me"}
        className="group fixed end-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-zinc-900 py-2.5 ps-3 pe-5 text-white shadow-lg transition-all hover:shadow-xl hover:ring-2 hover:ring-primary/40 sm:end-6 sm:bottom-6"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <HugeiconsIcon
            icon={open ? Cancel01Icon : Store01Icon}
            strokeWidth={2}
            className="size-5"
          />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold">Need Help?</span>
          <span className="block text-[11px] text-white/60">
            {open ? "Close" : "Ask me"}
          </span>
        </span>
      </button>
    </>
  )
}
