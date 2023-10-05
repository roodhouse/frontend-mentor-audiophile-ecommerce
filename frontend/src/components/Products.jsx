import React from 'react'
import { useMain } from '../context/mainContext'
import ProductHeading from './products/ProductHeading'
import ProductDetails from './products/ProductDetails'
import ProductFeatures from './products/productDetails/ProductFeatures'
import ProductGallery from './products/ProductGallery'
import AlsoSection from './products/productDetails/AlsoSection'
import CategorySection from './shared/CategorySection'
import Copy from './shared/Copy'

function Products() {

    const { products, productPage } = useMain()
    const currentProduct = products
        ? products
            .filter((item) => item.name === productPage)
        : []

  return (
    <>
        {
            currentProduct.length > 0 ? (
                <div id={`product_${currentProduct[0].id}_Container`} className='max-w-[327px] md:max-w-[690px] flex flex-col'>
                    <div id={`product_${currentProduct[0].id}_HeadingWrapper`} className='pt-4 md:pt-8 pb-6'>
                         <ProductHeading product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_DetailsWrapper`} className='pb-[88px] md:pb-[120px]'>
                        <ProductDetails product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_FeaturesBoxWrapper`} className='pb-[88px] md:pb-[120px]'>
                        <ProductFeatures product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_GalleryWrapper`} className='pb-[120px]'>
                        <ProductGallery product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_AlsoSectionWrapper`} className='pb-[120px]'>
                        <AlsoSection product={currentProduct} />
                    </div>
                    <div id={`product_${currentProduct[0].id}_CategorySectionWrapper`} className='mt-10 pb-[52px] md:pb-[120px]'>
                        <CategorySection />
                    </div>
                    <div id={`product_${currentProduct[0].id}_CopySectionWrapper`} className=''>
                        <Copy />
                    </div>
                </div>
            ) : ''
        }
        
    </>
  )
}

export default Products