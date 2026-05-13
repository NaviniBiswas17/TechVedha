'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockKeyhole, LogIn, Shield } from 'lucide-react'
import Navbar from './Navbar'
import { demoAdminCredentials, isAdminLoggedIn, loginAdmin } from '@/lib/adminAuth'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState(demoAdminCredentials.email)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAdminLoggedIn()) {
      router.replace('/admin')
    }
  }, [router])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!loginAdmin(email, password)) {
      setError('Invalid admin email or password.')
      return
    }

    router.replace('/admin')
  }

  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
            alt="Admin workspace"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-950/85 to-black/80" />
        </div>

        <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="mt-2 text-sm text-gray-600">Sign in to manage projects and contact submissions.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-100"
                placeholder="admin@innovait.com"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-gray-700">Password</span>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  placeholder="Enter password"
                  required
                />
              </div>
            </label>

            {error && (
              <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/25 transition-colors hover:bg-green-600"
            >
              Login
              <LogIn className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-5 rounded-lg bg-gray-50 px-4 py-3 text-xs text-gray-600">
            Demo password: <span className="font-semibold text-gray-900">{demoAdminCredentials.password}</span>
          </div>
        </div>
      </section>
    </main>
  )
}
