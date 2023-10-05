import React from 'react'
import ProductNewProduct from './productSpec/ProductNewProduct'
import ProductTitle from './productSpec/ProductTitle'
import ProductDesc from './productSpec/ProductDesc'
import ProductPrice from './productSpec/ProductPrice'
import ProductQuantity from './productSpec/ProductQuantity'
import AddToCart from '../../shared/buttons/AddToCart'

function ProductSpec({ product }) {
  return (
    <>
        <div id={`product_${product.id}_SpecContainer`}>

            {
                product.new ? (
                    <div id={`product_${product.id}_NewWrapper`} className='mb-6 md:mb-4'>
                        <ProductNewProduct product={product} />
                    </div>
                ) : ''
            }

            <div id={`product_${product.id}_TitleWrapper`} className='mb-6 md:mb-8'>
                <ProductTitle product={product} />
            </div>
            <div id={`product_${product.id}_DescWrapper`} className='mb-6 md:mb-8'>
                <ProductDesc product={product} />
            </div>
            <div id={`product_${product.id}_PriceWrapper`} className='mb-8'>
                <ProductPrice product={product} />
            </div>
            <div id={`product_${product.id}_QuanCartContainer`} className='flex'>
                <div id={`product_${product.id}_QuanWrapper`} className='mr-4'>
                    <ProductQuantity product={product} />
                </div>
                <div id={`product_${product.id}_CartWrapper`}>
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductSpec