import React from 'react'

function ProductQuantity({ product }) {
  return (
    <>
        <div id={`product_${product.id}_QuanContainer`} className='w-[120px] h-[48px] bg-offWhite flex justify-between'>
            <div id="minus" className='w-4 h-[18px] text-black text-[13px] font-bold leading-normal tracking-[1px] uppercase opacity-25 py-[15px] ml-[15px] mr-[20px] flex justify-center'>
                <p>-</p>
            </div>
            <div id="quantity" className='w-4 h-[18px] text-black text-[13px] font-bold leading-normal tracking-[1px] uppercase py-[15px] mr-[20px] flex justify-center'>
                <p>1</p>
            </div>
            <div id="plus" className='w-4 h-[18px] text-black text-[13px] font-bold leading-normal tracking-[1px] uppercase opacity-25 py-[15px] mr-[15px] flex justify-center'>
                <p>+</p>
            </div>
        </div>
    </>
  )
}

export default ProductQuantity