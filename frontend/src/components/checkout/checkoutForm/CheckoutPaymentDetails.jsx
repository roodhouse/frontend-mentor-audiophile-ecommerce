import React from 'react'
import { title, label, input, select, radio } from './styles'


const paymentDetails = new title('Payment Details')
const method = new label('Payment Method')
const emoneyNum = new label('e-Money Number')
const emoneyPin = new label('e-Money PIN')
const emoneyRadio = new radio()
const methodInput = new input()
const emoneyNumInput = new select('e-Money')
const emoneyPinInput = new select('Cash of Delivery')

// might need to create my own radio buttons.

function CheckoutPaymentDetails() {

  const handleClick = (e) => {
    const selection = e.target
    // selection.classList.remove('bg-transparent')
    // selection.classList.add('bg-deepOrange')
    // console.log(selection.classList())
    if (selection.id === 'payDot') {
      let payDotCash = document.getElementById('payDotCash')
      console.log('paydot')
      console.log(payDotCash)
      if (payDotCash.classList.contains('bg-deepOrange')) {
        payDotCash.classList.replace('bg-deepOrange', 'bg-transparent')
        // replace border color
        payDotCash.parentElement.parentElement.classList.replace('border-deepOrange', 'border-borderWhite')
      }
      selection.classList.replace('bg-transparent', 'bg-deepOrange')
      selection.parentElement.parentElement.classList.replace('border-borderWhite', 'border-deepOrange')
      
    } else if (selection.id === 'payDotCash') {
      let payDot = document.getElementById('payDot')
      console.log(payDot)
      if (payDot.classList.contains('bg-deepOrange')) {
        payDot.classList.replace('bg-deepOrange', 'bg-transparent')
        payDot.parentElement.parentElement.classList.replace('border-deepOrange', 'border-borderWhite')
      }
      selection.classList.replace('bg-transparent', 'bg-deepOrange')
      selection.parentElement.parentElement.classList.replace('border-borderWhite', 'border-deepOrange')
      console.log(selection)
    }
    
  }

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
            <div type="radio" name='paymentMethod' value='e-money' className={`${emoneyRadio.styles}`}>
              <div id="payDot" onClick={handleClick} className='w-[10px] h-[10px] rounded-lg bg-transparent hover:bg-deepOrange'/>
            </div>
            <label htmlFor="emoney" className=''>{emoneyNumInput.text}</label>
          </div>
          <div id="checkoutMethodInputContainer" className={`${emoneyNumInput.styles} flex items-center`} >
            <div type="radio" name='paymentMethod' value='Cash On Delivery' className={`${emoneyRadio.styles}`}>
              <div id="payDotCash" onClick={handleClick} className='w-[10px] h-[10px] rounded-lg bg-transparent hover:bg-deepOrange'/>
            </div>
            <label htmlFor="emoney" className=''>{emoneyPinInput.text}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPaymentDetails