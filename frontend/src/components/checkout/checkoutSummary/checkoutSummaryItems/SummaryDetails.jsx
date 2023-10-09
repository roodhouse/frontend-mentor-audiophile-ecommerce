import React from 'react'

function SummaryDetails({ sku, price }) {
  return (
    <>
        <div id={`product_${sku}_SummaryDetailsContainer`}>
            <div id={`product_${sku}_SummarySkuContainer`} className='text-black text-[15px] font-bold leading-[25px]'>
                <p>{sku}</p>
            </div>
            <div id={`product_${sku}_SummaryPriceContainer`} className='text-black text-[14px] font-bold leading-[25px] opacity-50'>
                <p>${price.toLocaleString()}</p>
            </div>
        </div>
    </>
  )
}

export default SummaryDetails

