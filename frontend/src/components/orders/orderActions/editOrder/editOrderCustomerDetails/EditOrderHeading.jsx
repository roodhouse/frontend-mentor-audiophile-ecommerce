import React from 'react'
import { title } from '../../../../checkout/checkoutForm/styles'

function EditOrderHeading({ currentOrder }) {

  const order = new title(`Edit order #${currentOrder.order_id}`)

  return (
    <>
        <div id="editOrderHeadingContainer" className={`${order.styles} text-base`}>
            <p>{`${order.text}`}</p>
        </div>
    </>
  )
}

export default EditOrderHeading