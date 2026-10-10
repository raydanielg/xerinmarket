import type { ReactNode } from "react"
import { InfoPage } from "@/components/info-page"

export interface LegalSection {
  title: string
  body: string[]
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  children,
}: {
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
  children?: ReactNode
}) {
  return (
    <InfoPage title={title} description={intro ?? `Last updated: ${updated}`}>
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            On this page
          </p>
          <nav className="mt-4 space-y-0">
            {sections.map((section, i) => (
              <div key={section.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {i + 1}
                  </span>
                  {i < sections.length - 1 && (
                    <span className="h-6 w-px bg-border" />
                  )}
                </div>
                <a
                  href={`#${slugify(section.title)}`}
                  className="pb-5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {section.title}
                </a>
              </div>
            ))}
          </nav>
        </aside>
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-muted-foreground">
            Last updated: {updated}
          </p>
          <div className="mt-6 space-y-9">
            {sections.map((section, i) => (
              <section
                key={section.title}
                id={slugify(section.title)}
                className="scroll-mt-24"
              >
                <h2 className="flex items-baseline gap-2.5 font-bold">
                  <span className="text-xs font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                <div className="mt-2.5 space-y-3">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          {children}
        </div>
      </div>
    </InfoPage>
  )
}
