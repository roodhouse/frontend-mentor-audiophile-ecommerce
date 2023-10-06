import React from 'react'
import { useMain } from '../../../../../../context/mainContext'

function CartCounter({ sku, quantity, name, index }) {

    const { updateCartActivity } = useMain()

    const reduceOneCart = () => {
        const updateCart = JSON.parse(localStorage.getItem('cart'))
        
        const itemIndex = updateCart.findIndex((item) => item.name === index.name)
        
        if (itemIndex !== -1) {
            if ( updateCart[itemIndex].quantity > 0 ) {
                updateCart[itemIndex].quantity -= 1
            }

            if ( updateCart[itemIndex].quantity === 0 ) {
                updateCart.splice(itemIndex, 1)
            }

            localStorage.setItem('cart', JSON.stringify(updateCart))
            updateCartActivity()
        }
    }

    const addOneCart = () => {
        const updateCart = JSON.parse(localStorage.getItem('cart'))
        
        const itemIndex = updateCart.findIndex((item) => item.name === index.name)
        
        updateCart[itemIndex].quantity += 1
        
        localStorage.setItem('cart', JSON.stringify(updateCart))
        updateCartActivity()
        
    }
    
  return (
    <>
        <div id={`product_${sku}_cartCounterContainer`} className='w-[96px] h-[32px] bg-offWhite flex justify-between'>
            <div id={`product_${sku}_minusContainer`} onClick={reduceOneCart} className='w-4 h-[18px] text-black hover:text-deepOrange text-[13px] font-bold leading-normal tracking-[1px] uppercase opacity-25 hover:opacity-[1] py-[7px] ml-3 mr-3 flex justify-center cursor-pointer'>
                <p>-</p>
            </div>
            <div id={`product_${sku}_QuanContainer`} className='w-4 h-[18px] text-black text-[13px] font-bold leading-normal tracking-[1px] uppercase py-[7px] mr-3 flex justify-center'>
                <p>{quantity}</p>
            </div>
            <div id={`product_${sku}_PlusContainer`} onClick={addOneCart} className='w-4 h-[18px] text-black hover:text-deepOrange text-[13px] font-bold leading-normal tracking-[1px] uppercase opacity-25 hover:opacity-[1] py-[7px] mr-3 flex justify-center cursor-pointer'>
                <p>+</p>
            </div>
        </div>
    </>
  )
}

export default CartCounter