import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const Menu = () => {
  return (
    <nav className="flex flex-row items-center justify-between gap-3 ">
      <Link className={buttonVariants({ variant: 'ghost' })} href={'/'}>
        Register
      </Link>
      <Link className={buttonVariants({ variant: 'primary' })} href={'/login'}>
        Login
      </Link>
    </nav>
  )
}

export default Menu
