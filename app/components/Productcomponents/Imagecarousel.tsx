import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import localFont from 'next/font/local';
import Image from 'next/image';
const font= localFont({src:"../../fonts/dd.woff2"});
function Imagecarousel({arrayofImages}:{arrayofImages:string[]}) {
  return (
    <div className='w-full group lg:h-[70%] relative h-[60%]'>
    <Swiper
    slidesPerView={1}
    modules={[Pagination]}
    grabCursor
    mousewheel
    pagination={{
      clickable:true,
      el:'.indicator',
      renderBullet:function(i,classname){
        return `<span class=${classname}></span>`
      }
    }}
    >
      {arrayofImages.map((image)=>{
        return <SwiperSlide key={crypto.randomUUID()}>
          <Image className='w-full h-full object-cover' placeholder="blur" blurDataURL='/logo.png' width={500} height={500} alt={`image of  ${image}`} src={`${image}`}/>
        </SwiperSlide>
      })}
    </Swiper>
    <div className='indicator z-[20] flex absolute bottom-[1em] left-[1em] h-[.2em] w-[1.8em] bg-[#E5E5E5]'></div>
   <button type="button" className={`${font.className} z-[20] transition-all duration-[120ms] ease-in-out opacity-0 group-hover:lg:opacity-100 bg-white rounded-full py-[0.25em] px-[0.75em] text-[0.75em] absolute bottom-2 font-[500] text-black tracking-[1px] right-2`}>ADD TO BAG</button>
   <div className={`${font.className} absolute top-[1em] left-[1em] p-[0.25em] z-[10] text-[0.75em] font-[400] w-max bg-[#ECE9E0]`}>New</div>
   </div>
  )
}

export default Imagecarousel
