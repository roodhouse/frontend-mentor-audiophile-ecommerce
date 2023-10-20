import React from 'react'
import { title, label } from '../../../../checkout/checkoutForm/styles'
import { useEdit } from '../../../../../context/editContext'

const billing = new title('Billing')
const nameLabel = new label('Name:')
const street = new label('Street:')
const cityLabel = new label('City:')
const stateLabel = new label('State:')
const zipLabel = new label('Zip:')
const emailLabel = new label('Email:')
const phoneLabel = new label('Phone:')

function EditOrderBillingDetails() {

  const { address, stAddressChange, customerNameChange, name, city, 
    cityChange, state, stateChange, zip, zipChange, email, emailChange, phone, phoneChange } = useEdit()

  return (
    <>
        <div id="editOrderBillingDetailsContainer">
            <div id="editHeadingContainer" className={`${billing.styles} !mb-4`}>
                <p>{billing.text}</p>
            </div>
            <div id="editAddressContainer" className={`${nameLabel.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full mb-4'>{nameLabel.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressName' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={name}
                      onChange={(e) => customerNameChange(e)}
                    />
                  </span>
                </p>
                <p className='flex justify-between items-center w-full mb-4'>{street.text}
                  <span className='font-medium w-[165px]'>
                    <input
                      name='editOrderAddress' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={address}
                      onChange={(e) => stAddressChange(e)}
                     />
                  </span>
                </p>
                <p className='flex justify-between items-center w-full mb-4'>{cityLabel.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressCity' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={city}
                      onChange={(e) => cityChange(e)} 
                    />,
                  </span>
                </p>
                <p className='flex justify-between items-center w-full mb-4'>{stateLabel.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressState' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={state}
                      onChange={(e) => stateChange(e)} 
                     /> 
                  </span>
                </p>
                <p className='flex justify-between items-center w-full'>{zipLabel.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressZip' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={zip}
                      onChange={(e) => zipChange(e)} 
                    />
                  </span>
                </p>
            </div>
            <div id="editEmailContainer" className={`${emailLabel.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{emailLabel.text} 
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderEmail' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={email} 
                      onChange={(e) => emailChange(e)}
                    />
                  </span>
                </p>
            </div>
            <div id="editPhoneContainer" className={`${phoneLabel.styles} !mb-0`}>
                <p className='flex justify-between items-center w-full'>{phoneLabel.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderPhone' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={phone}
                      onChange={(e) => phoneChange(e)}
                    />
                  </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default EditOrderBillingDetails