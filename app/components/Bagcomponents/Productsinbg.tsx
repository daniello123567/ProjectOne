import React, { useContext } from 'react'
import localFont from 'next/font/local';
import Image from 'next/image';
import globalStore from '@/app/store/globalstore';
const Active = localFont({src:"../../fonts/dd.woff2"});
const nonActive = localFont({src:"../../fonts/smallfontforbrondon.woff2"});
declare global {type BagProduct = {imageThubnail:string,Name:string,Color:string,quantity:number,id:string,price:string|number}}
function Productsinbg({imageThubnail,Name,Color,quantity,id,price}:BagProduct) {
  const {Bag,setBag} = useContext(globalStore)

  const increaseQty = ()=>{
    const newArr = Bag.map((product:BagPro)=>{
       if(product.id===id){
        return {...product,quantity:product.quantity+=1}
       }else{
        return product;
       }
    });
    setBag([...newArr]);
    localStorage.setItem("Bag",JSON.stringify([...newArr]))
  }
  const decreaseQty = ()=>{
    if(quantity!==1){
    const updatedArr = Bag.map((product:BagPro)=>{
      if(product.id===id){
        return {id:product.id,quantity:product.quantity-=1,color:product.color,name:product.name,price:product.price}
       }else{
        return product;
       }
    });
    setBag([...updatedArr]);
    localStorage.setItem("Bag",JSON.stringify([...updatedArr]))
  }}
  const removeProductfromBag = ()=>{
    const UpdatedData = Bag.filter((product:BagPro)=>product.id !==id);
   setBag([...UpdatedData]);
   localStorage.setItem("Bag",JSON.stringify([...UpdatedData]));

  }
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
              <p className={`${nonActive.className} text-[0.875em] font-[400] text-[#A36200]`}>Only 5 left in stock</p>
            <div className='flex w-full items-center justify-between'>
              <div className={`${nonActive.className} flex justify-between p-[0.25em] border border-[#ededed] rounded-[0.25em] items-center w-[5em] h-[1.5em]`}>
                <button className={`${quantity==1&&'cursor-not-allowed opacity-15'}`} onClick={decreaseQty}>&#8722;</button>
                <p>{quantity}</p>
                <button onClick={increaseQty}>&#43;</button>
              </div>
             <div className={`${nonActive.className} w-[1.5em] h-[1.5em] font-[400] text-[0.875em] underline`}>
              <Image onClick={removeProductfromBag} src="/delBtn.svg" className='w-full opacity-50 h-full' width={500} height={500} alt='delbtn' />
             </div>
            </div>
           </div>
     </div>
  )
}

export default Productsinbg
