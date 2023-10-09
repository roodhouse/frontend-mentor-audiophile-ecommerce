import React from 'react'
import CheckoutFormTitle from './checkoutForm/CheckoutFormTitle'
import CheckoutBillingDetails from './checkoutForm/CheckoutBillingDetails'
import CheckoutShippingDetails from './checkoutForm/CheckoutShippingDetails'
import CheckoutPaymentDetails from './checkoutForm/CheckoutPaymentDetails'

function CheckoutForm() {
  return (
    <>
        <div id="checkoutFormContainer">
            <div id="checkoutFormTitleWrapper" className='mb-8 md:mb-[41px]'>
                <CheckoutFormTitle />
            </div>
            <div id="checkoutFormBillingWrapper" className='mb-2 md:mb-[29px]'>
                <CheckoutBillingDetails />
            </div>
            <div id="checkoutFormShippingWrapper" className='mb-2 md:mb-[37px]'>
                <CheckoutShippingDetails />
            </div>
            <div id="checkoutFormPaymentWrapper">
                <CheckoutPaymentDetails />
            </div>
        </div>
    </>
  )
}

export default CheckoutForm