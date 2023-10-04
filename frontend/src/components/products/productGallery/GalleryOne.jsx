import React, { useState, useEffect } from 'react'

function GalleryOne({product}) {

    const [ background, setBackground ] = useState('')

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

    },[])

  return (
    <>
         <div id={`product_${product.id}_GalleryOneContainer`}>
            <div id={`product_${product.id}_GalleryOne`} className='w-[327px] h-[174px] rounded-lg bg-cover bg-no-repeat mb-6' style={{backgroundImage: `url(${background})`}} />
         </div>
    </>
  )
}

export default GalleryOne