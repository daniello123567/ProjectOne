import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../../fonts/dd.woff2"})
const font2 = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
function Footer1() {
  return (
    <div className={` font-[500] w-full text-[#626262] mt-[2em] bg-[#ededed] p-[2em]`}>
      <h2 className={`${font.className} text-center text-[0.875em]`}>Nube</h2>
      <p className={`${font2.className} lg:w-[39.75em] lg:mx-auto text-[0.875em]`}>
At Nube, we offer a dazzling selection of trendy and affordable jewelry to suit every style. Our diverse collection includes fashionable earrings, stylish bracelets, elegant necklaces, and stunning rings. Whether you&apos;re looking for everyday accessories or statement pieces for special occasions, we have something for everyone. Our earrings range from classic studs to bold hoops, perfect for mixing and matching. Browse our bracelets to find the ideal piece to complement your wrist stack. Our necklace collection features everything from delicate pendants to eye-catching chains. And don&apos;t forget to check out our rings - from simple bands to glamorous cocktail rings. We carefully curate our collection to bring you the latest trends at prices that won&apos;t break the bank. Our jewelry is designed to add that perfect finishing touch to any outfit, making you feel confident and stylish. With new arrivals regularly added to our inventory, there&apos;s always something fresh to discover. Whether you&apos;re treating yourself or shopping for a gift, Nube is your go-to destination for all your jewelry needs.
 </p>
    </div>
  )
}

export default Footer1
