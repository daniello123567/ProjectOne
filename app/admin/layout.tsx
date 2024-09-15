import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"./fonts/std_book.woff2"})
import { ClerkProvider } from '@clerk/nextjs'
function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <ClerkProvider>
      <div className={`bg-[#F8F8F8] ${font.className} min-h-screen`}>
      {children}
      </div>
      </ClerkProvider>

  )
}

export default RootLayout
