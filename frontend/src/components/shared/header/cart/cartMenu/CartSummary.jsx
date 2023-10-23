import React, { useEffect } from 'react'
import { useMain } from '../../../../../context/mainContext'

function CartSummary() {

  const { cart, totalCart } = useMain()

  let prices = []

  console.log(cart)
  
  if (cart.length > 0) {  
    cart.forEach((item) => {
      let itemTotal = item.quantity * item.price
      prices.push(itemTotal)
    })
  }

  let total = prices.reduce((a,b) => a + b, 0)

  useEffect(() => {
    totalCart(total)
  },[cart])

  return (
    <>
      <div id="cartSummaryContainer" className='flex justify-between px-7 md:px-8'>
          <div id="totalText" className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
            <p>TOTAL</p>
          </div>
          <div id="amount" className='text-black text-center text-[18px] font-bold leading-normal uppercase'>
            <p>${total.toLocaleString()}</p>
          </div>
      </div>
    </>
  )
}

export default CartSummary