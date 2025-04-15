'use client'

import notificacoes from './MockNotifications.json'
import { NotificationItem } from './NotificationsItem'

export function Notifications() {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-semibold text-neutral-800 mb-2">
        Notificações
      </h2>

      {notificacoes.map((n, i) => {
        const tipoValido = ['sucesso', 'alerta', 'info'].includes(n.tipo) ? n.tipo : 'info';
        return <NotificationItem key={i} {...n} tipo={tipoValido as 'sucesso' | 'alerta' | 'info'} />;
      })}
    </section>
  )
}
