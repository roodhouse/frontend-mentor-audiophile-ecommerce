import React from 'react'
import { useMain } from '../../../context/mainContext'
import SummaryImage from './checkoutSummaryItems/SummaryImage'
import SummaryDetails from './checkoutSummaryItems/SummaryDetails'
import SummaryCount from './checkoutSummaryItems/SummaryCount'

function CheckoutSummaryItems() {

    const { cart, products } = useMain()

    let cartItems = []
    let cartProducts = []

    if (cart.length > 0 && products) {
        cart.forEach((item) => {
            cartItems.push(item)
        })
    }

    if (cartItems.length > 0) {
        cartItems.forEach((item) => {
            cartProducts.push(products.filter((merch) => merch.name === item.name ))
        })
    }
    
  return (
    <>

        <div className='' id="checkoutSummaryItemsContainer">
            {
                cartProducts.length > 0 ? (
                    cartProducts.map((item) => (
                        <div id={`product_${item[0].sku}_SummaryContainer`} key={item[0].id} className='pb-6 last:pb-8 flex justify-between items-center'>
                            <div id={`product_${item[0].sku}_SummaryImageAndDetailsContainer`} className='flex'>
                                <div id={`product_${item[0].sku}_SummaryCartImageWrapper`} className='mr-4'>
                                    <SummaryImage image={item[0].main_image_mobile} sku={item[0].sku} />
                                </div>
                                <div id={`product_${item[0].sku}_SummaryCartDetailsWrapper`}>
                                    <SummaryDetails sku={item[0].sku} price={item[0].price}/>
                                </div>
                            </div>
                            <div id={`product_${item[0].sku}_SummaryCartCounterWrapper`}>
                                <SummaryCount sku={item[0].sku} index={cartItems[cartProducts.indexOf(item)]} quantity={cartItems[cartProducts.indexOf(item)].quantity} />
                            </div>
                        </div>
                    ))
                ) : ''
            }
        </div>

    </>
  )
}

export default CheckoutSummaryItems