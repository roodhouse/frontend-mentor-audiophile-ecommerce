import React from 'react'
import { title } from '../../../checkout/checkoutForm/styles'
import EditOrderTable from './editOrderItemDetails/EditOrderTable'

const items = new title('Items')

function EditOrderItemDetails({ register }) {

  return (
    <>
      <div id="editOrderItemDetailsContainer">
        <div id="editHeadingContainer" className={`${items.styles} mb-[2px]`}>
          <p>{items.text}</p>
        </div>
      </div>
      <div id="editOrderTableWrapper">
        <EditOrderTable register={register} />
      </div>
    </>
  )
}

export default EditOrderItemDetails