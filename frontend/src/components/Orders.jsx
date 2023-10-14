import React from 'react'
import EditOrderHeading from './orders/EditOrderHeading'
import { useMain } from '../context/mainContext'
import EditOrderActions from './orders/EditOrderActions'

function Orders() {

    const { orders, orderPage } = useMain()

    const currentOrder = orders ? orders.filter((item) => item.order_id === parseInt(orderPage)) : []

  return (
    <>
        <div id="ordersContainer">
            <div id="editOrderHeadingWrapper" className='mb-16 md:mb-[120px] xl:mb-[160px]'>
                <EditOrderHeading currentOrder={currentOrder[0]} />
            </div>
            <div id="editOrderContent" className='bg-white px-6 md:px-10 xl:px-[5%] custom:px-[165px]'>
                <div id="editOrderActionsWrapper">
                    <EditOrderActions currentOrder={currentOrder[0]} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Orders