import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductGridCard } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Facebook01Icon,
  Linkedin01Icon,
  Link02Icon,
  NewTwitterIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { posts } from "../posts"

const shareLinks = [
  { name: "Facebook", icon: Facebook01Icon },
  { name: "X", icon: NewTwitterIcon },
  { name: "WhatsApp", icon: WhatsappIcon },
  { name: "LinkedIn", icon: Linkedin01Icon },
  { name: "Copy link", icon: Link02Icon },
]

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-6">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
            <span className="truncate font-medium text-foreground">
              {post.title}
            </span>
          </nav>
          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-3.5" />
            All stories
          </Link>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
              {post.tag}
            </span>
            <span className="text-muted-foreground">
              {post.date} · {post.readTime}
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center justify-between gap-4 border-b pb-5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {post.author[0]}
              </span>
              <div>
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-muted-foreground">Xerin Blog</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {shareLinks.map((s) => (
                <button
                  key={s.name}
                  aria-label={`Share on ${s.name}`}
                  className="flex size-8 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <HugeiconsIcon icon={s.icon} strokeWidth={1.8} className="size-3.5" />
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="mt-8 space-y-5">
            {post.content.slice(0, 2).map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-foreground/80"
              >
                {para}
              </p>
            ))}
            <blockquote className="border-s-4 border-primary bg-neutral-50 px-5 py-4 text-lg font-semibold text-balance">
              &ldquo;{post.quote}&rdquo;
            </blockquote>
            {post.content.slice(2).map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-foreground/80"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
        <section className="mx-auto w-full max-w-7xl px-4 pt-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Shop the Story
            </h2>
            <Link
              href="/products"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              See All
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                className="size-4"
              />
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {post.products.map((p) => (
              <ProductGridCard key={p.name} product={p} />
            ))}
          </div>
        </section>
        <section className="mx-auto w-full max-w-7xl px-4 py-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              More Stories
            </h2>
            <Link
              href="/blog"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              All Stories
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                strokeWidth={2}
                className="size-4"
              />
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-2 font-semibold text-balance group-hover:text-primary">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
