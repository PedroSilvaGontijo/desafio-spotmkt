'use client'

import insights from './MockInsights.json'
import { InsightCard } from './InsightCard'

export function InsightsIA() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-neutral-800 mb-2">
        Insights da IA
      </h2>

      {insights.map((insight, i) => {
        const validTom = ['positivo', 'alerta', 'neutro'].includes(insight.tom) ? insight.tom : 'neutro';
        return <InsightCard key={i} {...insight} tom={validTom as 'positivo' | 'alerta' | 'neutro'} />;
      })}
    </section>
  )
}
