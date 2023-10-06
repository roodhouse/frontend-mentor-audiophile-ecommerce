import React from 'react'
import CartHeading from './cartMenu/CartHeading'
import CartItems from './cartMenu/CartItems'
import CartSummary from './cartMenu/CartSummary'
import CheckoutButton from '../../buttons/CheckoutButton'

function CartMenu() {
  return (
    <>
        <div id="cartMenuItemsContainer" className='mx-6 pb-8 bg-white rounded-lg max-w-[327px] md:max-w-[377px] md:w-full'>
            <div id="cartHeadingWrapper">
                <CartHeading />
            </div>
            <div id="cartItemsWrapper">
                <CartItems />
            </div>
            <div id="cartSummaryWrapper" className='mb-6'>
                <CartSummary />
            </div>
            <div id="cartCheckoutWrapper" className='px-7 md:px-8 flex justify-center'>
                <CheckoutButton />
            </div>
        </div>
    </>
  )
}

export default CartMenu