import React from 'react'
import GalleryOne from './productGallery/GalleryOne'
import GalleryTwo from './productGallery/GalleryTwo'
import GalleryThree from './productGallery/GalleryThree'

function ProductGallery({ product }) {

    let theProduct = product[0]

  return (
        <>
            <div id={`product_${theProduct.id}_GalleryContainer`} className='md:flex md:justify-between'>
                <div id={`product_${theProduct.id}_GalleryOneTwoContainer`} className='md:flex md:flex-col md:justify-between'>
                    <div id={`product_${theProduct.id}_GalleryOneWrapper`}>
                        <GalleryOne product={theProduct} />
                    </div>
                    <div id={`product_${theProduct.id}_GalleryTwoWrapper`}>
                        <GalleryTwo product={theProduct} />
                    </div>
                </div>
                <div id={`product_${theProduct.id}_GalleryThreeWrapper`}>
                        <GalleryThree product={theProduct} />
                </div>
            </div>
        </>
  )
}

export default ProductGallery