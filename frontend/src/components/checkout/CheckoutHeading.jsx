import React from 'react'
import { useMain } from '../../context/mainContext'

function CheckoutHeading() {


    const { goBack } = useMain()
  return (
    <>
        <div id='checkoutHeadingContainer' onClick={goBack} className='text-black text-[15px] leading-[25px] font-medium opacity-50 cursor-pointer'>
            <p>Go Back</p>
        </div>
    </>
  )
}

export default CheckoutHeading