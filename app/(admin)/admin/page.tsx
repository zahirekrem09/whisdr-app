import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const AdminPage = async (props: Props) => {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login')
  }
  return (
    <div className="mt-24">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default AdminPage
