import React from 'react'
import EditOrderHeading from './editOrderCustomerDetails/EditOrderHeading'
import EditOrderDate from './editOrderCustomerDetails/EditOrderDate'
import EditOrderGeneralDetails from './editOrderCustomerDetails/EditOrderGeneralDetails'
import EditOrderBillingDetails from './editOrderCustomerDetails/EditOrderBillingDetails'
import { useMain } from '../../../../context/mainContext'
import { useEdit } from '../../../../context/editContext'


function EditOrderCustomerDetails() {

    const { orderPage } = useMain()
    const { currentOrder } = useEdit()

  return (
    <>
        {orderPage ? (
            <>
                <div id="editOrderHeadingWrapper" className='md:w-full'>
                    <EditOrderHeading />
                </div>
                <div id="editOrderDateWrapper" className='md:w-full'>
                    <EditOrderDate payType={currentOrder.order_cash ? 'cash' : 'eMoney'} />
                </div>
                <div id="editOrderGeneralDetailsWrapper" className='mb-4'>
                    <EditOrderGeneralDetails />
                </div>
                <div id="editOrderBillingDetailsWrapper">
                    <EditOrderBillingDetails />
                </div>
            </>
        ) : ' '}
    </>
  )
}

export default EditOrderCustomerDetails