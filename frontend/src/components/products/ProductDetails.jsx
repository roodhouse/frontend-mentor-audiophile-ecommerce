import React from 'react'
import ProductImage from './productDetails/ProductImage'
import ProductSpec from './productDetails/ProductSpec'

function ProductDetails({ product }) {
    
    let theProduct = product[0]
    
  return (
    <>
        {
            theProduct ? (
            <div id={`product_${theProduct.id}_DetailsContainer`}>
                <div id={`product_${theProduct.id}_ImageWrapper`} className='mb-8'>
                    <ProductImage product={theProduct} />
                </div>
                <div id={`product_${theProduct.id}_SpecWrapper`}>
                    <ProductSpec product={theProduct} />
                </div>
            </div>
            ) : ''
        }
    </>
  )
}

export default ProductDetails