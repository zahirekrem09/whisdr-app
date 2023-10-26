import Login from '@/components/shared/Login'

import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

import { FC } from 'react'

interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = async ({}) => {
  const user = await getCurrentUser()

  if (user) {
    redirect('/')
  }

  return (
    <div className="absolute inset-0">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        <Login />
      </div>
    </div>
  )
}

export default LoginPage
