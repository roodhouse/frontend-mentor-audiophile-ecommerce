import React from 'react'
import { useMain } from '../../context/mainContext'

function ProductHeading() {

    const { goBack } = useMain()
  return (
    <>
        <div id="productHeadingContainer" onClick={goBack} className='text-black text-[15px] leading-[25px] font-medium opacity-50'>
            <p>Go Back</p>
        </div>
    </>
  )
}

export default ProductHeading