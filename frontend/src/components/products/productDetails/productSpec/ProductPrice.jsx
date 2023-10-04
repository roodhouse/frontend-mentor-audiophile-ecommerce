import React from 'react'

function ProductPrice({ product }) {
  return (
    <>
    <div id={`product_${product.id}_PriceContainer`} className='text-black text-[18px] font-bold leading-normal tracking-[1.286px] uppercase'>
        <p>${product.price.toLocaleString()}</p>
    </div>
    </>
  )
}

export default ProductPrice
