import React, { useContext, useEffect } from 'react'
import localFont from 'next/font/local'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import globalStore from '@/app/store/globalstore'

const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })

function Imagecarousel({arrayOfImages}:{arrayOfImages:string[]}){
  
  const {setSingleproductvisibilty} = useContext(globalStore);
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
              <Image alt='image' src={img} width={500} height={500} className='w-full object-cover h-full'/>
            </SwiperSlide>
          })}

        </Swiper>
        <Image onClick={()=>setSingleproductvisibilty(false)} alt='image' src="Cancel.svg" width={500} height={500} className='w-[1.5em] z-[300000] absolute top-[1em] right-[1em] h-[1.5em]'/>

        <div className={`${smallFont.className} absolute top-[1em] left-[1em] bg-[#ece9e0] w-max h-max p-[0.25em] font-[0.75em]`}>New</div>
      </div>
  )
}

export default Imagecarousel