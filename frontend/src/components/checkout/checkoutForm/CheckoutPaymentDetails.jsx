import React, { useState } from 'react'
import { title, label, input, select, radio } from './styles'


const paymentDetails = new title('Payment Details')
const method = new label('Payment Method')
const emoneyNum = new label('e-Money Number')
const emoneyPin = new label('e-Money PIN')
const emoneyRadio = new radio()
const methodInput = new input()
const emoneyNumber = new input()
const emoneyPinNum = new input()
const emoneyNumInput = new select('e-Money')
const emoneyPinInput = new select('Cash of Delivery')

// might need to create my own radio buttons.

function CheckoutPaymentDetails() {

  const [ payMethod, setPayMethod ] = useState('')

  const handleClick = (e) => {
    const selection = e.target
    

    if (selection.id === 'payDot') {
      setPayMethod('payDot')
      let payDotCash = document.getElementById('payDotCash')
      
      if (payDotCash.classList.contains('bg-deepOrange')) {
        payDotCash.classList.replace('bg-deepOrange', 'bg-transparent')
        payDotCash.parentElement.parentElement.classList.replace('border-deepOrange', 'border-borderWhite')
      }
      selection.classList.replace('bg-transparent', 'bg-deepOrange')
      selection.parentElement.parentElement.classList.replace('border-borderWhite', 'border-deepOrange')
      
    } else if (selection.id === 'payDotCash') {
      setPayMethod('payDotCash')
      let payDot = document.getElementById('payDot')
      if (payDot.classList.contains('bg-deepOrange')) {
        payDot.classList.replace('bg-deepOrange', 'bg-transparent')
        payDot.parentElement.parentElement.classList.replace('border-deepOrange', 'border-borderWhite')
      }
      selection.classList.replace('bg-transparent', 'bg-deepOrange')
      selection.parentElement.parentElement.classList.replace('border-borderWhite', 'border-deepOrange')
    }
  }

  return (
    <>
      <div id="checkoutPaymentContainer">
        <div id="checkoutPaymentSectionTitleContainer" className={`${paymentDetails.styles}`}>
            <p>{paymentDetails.text}</p>
        </div>
        <div id="allPaymentMethodDetails">
          <div id="allPaymentMethod">
            <div id="checkoutMethodSectionContainer" className='flex justify-between'>
              <div id="checkoutMethodLabelContainer" className={`${method.styles}`}>
                <label htmlFor="method">{method.text}</label>
              </div>
              <div id="methodContainer">
                <div id="checkoutMethodEmoneyContainer" className={`${emoneyNumInput.styles} flex items-center`} >
                  <div type="radio" name='paymentMethod' value='e-money' className={`${emoneyRadio.styles}`}>
                    <div id="payDot" onClick={handleClick} className='w-[10px] h-[10px] rounded-lg bg-transparent hover:bg-deepOrange'/>
                  </div>
                  <label htmlFor="emoney" className=''>{emoneyNumInput.text}</label>
                </div>
                <div id="checkoutMethodCashContainer" className={`${emoneyNumInput.styles} flex items-center`} >
                  <div type="radio" name='paymentMethod' value='Cash On Delivery' className={`${emoneyRadio.styles}`}>
                    <div id="payDotCash" onClick={handleClick} className='w-[10px] h-[10px] rounded-lg bg-transparent hover:bg-deepOrange'/>
                  </div>
                  <label htmlFor="emoney" className=''>{emoneyPinInput.text}</label>
                </div>
          </div>
            </div>
            <div id="paymentDetailsContainer" className='mt-2 flex justify-between'>
              {
                payMethod !== 'payDotCash' ? (
                  <>
                  <div id="eMoneyNumberContainer" className=''>
                    <div id="eMoneyLabelNumberContainer" className={`${emoneyNum.styles}`}>
                      <label htmlFor="eMoneyNumber">{emoneyNum.text}</label>
                    </div>
                    <div id="eMoneyNumberInputContainer">
                      <input type="text" name='eMoneyNumber' placeholder='238521993' className={`${emoneyNumber.styles}`} />
                    </div>
                  </div>
                  <div id="eMoneyPinContainer">
                    <div id="eMoneyLabelPinContainer" className={`${emoneyPin.styles}`}>
                      <label htmlFor="eMoneyNumber">{emoneyPin.text}</label>
                    </div>
                    <div id="eMoneyPinInputContainer">
                      <input type="text" name='eMoneyPin' placeholder='6891' className={`${emoneyPinNum.styles}`} />
                    </div>
                  </div>
                  </>
                ) : (
                    <div id="cashPayDetailsContainer" className='flex flex-col items-center xl:flex-row'>
                      <div id="cashPayLogoContainer" className='mb-8 xl:mr-8'>
                        <div id="cashPayLogo" className='w-12 h-12 bg-[url("./assets/shared/desktop/cashLogo.svg")]'/>
                      </div>
                      <div id="cashInstructionContainer" className='text-black text-[15px] font-medium leading-[25px] opacity-50 mb-6'>
                        <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                      </div>
                    </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPaymentDetails
