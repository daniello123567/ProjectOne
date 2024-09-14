"use client"
import React, { useEffect, useState } from 'react'
import Imageicon from './Imageicon'
import SingleUpimg from './SingleUpimg';
import supabase from '@/utils/supabase';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Spinner } from '@chakra-ui/react';

function Inputs() {
  const [product,setProduct] = useState({
    Category:'',
    Name:'',
    Price:0,
    ImagesUrl:[''],
    Tag:'New',
    Amt_in_stock:0,
    Color:'',
    Details:''
  });
  const productInfo = (e:any)=>{
   setProduct({...product,[e.target.name]:e.target.value});
  }
  const handleCategory = (e:any)=>{
    setProduct({...product,Category:e.target.innerText});
  }
  const handleColor = (e:any)=>{
    setProduct({...product,Color:e.target.innerText})
  }
  const openImages = ()=>{
    const galleryOpener:HTMLInputElement|null = document.querySelector('.galleryOpener');
    galleryOpener?.click();
  }
  const [optimiticfiles,setoptimisticfiles] = useState<any[]>([]);
  const [supabaseImageUrls,setUrls] = useState<string[]>([]);
  const [imageLoading,setImageloading] = useState<boolean>(false);
  const [imageCount,setImageCount] = useState<any[]>([])
  const getUrl = (nameoffile:string|undefined)=>{
    if(nameoffile){
    const {data} = supabase.storage.from('images').getPublicUrl(nameoffile);
    return data.publicUrl;
    }
  }
  const returnSupabaseUrl = async (file:any)=>{
    const name = `${Date.now()}-${file.name}`;
    const {data,error} = await supabase.storage.from('images').upload(`${name}`,file);
    const url = getUrl(data?.path);
    return url;
  }
  const handleImages = async(files:any)=>{
    let localUrls:string[] = [];
    let supabaseUrl:string[] = []
     for(const file of files){
       localUrls.push(file);
       setImageloading(true)
       const url = await returnSupabaseUrl(file);
       setImageloading(false)
       if(url)
       supabaseUrl.push(url)
     }
     setoptimisticfiles([...localUrls]);
     setUrls([...supabaseUrl]);
     setProduct({...product,ImagesUrl:[...supabaseUrl]})
  }
const checkHowManyFiles = (files:any)=>{
  let filesCount = [];
  for(const file of files){
     filesCount.push(file)
  };
  setImageCount(filesCount)
}

const Images = ()=>{
  return <>{optimiticfiles.map((imageSrc:any,i)=>{return <SingleUpimg key={`${imageSrc}-imagebaba${i}`} src={URL.createObjectURL(imageSrc)}/>})}
</>
}
const Skeletons = ()=>{
  return <>
  {imageCount.map((image,i)=>{return <Skeleton key={`${image.name}+${i}`} width={"4em"} height={"4em"} />})
}
  </>
}
const handleInsert = async ()=>{
  const number = String(product.Price).replace(/,/g, '')
  const processedPrice = Number(number)
   if(product.Name&&product.Amt_in_stock&&product.Category&&product.Details&&product.ImagesUrl&&product.Price){
   const {data,error} = await supabase.from("jewelries").insert({
    Name:product.Name,
    Category:product.Category,
    Price:processedPrice,
    Tag:product.Tag,
    ImagesUrl:[...supabaseImageUrls],
    Color:product.Color,
    Details:product.Details,
    Amt_in_stock:product.Amt_in_stock
   });
   console.log(data,error);

   }else{
    alert("complete al fields")
   }

}
console.log(product)
  return (
    <div className='w-full md:w-[60%] pb-[3em] md:mx-auto px-[1em]'>
      <input multiple={true} onChange={(e)=>{handleImages(e.target.files);checkHowManyFiles(e.target.files)}} accept='image/*' className='hidden galleryOpener' title='files' type='file'/>
      <p>Name:</p>
      <input onChange={productInfo} name='Name' className='w-full border px-[1em] outline-none rounded-[0.375em] h-[2.375em] mt-[.7em] bg-[#F3F3F3]' title='Name' type='text'/>
      <p className='mt-[1em]'>Description:</p>
      <textarea name='Details' onChange={productInfo} className='w-full border px-[1em] outline-none rounded-[0.375em] h-[4.375em] mt-[.7em] bg-[#F3F3F3]' title='description'/>
      <p className='mt-[1em]'>Price: eg 12,000. (The naira symbol will be inputted automatically)</p>
      <input onChange={productInfo} name='Price' className='w-full border px-[1em] outline-none rounded-[0.375em] h-[2.375em] mt-[.7em] bg-[#F3F3F3]' title='Name' type='text'/>
  <p className='mt-[1em]'>Choose Category</p>
  <div className='flex mt-[1em] gap-[1em]'>
  <button  onClick={handleCategory} className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em] ${product.Category.toLowerCase()=="earring" && 'bg-green-600 text-white font-[500]'} font-[500] text-[0.75em]`}>Earring</button>
  <button onClick={handleCategory} className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em] ${product.Category.toLowerCase()=="bracelet" && 'bg-green-600 text-white font-[500]'} font-[500] text-[0.75em]`}>Bracelet</button>
  <button onClick={handleCategory}  className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em] ${product.Category.toLowerCase()=="ring" && 'bg-green-600 text-white font-[500]'} font-[500] text-[0.75em]`}>Ring</button>
  <button  onClick={handleCategory} className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em]  ${product.Category.toLowerCase()=="necklace" && 'bg-green-600 text-white font-[500]'}  font-[500] text-[0.75em]`}>Necklace</button>
  </div>
  <p className='mt-[1em]'>Choose a Color:</p>
  <div className='flex mt-[.7em] gap-[1em]'>
  <button onClick={handleColor}  className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em] font-[500] ${product.Color.toLowerCase().includes("silver")&&"text-white bg-green-600 font-[500]"} text-[0.75em]`}>Silver</button>
  <button onClick={handleColor}  className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em] font-[500] ${product.Color.toLowerCase().includes("gold")&&"text-white bg-green-600 font-[500]"} text-[0.75em]`}>Gold</button>

  </div>
  <p className='mt-[1em]'>Quantity in stock</p>
  <input onChange={productInfo} name='Amt_in_stock' className='w-full border px-[1em] outline-none rounded-[0.375em] h-[2.375em] mt-[.7em] bg-[#F3F3F3]' title='Name' type='number'/>
   <div className='flex justify-center items-center'><p className='mt-[1em]'>Images </p> {imageLoading&&<Spinner/>}</div>
   <div className={`flex flex-wrap gap-[.7em]`}>
    {imageLoading&&<Skeletons/>}
    {!imageLoading&&<Images/>}
   </div>
   <div className='w-full h-[9em] flex justify-center items-center mt-[1em] rounded-[0.375em] bg-white'>
  <Imageicon onClickFunctorun={openImages}/>
    </div>
 <div className='w-full flex gap-[1em] items-center justify-end h-[3.625em] border-t mt-[1.5em]'>
 <button  type='button' className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em] font-[500] text-[0.75em]`}>cancel</button>
 <button  onClick={handleInsert} type='button' className={`flex justify-center items-center bg-[#72E3ADCC] px-[0.75em] py-[0.5em] text-black outline outline-1 outline-[#097C4F] rounded-[0.3125em]  font-[500] text-[0.75em]`}>save</button>

 </div>
    </div>
  )
}

export default Inputs
