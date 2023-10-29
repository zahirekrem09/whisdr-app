'use client'

import React from 'react'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Container from '../ui/container'
interface IHallmarkSectionProps {
  hallmarks: ISelect[]
}
const HallmarksListSection: React.FC<IHallmarkSectionProps> = ({ hallmarks }) => {
  const imageObj = {
    Shopping: 'Shopping.jpg',
    Cultural: 'Cultural.avif',
    Gastronomic: 'gastronomy.jpg',
    Relaxing: 'Relaxing.jpg',
    Leisure: 'Leisure.avif',
    Sports: 'Sports.avif',
    'Seaside (Beach)': 'Seaside (Beach).avif',
  }

  return (
    <Container>
      <h4 className=" mb-4 font-bold ">Explore by Activities</h4>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
        modules={[Navigation]}
        className="h-[200px] overflow-hidden "
      >
        {hallmarks.length > 0
          ? hallmarks.map(hallmark => (
              <SwiperSlide
                className="relative aspect-square h-full w-full  overflow-hidden rounded-md"
                key={hallmark.id}
              >
                <Image
                  className="block h-full w-full cursor-pointer rounded-md object-cover   transition-all hover:scale-105 md:block"
                  src={`/images/${imageObj[hallmark.name]}`}
                  fill
                  alt="Logo"
                />
                <span
                  style={{
                    textShadow: '0 1px 2px black',
                  }}
                  className=" absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-lg font-bold  text-white drop-shadow-sm"
                >
                  {hallmark.name}
                </span>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </Container>
  )
}

export default HallmarksListSection
