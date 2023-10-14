import React, { useState } from 'react'
import { title, label, input } from '../checkout/checkoutForm/styles'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi'

const orderActions = new label('Order Actions')

function EditOrderActions({ currentOrder }) {

    const [ openMenu, setOpenMenu ] = useState(false)

    const handleClick = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

  return (
    <>
        <div id="editOrderActionsContainer" className='w-[327px] bg-offWhite p-6 rounded-lg'>
            <div id="orderActionsHeader" className='flex justify-between items-center'>
                <div id="orderActionText" className={`${orderActions.styles} text-[15px] underline decoration-deepOrange`}>
                    <p>{orderActions.text}</p>
                </div>
                <div id="orderActionIcon" onClick={handleClick} className='cursor-pointer'>
                    <p>{ !openMenu ? <HiMenu /> : <HiMenuAlt3 /> }</p>
                </div>
            </div>

            { openMenu ? (
                <div id="orderActionSelectionContainer">
                <ul className={`${orderActions.styles}`}>
                    <li className='m-2 cursor-pointer hover:text-deepOrange'>Complete Order</li>
                    <li className='m-2 cursor-pointer hover:text-deepOrange'>Edit Order</li>
                    <li className='m-2 cursor-pointer hover:text-deepOrange'>Email Customer</li>
                    <li className='m-2 cursor-pointer hover:text-deepOrange'>Delete Order</li>
                </ul>
            </div>
            ) : '' }
            
        </div>
    </>
  )
}

export default EditOrderActions