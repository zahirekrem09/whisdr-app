'use client'
import { usePathname, useSearchParams } from 'next/navigation'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
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
    <div className="mx-auto mt-24  max-w-2xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          '@0.00': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '@0.75': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          '@1.00': {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        className="mx-auto h-full w-full   "
      >
        {categories.map(item => (
          <SwiperSlide className="mb-2   h-full " key={item.id}>
            <CategoryBox
              key={item.id}
              label={item.name}
              icon={item.imagePath}
              selected={Number(category) === item.id}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default CategoriesTypesSection
