import { AnalyticsCharts } from "@/components/analytics-charts"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"

export default function AnalyticsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader title="Analytics" />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <AnalyticsCharts />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
