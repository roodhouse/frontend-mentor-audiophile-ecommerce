import React from 'react'
import { title } from '../../../../checkout/checkoutForm/styles'
import { useEdit } from '../../../../../context/editContext'

function ViewOrderHeading() {
  
  const { currentOrder } = useEdit()
  
  const order = new title(`Order #${currentOrder.order_id}`)
  
  return (
    <>
        <div id="viewOrderHeadingContainer" className={`${order.styles} text-base`}>
            <p>{`${order.text}`}</p>
        </div>
    </>
  )
}

export default ViewOrderHeading