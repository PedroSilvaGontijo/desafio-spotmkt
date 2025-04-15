'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextProps {
  isAuthenticated: boolean
  login: (usuario: string, senha: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const isLoggedIn = document.cookie
      .split('; ')
      .find((row) => row.startsWith('autenticado='))
      ?.split('=')[1] === 'true'

    setIsAuthenticated(isLoggedIn)
  }, [])

  function login(usuario: string, senha: string): boolean {
    if (usuario === 'spotmkt' && senha === '123') {
      document.cookie = 'autenticado=true; path=/'
      document.cookie = `usuario=${encodeURIComponent(usuario)}; path=/`
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  function logout() {
    document.cookie = 'autenticado=; Max-Age=0; path=/'
    document.cookie = 'usuario=; Max-Age=0; path=/'
    setIsAuthenticated(false)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
