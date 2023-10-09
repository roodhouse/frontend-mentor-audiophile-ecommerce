import React from 'react'
import { title, label, input, select } from './styles'

const paymentDetails = new title('Payment Details')
const method = new label('Payment Method')
const emoneyNum = new label('e-Money Number')
const emoneyPin = new label('e-Money PIN')
const methodInput = new input()
const emoneyNumInput = new select('e-Money')
const emoneyPinInput = new select()

// might need to create my own radio buttons.

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
          <div id="checkoutMethodInputContainer" className={`${emoneyNumInput.styles} flex items-center`} >
            <input type="radio" name='paymentMethod' value='e-money' className='w-5 h-5 mr-4 checked:bg-deepOrange checked:hover:bg-deepOrange checked:active:bg-deepOrange checked:focus:bg-deepOrange focus:bg-deepOrange focus:outline-none focus:ring-1 focus:ring-deepOrange'/>
            <label htmlFor="emoney" className=''>{emoneyNumInput.text}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPaymentDetails