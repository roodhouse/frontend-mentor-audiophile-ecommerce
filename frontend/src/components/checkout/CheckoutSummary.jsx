import React from 'react'
import CheckoutSummaryHeading from './checkoutSummary/CheckoutSummaryHeading'
import CheckoutSummaryItems from './checkoutSummary/CheckoutSummaryItems'
import CheckoutSummaryTotals from './checkoutSummary/CheckoutSummaryTotals'
import CheckoutPay from './checkoutSummary/CheckoutPay'

function CheckoutSummary() {
  return (
    <>
        <div id="checkoutSummaryContainer">
            <div id="checkoutSummaryHeadingWrapper">
                <CheckoutSummaryHeading />
            </div>
            <div id="checkoutSummaryItemsWrapper">
                <CheckoutSummaryItems />
            </div>
            <div id="checkoutSummaryTotalsWrapper" className='mb-8'>
                <CheckoutSummaryTotals />
            </div>
            <div id="checkoutPayWrapper" className='pb-8'>
                <CheckoutPay />
            </div>
        </div>
    </>
  )
}

export default CheckoutSummary