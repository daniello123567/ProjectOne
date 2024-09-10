import React from 'react'
import localFont from 'next/font/local';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })
const bigFont = localFont({ src: "../../fonts/dd.woff2" });
function Details({details}:{details:string}) {
  return (
    <Accordion className='w-full min-h-[3.625em] mt-[0.5em] border-b border-t border-t-[#E5E5E5]' allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton className='w-full h-[3em] my-auto'>
                  <Box className={`${bigFont.className} uppercase text-[0.75em] font-[500] tracking-[0.84px]`} as='span' flex='1' textAlign='left'>
                    Details
                  </Box>
                  <AccordionIcon/>
                </AccordionButton>
              </h2>
              <AccordionPanel className={`${smallFont.className}`} pb={4}>
                {details}
       </AccordionPanel>
            </AccordionItem>
          </Accordion>
  )
}

export default Details
