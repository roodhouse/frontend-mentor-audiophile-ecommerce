import React from 'react'
import { title, label } from '../../../../checkout/checkoutForm/styles'
import { useEdit } from '../../../../../context/editContext'

const billing = new title('Billing')
const address = new label('Address:')
const name = new label('Name:')
const street = new label('Street:')
const city = new label('City:')
const state = new label('State:')
const zip = new label('Zip:')
const email = new label('Email:')
const phone = new label('Phone:')

function EditOrderBillingDetails() {

  const { currentOrder, currentOrderAddress, stAddressChange, customerNameChange, currentOrderName, currentOrderCity, 
    cityChange, currentOrderState, stateChange, currentOrderZip, zipChange, currentOrderEmail, emailChange, currentOrderPhone, phoneChange } = useEdit()

  return (
    <>
        <div id="editOrderBillingDetailsContainer">
            <div id="editHeadingContainer" className={`${billing.styles} !mb-4`}>
                <p>{billing.text}</p>
            </div>
            <div id="editAddressContainer" className={`${name.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full mb-4'>{name.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressName' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderName}
                      onChange={(e) => customerNameChange(e)}
                    />
                  </span>
                </p>
                <p className='flex justify-between items-center w-full mb-4'>{street.text}
                  <span className='font-medium w-[165px]'>
                    <input
                      name='editOrderAddress' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderAddress}
                      onChange={(e) => stAddressChange(e)}
                     />
                  </span>
                </p>
                <p className='flex justify-between items-center w-full mb-4'>{city.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressCity' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderCity}
                      onChange={(e) => cityChange(e)} 
                    />,
                  </span>
                </p>
                <p className='flex justify-between items-center w-full mb-4'>{state.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressState' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderState}
                      onChange={(e) => stateChange(e)} 
                     /> 
                  </span>
                </p>
                <p className='flex justify-between items-center w-full'>{zip.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderAddressZip' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderZip}
                      onChange={(e) => zipChange(e)} 
                    />
                  </span>
                </p>
            </div>
            <div id="editEmailContainer" className={`${email.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{email.text} 
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderEmail' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderEmail} 
                      onChange={(e) => emailChange(e)}
                    />
                  </span>
                </p>
            </div>
            <div id="editPhoneContainer" className={`${phone.styles} !mb-0`}>
                <p className='flex justify-between items-center w-full'>{phone.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderPhone' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={currentOrderPhone}
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