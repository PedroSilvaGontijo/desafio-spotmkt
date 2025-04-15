import {
    InfoCircledIcon,
    ExclamationTriangleIcon,
    CheckCircledIcon
  } from '@radix-ui/react-icons'
  
  interface NotificationProps {
    mensagem: string
    tipo: 'info' | 'alerta' | 'sucesso'
  }
  
  export function NotificationItem({ mensagem, tipo }: NotificationProps) {
    const estilos: Record<string, string> = {
      info: 'bg-blue-100 text-blue-800',
      alerta: 'bg-red-100 text-red-800',
      sucesso: 'bg-green-100 text-green-800'
    }
  
    const icones = {
      info: <InfoCircledIcon className="w-5 h-5" />,
      alerta: <ExclamationTriangleIcon className="w-5 h-5" />,
      sucesso: <CheckCircledIcon className="w-5 h-5" />
    }
  
    return (
      <div className={`rounded-lg px-4 py-3 flex items-center gap-3 ${estilos[tipo]}`}>
        <div className="bg-white rounded-full p-1 shadow">{icones[tipo]}</div>
        <p className="text-sm">{mensagem}</p>
      </div>
    )
  }
  