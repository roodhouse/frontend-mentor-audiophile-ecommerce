import React from 'react'
import { title, label, input } from './styles'

const shippingDetails = new title('Shipping Info')
const address = new label('Your Address')
const zip = new label('Zip Code')
const city = new label('City')
const country = new label('Country')
const addressInput = new input()
const zipInput = new input()
const cityInput = new input()
const countryInput = new input()

function CheckoutShippingDetails({ register, errors }) {
  return (
    <>
      <div id="checkoutShippingDetailsContainer">
        <div id="checkoutShippingSectionTitleContainer" className={`${shippingDetails.styles}`}>
          <p>{shippingDetails.text}</p>
        </div>
        <div id="allShippingDetails" className='flex flex-wrap justify-between'>
          <div id="checkoutAddressSectionContainer">
            <div id="checkoutAddressLabelContainer" className={`${address.styles} ${errors.address ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="address">{address.text}</label>
              {errors.address ? (
                <div>{errors.address.message}</div>
              ) : ''}
            </div>
            <div id="checkoutAddressInputContainer" >
              <input 
                type="text" 
                name='address' 
                placeholder='1137 Williams Avenue' 
                className={`${addressInput.styles} md:w-[634px] ${errors.address ? 'border-warning hover:border-warning focus:border-warning' : ''}`}
                {...register('address', {
                  required: 'This field is required'
                })}
               />
            </div>
          </div>
          <div id="checkoutZipSectionContainer">
            <div id="checkoutZipLabelContainer" className={`${zip.styles} ${errors.zip ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="zip">{zip.text}</label>
              {errors.zip ? (
                <div>{errors.zip.message}</div>
              ) : ''}
            </div>
            <div id="checkoutZipInputContainer" >
              <input 
                type="number" 
                name='zip' 
                placeholder='10001' 
                className={`${zipInput.styles} ${errors.zip ? 'border-warning hover:border-warning focus:border-warning' : ''}`} 
                {...register('zip', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[\d]*$/,
                    message: 'Must have no more or less than 5 digits'
                  },
                  validate: (value) => value.length === 5 || 'Must have no more or less than 5 digits'
                })}
              />
            </div>
          </div>
          <div id="checkoutCitySectionContainer">
            <div id="checkoutCityLabelContainer" className={`${city.styles} ${errors.city ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="city">{city.text}</label>
              {errors.city ? (
                <div>{errors.city.message}</div>
              ) : ''}
            </div>
            <div id="checkoutCityInputContainer" >
              <input 
                type="text" 
                name='city' 
                placeholder='New York' 
                className={`${cityInput.styles} ${errors.city ? 'border-warning hover:border-warning focus:border-warning' : ''}`}
                {...register('city', {
                  required: 'This field is required'
                })}
               />
            </div>
          </div>
          <div id="checkoutCountrySectionContainer">
            <div id="checkoutCountryLabelContainer" className={`${country.styles} ${errors.country ? 'text-warning' : ''} flex justify-between`}>
              <label htmlFor="country">{country.text}</label>
              {errors.country ? (
                <div>{errors.country.message}</div>
              ) : ''}
            </div>
            <div id="checkoutCountryInputContainer" >
              <input 
                type="text" 
                name='country' 
                placeholder='United States' 
                className={`${countryInput.styles} ${errors.country ? 'border-warning hover:border-warning focus:border-warning' : ''}`}
                {...register('country', {
                  required: 'This field is required'
                })}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutShippingDetails