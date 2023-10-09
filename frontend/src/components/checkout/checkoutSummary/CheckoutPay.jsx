import React from 'react'
import { useMain } from '../../../context/mainContext'

function CheckoutPay() {

  const { thankYouMenu } = useMain()
  return (
    <>
      <div id="checkoutPayContainer" onClick={thankYouMenu} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[271px] md:w-[313px] h-[48px] flex justify-center md:w-full'>
        <button>CONTINUE & PAY</button>
      </div>
    </>
  )
}

export default CheckoutPay