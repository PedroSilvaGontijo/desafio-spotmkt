import { Metrics } from '@components/Dashboard/metrics/Metrics'
import { CalendarBlock } from '@components/Dashboard/calendar/CalendarBlock'
import { InsightsIA } from '@components/Dashboard/IA/InsightIA'
import { Notifications } from '@components/Dashboard/notifications/Notifications'
import { History } from '@components/Dashboard/history/History'
import { Header } from '@/components/Header'

export default function DashboardPage() {
  return (

    <main className="space-y-8 pb-8">
      <Header />
      <Metrics />
      <CalendarBlock />
      <InsightsIA />
      <Notifications />
      <History />
    </main>
  )
}
