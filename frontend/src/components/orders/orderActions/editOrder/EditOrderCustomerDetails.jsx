import React, { useState, useEffect } from 'react'
import EditOrderHeading from './editOrderCustomerDetails/EditOrderHeading'
import EditOrderDate from './editOrderCustomerDetails/EditOrderDate'
import EditOrderGeneralDetails from './editOrderCustomerDetails/EditOrderGeneralDetails'
import EditOrderBillingDetails from './editOrderCustomerDetails/EditOrderBillingDetails'
import { useMain } from '../../../../context/mainContext'
import { useEdit } from '../../../../context/editContext'


function EditOrderCustomerDetails() {

    const [ formattedDate, setFormattedDate ] = useState('')
    const { orderPage } = useMain()
    const { currentOrder } = useEdit()

    useEffect(() => {
        if (orderPage) {
            const orderDate = new Date(currentOrder.order_date)
            setFormattedDate(orderDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }))
        }
    }, [orderPage])

  return (
    <>
        {orderPage ? (
            <form noValidate>
                <div id="editOrderHeadingWrapper">
                    <EditOrderHeading />
                </div>
                <div id="editOrderDateWrapper">
                    <EditOrderDate date={formattedDate} payType={currentOrder.order_cash ? 'cash' : 'eMoney'} />
                </div>
                <div id="editOrderGeneralDetailsWrapper" className='mb-4'>
                    <EditOrderGeneralDetails date={formattedDate} />
                </div>
                <div id="editOrderBillingDetailsWrapper">
                    <EditOrderBillingDetails />
                </div>
            </form>
        ) : ' '}
    </>
  )
}

export default EditOrderCustomerDetails