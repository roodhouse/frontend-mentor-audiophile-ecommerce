import React from 'react'
import EditOrderCustomerDetails from './editOrder/EditOrderCustomerDetails'
import EditOrderItemDetails from './editOrder/EditOrderItemDetails'
import ViewOrderTotal from './viewOrder/ViewOrderTotal'
import CloseButton from './viewOrder/CloseButton'


function EditOrder({ currentOrder, edit, closeMenu }) {
  return (
    <>
      <div id="editOrderContainer">
        <div id="editOrderCustomerDetailsWrapper" className='pb-6'>
            <EditOrderCustomerDetails currentOrder={currentOrder} />
          </div>
          <div id="editOrderItemDetailsWrapper" className='pb-6'>
            <EditOrderItemDetails currentOrder={currentOrder} />
          </div>
          <div id="editOrderTotalWrapper" className='pb-6'>
            <ViewOrderTotal currentOrder={currentOrder} />
          </div>
          <div id="editCloseButtonWrapper" data-menu="edit" className='flex justify-center'>
            <CloseButton view={edit} closeMenu={closeMenu} />
          </div>
      </div>
    </>
  )
}

export default EditOrder

// edit order number
// general section as form with prefilled values from db
// billing section as form with prefilled values from db
// items table with refund button or qty change
// have total section update