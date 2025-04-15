'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'

export function Header() {
  const { logout } = useAuth()
  const [usuario, setUsuario] = useState<string>('')

  useEffect(() => {
    const nome = document.cookie
      .split('; ')
      .find((row) => row.startsWith('usuario='))
      ?.split('=')[1] || 'usuário'

    setUsuario(decodeURIComponent(nome))
  }, [])

  return (
    <header className="top-0 left-0 w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between z-50">
      <div className="text-xl font-semibold text-primary">SpotMKT</div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-700">Olá, {usuario}</span>
        <button
          onClick={logout}
          className="text-sm text-red-600 hover:underline"
        >
          Sair
        </button>
      </div>
    </header>
  )
}
