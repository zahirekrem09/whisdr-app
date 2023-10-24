'use client'
import { usePathname, useSearchParams } from 'next/navigation'

import CategoryBox from './CategoryBox'

interface ICategoriesTypesSection {
  categories: ICategory[]
  filterHandler?: (category: { id: number | null }) => void
}
const CategoriesTypesSection: React.FC<ICategoriesTypesSection> = ({ categories }) => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()
  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }
  return (
    <div
      className="
          container
          mt-20 
          flex 
          flex-row 
           items-center
          justify-center
          gap-2
           overflow-x-auto
        "
    >
      {categories.map(item => (
        <CategoryBox
          key={item.id}
          label={item.name}
          icon={item.imagePath}
          selected={Number(category) === item.id}
          id={item.id}
        />
      ))}
    </div>
  )
}
export default CategoriesTypesSection
