'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

interface ClinicSliderProps {
  images: ICommonFile[]
}

//FIXME : type error verıyor

const ClinicSlider: React.FC<ClinicSliderProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div className="flex  flex-col  justify-between">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" h-96 w-full rounded-lg"
      >
        {images.map(image => {
          return (
            <SwiperSlide
              key={image.id}
              className="
              relative
              aspect-square 
              w-full
              rounded-xl
              border 
          "
            >
              <Image
                fill
                className="
                block
                h-full 
                w-full
                object-cover
                transition
                 group-hover:scale-110
            "
                src={getImagePath(image.path)}
                alt={image.id}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 w-full rounded-lg"
      >
        {images.map(image => {
          return (
            <SwiperSlide
              key={image.id}
              className="

            h-full
            w-full 
            overflow-hidden
            rounded-xl
            border
          "
            >
              <Image
                fill
                className="
                block
                h-full
                w-full 
                cursor-pointer 
                object-contain
                transition
            "
                src={getImagePath(image.path)}
                alt={image.id}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ClinicSlider

// export default function Page() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null)

//   return (
//     <section className="min-h-screen bg-black py-12">
//       <div className="container">
//         <Swiper
//           loop={true}
//           spaceBetween={10}
//           navigation={true}
//           thumbs={{
//             swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//           }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="h-96 w-full rounded-lg"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex h-full w-full items-center justify-center">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   className="block h-full w-full object-cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Thumbnail */}
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           loop={true}
//           spaceBetween={12}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="thumbs mt-3 h-32 w-full rounded-lg"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <button className="flex h-full w-full items-center justify-center">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   className="block h-full w-full object-cover"
//                 />
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   )
// }
