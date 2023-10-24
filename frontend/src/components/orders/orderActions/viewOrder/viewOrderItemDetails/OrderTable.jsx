import React, { useState } from 'react'
import { useMain } from '../../../../../context/mainContext'
import { useEdit } from '../../../../../context/editContext'

function OrderTable() {

    const { products, orderPage } = useMain()
    const { currentOrder, orderedProducts } = useEdit()

    console.log('order table page')
    console.log(orderedProducts)
    
  return (
    <>
        {orderPage ? (
            <div id="orderTableContainer">
                <table className='min-w-full border-collapse block md:table'>
                    <thead className='block md:table-header-group'>
                        <tr className='border border-deepOrange md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Item</th>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Cost</th>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Qty</th>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell'>Total</th>
                        </tr>
                    </thead>
                    <tbody className='block md:table-row-group'>
                        {orderedProducts.map((order, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-offWhite text-black' : 'bg-charcoal text-offWhite'} border border-deepOrange md:border-none block md:table-row`}>
                                <td className='p-2 md:border md:border-deepOrange text-left flex items-center md:table-cell text-xs'>
                                    <span className='inline-block w-1/3 md:hidden font-bold text-xs'>Item</span>
                                    <span className='flex items-center justify-between w-full'>
                                        <span>
                                            {order.name}
                                        </span>
                                        <span>
                                            <img className='w-16' src={order.main_image_mobile} alt={order.name} />
                                        </span>
                                    </span>
                                </td>
                                <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell text-xs'><span className='inline-block w-1/3 md:hidden font-bold text-xs'>Cost</span>${order.price.toLocaleString()}</td>
                                <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell text-xs'><span className='inline-block w-1/3 md:hidden font-bold text-xs'>Qty</span>{order.qty}</td>
                                <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell text-xs'><span className='inline-block w-1/3 md:hidden font-bold text-xs'>Total</span>${(order.price * order.qty).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : ''}
    </>
  )
}

export default OrderTable