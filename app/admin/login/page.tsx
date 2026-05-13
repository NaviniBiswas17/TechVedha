import AdminLogin from '@/components/AdminLogin'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Login | InnovaIT',
  description: 'Login to the InnovaIT admin panel.',
}

export default function AdminLoginRoute() {
  return <AdminLogin />
}
