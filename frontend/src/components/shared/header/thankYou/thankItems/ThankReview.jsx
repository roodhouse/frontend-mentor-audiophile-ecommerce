import React from 'react'
import ReviewItems from './thankReview/ReviewItems'

function ThankReview() {

  return (
    <>
        <div id="thankReviewContainer" className=''>
            <div id="thankReviewItemsWrapper" className='bg-offWhite rounded-[8px_8px_0px_0px] p-6'>
                <ReviewItems />
            </div>
        </div>
    </>
  )
}

export default ThankReview