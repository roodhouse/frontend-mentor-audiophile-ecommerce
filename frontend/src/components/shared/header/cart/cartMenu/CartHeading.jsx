import React from 'react'
import CartCount from './cartHeading/CartCount'
import CartRemoveAll from './cartHeading/CartRemoveAll'

function CartHeading() {
  return (
    <>
        <div id="cartHeadingContainer" className='py-8 px-7 md:px-8 flex justify-between'>
            <div id="cartCountWrapper">
                <CartCount />
            </div>
            <div id="cartRemoveAllWrapper">
                <CartRemoveAll />
            </div>
        </div>
    </>
  )
}

export default CartHeading