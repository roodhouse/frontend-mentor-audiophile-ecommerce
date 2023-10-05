import React from 'react'
import { useMain } from '../../context/mainContext'

function ProductHeading({ product }) {

    const theProduct = product[0]

    const { goBack } = useMain()
  return (
    <>
        <div id={`product_${theProduct.id}_HeadingContainer`} onClick={goBack} className='text-black text-[15px] leading-[25px] font-medium opacity-50'>
            <p>Go Back</p>
        </div>
    </>
  )
}

export default ProductHeading