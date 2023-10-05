import React, { useState, useEffect } from 'react'
import { useMain } from '../../../context/mainContext'

function GalleryTwo({product}) {

    const [ background, setBackground ] = useState('')
    const { productPage } = useMain()

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(product.gallery_two_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(product.gallery_two_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(product.gallery_two_desktop)   
        }

    },[productPage])

  return (
    <>
         <div id={`product_${product.id}_GalleryTwoContainer`}>
            <div id={`product_${product.id}_GalleryTwo`} className='w-[327px] md:w-[277px] h-[174px] rounded-lg bg-cover bg-no-repeat mb-6 md:mb-0' style={{backgroundImage: `url(${background})`}} />
         </div>
    </>
  )
}

export default GalleryTwo