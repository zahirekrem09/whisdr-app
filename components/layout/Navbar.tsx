'use client'
import useCountry from '@/store/useCountry'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import { useEffect } from 'react'
import useCategory from '@/store/useCategory'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = ({}) => {
  const getCountries = useCountry(s => s.getCountries)
  const getCategoriesSelect = useCategory(s => s.getCategoriesSelect)

  const pathname = usePathname()

  useEffect(() => {
    getCountries()
    getCategoriesSelect()
  }, [getCategoriesSelect, getCountries])
  return (
    <header className="bg-background fixed z-10  w-full shadow-sm">
      <div
        className="
          
          border-b-[1px]
           py-4
        "
      >
        <div
          className={cn(
            'mx-auto flex flex-row items-center justify-between gap-3 px-4  md:gap-0',
            pathname !== '/' && 'container',
          )}
        >
          <Logo />
          <Search />
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Navbar
