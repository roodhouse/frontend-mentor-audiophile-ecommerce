import React from 'react'
import Features from './productFeatures/Features'
import InTheBox from './productFeatures/InTheBox'

function ProductFeatures({ product }) {

    let theProduct = product[0]

  return (
    <>
        <div id={`product_${theProduct.id}_FeaturesBoxContainer`} className='xl:flex xl:justify-between'>
            <div id={`product_${theProduct.id}_FeaturesWrapper`} className='mb-[88px] md:mb-[120px] xl:mb-0 xl:w-[635px]'>
                <Features product={theProduct} />
            </div>
            <div id={`product_${theProduct.id}_BoxWrapper`}>
                <InTheBox product={theProduct} />
            </div>
        </div>
    </>
  )
}

export default ProductFeatures