import React from 'react'
import EditOrderHeading from './orders/EditOrderHeading'
import EditOrderActions from './orders/EditOrderActions'

function Orders() {

  return (
    <>
        <div id="ordersContainer" className='flex flex-col'>
            <div id="editOrderHeadingWrapper" className='mb-16 md:mb-[120px] xl:mb-[160px]'>
                <EditOrderHeading />
            </div>
            <div id="editOrderContent" className='flex justify-center self-center bg-white px-6 md:0 md:w-[768px]'>
                <div id="editOrderActionsWrapper" className='md:w-full'>
                    <EditOrderActions />
                </div>
            </div>
        </div>
    </>
  )
}

export default Orders