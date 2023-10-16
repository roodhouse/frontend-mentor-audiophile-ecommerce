import React, { useState, useEffect } from 'react'
import { useMain } from '../../../../../context/mainContext'

// check out chat gpt response about changing input...

function EditOrderTable({ currentOrder }) {

    const { products, orderPage } = useMain()
    const [ orderedProducts, setOrderedProducts ] = useState([])

    useEffect(() => {
        if(orderPage) {
            const items = currentOrder.order_items.split(', ')
            console.log(items)
            const result = []

            items.forEach(item => {
                const parts = item.split('(')
                if (parts.length === 2) {
                    const name = parts[0].trim()
                    const qty = parseInt(parts[1].replace(')',''), 10)
                    if (!isNaN(qty)) {
                        result.push({ name, qty })
                    }
                }
            })
         
            const finalResult = result.map(item => {
                const product = products.find(product => product.name === item.name)
                if (product) {
                    return { ...product, qty: item.qty}
                }
                return item
            })

            setOrderedProducts(finalResult)
            
        }
    },[orderPage])

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
                                <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell text-xs'>
                                    <span className='inline-block w-1/3 md:hidden font-bold text-xs'>Qty</span>
                                    <input name="editOrderQty" value={order.qty} id="editOrderQty" className='w-[13%] h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' />
                                </td>
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

export default EditOrderTable