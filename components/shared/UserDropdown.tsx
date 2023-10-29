'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { User } from 'next-auth'

import { LineChart, LogOut, UserIcon } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function UserDropdown({
  onOpenChange,
  user,
}: {
  onOpenChange?: (open: boolean) => void
  user?: User
}) {
  return (
    <div className="flex items-center gap-4">
      {user ? (
        <AccountMenu user={user} onOpenChange={onOpenChange} />
      ) : (
        <>
          <Link className={buttonVariants({ variant: 'ghost' })} href={'/'}>
            Register
          </Link>
          <Link className={buttonVariants({ variant: 'primary' })} href={'/login'}>
            Login
          </Link>
        </>
      )}
    </div>
  )
}

const AccountMenu = ({
  onOpenChange,
  user,
}: {
  onOpenChange?: (open: boolean) => void
  user: User
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-full  gap-2 bg-white bg-opacity-0 px-2 hover:bg-white hover:bg-opacity-5  lg:px-4"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link
            href={`/users/${user.id}`}
            className="flex cursor-pointer items-center gap-1"
            onClick={() => onOpenChange?.(false)}
          >
            <UserIcon className="mr-2 h-4 w-4" />
            <p className="truncate">{user.email}</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard"
            className="flex cursor-pointer items-center gap-1"
            onClick={() => onOpenChange?.(false)}
          >
            <LineChart className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="focus:bg-destructive text-red-300 hover:cursor-pointer hover:text-white"
          onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
