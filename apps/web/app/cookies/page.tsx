import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LegalPage } from "@/components/legal-page"

const sections = [
  {
    title: "What cookies actually are",
    body: [
      "Cookies are small files your browser saves when you visit a website. Think of them as short-term memory — they help Xerin remember your cart, keep you signed in, and recall your language and currency between visits.",
    ],
  },
  {
    title: "The ones we can't switch off",
    body: [
      "Essential cookies keep the site working: your shopping cart, your login session, and your checkout. Without them, the marketplace simply doesn't function — you can't turn these off, and they don't track you anywhere else.",
    ],
  },
  {
    title: "The ones that help us improve",
    body: [
      "Analytics cookies tell us which pages people visit, what's slow, and where shoppers get stuck. Everything is anonymized — we see patterns, not people. This is how we know which parts of Xerin to fix first.",
    ],
  },
  {
    title: "The ones for marketing",
    body: [
      "Marketing cookies help us show you deals you might actually care about and measure whether our campaigns worked. They also power features like 'recently viewed'. If you'd rather not have these, you can opt out anytime in your account settings.",
    ],
  },
  {
    title: "You're in control",
    body: [
      "Your browser lets you clear or block cookies whenever you like. Just know that blocking essential cookies will break sign-in and checkout — analytics and marketing cookies are safe to refuse.",
      "Most browsers explain how under Settings > Privacy. If you're on the Xerin app, you'll find cookie controls under Settings > Privacy too.",
    ],
  },
  {
    title: "Questions?",
    body: [
      "Anything unclear about how we use cookies? Email privacy@xerin.co.tz — we're happy to explain without the jargon.",
    ],
  },
]

export default function CookiesPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <LegalPage
        title="Cookie Policy"
        updated="October 2026"
        intro="What cookies we use, why we use them, and how to switch them off."
        sections={sections}
      />
      <SiteFooter />
    </div>
  )
}
