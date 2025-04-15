'use client'

import historico from './MockHistory.json'
import { HistoryItem } from './HistoryItem'

export function History() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-semibold text-neutral-800 mb-2">
        Histórico de Interações
      </h2>

      {historico
        .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
        .map((item, i) => (
          <HistoryItem
            key={i}
            {...item}
            tipo={['concluido', 'rascunho', 'envio'].includes(item.tipo) ? (item.tipo as 'concluido' | 'rascunho' | 'envio') : 'rascunho'}
          />
        ))}
    </section>
  )
}
