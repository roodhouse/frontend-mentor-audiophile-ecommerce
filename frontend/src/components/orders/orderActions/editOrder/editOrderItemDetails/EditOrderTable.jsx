import React from 'react'
import { useMain } from '../../../../../context/mainContext'
import { useEdit } from '../../../../../context/editContext'

function EditOrderTable({ register }) {

    const { orderPage } = useMain()
    const { orderedProducts, updateItemQuantity, handleRemove } = useEdit()

  return (
    <>
        {orderPage ? (
            <div id="orderTableContainer">
                <table className='min-w-full border-collapse block md:table'>
                    <thead className='block md:table-header-group md:border-l md:border-r'>
                        <tr className='border border-deepOrange md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell md:text-center'>Item</th>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell md:text-center'>Cost</th>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell md:text-center'>Qty</th>
                            <th className='bg-black p-2 text-white font-bold md:border-deepOrange text-left block md:table-cell md:text-center'>Total</th>
                        </tr>
                    </thead>
                    <tbody className='block md:table-row-group'>
                        {orderedProducts.map((order, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-offWhite text-black' : 'bg-charcoal text-offWhite'} border border-deepOrange md:border-none block md:table-row`}>
                                <td className='p-2 md:border md:border-t-0 md:border-deepOrange text-left flex items-center md:table-cell text-xs'>
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
                                <td className='p-2 md:border md:border-t-0 md:border-deepOrange text-left block md:table-cell text-xs md:text-center'><span className='inline-block w-1/3 md:hidden font-bold text-xs'>Cost</span>${order.price.toLocaleString()}</td>
                                <td className='p-2 md:border md:border-t-0 md:border-deepOrange text-left block md:table-cell text-xs md:text-center'>
                                    <span className='inline-block w-1/3 md:hidden font-bold text-xs'>Qty</span>
                                    <input 
                                        name={`${order.id}_editOrderQty`}
                                        type='number'
                                        {...register(`${order.id}_quantity`, {
                                            pattern: {
                                                value: /^[\d]*$/
                                            },
                                            min: {
                                                value: 0
                                            }
                                        })}
                                        value={order.qty} 
                                        id={`${order.id}_editOrderQty`}
                                        onChange={(e) => updateItemQuantity(order.name, e.target.value)} 
                                        className='w-[15%] md:w-[25%] h-[33px] pr-0 text-center text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                                    />
                                </td>
                                <td className='p-2 md:border md:border-t-0 md:border-deepOrange text-left block md:table-cell text-xs md:text-center '>
                                    <span className='md:flex md:flex-col md:flex-wrap md:items-center md:w-full'>
                                        <span className='md:flex md:w-full'>
                                            {/* <span className='inline-block w-1/3 md:w-full font-bold text-xs'>Total</span> */}
                                            <span className='inline-block w-1/3 md:w-full font-bold text-xs'>${(order.price * order.qty).toLocaleString()}</span>
                                        </span>
                                        <span className='inline-block w-1/3 md:w-full font-bold text-xs text-right md:text-center md:pt-[10px] md:hover:text-deepOrange' onClick={handleRemove} data-item={order.name}>
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