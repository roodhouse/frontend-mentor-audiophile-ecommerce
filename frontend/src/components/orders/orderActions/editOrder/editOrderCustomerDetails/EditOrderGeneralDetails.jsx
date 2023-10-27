import React from 'react'
import { title, label } from '../../../../checkout/checkoutForm/styles'
import { useEdit } from '../../../../../context/editContext'

const general = new title('General')
const dateOrdered = new label('Date Ordered:')
const status = new label('Status:')
const customer = new label('Customer:')
const invoice = new label('Order Number:')

function EditOrderGeneralDetails() {

  const { currentOrder, statusChange, convertedDate, name, dateChange, customerNameChange, id, idChange } = useEdit()

  return (
    <>
          <div id="editOrderGeneralDetailsContainer">
            <div id="editHeadingContainer" className={`${general.styles} !mb-[2px]`}>
                <p>{general.text}</p>
            </div>
            <div id="editDateContainer" className={`${dateOrdered.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{dateOrdered.text} 
                  <span className='font-medium w-[165px]'>
                    <input 
                      name='editOrderDate' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={convertedDate}
                      onChange={(e) => dateChange(e)}
                    />
                  </span>
                </p>
            </div>
            <div id="editStatusContainer" className={`${status.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{status.text}
                  <span className='font-medium w-[165px]'>
                    <select onChange={(e) => statusChange(e)} defaultValue={currentOrder.order_status} name="editOrderStatus" id="editOrderStatus" className='w-full h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange'>
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Hold">On Hold</option>
                      <option value="Completed">Completed</option>
                      <option value="Refunded">Refunded</option>
                    </select>
                  </span>
                </p>
            </div>
            <div id="editCustomerContainer" className={`${customer.styles} !mb-4`}>
                <p className='flex justify-between items-center w-full'>{customer.text} 
                  <span className='font-medium w-[165px]'>
                    <input 
                      type="text" 
                      name='editOrderName' 
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                      value={name}
                      onChange={(e) => customerNameChange(e)}
                    />
                  </span>
                </p>
            </div>
            <div id="editInvoiceContainer" className={`${invoice.styles} !mb-0`}>
                <p className='flex justify-between items-center w-full'>{invoice.text}
                  <span className='font-medium w-[165px]'>
                    <input 
                      type="text" 
                      name='editOrderId' 
                      value={id}
                      onChange={(e) => idChange(e)}
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' />
                  </span>
                </p>
            </div>
        </div>
    </>
  )
}

export default EditOrderGeneralDetails