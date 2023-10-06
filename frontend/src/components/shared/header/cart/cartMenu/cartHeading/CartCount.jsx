import React from 'react'
import { useMain } from '../../../../../../context/mainContext'

function CartCount() {

    const { cart } = useMain()
    
  return (
    <>
        <div id="currentCartCount" className='text-black text-[18px] leading-normal tracking-[1.286px] font-bold uppercase'>
            <p>Cart ({cart ? cart.length : 0})</p>
        </div>
    </>
  )
}

export default CartCount