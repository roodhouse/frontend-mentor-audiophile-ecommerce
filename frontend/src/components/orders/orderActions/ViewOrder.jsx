import React from 'react'
import ViewOrderCustomerDetails from './viewOrder/ViewOrderCustomerDetails'
import ViewOrderItemDetails from './viewOrder/ViewOrderItemDetails'

function ViewOrder( currentOrder ) {
  return (
    <>
      <div id="viewOrderContainer">
        <div id="viewOrderCustomerDetailsWrapper">
          <ViewOrderCustomerDetails currentOrder={currentOrder} />
        </div>
        <div id="viewOrderItemDetailsWrapper">
          <ViewOrderItemDetails currentOrder={currentOrder} />
        </div>
      </div>
    </>
  )
}

export default ViewOrder