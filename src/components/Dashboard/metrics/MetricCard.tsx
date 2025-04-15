import * as RadixIcons from '@radix-ui/react-icons'

interface MetricCardProps {
  label: string
  valor: string
  cor: string
  texto: string
  icone: keyof typeof RadixIcons
}

export function MetricCard({ label, valor, cor, texto, icone }: MetricCardProps) {
  const Icon = RadixIcons[icone]

  return (
    <div className={`rounded-2xl p-4 shadow-sm flex items-center gap-4 ${cor}`}>
      <div className="p-2 bg-white rounded-full shadow">
        {Icon && <Icon className={`${texto} w-6 h-6`} />}
      </div>
      <div>
        <p className={`text-sm font-medium ${texto}`}>{label}</p>
        <p className="text-2xl font-bold text-neutral-900">{valor}</p>
      </div>
    </div>
  )
}
