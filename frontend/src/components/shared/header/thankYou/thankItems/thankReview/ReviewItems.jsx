import React from 'react'
import { useMain } from '../../../../../../context/mainContext'
import SummaryImage from '../../../../../checkout/checkoutSummary/checkoutSummaryItems/SummaryImage'
import SummaryDetails from '../../../../../checkout/checkoutSummary/checkoutSummaryItems/SummaryDetails'
import SummaryCount from '../../../../../checkout/checkoutSummary/checkoutSummaryItems/SummaryCount'

function ReviewItems() {

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
            cartProducts.push(products.filter((merch) => merch.name === item.name))
        })
    }

  return (
    <>
        <div id="reviewItemsContainer">
        {
                cartProducts.length > 0 ? (
                    cartProducts.length >= 2 ? (
                        // only map the first product here
                        

                        cartProducts.map((item) => (
                            <>
                            <div id={`product_${item[0].sku}_SummaryContainer`} key={item[0].id} className='pb-3 flex justify-between items-center'>
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
                            <div id='thankYouLineContainer'>
                                <div id='thankYouLine' className='w-[215px] h-[1px] bg-black opacity-[0.08] mb-3' />
                            </div>
                            <div id="moreItemsContainer" className='text-black text-xs leading-normal tracking-[0.214px] font-bold opacity-50 flex justify-center mb-6'>
                                <p>and {cartProducts.length - 1} other item(s)</p>
                            </div>
                            
                            </>
                        ))
                    ) : (
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
                    )
                ) : ''
            }
        </div>
    </>
  )
}

export default ReviewItems