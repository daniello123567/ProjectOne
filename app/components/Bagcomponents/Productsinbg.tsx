import React from 'react'
import localFont from 'next/font/local';
import Image from 'next/image';
import myStore from '@/app/store/Store';
const Active = localFont({src:"../../fonts/dd.woff2"});
const nonActive = localFont({src:"../../fonts/smallfontforbrondon.woff2"});
declare global {type BagProduct = {Amt_in_Bag:number,imageThubnail:string,Name:string,Color:string,quantity:number,id:string,price:string|number}}
function Productsinbg({imageThubnail,Name,Color,quantity,id,price,Amt_in_Bag}:BagProduct){
  const {Bag,setBag,updateQuantity,decreaseQuantity,removeFromBag} = myStore()



  return (
    <div className='bg-white gap-[1em] md:h-[13.03125em] flex p-[1em] lg:h-[8.1875em] border-b border-b-[#ededed] h-[8.1875em] w-full'>
           <div className='bg-blue-600 h-full w-[30%]'>
            <Image className='w-full h-full object-cover' src={imageThubnail} width={500} height={500} alt={`image for ${Name}`}/>
           </div>
           <div className=' flex flex-col justify-between h-full w-[70%]'>
            <div className='flex w-full justify-between'>
              <p className={`${Active.className} text-black font-[500]`}>{Name}</p> <p className={`${nonActive.className} font-[400] text-[0.875em]`}>&#8358;{price.toLocaleString()}</p>
              </div>
              <p className={`${nonActive.className} text-[0.875em] font-[400]`}>Color: {Color}</p>
              {quantity==Amt_in_Bag&&<p className={`${nonActive.className} text-[0.875em] font-[400] text-[#A36200]`}>Only {Amt_in_Bag} left in stock.</p>}
            <div className='flex w-full items-center justify-between'>
              <div className={`${nonActive.className} flex justify-between p-[0.25em] border border-[#ededed] rounded-[0.25em] items-center w-[5em] h-[1.5em]`}>
                <button type='button' className={`${quantity==1&&'cursor-not-allowed opacity-15'} flex justify-center items-center h-full`} onClick={()=>decreaseQuantity(id)}>&#8722;</button>
                <p>{quantity}</p>
                <button className={`${quantity>=Amt_in_Bag&&"cursor-not-allowed pointer-events-none opacity-50"} `} type='button' onClick={()=>updateQuantity(id)}>&#43;</button>
              </div>
             <div className={`${nonActive.className} w-[1.5em] h-[1.5em] font-[400] text-[0.875em] underline`}>
              <Image onClick={()=>removeFromBag(id)} src="/delBtn.svg" className='w-full opacity-50 h-full' width={500} height={500} alt='delbtn' />
             </div>
            </div>
           </div>
     </div>
  )
}

export default Productsinbg
