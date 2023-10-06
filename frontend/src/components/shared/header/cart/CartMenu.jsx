import React from 'react'
import CartHeading from './cartMenu/CartHeading'
import CartItems from './cartMenu/CartItems'
import CartSummary from './cartMenu/CartSummary'
import CheckoutButton from '../../buttons/CheckoutButton'

function CartMenu() {
  return (
    <>
        <div id="cartMenuItemsContainer" className='mx-6 pb-8 bg-white rounded-lg'>
            <div id="cartHeadingWrapper">
                <CartHeading />
            </div>
            <div id="cartItemsWrapper">
                <CartItems />
            </div>
            <div id="cartSummaryWrapper" className='mb-6'>
                <CartSummary />
            </div>
            <div id="cartCheckoutWrapper" className='px-7'>
                <CheckoutButton />
            </div>
        </div>
    </>
  )
}

export default CartMenu