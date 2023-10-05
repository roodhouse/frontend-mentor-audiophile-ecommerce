import React from 'react'

function ProductTitle({ product }) {
  return (
    <>
        <div id={`product_${product.id}_ProductTitleContainer`} className='text-black text-left xl:text-left text-[28px] xl:text-[40px] leading-normal md:leading-[32px] xl:leading-[44px] font-bold tracking-[1px] xl:tracking-[1.429px] uppercase w-[192px] md:w-[291px] xl:w-[275px]'>
            <p>{product.name}</p>
        </div>
    </>
  )
}

export default ProductTitle