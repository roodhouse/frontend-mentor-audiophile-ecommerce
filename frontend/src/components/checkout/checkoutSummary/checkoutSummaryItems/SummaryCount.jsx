import React from 'react'

function SummaryCount({ sku, quantity, name, index }) {
  return (
    <>
        <div id="summaryCountContainer" className='text-black text-right text-[15px] font-bold leading-[25px] opacity-50'>
            <p>x{quantity}</p>
        </div>
    </>
  )
}

export default SummaryCount