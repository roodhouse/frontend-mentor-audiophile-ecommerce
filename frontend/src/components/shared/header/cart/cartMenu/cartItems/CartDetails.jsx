import React from 'react'

function CartDetails({ sku, price }) {
  return (
    <>
        <div id={`product_${sku}_cartDetailsContainer`}>
            <div id={`product_${sku}_cartSkuContainer`} className='text-black text-[15px] font-bold leading-[25px]'>
                <p>{sku}</p>
            </div>
            <div id={`product_${sku}_cartPriceContainer`} className='text-black text-[14px] font-bold leading-[25px] opacity-50'>
                <p>${price.toLocaleString()}</p>
            </div>
        </div>
    </>
  )
}

export default CartDetails

