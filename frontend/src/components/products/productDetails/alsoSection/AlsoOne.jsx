import React, { useState, useEffect } from 'react'
import SeeProductOrange from '../../../shared/buttons/SeeProductOrange'

function AlsoOne({ product }) {

    const [ background, setBackground ] = useState('')

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(product.others_one_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(product.others_one_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(product.others_one_desktop)   
        }

    },[])

  return (
    <>
        <div id={`product_${product.id}_AlsoOneContainer`}>
            <div id={`product_${product.id}_AlsoOneImageContainer`} className='mb-8'>
                <div id={`product_${product.id}_AlsoOneImage`} className='w-[327px] h-[120px] rounded-lg bg-cover bg-no-repeat' style={{backgroundImage: `url(${background})`}}/>
            </div>
            <div id={`product_${product.id}_AlsoOneTitleContainer`} className='mb-8'>
                <div id={`product_${product.id}_AlsoOneTitle`} className='text-black text-center text-2xl leading-normal tracking-[1.714px] uppercase font-bold'>
                    <p>{product.others_one_name}</p>
                </div>
            </div>
            <div id={`product_${product.id}_AlsoOneSee`} className='flex justify-center'>
                    <SeeProductOrange name={product.others_one_name} />
            </div>
        </div>
    </>
  )
}

export default AlsoOne