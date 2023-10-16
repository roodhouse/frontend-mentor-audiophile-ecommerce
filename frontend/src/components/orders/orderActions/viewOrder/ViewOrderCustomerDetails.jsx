import React, { useState, useEffect } from 'react'
import ViewOrderHeading from './viewOrderCustomerDetails/ViewOrderHeading'
import ViewOrderDate from './viewOrderCustomerDetails/ViewOrderDate'
import ViewOrderGeneralDetails from './viewOrderCustomerDetails/ViewOrderGeneralDetails'
import ViewOrderBillingDetails from './viewOrderCustomerDetails/ViewOrderBillingDetails'
import { useMain } from '../../../../context/mainContext'

function ViewOrderCustomerDetails({ currentOrder }) {

  const [ formattedDate, setFormattedDate ] = useState('')
  const { orderPage } = useMain()

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
        <div id="viewOrderHeadingWrapper">
            <ViewOrderHeading currentOrder={currentOrder} />
        </div>
        <div id="viewOrderDateWrapper">
            <ViewOrderDate date={formattedDate} payType={currentOrder.order_cash ? 'cash' : 'eMoney'} />
        </div>
        <div id="viewOrderGeneralDetailsWrapper" className='mb-4'>
          <ViewOrderGeneralDetails currentOrder={currentOrder} date={formattedDate} />
        </div>
        <div id="viewOrderBillingDetailsWrapper">
          <ViewOrderBillingDetails currentOrder={currentOrder} />
        </div>
      </>
    ) : ''}
    </>
  )
}

export default ViewOrderCustomerDetails