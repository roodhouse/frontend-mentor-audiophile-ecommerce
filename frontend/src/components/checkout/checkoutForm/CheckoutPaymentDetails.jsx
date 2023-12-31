import React, { useState } from 'react'
import { title, label, input, select, radio } from './styles'


const paymentDetails = new title('Payment Details')
const method = new label('Payment Method')
const emoneyNum = new label('e-Money Number')
const emoneyPin = new label('e-Money PIN')
const emoneyRadio = new radio()
const emoneyNumber = new input()
const emoneyPinNum = new input()
const emoneyNumInput = new select('e-Money')
const emoneyPinInput = new select('Cash of Delivery')


function CheckoutPaymentDetails({ register, errors }) {

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
        <div
          id="checkoutPaymentSectionTitleContainer"
          className={`${paymentDetails.styles}`}
        >
          <p>{paymentDetails.text}</p>
        </div>
        <div id="allPaymentMethodDetails">
          <div id="allPaymentMethod">
            <div
              id="checkoutMethodSectionContainer"
              className="flex flex-col md:flex-row justify-between"
            >
              <div
                id="checkoutMethodLabelContainer"
                className={`${method.styles} ${errors.paymentMethod ? 'text-warning' : ''} flex justify-between md:flex-col md:justify-start`}
              >
                <label htmlFor="method">{method.text}</label>
                { errors.paymentMethod ? (
                  <div>{errors.paymentMethod.message}</div>
                ) : ''}
              </div>
              <div id="methodContainer">
                <div
                  id="checkoutMethodEmoneyContainer"
                  className={`${emoneyNumInput.styles} ${errors.paymentMethod ? 'border-warning hover:border-warning focus:border-warning' : ''} flex items-center`}
                >
                  <label
                    htmlFor="eMoneyRadio"
                    className={`${emoneyRadio.styles}`}
                  >
                    <div
                      id="payDot"
                      onClick={handleClick}
                      className="w-[10px] h-[10px] rounded-lg bg-transparent hover:bg-deepOrange"
                    />
                  </label>
                  <input
                    type="radio"
                    id="eMoneyRadio"
                    name="paymentMethod"
                    className="hidden"
                    value="emoney"
                    {...register("paymentMethod", {
                      required: 'Please make a selection'
                    })}
                  />
                  <label htmlFor="eMoneyRadio">{emoneyNumInput.text}</label>
                </div>

                <div
                  id="checkoutMethodCashContainer"
                  className={`${emoneyNumInput.styles} ${errors.paymentMethod ? 'border-warning hover:border-warning focus:border-warning' : ''} flex items-center`}
                >
                  <label
                    htmlFor="cashRadio"
                    className={`${emoneyRadio.styles}`}
                  >
                    <div
                      id="payDotCash"
                      onClick={handleClick}
                      className="w-[10px] h-[10px] rounded-lg bg-transparent hover:bg-deepOrange"
                    />
                  </label>
                  <input
                    type="radio"
                    id="cashRadio"
                    name="paymentMethod"
                    className="hidden"
                    value="cash"
                    {...register("paymentMethod", {
                      required: 'Please make a selection'
                    })}
                  />
                  <label htmlFor="cashRadio">{emoneyPinInput.text}</label>
                </div>
              </div>
            </div>
            <div
              id="paymentDetailsContainer"
              className="mt-2 flex flex-col md:flex-row justify-between"
            >
              {payMethod !== "payDotCash" ? (
                <>
                  <div id="eMoneyNumberContainer" className="">
                    <div
                      id="eMoneyLabelNumberContainer"
                      className={`${emoneyNum.styles} ${errors.eMoneyNumber ? 'text-warning' : ''} flex justify-between`}
                    >
                      <label htmlFor="eMoneyNumber">{emoneyNum.text}</label>
                      { errors.eMoneyNumber ? (
                  <div>{errors.eMoneyNumber.message}</div>
                ) : ''}
                    </div>
                    <div id="eMoneyNumberInputContainer">
                      <input
                        type="text"
                        name="eMoneyNumber"
                        placeholder="238521993"
                        className={`${emoneyNumber.styles} ${errors.eMoneyNumber ? 'border-warning hover:border-warning focus:border-warning' : ''}`}
                        {...register("eMoneyNumber", {
                          required: 'This field is required'
                        })}
                      />
                    </div>
                  </div>
                  <div id="eMoneyPinContainer">
                    <div
                      id="eMoneyLabelPinContainer"
                      className={`${emoneyPin.styles} ${errors.eMoneyPin ? 'text-warning' : ''} flex justify-between`}
                    >
                      <label htmlFor="eMoneyPin">{emoneyPin.text}</label>
                      { errors.eMoneyPin ? (
                  <div>{errors.eMoneyPin.message}</div>
                ) : ''}
                    </div>
                    <div id="eMoneyPinInputContainer">
                      <input
                        type="text"
                        name="eMoneyPin"
                        placeholder="6891"
                        className={`${emoneyPinNum.styles} ${errors.eMoneyPin ? 'border-warning hover:border-warning focus:border-warning' : ''}`}
                        {...register("eMoneyPin", {
                          required: 'This field is required'
                        })}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div
                  id="cashPayDetailsContainer"
                  className="flex flex-col items-center xl:flex-row"
                >
                  <div id="cashPayLogoContainer" className="mb-8 xl:mr-8">
                    <div
                      id="cashPayLogo"
                      className='w-12 h-12 bg-[url("./assets/shared/desktop/cashLogo.svg")]'
                    />
                  </div>
                  <div
                    id="cashInstructionContainer"
                    className="text-black text-[15px] font-medium leading-[25px] opacity-50 mb-6"
                  >
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPaymentDetails
