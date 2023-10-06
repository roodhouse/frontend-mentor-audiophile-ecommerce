import React from 'react'
import { useMain } from '../../../../../../context/mainContext'

function CartRemoveAll() {

    const { clearCart } = useMain()

  return (
    <>
        <div id="cartRemoveAllContainer" onClick={clearCart} className='text-black text-[15px] leading-[25px] font-medium underline opacity-50 cursor-pointer hover:text-deepOrange hover:opacity-[1]'>
            <p>Remove all</p>
        </div>
    </>
  )
}

export default CartRemoveAll