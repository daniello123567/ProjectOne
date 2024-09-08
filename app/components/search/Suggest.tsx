import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../../fonts/dd.woff2"})
function Suggest({showError,query}:{showError:boolean,query?:string}) {

  return (
    <div>
      {showError&&<p className={`${font.className}`}>No results for {query}</p>}
      <p className={`${font.className} text-[0.875em] font-[500]`}>Try searching for products e.g earrings..etc</p>
    </div>
  )
}

export default Suggest
