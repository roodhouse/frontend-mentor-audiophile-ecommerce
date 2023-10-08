import React from 'react'
import { title, label, input } from './styles'

const paymentDetails = new title('Payment Details')
const method = new label('Payment Method')
const emoneyNum = new label('e-Money Number')
const emoneyPin = new label('e-Money PIN')
const methodInput = new input()
const emoneyNumInput = new input()
const emoneyPinInput = new input()

function CheckoutPaymentDetails() {
  return (
    <>
      <div id="checkoutPaymentContainer">
        <div id="checkoutPaymentSectionTitleContainer" className={`${paymentDetails.styles}`}>
            <p>{paymentDetails.text}</p>
        </div>
        <div id="checkoutMethodSectionContainer">
          <div id="checkoutMethodLabelContainer" className={`${method.styles}`}>
            <label htmlFor="method">{method.text}</label>
          </div>
          <div id="checkoutMethodInputContainer" >
            <input type="radio" name='paymentMethod' value='e-money' className={`${emoneyNumInput.styles}`} />
            <label htmlFor="emoney">{emoneyNum.text}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPaymentDetails