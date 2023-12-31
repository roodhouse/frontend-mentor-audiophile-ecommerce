import React, { useState, useEffect } from 'react'
import { useMain } from '../../../context/mainContext'

function GalleryThree({product}) {

    const [ background, setBackground ] = useState('')
    const { productPage } = useMain()

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

    },[productPage])

  return (
    <>
         <div id={`product_${product.id}_GalleryThreeContainer`}>
            <div id={`product_${product.id}_GalleryThree`} className='w-[327px] md:w-[395px] xl:w-[635px] h-[368px] xl:h-[592px] rounded-lg bg-cover bg-no-repeat' style={{backgroundImage: `url(${background})`}} />
         </div>
    </>
  )
}

export default GalleryThree