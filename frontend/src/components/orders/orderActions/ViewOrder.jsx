import React from 'react'
import ViewOrderCustomerDetails from './viewOrder/ViewOrderCustomerDetails'
import ViewOrderItemDetails from './viewOrder/ViewOrderItemDetails'
import ViewOrderTotal from './viewOrder/ViewOrderTotal'
import CloseButton from './viewOrder/CloseButton'

function ViewOrder({ view, closeMenu }) {
  return (
    <>
      <div id="viewOrderContainer">
        <div id="viewOrderCustomerDetailsWrapper" className='pb-6'>
          <ViewOrderCustomerDetails />
        </div>
        <div id="viewOrderItemDetailsWrapper" className='pb-6'>
          <ViewOrderItemDetails />
        </div>
        <div id="viewOrderTotalWrapper" className='pb-6'>
          <ViewOrderTotal />
        </div>
        <div id="viewCloseButtonWrapper" data-menu="view" className='flex justify-center'>
          <CloseButton view={view} closeMenu={closeMenu} />
        </div>
      </div>
    </>
  )
}

export default ViewOrder