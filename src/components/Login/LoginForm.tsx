'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { ErrorMessage } from '@/components/ErrorMessage'
import { useAuth } from '@/app/context/AuthContext'

export default function LoginForm() {
    const router = useRouter()
    const { login } = useAuth()
  
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
  
    function handleLogin(e: React.FormEvent) {
      e.preventDefault()
      const sucesso = login(usuario, senha)
  
      if (sucesso) {
        router.push('/dashboard')
      } else {
        setErro('Credenciais inválidas')
      }
    }
    return (
        <section className="flex items-center justify-center px-4">
            <Card>
                <form onSubmit={handleLogin}>
                    <h1 className="text-2xl font-bold mb-6 text-black text-center">
                        Login
                    </h1>

                    <Input
                        label="Usuário"
                        id="usuario"
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />

                    <Input
                        label="Senha"
                        id="senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    {erro && <ErrorMessage message={erro} />}

                    <Button type="submit">Entrar</Button>
                </form>
            </Card>
        </section>
    )

}