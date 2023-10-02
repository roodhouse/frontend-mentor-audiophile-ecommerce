import React from 'react'
import CopyImage from './copy/CopyImage'
import CopyHeading from './copy/CopyHeading'
import CopyText from './copy/CopyText'

function Copy() {
  return (
    <>
      <div id="copySectionContainer" className='px-6 md:px-10 flex flex-col items-center'>
        <div id="copyImageWrapper" className='mb-10 md:mb-[63px]'>
          <CopyImage />
        </div>
        <div id="copyHeadingWrapper" className='mb-8 w-[327px] md:w-[573px]'>
          <CopyHeading />
        </div>
        <div id="copyTextWrapper" className='w-[327px] md:w-[573px]'>
          <CopyText />
        </div>
      </div>
    </>
  )
}

export default Copy