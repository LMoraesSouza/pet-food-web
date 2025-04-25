'use client'
import { useState } from 'react'
import { login } from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/app/components/button'
import resend from '@/app/lib/resend'
import { error } from 'console'

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Login() {
    // const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent) => {
        console.log('oiii')
        const { data, error } = await resend.emails.send({
            from: 'Acme <petfood.suporte@gmail.com>',
            to: ['okilor.lukas@gmail.com'],
            subject: 'Teste',
            text: 'oieee'
          });

        console.log(data, error)
        // e.preventDefault()
        // setError('')
        // setIsLoading(true)

        // try {
        //     const result = await login(formData.email, formData.password)
            
        //     if (result.success) {
        //         router.push('/dashboard')
        //     } else {
        //         setError(result.error?.message || 'Invalid email or password')
        //     }
        // } catch (error) {
        //     console.log(error)
        //     setError('Ocorreu um erro inesperado')
        // } finally {
        //     setIsLoading(false)
        // }
    }

    return (
        <div className="flex flex-1 items-center justify-center min-h-screen bg-[#D6E7C8]">
            <div className="w-full max-w-[480px] p-16 bg-[#FBF9F9] rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Cadastro
                </h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    
                    <div className="flex justify-start">
                        <Link 
                            href="/login" 
                            className="text-sm text-[#628745] hover:text-[#45622F] hover:underline transition-colors"
                        >
                            Já possui cadastro? Faça login aqui
                        </Link>
                    </div>
                    <Button
                        label="Criar conta"
                        loadingLabel='Carregando...'
                        isLoading={isLoading}
                    />
                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )} 
                    
                </form>
            </div>
        </div>
    )
}
