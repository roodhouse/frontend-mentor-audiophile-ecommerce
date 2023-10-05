import React from 'react'
import Features from './productFeatures/Features'
import InTheBox from './productFeatures/InTheBox'

function ProductFeatures({ product }) {

    let theProduct = product[0]

  return (
    <>
        <div id={`product_${product.id}_FeaturesBoxContainer`}>
            <div id={`product_${product.id}_FeaturesWrapper`} className='mb-[88px] md:mb-[120px]'>
                <Features product={theProduct} />
            </div>
            <div id={`product_${product.id}_BoxWrapper`}>
                <InTheBox product={theProduct} />
            </div>
        </div>
    </>
  )
}

export default ProductFeatures