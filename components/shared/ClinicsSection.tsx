'use client'

import React from 'react'
import Container from '../ui/container'
import ClinicCard from './ClinicCard'
import ClinicCardVertical from './ClinicCardVertical'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface IClinicsSection {
  clinics: ICompanyProps[]
  isSeachPage?: boolean
}
const ClinicsSection: React.FC<IClinicsSection> = ({ clinics, isSeachPage = false }) => {
  return (
    <Container>
      {isSeachPage ? (
        <div
          className="
            grid
            w-full 
            grid-cols-1 
            gap-4
         
          "
        >
          {clinics.map(clinic => {
            return (
              <React.Fragment key={clinic.id}>
                <ClinicCard key={clinic.id} clinic={clinic} />
                <div className=" block md:hidden">
                  <ClinicCardVertical key={clinic.id} clinic={clinic} />
                </div>
              </React.Fragment>
            )
          })}
        </div>
      ) : (
        <>
          <h4 className=" mb-4 font-bold ">Highly Rating Clinics</h4>
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
                slidesPerView: 5,
                spaceBetween: 16,
              },
            }}
            modules={[Navigation, Pagination]}
            className="h-full overflow-hidden "
          >
            {clinics.length > 0
              ? clinics.map(clinic => (
                  <SwiperSlide
                    className="mb-2 h-full w-full overflow-hidden rounded-lg border shadow-sm shadow-cyan-100 "
                    key={clinic.id}
                  >
                    <ClinicCardVertical key={clinic.id} clinic={clinic} />
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </>
      )}
    </Container>
  )
}
export default ClinicsSection
