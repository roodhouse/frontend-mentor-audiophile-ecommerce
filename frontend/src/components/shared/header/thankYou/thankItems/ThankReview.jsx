import React from 'react'
import ReviewItems from './thankReview/ReviewItems'
import GrandTotalReview from './thankReview/GrandTotalReview'
import BackHome from '../../../buttons/BackHome'

function ThankReview() {

  return (
    <>
        <div id="thankReviewContainer" className=''>
            <div id="itemsAndTotalContainer" className='md:flex md:mb-[46px]'>
                <div id="thankReviewItemsWrapper" className='bg-offWhite rounded-[8px_8px_0px_0px] md:rounded-[8px_0px_0px_8px] p-6'>
                    <ReviewItems />
                </div>
                <div id="grandTotalReviewWrapper" className='bg-black rounded-[0px_0px_8px_8px] md:rounded-[0px_8px_8px_0px] p-6 mb-6 md:mb-0 md:w-[198px] md:pt-[41px]'>
                    <GrandTotalReview />
                </div>
            </div>
            <div id="backHomeWrapper">
                <BackHome />
            </div>
        </div>
    </>
  )
}

export default ThankReview