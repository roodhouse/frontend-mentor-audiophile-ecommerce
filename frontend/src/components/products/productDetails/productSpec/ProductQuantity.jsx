import React from 'react'
import { useMain } from '../../../../context/mainContext'

function ProductQuantity({ product }) {

    const { quantity, addOne, reduceOne} = useMain()

  return (
    <>
        <div id={`product_${product.id}_QuanContainer`} className='w-[120px] h-[48px] bg-offWhite flex justify-between'>
            <div id="minus" onClick={reduceOne} className='w-4 h-[18px] text-black hover:text-deepOrange text-[13px] font-bold leading-normal tracking-[1px] uppercase opacity-25 hover:opacity-[1] py-[15px] ml-[15px] mr-[20px] flex justify-center cursor-pointer'>
                <p>-</p>
            </div>
            <div id="quantity" className='w-4 h-[18px] text-black text-[13px] font-bold leading-normal tracking-[1px] uppercase py-[15px] mr-[20px] flex justify-center'>
                <p>{quantity}</p>
            </div>
            <div id="plus" onClick={addOne} className='w-4 h-[18px] text-black hover:text-deepOrange text-[13px] font-bold leading-normal tracking-[1px] uppercase opacity-25 hover:opacity-[1] py-[15px] mr-[15px] flex justify-center cursor-pointer'>
                <p>+</p>
            </div>
        </div>
    </>
  )
}

export default ProductQuantity