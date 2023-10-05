import React from 'react'

function Features({ product }) {

    console.log(product)
    const formatted = product.features.replace(/\n\n/g, '<br /><br />')

  return (
    <>
        <div id={`product_${product.id}_FeaturesContainer`}>
            <div id={`product_${product.id}_FeaturesTitleContainer`} className='text-black text-2xl leading-9 tracking-[0.857px] font-bold uppercase mb-6'>
                <p>Features</p>
            </div>
            <div id={`product_${product.id}_FeaturesCopyContainer`} className='text-black text-[15px] leading-[25px] font-medium opacity-50'>
                <div dangerouslySetInnerHTML={{ __html: formatted}}/>
            </div>
        </div>
    </>
  )
}

export default Features