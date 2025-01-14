import { Tabs, TabsContent } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker"

import { TabsNavigation } from "@/components/dashboard/tabs-navigation"
import { Dashboard } from "@/components/dashboard/dashboard"

export default function DashboardPage() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
          </div>
        </div>
        <Tabs defaultValue="/app/dashboard" className="space-y-4">
          <TabsNavigation />
          <TabsContent value="/app/dashboard" className="space-y-4">
            <Dashboard />
          </TabsContent>
          <TabsContent value="/app/analytics" className="space-y-4">
            here
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}