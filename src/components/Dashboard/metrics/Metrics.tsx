'use client'

import { MetricCard } from './MetricCard'
import data from './MockMetrics.json'

export function Metrics() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <MetricCard
          key={index}
          {...item}
          icone={item.icone as "SpeakerLoudIcon" | "CursorArrowIcon" | "CheckCircledIcon" | "BarChartIcon"}
        />
      ))}
    </section>
  )
}
