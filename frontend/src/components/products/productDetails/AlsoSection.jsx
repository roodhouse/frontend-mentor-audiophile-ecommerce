import React from 'react'
import AlsoOne from './alsoSection/AlsoOne'
import AlsoTwo from './alsoSection/AlsoTwo'
import AlsoThree from './alsoSection/AlsoThree'

function AlsoSection({product}) {

    let theProduct = product[0]


  return (
    <>
        <div id={`product_${theProduct.id}_AlsoSectionContainer`}>
            <div id={`product_${theProduct.id}_AlsoTitleContainer`} className='text-black text-2xl md:text-[32px] leading-9 tracking-[0.857px] md:tracking-[1.143px] font-bold uppercase text-center mb-10 md:mb-[56px]'>
                <p>You Also May Like</p>
            </div>
            <div id={`product_${theProduct.id}_AlsoSectionProductContainer`} className='md:flex md:justify-between'>
                <div id={`product_${theProduct.id}_AlsoOneWrapper`} className='mb-[56px] md:mb-0'>
                    <AlsoOne product={theProduct} />
                </div>
                <div id={`product_${theProduct.id}_AlsoTwoWrapper`} className='mb-[56px] md:mb-0'>
                    <AlsoTwo product={theProduct} />
                </div>
                <div id={`product_${theProduct.id}_AlsoThreeWrapper`}>
                    <AlsoThree product={theProduct} />
                </div>
            </div>
        </div>
    </>
  )
}

export default AlsoSection