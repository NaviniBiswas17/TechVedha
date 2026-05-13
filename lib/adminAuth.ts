'use client'

const ADMIN_AUTH_KEY = 'innovait.adminAuth'

export const demoAdminCredentials = {
  email: 'admin@innovait.com',
  password: 'admin123',
}

export function isAdminLoggedIn() {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(ADMIN_AUTH_KEY) === 'true'
}

export function loginAdmin(email: string, password: string) {
  const isValid =
    email.trim().toLowerCase() === demoAdminCredentials.email &&
    password === demoAdminCredentials.password

  if (isValid && typeof window !== 'undefined') {
    window.localStorage.setItem(ADMIN_AUTH_KEY, 'true')
  }

  return isValid
}

export function logoutAdmin() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(ADMIN_AUTH_KEY)
}
