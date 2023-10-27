'use client'

import React from 'react'
import { ModeToggle } from '../shared/ModeToggle'
import { UserDropdown } from '../shared/UserDropdown'
import { getCurrentUser } from '@/lib/session'
import { useSession } from 'next-auth/react'

const Menu = () => {
  const { data } = useSession()
  return (
    <nav className="flex flex-row items-center justify-between gap-3 ">
      <ModeToggle />
      <UserDropdown user={data?.user} />
    </nav>
  )
}

export default Menu
