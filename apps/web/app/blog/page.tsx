import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { posts } from "./posts"

export default function BlogPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Press & Blog"
        description="News, seller stories, and guides from the Xerin team."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                  {post.tag}
                </span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="mt-2 font-semibold text-balance group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-primary">
                Read more
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
