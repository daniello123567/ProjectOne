import React from 'react'
import localFont from 'next/font/local'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules'

const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })

function Imagecarousel({arrayOfImages}:{arrayOfImages:string[]}){
  return (
    <div className='pictures relative md:h-full bg-white h-[20em] md:w-[50%] w-full'>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          navigation
          pagination={{
            clickable: true
          }}>
          {arrayOfImages.map((img: string) => {
            return <SwiperSlide className='w-full z-[3000] h-full' key={img}>
              <div className='w-full h-full'>{img}</div>
            </SwiperSlide>
          })}

        </Swiper>
        <div className={`${smallFont.className} absolute top-[1em] left-[1em] bg-[#ece9e0] w-max h-max p-[0.25em] font-[0.75em]`}>New</div>
      </div>
  )
}

export default Imagecarousel
