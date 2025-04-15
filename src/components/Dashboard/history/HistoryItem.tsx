import { ClockIcon, FileTextIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface HistoryItemProps {
  data: string
  descricao: string
  tipo: 'concluido' | 'rascunho' | 'envio'
}

export function HistoryItem({ data, descricao, tipo }: HistoryItemProps) {
  const estilos: Record<string, string> = {
    concluido: 'bg-green-100 text-green-800',
    rascunho: 'bg-yellow-100 text-yellow-800',
    envio: 'bg-blue-100 text-blue-800'
  }

  const icones = {
    concluido: <ClockIcon className="w-5 h-5" />,
    rascunho: <FileTextIcon className="w-5 h-5" />,
    envio: <PaperPlaneIcon className="w-5 h-5" />
  }

  return (
    <div className={`rounded-lg px-4 py-3 flex items-start gap-3 ${estilos[tipo]}`}>
      <div className="bg-white rounded-full p-1 shadow mt-1">
        {icones[tipo]}
      </div>
      <div>
        <p className="text-sm font-medium">{descricao}</p>
        <span className="text-xs text-neutral-600">
          {format(new Date(data), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
        </span>
      </div>
    </div>
  )
}
