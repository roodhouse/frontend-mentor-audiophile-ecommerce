import React, { useState, useEffect } from 'react'
import { useMain } from '../../../context/mainContext'

function GalleryOne({product}) { 

    const [ background, setBackground ] = useState('')

    const { productPage } = useMain()

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(product.gallery_one_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(product.gallery_one_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(product.gallery_one_desktop)   
        }

    },[productPage])

  return (
    <>
         <div id={`product_${product.id}_GalleryOneContainer`}>
            <div id={`product_${product.id}_GalleryOne`} className='w-[327px] md:w-[277px] h-[174px] rounded-lg bg-cover bg-no-repeat mb-6 md:mb-0' style={{backgroundImage: `url(${background})`}} />
         </div>
    </>
  )
}

export default GalleryOne