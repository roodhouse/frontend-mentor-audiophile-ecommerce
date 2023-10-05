import React from 'react'

function ProductNewProduct({product}) {
  return (
    <>
        <div id={`product_${product.id}_NewProductContainer`} className='text-deepOrange text-left text-sm md:text-xs leading-normal font-normal tracking-[10px] md:tracking-[8.571px] uppercase'>
            <p>New Product</p>
        </div>
    </>
  )
}

export default ProductNewProduct