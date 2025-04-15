import {
    LightningBoltIcon,
    ExclamationTriangleIcon,
    InfoCircledIcon
  } from '@radix-ui/react-icons'
  
  interface InsightCardProps {
    titulo: string
    mensagem: string
    tom: 'positivo' | 'alerta' | 'neutro'
  }
  
  export function InsightCard({ titulo, mensagem, tom }: InsightCardProps) {
    const estilos: Record<string, string> = {
      positivo: 'bg-green-100 text-green-800',
      alerta: 'bg-red-100 text-red-800',
      neutro: 'bg-blue-100 text-blue-800'
    }
  
    const icones = {
      positivo: <LightningBoltIcon className="w-5 h-5" />,
      alerta: <ExclamationTriangleIcon className="w-5 h-5" />,
      neutro: <InfoCircledIcon className="w-5 h-5" />
    }
  
    return (
      <div className={`rounded-xl p-4 shadow-sm flex items-start gap-4 ${estilos[tom]}`}>
        <div className="p-2 bg-white rounded-full shadow-sm">
          {icones[tom]}
        </div>
        <div>
          <h3 className="font-semibold">{titulo}</h3>
          <p className="text-sm mt-1">{mensagem}</p>
        </div>
      </div>
    )
  }
  