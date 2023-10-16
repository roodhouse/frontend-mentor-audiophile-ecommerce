import React from 'react'
import { title } from '../../../checkout/checkoutForm/styles'
import OrderTable from './viewOrderItemDetails/OrderTable'

const items = new title('Items')

function ViewOrderItemDetails({ currentOrder }) {
  return (
    <>
      <div id="viewOrderItemDetailsContainer">
        <div id="gtHeadingContainer" className={`${items.styles} mb-[2px]`}>
          <p>{items.text}</p>
        </div>
      </div>
      <div id="viewOrderTableWrapper">
        <OrderTable currentOrder={currentOrder} />
      </div>
    </>
  )
}

export default ViewOrderItemDetails