import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
function Littlemsg() {
  return (
    <div className={`${font.className} text-[0.875em] mt-[.3em] font-[400] w-[94%] rounded flex justify-start items-center mx-auto h-[2.3125em] bg-[#a5640342] p-[1em] text-[#a36200]`}>Sold out sucks- grab these styles before they&apos;re gone!</div>
  )
}

export default Littlemsg
