'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.push('/')}
      className="cursor-pointer md:block"
      src="/images/logo.png"
      height="100"
      width="150"
      alt="Logo"
    />
  )
}

export default Logo
