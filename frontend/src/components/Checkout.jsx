import React from 'react'
import CheckoutHeading from './checkout/CheckoutHeading'
import CheckoutForm from './checkout/CheckoutForm'

function Checkout() {

  return (
    <>
        <div id="checkoutContainer">
            <div id="checkoutHeadingWrapper" className='pt-4 mb-6'>
                <CheckoutHeading />
            </div>
            <form>
                <div id="checkoutFormWrapper" className='pt-6 px-6 pb-8 bg-white rounded-lg w-[327px]'>
                    <CheckoutForm />
                </div>
                {/* <div id="checkoutSummaryWrapper" className='pt-6 px-6 pb-8 bg-white rounded-lg w-[327px]'>
                    <CheckoutSummary />
                </div> */}
            </form>
        </div>
    </>
  )
}

export default Checkout