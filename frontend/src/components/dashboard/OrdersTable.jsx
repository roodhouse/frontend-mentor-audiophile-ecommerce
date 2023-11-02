import React from 'react'
import { useMain } from '../../context/mainContext'
import { useEdit } from '../../context/editContext'

function OrdersTable() {

    const { orders, orderClick } = useMain()
    const { deleteOrder } = useEdit()

    // error with delete order...

    const handleClick = (e) => {        
        let id = e.target.parentElement.parentElement.id
        orderClick(id)
    }
    
  return (
    <>
        {
            orders ? (
        <div id="ordersTableContainer">
            <table className='min-w-full border-collapse block md:table'>
                <thead className='block md:table-header-group'>
                    <tr className='border border-deepOrange md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                        <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Order</th>
                        <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Date</th>
                        <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Name</th>
                        <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Total</th>
                        <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Status</th>
                        <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Actions</th>
                    </tr>
                </thead>
                <tbody className='block md:table-row-group'>
                    {orders.map((order) => (
                        <tr key={order.order_id} id={order.order_id} className={`${order.order_id % 2 === 0 ? 'bg-offWhite text-black' : 'bg-charcoal text-offWhite'} border border-deepOrange md:border-none block md:table-row`}>
                            <td onClick={handleClick} className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Order</span><span className='cursor-pointer hover:text-deepOrange'>{order.order_id}</span></td>
                            <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Date</span>{new Date(order.order_date).toLocaleDateString('en-US', { timeZone: 'UTC' }, { year: 'numeric', month: 'long', day: 'numeric'})}</td>
                            <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Name</span>{order.order_name}</td>
                            <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Total</span>${order.order_total.toLocaleString()}</td>
                            <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Status</span>{order.order_status}</td>
                            
                            <td className='p-2 text-left md:text-center block md:table-cell'>
                                <span className='inline-block w-1/3 md:hidden font-bold'>Actions</span>
                                <button onClick={handleClick} id={`${order.order_id}_edit`} className='text-white font-bold py-1 px-2 rounded border border-deepOrange bg-deepOrange hover:bg-lightOrange mr-2'>Edit</button>
                                <button id={`${order.order_id}_delete`} onClick={deleteOrder} className='text-white font-bold py-1 px-2 rounded border border-black bg-black hover:bg-offWhite hover:text-black'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            ) : []
        }
    </>
  )
}

export default OrdersTable

