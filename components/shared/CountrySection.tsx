'use client'
import React from 'react'
import Image from 'next/image'
import useCountry from '@/store/useCountry'
import Container from '../ui/container'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

type Props = {}

const CountrySection = (props: Props) => {
  const countries = useCountry(s => s.countries)
  return (
    <Container>
      <h4 className=" mb-4 font-bold ">Explore by Destination</h4>
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
        {countries.length > 0
          ? [...countries, ...countries, ...countries].map((c, i) => (
              <SwiperSlide
                className="relative aspect-square h-full w-full  overflow-hidden rounded-md"
                key={i}
              >
                <Image
                  className="block  h-full w-full cursor-pointer rounded-md  object-cover transition-all hover:scale-105    md:block"
                  src={`/images/${i % 2 == 0 ? 'istanbul.jpg' : 'london.jpeg'}`}
                  fill
                  alt="Logo"
                />
                <span
                  style={{
                    textShadow: '0 1px 2px black',
                  }}
                  className=" absolute  bottom-0 right-0 block -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-lg font-bold  text-white"
                >
                  {c.name}
                </span>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </Container>
  )
}

export default CountrySection
