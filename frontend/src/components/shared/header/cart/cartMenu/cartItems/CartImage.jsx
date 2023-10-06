import React from 'react'

function CartImage({ sku, image }) {
  return (
    <>
       <div id={`product_${sku}_cartImageContainer`}>
            <div id={`product_${sku}_cartImage`} className='w-16 h-16 rounded-lg bg-cover bg-no-repeat' style={{backgroundImage: `url(${image})`}} />
       </div>
    </>
  )
}

export default CartImage