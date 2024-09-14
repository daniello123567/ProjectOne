import React from 'react'

function RootLayout({children}:{children:React.ReactNode}) {
  return (
      <div className='bg-[#F8F8F8] min-h-screen'>
      {children}
      </div>

  )
}

export default RootLayout
