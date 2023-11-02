import React, { useState, useEffect } from 'react'
import ViewOrderHeading from './viewOrderCustomerDetails/ViewOrderHeading'
import ViewOrderDate from './viewOrderCustomerDetails/ViewOrderDate'
import ViewOrderGeneralDetails from './viewOrderCustomerDetails/ViewOrderGeneralDetails'
import ViewOrderBillingDetails from './viewOrderCustomerDetails/ViewOrderBillingDetails'
import { useMain } from '../../../../context/mainContext'
import { useEdit } from '../../../../context/editContext'

function ViewOrderCustomerDetails() {

  const [ formattedDate, setFormattedDate ] = useState('')
  const { orderPage } = useMain()
  const { currentOrder } = useEdit()
  
  useEffect(() => {
    if (orderPage) {
      const orderDate = new Date(currentOrder.order_date)
      setFormattedDate(orderDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }))
    }
  },[orderPage])


  return (
    <>
    {orderPage ? (
      <>
        <div id="viewOrderHeadingWrapper" className='md:w-full'>
            <ViewOrderHeading />
        </div>
        <div id="viewOrderDateWrapper" className='md:w-full'>
            <ViewOrderDate date={formattedDate} payType={currentOrder.order_cash ? 'cash' : 'eMoney'} />
        </div>
        <div id="viewOrderGeneralDetailsWrapper" className='mb-4'>
          <ViewOrderGeneralDetails date={formattedDate} />
        </div>
        <div id="viewOrderBillingDetailsWrapper">
          <ViewOrderBillingDetails />
        </div>
      </>
    ) : ''}
    </>
  )
}

export default ViewOrderCustomerDetails