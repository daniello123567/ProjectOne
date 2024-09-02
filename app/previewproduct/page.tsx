"use client"
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css'
function page() {
  const menu = ['swiper1','swiper2']
  return (
    // <div className='w-[11.15625em] bg-[#F5F5F5] h-[21.44375em]'>

    // </div>
    <div className='w-[10em] relative border border-black h-[10em]'>
     <Swiper
     slidesPerView={1}
     modules={[Pagination]}
     pagination={{
     clickable:true,
     el:'.swiperboy',
     renderBullet:function(index,classname){
      return `<span class="${classname}"></span>`
     }
     }}
     >
      <SwiperSlide>
        <div  className='w-full h-[10em] bg-blue-500'>s1</div>
      </SwiperSlide>
      <SwiperSlide>slide2</SwiperSlide>
      <SwiperSlide>slide3</SwiperSlide>
     </Swiper>
     <div className='swiperboy'></div>
    </div>
  )
}

export default page
