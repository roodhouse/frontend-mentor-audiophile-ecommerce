import React, { useState, useEffect } from 'react'
import { title, label } from '../../../checkout/checkoutForm/styles'
import { useMain } from '../../../../context/mainContext'

const total = new title('Total')
const items = new label('Items Subtotal:')
const shipping = new label('Shipping:')
const vat = new label('VAT:')
const net = new label('NET PAYMENT:')

function ViewOrderTotal({ currentOrder }) {

    const [ netTotal, setNetTotal ] = useState('')

    const { orderPage } = useMain()

    useEffect(() => {
        if (orderPage) {
            setNetTotal(currentOrder.order_total + 50 + 1079)
        }
    }, [orderPage])
    
  return (
    <>
        { orderPage ? (
            <div id="viewOrderTotalContainer">
                <div id="totalHeadingContainer" className={`${total.styles} mb-[2px]`}>
                    <p>{total.text}</p>
                </div>
                <div id="viewSubtotalItemsContainer" className={`${items.styles} !mb-[2px]`}>
                    <p>{items.text} <span className='font-medium'>${currentOrder.order_total.toLocaleString()}</span></p>
                </div>
                <div id="viewSubtotalShippingContainer" className={`${shipping.styles} !mb-[2px]`}>
                    <p>{shipping.text} <span className='font-medium'>$50</span></p>
                </div>
                <div id="viewSubtotalVatContainer" className={`${vat.styles} !mb-[2px]`}>
                    <p>{vat.text} <span className='font-medium'>$1,079</span></p>
                </div>
                <div id="netPaymentContainer" className={`${net.styles} !mb-[2px]`}>
                    <p>{net.text} <span className='font-bold text-deepOrange'>${netTotal.toLocaleString()}</span></p>
                </div>
            </div>
        ) : ''}
    </>
  )
}

export default ViewOrderTotal