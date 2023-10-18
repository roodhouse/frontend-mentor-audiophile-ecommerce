import React from 'react'
import EditOrderCustomerDetails from './editOrder/EditOrderCustomerDetails.jsx'
import EditOrderItemDetails from './editOrder/EditOrderItemDetails'
import ViewOrderTotal from './viewOrder/ViewOrderTotal'
import CloseButton from './viewOrder/CloseButton'


function EditOrder({ edit, closeMenu }) {
  return (
    <>
      <div id="editOrderContainer">
        <div id="editOrderCustomerDetailsWrapper" className='pb-6'>
            <EditOrderCustomerDetails />
          </div>
          <div id="editOrderItemDetailsWrapper" className='pb-6'>
            <EditOrderItemDetails />
          </div>
          <div id="editOrderTotalWrapper" className='pb-6'>
            <ViewOrderTotal />
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