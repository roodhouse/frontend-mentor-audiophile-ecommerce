import React from 'react'

function ViewOrderDate({ date, payType }) {

  return (
    <>
        <div id="viewOrderDateContainer" className='text-sm font-medium mb-4'>
            <p>Order was placed on {date} via {payType}</p>
        </div>
    </>
  )
}

export default ViewOrderDate