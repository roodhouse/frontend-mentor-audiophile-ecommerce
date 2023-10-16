import React from 'react'
import { title, label } from '../../../../checkout/checkoutForm/styles'

const billing = new title('Billing')
const address = new label('Address:')
const email = new label('Email:')
const phone = new label('Phone:')

function ViewOrderBillingDetails({ currentOrder }) {
  return (
    <>
        <div id="viewOrderBillingDetailsContainer">
            <div id="gdHeadingContainer" className={`${billing.styles} !mb-[2px]`}>
                <p>{billing.text}</p>
            </div>
            <div id="gdAddressContainer" className={`${address.styles} !mb-[2px]`}>
                <p>{address.text}</p>
                <span className='font-medium'>
                    <p>{currentOrder.order_name}</p>
                    <p>{currentOrder.order_address}</p>
                    <p>{currentOrder.order_city}, {currentOrder.order_state} {currentOrder.order_zip}</p>
                </span>
            </div>
            <div id="gdEmailContainer" className={`${email.styles} !mb-[2px]`}>
                <p>{email.text} <span className='font-medium'>{currentOrder.order_email}</span></p>
            </div>
            <div id="gdPhoneContainer" className={`${phone.styles} !mb-0`}>
                <p>{phone.text} <span className='font-medium'><a className='underline decoration-deepOrange hover:text-deepOrange hover:decoration-maskBlack' href={`tel:${currentOrder.order_phone}`}>{currentOrder.order_phone}</a></span></p>
            </div>
        </div>
    </>
  )
}

export default ViewOrderBillingDetails