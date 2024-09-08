import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
function Lastpart() {
  return (
    <div className=''>
      <p className={`${font.className} text-[1rem] font-[400] text-center`}>You&apos;ve viewed 30 products.
        <br/>
     We Hope you found what you like.</p>
    </div>
  )
}

export default Lastpart
