import React from 'react'

function ProductDesc({ product }) {
  return (
    <>
        <div id={`product_${product.id}_DescContainer`} className='text-black text-left xl:text-left text-[15px] leading-[25px] font-medium opacity-50 md:w-[572px] xl:w-[445px]'>
            <p>{product.description}</p>
        </div>
    </>
  )
}

export default ProductDesc