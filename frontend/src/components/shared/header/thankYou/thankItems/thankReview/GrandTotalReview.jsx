import React from 'react'
import { useMain } from '../../../../../../context/mainContext'

function GrandTotalReview() {

    const { grandTotal } = useMain()

  return (
    <>
        <div id="grandTotalReviewContainer">
            <div id="grandTotalReviewText" className='text-white text-[15px] font-medium leading-[25px] opacity-50 mb-2'>
                <p>GRAND TOTAL</p>
            </div>
            <div id="grandTotalReviewAmountContainer" className='text-white text-lg leading-normal font-bold uppercase'>
                <p>${grandTotal.toLocaleString()}</p>
            </div>
        </div>
    </>
  )
}

export default GrandTotalReview