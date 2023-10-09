import React from 'react'
import { useMain } from '../../../context/mainContext'

function CheckoutButton() {

  const { checkout } = useMain()
  
  return (
    <>
      <div id="checkoutContainer" onClick={checkout} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[271px] md:w-[313px] h-[48px] flex justify-center'>
        <button>CHECKOUT</button>
      </div>
    </>
  )
}

export default CheckoutButton