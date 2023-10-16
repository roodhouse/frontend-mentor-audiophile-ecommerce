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
            <div id="editDateContainer" className={`${dateOrdered.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{dateOrdered.text} 
                  <span className='font-medium'>
                    <input name='editOrderDate' className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' value={date} />
                  </span>
                </p>
            </div>
            <div id="editStatusContainer" className={`${status.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{status.text}
                  <span className='font-medium w-[165px]'>
                    <select name="editOrderStatus" id="editOrderStatus" className='w-full h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange'>
                      <option value="Pending" selected={currentOrder.order_status === 'Pending' ? true : false}>Pending</option>
                      <option value="Processing" selected={currentOrder.order_status === 'Processing' ? true : false}>Processing</option>
                      <option value="Hold" selected={currentOrder.order_status === 'On Hold' ? true : false}>On Hold</option>
                      <option value="Completed" selected={currentOrder.order_status === 'Completed' ? true : false}>Completed</option>
                      <option value="Refunded" selected={currentOrder.order_status === 'Refunded' ? true : false}>Refunded</option>
                    </select>
                  </span>
                </p>
            </div>
            <div id="editCustomerContainer" className={`${customer.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{customer.text} 
                  <span className='font-medium w-[165px]'>
                    <input type="text" name='editOrderName' className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' value={currentOrder.order_name} />
                  </span>
                </p>
            </div>
            <div id="editInvoiceContainer" className={`${invoice.styles} !mb-0`}>
                <p className='flex justify-between items-center w-full'>{invoice.text}
                  <span className='font-medium w-[165px]'>
                    <input type="text" name='editOrderId' value={currentOrder.order_id} className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' />
                  </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default EditOrderGeneralDetails