'use client'

import { useState } from 'react'
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, isSameMonth, isToday, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const mockAcoes = [
  { date: new Date(), label: 'Campanha X' },
  { date: addDays(new Date(), 2), label: 'Revisão Criativa' },
  { date: addDays(new Date(), 5), label: 'Publicação' }
]

export function CalendarBlock() {
  const [currentDate] = useState(new Date())

  const startDate = startOfWeek(startOfMonth(currentDate), { locale: ptBR, weekStartsOn: 0 })
  const endDate = endOfMonth(currentDate)

  const dias: Date[] = []
  let dia = startDate

  while (dia <= endDate || dias.length % 7 !== 0) {
    dias.push(dia)
    dia = addDays(dia, 1)
  }

  const eventos = (date: Date) =>
    mockAcoes.find((acao) => isSameDay(date, acao.date))

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-neutral-800 mb-4">Calendário de Ações</h2>

      <div className="grid grid-cols-7 text-sm text-neutral-500 mb-2">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia) => (
          <div key={dia} className="text-center font-medium">
            {dia}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm">
        {dias.map((date, i) => {
          const evento = eventos(date)
          const hoje = isToday(date)

          return (
            <div
              key={i}
              className={`p-2 rounded-lg text-center border
                ${!isSameMonth(date, currentDate) ? 'text-neutral-300' : 'text-neutral-800'}
                ${hoje ? 'bg-orange-100 font-bold' : ''}
                ${evento ? 'border-orange-500' : 'border-transparent'}
              `}
            >
              <div>{format(date, 'd')}</div>
              {evento && (
                <div className="text-[10px] mt-1 text-orange-600 font-medium">
                  {evento.label}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
