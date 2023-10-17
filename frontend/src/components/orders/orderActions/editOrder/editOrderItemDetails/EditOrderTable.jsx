import React, { useState, useEffect } from 'react'
import { useMain } from '../../../../../context/mainContext'

// remove item button
// fix other input fields
// update total in edit view
// submit button
// update db table and view order fields based on new data

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
    },[orderPage, products, currentOrder.order_items])

    function handleQtyChange(event, index) {
        const newQty = parseInt(event.target.value, 10)
        const updatedOrderedProducts = [...orderedProducts]
        if(!isNaN(newQty)) {
            updatedOrderedProducts[index].qty = newQty
        } else {
            updatedOrderedProducts[index].qty = ''
        }
        setOrderedProducts(updatedOrderedProducts)
    }

    const handleRemove = async (e) => {
        // update order items
        const removedName = e.currentTarget.getAttribute('data-item')
        let removedQty = e.currentTarget.parentElement.parentElement.previousSibling.lastChild.value
        const removedItem = removedName + '(' + removedQty +')'
        console.log(removedItem)
        console.log(currentOrder)
        const updatedOrder = {...currentOrder}
        updatedOrder.order_items = updatedOrder.order_items.replace(removedItem, '')
        if (updatedOrder.order_items.startsWith(', ')) {
            updatedOrder.order_items = updatedOrder.order_items.slice(2)
        } else if (updatedOrder.order_items.endsWith(', ')) {
            updatedOrder.order_items = updatedOrder.order_items.slice(0, -2)
        }

        // update order total
        let removedProductCost = orderedProducts.filter((item) => item.name === removedName)
        removedProductCost = removedProductCost[0].price
        removedQty = parseInt(removedQty)
        let currentTotal = currentOrder.order_total
        let newTotal = currentTotal - (removedProductCost * removedQty)
        updatedOrder.order_total = newTotal

        // correct date
        const updateDate = new Date(updatedOrder.order_date)
        const updateDateFormatted = updateDate.toISOString().split('T')[0]
        console.log(updateDateFormatted)
        console.log(updatedOrder.order_items)
       
        const name = updatedOrder.order_name
        const email = updatedOrder.order_email
        const phone = updatedOrder.order_phone
        const address = updatedOrder.order_address
        const zip = updatedOrder.order_zip
        const city = updatedOrder.order_city
        const state = updatedOrder.order_state
        const date = updateDateFormatted
        const cash = updatedOrder.order_cash
        const eMoney = updatedOrder.order_emoney
        const status = updatedOrder.order_status
        const total = updatedOrder.order_total
        const items = updatedOrder.order_items

        console.log(name, email, phone, address, zip, city, state, date, cash, eMoney, status, total, items)
        
        if ( name && email && phone && address && zip && state  && city && total && items) {
            const response = await fetch(`http://127.0.0.1:5000/api/orders/${updatedOrder.order_id}`, {
                method: 'put',
                body: JSON.stringify({
                    date,
                    name,
                    email,
                    phone,
                    address,
                    zip,
                    city,
                    state,
                    cash,
                    eMoney,
                    status,
                    total,
                    items
                }),
                headers: {'Content-Type': 'application/json'}
            })

            if (response.ok) {
                console.log('updated')
            } else {
                alert(response.statusText)
            }
        } else {
            console.log('error')
        }

    }

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
                                    <input name="editOrderQty" value={order.qty} id="editOrderQty" onChange={(e) => handleQtyChange(e, index)} className='w-[13%] h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' />
                                </td>
                                <td className='p-2 md:border md:border-deepOrange text-left block md:table-cell text-xs '>
                                    <span className=''>
                                        <span className=''>
                                            <span className='inline-block w-1/3 md:hidden font-bold text-xs'>Total</span>
                                            <span className='inline-block w-1/3 md:hidden font-bold text-xs'>${(order.price * order.qty).toLocaleString()}</span>
                                        </span>
                                        <span className='inline-block w-1/3 md:hidden font-bold text-xs text-right' onClick={handleRemove} data-item={order.name}>
                                            <button>Remove Item</button>
                                        </span>
                                    </span>
                                </td>
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