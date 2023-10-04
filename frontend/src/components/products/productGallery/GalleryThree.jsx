import React, { useState, useEffect } from 'react'

function GalleryThree({product}) {

    const [ background, setBackground ] = useState('')

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(product.gallery_three_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(product.gallery_three_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(product.gallery_three_desktop)   
        }

    },[])

  return (
    <>
         <div id={`product_${product.id}_GalleryThreeContainer`}>
            <div id={`product_${product.id}_GalleryThree`} className='w-[327px] h-[368px] rounded-lg bg-cover bg-no-repeat' style={{backgroundImage: `url(${background})`}} />
         </div>
    </>
  )
}

export default GalleryThree