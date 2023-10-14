import React from 'react'
import ViewOrderHeading from './viewOrderCustomerDetails/ViewOrderHeading'
import ViewOrderDate from './viewOrderCustomerDetails/ViewOrderDate'

function ViewOrderCustomerDetails({ currentOrder }) {
  console.log(currentOrder)
  return (
    <>
        <div id="viewOrderHeadingWrapper">
            <ViewOrderHeading currentOrder={currentOrder.currentOrder} />
        </div>
        <div id="viewOrderDateWrapper">
            <ViewOrderDate date={currentOrder.currentOrder.order_date} payType={currentOrder.currentOrder.order_cash ? 'cash' : 'eMoney'} />
        </div>
    </>
  )
}

export default ViewOrderCustomerDetails