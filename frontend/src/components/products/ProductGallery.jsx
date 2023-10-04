import React from 'react'
import GalleryOne from './productGallery/GalleryOne'
import GalleryTwo from './productGallery/GalleryTwo'
import GalleryThree from './productGallery/GalleryThree'

function ProductGallery({ product }) {

    let theProduct = product[0]

  return (
        <>
            <div id={`product_${product.id}_GalleryContainer`}>
                <div id={`product_${product.id}_GalleryOneTwoContainer`}>
                    <div id={`product_${product.id}_GalleryOneWrapper`}>
                        <GalleryOne product={theProduct} />
                    </div>
                    <div id={`product_${product.id}_GalleryTwoWrapper`}>
                        <GalleryTwo product={theProduct} />
                    </div>
                </div>
                <div id={`product_${product.id}_GalleryThreeWrapper`}>
                        <GalleryThree product={theProduct} />
                </div>
            </div>
        </>
  )
}

export default ProductGallery