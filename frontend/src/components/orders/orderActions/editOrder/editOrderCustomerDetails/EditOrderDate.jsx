import React from 'react'

function EditOrderDate({ date, payType }) {
  return (
    <>
        <div id="editOrderDateContainer" className='text-sm font-medium mb-4'>
            <p>Order was placed on {date} via {payType}</p>
        </div>
    </>
  )
}

export default EditOrderDate