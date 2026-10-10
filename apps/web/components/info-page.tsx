import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export function InfoPage({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
          <span className="font-medium text-foreground">{title}</span>
        </nav>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </main>
  )
}

export function ProductGridCard({
  product,
  badge,
}: {
  product: { name: string; price: string; was?: string; image: string }
  badge?: string
}) {
  return (
    <Link href="/product" className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute start-1.5 top-1.5 rounded bg-primary px-1 py-0.5 text-[10px] font-semibold text-primary-foreground">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-1.5 line-clamp-2 text-xs leading-snug font-medium">
        {product.name}
      </h3>
      <div className="mt-0.5 flex items-baseline gap-1.5">
        <span className="text-xs font-semibold">{product.price}</span>
        {product.was && (
          <span className="text-[10px] text-muted-foreground line-through">
            {product.was}
          </span>
        )}
      </div>
    </Link>
  )
}
