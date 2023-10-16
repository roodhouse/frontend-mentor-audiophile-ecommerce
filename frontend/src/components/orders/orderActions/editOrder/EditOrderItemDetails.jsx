import React from 'react'
import { title } from '../../../checkout/checkoutForm/styles'
import EditOrderTable from './editOrderItemDetails/EditOrderTable'

const items = new title('Items')

function EditOrderItemDetails({ currentOrder }) {
  return (
    <>
      <div id="editOrderItemDetailsContainer">
        <div id="editHeadingContainer" className={`${items.styles} mb-[2px]`}>
          <p>{items.text}</p>
        </div>
      </div>
      <div id="editOrderTableWrapper">
        <EditOrderTable currentOrder={currentOrder} />
      </div>
    </>
  )
}

export default EditOrderItemDetails