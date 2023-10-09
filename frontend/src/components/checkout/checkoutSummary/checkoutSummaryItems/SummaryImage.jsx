import React from 'react'

function SummaryImage({ sku, image }) {
  return (
    <>
       <div id={`product_${sku}_SummaryImageContainer`}>
            <div id={`product_${sku}_SummaryImage`} className='w-16 h-16 rounded-lg bg-cover bg-no-repeat' style={{backgroundImage: `url(${image})`}} />
       </div>
    </>
  )
}

export default SummaryImage