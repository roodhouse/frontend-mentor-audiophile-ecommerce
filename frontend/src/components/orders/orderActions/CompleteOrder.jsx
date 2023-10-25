import React from 'react'
import CloseButton from './viewOrder/CloseButton'
import { title } from '../../checkout/checkoutForm/styles'
import Confirm from '../../shared/buttons/Confirm'
import { useEdit } from '../../../context/editContext'

function CompleteOrder({complete, closeMenu}) {

  const { currentOrder } = useEdit()

  const confirm = new title(`Complete Order #${currentOrder.order_id}`)
  return (
    <>
        <div id="completeOrderContainer">
          <div id="confirmDetailsContainer" className={`${confirm.styles} text-center`}>
            <p>{confirm.text}</p>
          </div>
          <div id="confirmTextContainer" className='text-sm font-medium pb-6 text-center'>
            <p>Are you sure you want to complete this order?</p>
          </div>
          <div id="confirmButtonWrapper" data-menu="complete" className='flex justify-center pb-6'>
            <Confirm closeMenu={closeMenu} />
          </div>

          <div id="completeCloseButtonWrapper" data-menu="complete" className='flex justify-center'>
            <CloseButton view={complete} closeMenu={closeMenu} />
          </div>
        </div>
    </>
  )
}

export default CompleteOrder