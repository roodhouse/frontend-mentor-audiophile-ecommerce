import React from 'react'
import { title, label } from '../../../../checkout/checkoutForm/styles'

const general = new title('General')
const dateOrdered = new label('Date Ordered:')
const status = new label('Status:')
const customer = new label('Customer:')
const invoice = new label('Order Number:')


function EditOrderGeneralDetails({ currentOrder, date }) {
  return (
    <>
        <div id="editOrderGeneralDetailsContainer">
            <div id="editHeadingContainer" className={`${general.styles} !mb-[2px]`}>
                <p>{general.text}</p>
            </div>
            <div id="editDateContainer" className={`${dateOrdered.styles} !mb-[2px]`}>
                <p>{dateOrdered.text} <span className='font-medium'><input className='h-[33px]'></input></span></p>
            </div>
            <div id="editStatusContainer" className={`${status.styles} !mb-[2px]`}>
                <p>{status.text} <span className='font-medium'>{currentOrder.order_status}</span></p>
            </div>
            <div id="editCustomerContainer" className={`${customer.styles} !mb-[2px]`}>
                <p>{customer.text} <span className='font-medium'>{currentOrder.order_name}</span></p>
            </div>
            <div id="editInvoiceContainer" className={`${invoice.styles} !mb-0`}>
                <p>{invoice.text} <span className='font-medium'>{currentOrder.order_id}</span></p>
            </div>
        </div>
    </>
  )
}

export default EditOrderGeneralDetails