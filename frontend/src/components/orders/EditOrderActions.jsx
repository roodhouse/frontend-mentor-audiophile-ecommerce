import React, { useState, useEffect } from 'react'
import { label } from '../checkout/checkoutForm/styles'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi'
import CompleteOrder from './orderActions/CompleteOrder'
import DeleteOrder from './orderActions/DeleteOrder'
import EditOrder from './orderActions/EditOrder'
import EmailOrder from './orderActions/EmailOrder'
import ViewOrder from './orderActions/ViewOrder'
import { useMain } from '../../context/mainContext'

const orderActions = new label('Order Actions')

function EditOrderActions({ currentOrder }) {

    const { categoryPage } = useMain()

    const [ openMenu, setOpenMenu ] = useState(false)
    const [ viewOrder, setViewOrder ] = useState(false)
    const [ editOrder, setEditOrder ] = useState(false)
    const [ completeOrder, setCompleteOrder ] = useState(false)
    const [ emailOrder, setEmailOrder ] = useState(false)
    const [ deleteOrder, setDeleteOrder ] = useState(false)

    useEffect(() => {
        if (categoryPage) {
            setOpenMenu(false)
            setViewOrder(false)
            setEditOrder(false)
            setCompleteOrder(false)
            setEmailOrder(false)
            setDeleteOrder(false)
        }
    },[categoryPage])

    const handleClick = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    const menuItemClick = (e) => {
        const selectedView = e.target.getAttribute('data-menu')
        switch (selectedView) {
            case 'editOrder':
                editOrder ? setEditOrder(false) : setEditOrder(true)
                setOpenMenu(false)
                break
            case 'completeOrder':
                completeOrder ? setCompleteOrder(false) : setCompleteOrder(true)
                setOpenMenu(false)
                break
            case 'emailOrder':
                emailOrder ? setEmailOrder(false) : setEmailOrder(true)
                setOpenMenu(false)
                break
            case 'deleteOrder':
                deleteOrder ? setDeleteOrder(false) : setDeleteOrder(true)
                setOpenMenu(false)
                break
            default:
                viewOrder ? setViewOrder(false) : setViewOrder(true)
                setOpenMenu(false)
        }
    }

    const closeMenuItem = (e) => {
        console.log('close')
        let closeSelected = e.currentTarget.parentElement.getAttribute('data-menu')
        switch (closeSelected) {
            case 'view':
                setViewOrder(false)
                break
            default:
                console.log('go')
        }
        
    }

  return (
    <>
        <div id="editOrderActionsContainer" className='w-[327px] bg-offWhite p-6 rounded-lg'>
            <div id="orderActionsHeader" className='flex justify-between items-center'>
                <div id="orderActionText" className={`${orderActions.styles} mb-4 text-[28px] underline decoration-deepOrange`}>
                    <p>{orderActions.text}</p>
                </div>
                <div id="orderActionIcon" onClick={handleClick} className='cursor-pointer text-[28px]'>
                    <p>{ !openMenu ? <HiMenu /> : <HiMenuAlt3 /> }</p>
                </div>
            </div>

            { openMenu ? (
                <div id="orderActionSelectionContainer">
                <ul className={`${orderActions.styles} flex flex-col justify-center items-center text-[18px] mb-0`}>
                    <li data-menu='viewOrder' onClick={menuItemClick} className={`${viewOrder ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>View Order</li>
                    <li data-menu='editOrder' onClick={menuItemClick} className={`${editOrder ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>Edit Order</li>
                    <li data-menu='completeOrder' onClick={menuItemClick} className={`${completeOrder ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>Complete Order</li>
                    <li data-menu='emailOrder' onClick={menuItemClick} className={`${emailOrder ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>Email Customer</li>
                    <li data-menu='deleteOrder' onClick={menuItemClick} className={`${deleteOrder ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>Delete Order</li>
                </ul>
            </div>
            ) : '' }
            
        </div>
        {viewOrder || editOrder || completeOrder || emailOrder || deleteOrder ? (
            <div id="orderActionOptionsContainer" >
                {viewOrder ? (
                    <div id="viewOrderWrapper" className='w-[327px] bg-offWhite p-6 rounded-lg mt-6'>
                        <ViewOrder currentOrder={currentOrder} view={viewOrder} closeMenu={closeMenuItem} />
                    </div>
                ) : ''}
                {editOrder ? (
                    <div id="editOrderWrapper" className='w-[327px] bg-offWhite p-6 rounded-lg mt-6'>
                        <EditOrder />
                    </div>
                ) : ''}
                {completeOrder ? (
                    <div id="completeOrderWrapper" className='w-[327px] bg-offWhite p-6 rounded-lg mt-6'>
                        <CompleteOrder />
                    </div>
                ) : ''}
                {emailOrder ? (
                    <div id="emailOrderWrapper" className='w-[327px] bg-offWhite p-6 rounded-lg mt-6'>
                        <EmailOrder />
                    </div>
                ) : ''}
                {deleteOrder ? (
                    <div id="deleteOrderWrapper" className='w-[327px] bg-offWhite p-6 rounded-lg mt-6'>
                        <DeleteOrder />
                    </div>
                ) : ''}
            </div>
        ) : ''}
    </>
  )
}

export default EditOrderActions