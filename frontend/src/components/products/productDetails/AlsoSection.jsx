import React from 'react'
import AlsoOne from './alsoSection/AlsoOne'
import AlsoTwo from './alsoSection/AlsoTwo'
import AlsoThree from './alsoSection/AlsoThree'

function AlsoSection({product}) {

    let theProduct = product[0]


  return (
    <>
        <div id={`product_${product.id}_AlsoSectionContainer`}>
            <div id={`product_${product.id}_AlsoTitleContainer`} className='text-black text-2xl leading-9 tracking-[0.857px] font-bold uppercase text-center mb-10'>
                <p>You Also May Like</p>
            </div>
            <div id={`product_${product.id}_AlsoOneWrapper`}>
                <AlsoOne product={theProduct} />
            </div>
            <div id={`product_${product.id}_AlsoTwoWrapper`}>
                <AlsoTwo product={theProduct} />
            </div>
            <div id={`product_${product.id}_AlsoThreeWrapper`}>
                <AlsoThree product={theProduct} />
            </div>
        </div>
    </>
  )
}

export default AlsoSection