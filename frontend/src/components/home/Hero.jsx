import React from 'react'
import NewProduct from './hero/NewProduct'

function Hero() {
  return (
    <>
    <div id="heroContainer" className='w-full bg-[url("assets/home/mobile/heroImage.svg")] md:bg-[url("assets/home/tablet/heroImage.svg")] xl:bg-[url("assets/home/desktop/heroImage.svg")] bg-no-repeat h-[600px] md:h-full bg-right'>
      <div id="newProductWrapper" className='px-6 pt-[198px] pb-[112px] md:pt-[253px] md:px-[194px] xl:p-0 xl:pt-[225px] xl:ml-[165px] xl:w-[398px]'>
        <NewProduct />
      </div>
    </div>
    </>
  )
}

export default Hero