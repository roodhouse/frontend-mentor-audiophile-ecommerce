import React from 'react'
import EditOrderHeading from './orders/EditOrderHeading'
import EditOrderActions from './orders/EditOrderActions'

function Orders() {

  return (
    <>
        <div id="ordersContainer">
            <div id="editOrderHeadingWrapper" className='mb-16 md:mb-[120px] xl:mb-[160px]'>
                <EditOrderHeading />
            </div>
            <div id="editOrderContent" className='bg-white px-6 md:px-10 xl:px-[5%] custom:px-[165px]'>
                <div id="editOrderActionsWrapper">
                    <EditOrderActions />
                </div>
            </div>
        </div>
    </>
  )
}

export default Orders