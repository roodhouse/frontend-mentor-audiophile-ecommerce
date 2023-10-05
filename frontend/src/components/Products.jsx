import React from 'react'
import { useMain } from '../context/mainContext'
import ProductHeading from './products/ProductHeading'
import ProductDetails from './products/ProductDetails'
import ProductFeatures from './products/productDetails/ProductFeatures'
import ProductGallery from './products/ProductGallery'
import AlsoSection from './products/productDetails/AlsoSection'

function Products() {

    const { products, productPage } = useMain()


    const currentProduct = products
        ? products
            .filter((item) => item.name === productPage)
        : []

    console.log(productPage)
    console.log(currentProduct)

  return (
    <>
        {
            currentProduct.length > 0 ? (
                <div id={`product_${currentProduct[0].id}_Container`}>
                    <div id={`product_${currentProduct[0].id}_HeadingWrapper`} className='pt-4 pb-6'>
                         <ProductHeading product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_DetailsWrapper`} className='pb-[88px]'>
                        <ProductDetails product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_FeaturesBoxWrapper`} className='pb-[88px]'>
                        <ProductFeatures product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_GalleryWrapper`} className='pb-[120px]'>
                        <ProductGallery product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_AlsoSectionWrapper`} className='pb-[120px]'>
                        <AlsoSection product={currentProduct} />
                    </div>
                    
                    {/* category section */}
                    {/* copy section */}
                </div>
            ) : ''
        }
        
    </>
  )
}

export default Products