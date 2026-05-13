import AdminPanel from '@/components/AdminPanel'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel | InnovaIT',
  description: 'Manage InnovaIT projects and contact form submissions.',
}

export default function AdminRoute() {
  return <AdminPanel />
}
