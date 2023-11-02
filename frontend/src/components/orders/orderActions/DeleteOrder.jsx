import React from 'react'
import CloseButton from './viewOrder/CloseButton'
import { title } from '../../checkout/checkoutForm/styles'
import Confirm from '../../shared/buttons/Confirm'
import { useEdit } from '../../../context/editContext'

function DeleteOrder({deleteMenuItem, closeMenu}) {

  const { currentOrder } = useEdit()

  const deleteItem = new title(`Delete Order #${currentOrder.order_id}`)
  return (
    <>
        <div id="deleteOrderContainer">
          <div id="deleteDetailsContainer" className={`${deleteItem.styles} text-center`}>
            <p>{deleteItem.text}</p>
          </div>
          <div id="deleteTextContainer" className='text-sm font-medium pb-6 text-center'>
            <p>Are you sure you want to delete this order?</p>
          </div>
          <div id="deleteButtonWrapper" data-menu="delete" className='flex justify-center pb-6'>
            <Confirm closeMenu={closeMenu} />
          </div>
          <div id="deleteCloseButtonWrapper" data-menu="delete" className='flex justify-center'>
            <CloseButton view={deleteMenuItem} closeMenu={closeMenu} />
          </div>
        </div>
    </>
  )
}

export default DeleteOrder