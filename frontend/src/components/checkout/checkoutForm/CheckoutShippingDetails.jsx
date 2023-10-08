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

function CheckoutShippingDetails() {
  return (
    <>
      <div id="checkoutShippingDetailsContainer">
        <div id="checkoutShippingSectionTitleContainer" className={`${shippingDetails.styles}`}>
          <p>{shippingDetails.text}</p>
        </div>
        <div id="checkoutAddressSectionContainer">
          <div id="checkoutAddressLabelContainer" className={`${address.styles}`}>
            <label htmlFor="address">{address.text}</label>
          </div>
          <div id="checkoutAddressInputContainer" >
            <input type="text" name='address' placeholder='1137 Williams Avenue' className={`${addressInput.styles}`} />
          </div>
        </div>
        <div id="checkoutZipSectionContainer">
          <div id="checkoutZipLabelContainer" className={`${zip.styles}`}>
            <label htmlFor="zip">{zip.text}</label>
          </div>
          <div id="checkoutZipInputContainer" >
            <input type="text" name='zip' placeholder='10001' className={`${zipInput.styles}`} />
          </div>
        </div>
        <div id="checkoutCitySectionContainer">
          <div id="checkoutCityLabelContainer" className={`${city.styles}`}>
            <label htmlFor="city">{city.text}</label>
          </div>
          <div id="checkoutCityInputContainer" >
            <input type="text" name='city' placeholder='New York' className={`${cityInput.styles}`} />
          </div>
        </div>
        <div id="checkoutCountrySectionContainer">
          <div id="checkoutCountryLabelContainer" className={`${country.styles}`}>
            <label htmlFor="country">{country.text}</label>
          </div>
          <div id="checkoutCountryInputContainer" >
            <input type="text" name='country' placeholder='United States' className={`${countryInput.styles}`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutShippingDetails