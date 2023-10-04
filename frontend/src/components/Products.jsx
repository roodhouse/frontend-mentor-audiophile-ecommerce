import React from 'react'
import { useMain } from '../context/mainContext'
import ProductHeading from './products/ProductHeading'

function Products() {

    const { products, productPage } = useMain()

    console.log(products)

    const currentProduct = products
        ? products
            .filter((item) => item.name === productPage)
        : []

    console.log(currentProduct)

  return (
    <>
        <div id="productContainer">
            <div id="productHeadingWrapper" className='pt-4 pl-6 pb-6'>
                <ProductHeading />
            </div>
        </div>
    </>
  )
}

export default Products