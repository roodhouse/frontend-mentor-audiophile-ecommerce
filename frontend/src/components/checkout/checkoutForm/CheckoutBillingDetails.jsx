import React from 'react'
import { title, label, input } from './styles'

const billingDetails = new title('Billing Details')
const name = new label('Name')
const email = new label('Email')
const phone = new label('Phone')
const nameInput = new input()
const emailInput = new input()
const phoneInput = new input()

function CheckoutBillingDetails({ register }) {
  return (
    <>
      <div id="checkoutBillingDetailsContainer">
        <div id="checkoutBillingSectionTitleContainer" className={`${billingDetails.styles}`}>
          <p>{billingDetails.text}</p>
        </div>
        <div id="allDetailsContainer" className='flex flex-wrap justify-between'>
          <div id="checkoutNameSectionContainer">
            <div id="checkoutNameLabelContainer" className={`${name.styles}`}>
              <label htmlFor="name">{name.text}</label>
            </div>
            <div id="checkoutNameInputContainer" >
              <input 
                type="text" 
                name='name' 
                placeholder='Alexei Ward' 
                className={`${nameInput.styles}`}
                {...register('name')}
                  
              />
            </div>
          </div>
          <div id="checkoutEmailSectionContainer">
            <div id="checkoutEmailLabelContainer" className={`${email.styles}`}>
              <label htmlFor="email">{email.text}</label>
            </div>
            <div id="checkouEmailInputContainer" >
              <input 
                type="text" 
                name='email' 
                placeholder='alexei@mail.com' 
                className={`${emailInput.styles}`} 
                {...register('email')}
              />
            </div>
          </div>
          <div id="checkoutPhoneSectionContainer">
            <div id="checkoutPhoneLabelContainer" className={`${phone.styles}`}>
              <label htmlFor="phone">{phone.text}</label>
            </div>
            <div id="checkoutPhoneInputContainer" >
              <input 
                type="text" 
                name='phone' 
                placeholder='+1 202-555-0136' 
                className={`${phoneInput.styles}`} 
                {...register('phone')}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutBillingDetails