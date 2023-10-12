import React from 'react'
import { useMain } from '../../context/mainContext'

function OrdersTable() {

    const { orders } = useMain()
    console.log(orders)
  return (
    <>
        <div id="ordersTableContainer">
            <table className='min-w-full border-collapse block md:table'>
                <thead className='block md:table-header-group'>
                    <tr className='border border-deepOrange md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                        <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Order</th>
                        <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Name</th>
                        <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Total</th>
                        <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Status</th>
                        <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Actions</th>
                    </tr>
                </thead>
                <tbody className='block md:table-row-group'>
                    {orders.map((order) => (
                        <tr key={order.order_id} className={`${order.order_id % 2 === 0 ? 'bg-offWhite text-black' : 'bg-charcoal text-offWhite'} border border-deepOrange md:border-none block md:table-row`}>
                            <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Order</span>{order.order_id}</td>
                            <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Name</span>{order.order_name}</td>
                            <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Total</span>${order.order_total.toLocaleString()}</td>
                            <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Status</span>{order.order_status}</td>
                            <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Actions</span>
                                        <button id={`${order.order_id}_edit`} className='text-white font-bold py-1 px-2 rounded border border-deepOrange bg-deepOrange hover:bg-lightOrange mr-2'>
                                            Edit
                                        </button>
                                        <button id={`${order.order_id}_delete`} className='text-white font-bold py-1 px-2 rounded border border-black bg-black hover:bg-almostBlack'>
                                            Delete
                                        </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default OrdersTable

