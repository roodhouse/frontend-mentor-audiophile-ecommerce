import React from 'react'
import { title, label, input } from './styles'

const billingDetails = new title('Billing Details')
const name = new label('Name')
const email = new label('Email')
const phone = new label('Phone')
const nameInput = new input()
const emailInput = new input()
const phoneInput = new input()

function CheckoutBillingDetails({ register, errors }) {

  return (
    <>
      <div id="checkoutBillingDetailsContainer">
        <div id="checkoutBillingSectionTitleContainer" className={`${billingDetails.styles}`}>
          <p>{billingDetails.text}</p>
        </div>
        <div id="allDetailsContainer" className='flex flex-wrap justify-between'>
          <div id="checkoutNameSectionContainer">
            <div id="checkoutNameLabelContainer" className={`${name.styles} ${errors.name ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="name">{name.text}</label>
              {errors.name ? (
                <div>{errors.name.message}</div>
              ) : ''}
            </div>
            <div id="checkoutNameInputContainer" >
              <input 
                type="text" 
                name='name' 
                placeholder='Alexei Ward' 
                className={`${nameInput.styles} ${errors.name ? 'border-warning hover:border-warning focus:border-warning' : ''}`}
                {...register('name', {
                  required: 'This field is required'
                })}
                  
              />
            </div>
          </div>
          <div id="checkoutEmailSectionContainer">
            <div id="checkoutEmailLabelContainer" className={`${email.styles} ${errors.email ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="email">{email.text}</label>
              {errors.email ? (
                <div>{errors.email.message}</div>
              ) : ''}
            </div>
            <div id="checkoutEmailInputContainer" >
              <input 
                type="text" 
                name='email' 
                placeholder='alexei@mail.com' 
                className={`${emailInput.styles} ${errors.email ? 'border-warning hover:border-warning focus:border-warning' : ''}`} 
                {...register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /\w+@\w+\.\w{2,3}/,
                    message: 'Wrong format'
                  }
                })}
              />
            </div>
          </div>
          <div id="checkoutPhoneSectionContainer">
            <div id="checkoutPhoneLabelContainer" className={`${phone.styles} ${errors.phone ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="phone">{phone.text}</label>
              {errors.phone ? (
                <div>{errors.phone.message}</div>
              ) : ''}
            </div>
            <div id="checkoutPhoneInputContainer" >
              <input 
                type="text" 
                name='phone' 
                placeholder='+1 202-555-0136' 
                className={`${phoneInput.styles} ${errors.phone ? 'border-warning hover:border-warning focus:border-warning' : ''}`} 
                {...register('phone', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[\d\s()-]*$/,
                    message: 'Must have no more or less than 10 digits'
                  },
                  validate: (value) => value.replace(/[-\s()]/g, '').length === 10 || 'Must have no more or less than 10 digits'
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutBillingDetails