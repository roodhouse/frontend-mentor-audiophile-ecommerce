import React, { useState, useEffect } from 'react'
import { useMain } from '../../../context/mainContext'

function ProductImage({ product }) {

    const [ background, setBackground ] = useState('')
    const { productPage } = useMain()

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(product.main_image_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(product.main_image_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(product.main_image_desktop)   
        }

    },[productPage])

  return (
    <>
        <div id={`product_${product.id}_ImageContainer`}>
        <div id={`product_${product.id}_Image`} className='w-[327px] md:w-[281px] xl:w-[540px] h-[327px] md:h-[480px] xl:h-[560px] bg-cover bg-no-repeat rounded-lg' style={{backgroundImage: `url(${background})`}}/>

        </div>
    </>
  )
}

export default ProductImage