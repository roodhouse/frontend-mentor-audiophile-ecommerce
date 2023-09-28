import React from 'react'
import NewProduct from './hero/NewProduct'

function Hero() {
  return (
    <>
    <div id="heroContainer" className='bg-[url("assets/home/mobile/heroImage.svg")] h-[600px]'>
      <div id="newProductWrapper" className='px-6 pt-[198px] pb-[112px]'>
        <NewProduct />
      </div>
    </div>
    </>
  )
}

export default Hero