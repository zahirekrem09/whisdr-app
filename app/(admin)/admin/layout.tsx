import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { notFound, redirect } from 'next/navigation'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()
  const isAdmin = user?.role === 'ADMIN'
  const isSales = user?.role === 'SALES'
  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login')
  // }
  // if (user && !isSales) {
  //   isAdmin ? redirect('/admin') : redirect('/')
  // }

  return <section>{children}</section>
}
