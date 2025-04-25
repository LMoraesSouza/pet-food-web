'use client'
import { useState } from 'react'
import { login } from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/app/components/button'

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    })
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            const result = await login(formData.email, formData.password)
            
            if (result.success) {
                router.push('/dashboard')
            } else {
                setError(result.error?.message || 'Invalid email or password')
            }
        } catch (error) {
            console.log(error)
            setError('Ocorreu um erro inesperado')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-1 items-center justify-center min-h-screen bg-[#D6E7C8]">
            <div className="w-full max-w-[480px] p-16 bg-[#FBF9F9] rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Login
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
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
                    
                    <div className="flex justify-start">
                        <Link 
                            href="/register" 
                            className="text-sm text-[#628745] hover:text-[#45622F] hover:underline transition-colors"
                        >
                            Não possui conta ainda? Cadastre-se aqui
                        </Link>
                    </div>
                    <Button
                        label="login"
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
