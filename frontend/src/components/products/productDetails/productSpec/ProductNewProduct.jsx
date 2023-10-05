import React from 'react'

function ProductNewProduct({product}) {
  return (
    <>
        <div id={`product_${product.id}_NewProductContainer`} className='text-deepOrange text-left text-sm md:text-xs xl:text-sm leading-normal font-normal tracking-[10px] md:tracking-[8.571px] xl:tracking-[10px] uppercase'>
            <p>New Product</p>
        </div>
    </>
  )
}

export default ProductNewProduct