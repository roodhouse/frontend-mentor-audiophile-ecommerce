import React from 'react'
import { title, label } from '../../../../checkout/checkoutForm/styles'
import { useEdit } from '../../../../../context/editContext'

const general = new title('General')
const dateOrdered = new label('Date Ordered:')
const status = new label('Status:')
const customer = new label('Customer:')
const invoice = new label('Order Number:')

function ViewOrderGeneralDetails({ date }) {

    const { currentOrder } = useEdit()

  return (
    <>
        <div id="viewOrderGeneralDetailsContainer">
            <div id="gtHeadingContainer" className={`${general.styles} !mb-[2px]`}>
                <p>{general.text}</p>
            </div>
            <div id="gtDateContainer" className={`${dateOrdered.styles} !mb-[2px]`}>
                <p>{dateOrdered.text} <span className='font-medium'>{date}</span></p>
            </div>
            <div id="gtStatusContainer" className={`${status.styles} !mb-[2px]`}>
                <p>{status.text} <span className='font-medium'>{currentOrder.order_status}</span></p>
            </div>
            <div id="gtCustomerContainer" className={`${customer.styles} !mb-[2px]`}>
                <p>{customer.text} <span className='font-medium'>{currentOrder.order_name}</span></p>
            </div>
            <div id="gtInvoiceContainer" className={`${invoice.styles} !mb-0`}>
                <p>{invoice.text} <span className='font-medium'>{currentOrder.order_id}</span></p>
            </div>
        </div>
    </>
  )
}

export default ViewOrderGeneralDetails