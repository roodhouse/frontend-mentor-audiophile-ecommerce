import React from 'react'

function ViewOrderDate({ date, payType }) {

    const orderDate = new Date(date)
    console.log(orderDate)

    const formattedDate = orderDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

  return (
    <>
        <div id="viewOrderDateContainer" className='text-sm font-medium mb-4'>
            <p>Order was placed on {formattedDate} via {payType}</p>
        </div>
    </>
  )
}

export default ViewOrderDate