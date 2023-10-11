import React from 'react'
import ThankLogo from './thankItems/ThankLogo'
import ThankHeader from './thankItems/ThankHeader'
import ThankSubHead from './thankItems/ThankSubHead'
import ThankReview from './thankItems/ThankReview'

function ThankItems() {
  return (
    <>
    <div id="thankMenuItemsContainer" className='mx-6 md:mx-0 p-8 md:p-12 bg-white rounded-lg max-w-[327px] md:max-w-[540px] w-[327px] md:w-[540px]'>
        <div id="thankLogoWrapper" className='mb-6 md:mb-8'>
            <ThankLogo />
        </div>
        <div id="thankHeaderWrapper" className='mb-4 md:mb-6'>
            <ThankHeader />
        </div>
        <div id="thankSubHeadWrapper" className='mb-6 md:mb-8'>
            <ThankSubHead />
        </div>
        <div id="thankReviewWrapper">
            <ThankReview />
        </div>
    </div>
</>
  )
}

export default ThankItems