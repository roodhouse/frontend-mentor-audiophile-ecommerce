import React from 'react'
import CloseButton from './viewOrder/CloseButton'
import { title } from '../../checkout/checkoutForm/styles'
import Confirm from '../../shared/buttons/Confirm'

// have a text confirming the choice to complete order

const confirm = new title('Are you sure you want to complete this order?')

function CompleteOrder({complete, closeMenu}) {
  return (
    <>
        <div id="completeOrderContainer">
          <div id="confirmContainer" className={`${confirm.styles} pb-6 !mb-0`}>
            <p>{confirm.text}</p>
          </div>
          <div id="confirmButtonWrapper" className='flex justify-center pb-6'>
            <Confirm />
          </div>

          <div id="completeCloseButtonWrapper" data-menu="complete" className='flex justify-center'>
            <CloseButton view={complete} closeMenu={closeMenu} />
          </div>
        </div>
    </>
  )
}

export default CompleteOrder