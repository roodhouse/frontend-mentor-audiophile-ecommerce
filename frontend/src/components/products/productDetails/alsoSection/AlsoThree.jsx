import React, { useState, useEffect } from 'react'
import { useMain } from '../../../../context/mainContext'
import SeeProductOrange from '../../../shared/buttons/SeeProductOrange'

function AlsoThree({ product }) {

    const [ background, setBackground ] = useState('')
    const { productPage } = useMain()

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(product.others_three_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(product.others_three_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(product.others_three_desktop)   
        }

    },[productPage])

  return (
    <>
        <div id={`product_${product.id}_AlsoThreeContainer`} className='md:w-[223px] xl:w-[350px]'>
            <div id={`product_${product.id}_AlsoThreeImageContainer`} className='mb-8 md:mb-10'>
                <div id={`product_${product.id}_AlsoThreeImage`} className='w-[327px] md:w-[223px] xl:w-[350px] h-[120px] md:h-[318px] rounded-lg bg-cover bg-no-repeat' style={{backgroundImage: `url(${background})`}}/>
            </div>
            <div id={`product_${product.id}_AlsoThreeTitleContainer`} className='mb-8 md:min-h-[72px] md:flex md:justify-center md:items-center'>
                <div id={`product_${product.id}_AlsoThreeTitle`} className='text-black text-center text-2xl leading-normal tracking-[1.714px] uppercase font-bold'>
                    <p>{product.others_three_short}</p>
                </div>
            </div>
            <div id={`product_${product.id}_AlsoThreeSee`} className='flex justify-center'>
                    <SeeProductOrange name={product.others_three_name} />
            </div>
        </div>
    </>
  )
}

export default AlsoThree