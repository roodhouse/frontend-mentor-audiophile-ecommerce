import React from 'react'
import { useEdit } from '../../../../../context/editContext'

function EditOrderDate({ payType }) {

  const { convertedDate } = useEdit()
  console.log(convertedDate)
  return (
    <>
        <div id="editOrderDateContainer" className='text-sm font-medium mb-4'>
            <p>Order was placed on {convertedDate} via {payType}</p>
        </div>
    </>
  )
}

export default EditOrderDate