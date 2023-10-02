import React from 'react'
import CopyImage from './copy/CopyImage'
import CopyHeading from './copy/CopyHeading'
import CopyText from './copy/CopyText'

function Copy() {
  return (
    <>
      <div id="copySectionContainer" className='px-6'>
        <div id="copyImageWrapper" className='mb-10'>
          <CopyImage />
        </div>
        <div id="copyHeadingWrapper" className='mb-8'>
          <CopyHeading />
        </div>
        <div id="copyTextWrapper">
          <CopyText />
        </div>
      </div>
    </>
  )
}

export default Copy