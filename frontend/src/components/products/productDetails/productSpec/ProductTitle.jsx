import React from 'react'

function ProductTitle({ product }) {
  return (
    <>
        <div id={`product_${product.id}_ProductTitleContainer`} className='text-black text-left xl:text-left text-[28px] leading-normal md:leading-[32px] font-bold tracking-[1px] uppercase w-[192px] md:w-[291px]'>
            <p>{product.name}</p>
        </div>
    </>
  )
}

export default ProductTitle