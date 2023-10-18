import React from 'react'
import { useEdit } from '../../../../../context/editContext'

function EditOrderDate({ payType }) {

  const { currentOrderDate } = useEdit()

  return (

    <>
        <div id="editOrderDateContainer" className='text-sm font-medium mb-4'>
            <p>Order was placed on {currentOrderDate} via {payType}</p>
        </div>
    </>
  )
}

export default EditOrderDate