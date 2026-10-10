import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InfoPage } from "@/components/info-page"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon, TimeQuarterIcon } from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"

const jobs = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Dar es Salaam · Remote", type: "Full-time" },
  { title: "Logistics Coordinator", team: "Operations", location: "Dar es Salaam", type: "Full-time" },
  { title: "Seller Success Manager", team: "Commercial", location: "Arusha", type: "Full-time" },
  { title: "Customer Support Agent (Sw/En)", team: "Support", location: "Remote", type: "Part-time" },
  { title: "Product Designer", team: "Design", location: "Dar es Salaam · Hybrid", type: "Full-time" },
  { title: "Data Analyst", team: "Data", location: "Remote", type: "Contract" },
]

export default function CareersPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <InfoPage
        title="Careers at Xerin"
        description="Help us build the future of commerce in East Africa."
      >
        <div className="grid gap-3">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex flex-col gap-3 rounded-2xl border p-5 transition-all hover:border-primary sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{job.title}</h2>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {job.team}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon icon={TimeQuarterIcon} className="size-3.5" />
                    {job.type}
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="shrink-0">
                Apply Now
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-neutral-100 p-6 text-center">
          <p className="font-semibold">Don&apos;t see your role?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Send us your CV at{" "}
            <span className="font-medium text-primary">
              careers@xerin.co.tz
            </span>{" "}
            — we&apos;re always looking for great people.
          </p>
        </div>
      </InfoPage>
      <SiteFooter />
    </div>
  )
}
