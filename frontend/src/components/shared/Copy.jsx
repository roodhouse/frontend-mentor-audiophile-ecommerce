import React from 'react'
import { useMain } from '../../context/mainContext'
import CopyImage from './copy/CopyImage'
import CopyHeading from './copy/CopyHeading'
import CopyText from './copy/CopyText'

function Copy() {
  
  const { home } = useMain()

  return (
    <>
      <div id="copySectionContainer" style={home && window.innerWidth >= 1280 ? {'width': '1110px'} : {'width': '100%'}} className='px-6 md:px-10 xl:px-0 flex flex-col xl:flex-row xl:justify-between items-center'>
        <div id="copyImageWrapper" className='mb-10 md:mb-[63px] xl:mb-0 xl:order-3'>
          <CopyImage />
        </div>
        <div id="copyDetails" className='flex flex-col items-center'>
          <div id="copyHeadingWrapper" className='mb-8 w-[327px] md:w-[573px] xl:w-[445px] xl:order-1'>
            <CopyHeading />
          </div>
          <div id="copyTextWrapper" className='w-[327px] md:w-[573px] xl:w-[445px] xl:order-2'>
            <CopyText />
          </div>
        </div>
      </div>
    </>
  )
}

export default Copy