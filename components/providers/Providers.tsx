'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
// Dark Theme supported
import { ThemeProvider } from './ThemeProvider'

interface LayoutProps {
  children: ReactNode
}

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
