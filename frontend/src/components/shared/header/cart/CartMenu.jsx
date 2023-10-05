import React from 'react'
import CartHeading from './cartMenu/CartHeading'

function CartMenu() {
  return (
    <>
        <div id="cartMenuItemsContainer" className='mx-6 bg-white rounded-lg'>
            <div id="cartHeadingWrapper">
                <CartHeading />
            </div>
            {/* <div id="cartItemsWrapper">
                <CartItems />
            </div> */}
            {/* <div id="cartSummaryWrapper">
                <CartSummary />
            </div> */}
            {/* <div id="cartCheckoutWrapper">
                <CheckoutButton />
            </div> */}
        </div>
    </>
  )
}

export default CartMenu