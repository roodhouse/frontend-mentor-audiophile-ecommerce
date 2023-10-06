import React from 'react'
import CartImage from './cartItems/CartImage'
import CartDetails from './cartItems/CartDetails'
import CartCounter from './cartItems/CartCounter'
import { useMain } from '../../../../../context/mainContext'

function CartItems() {

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
        <div id="cartItemsContainer" className='px-7'>
            {
                cartProducts.length > 0 ? (
                    cartProducts.map((item) => (
                        <div id={`product_${item[0].sku}_cartContainer`} key={item[0].id} className='pb-6 last:pb-8 flex justify-between items-center'>
                            <div id={`product_${item[0].sku}_imageAndDetailsContainer`} className='flex'>
                                <div id={`product_${item[0].sku}_cartImageWrapper`} className='mr-4'>
                                    <CartImage image={item[0].main_image_mobile} sku={item[0].sku} />
                                </div>
                                <div id={`product_${item[0].sku}_cartDetailsWrapper`}>
                                    <CartDetails sku={item[0].sku} price={item[0].price}/>
                                </div>
                            </div>
                            <div id={`product_${item[0].sku}_cartCounterWrapper`}>
                                <CartCounter sku={item[0].sku} index={cartItems[cartProducts.indexOf(item)]} quantity={cartItems[cartProducts.indexOf(item)].quantity} />
                            </div>
                        </div>
                    ))
                    
                ) : ''
            }
        </div> 
    </>
  )
}

export default CartItems