import React from 'react'
import NewProduct from './hero/NewProduct'

function Hero() {
  return (
    <>
    <div id="heroContainer" className='w-full bg-[url("assets/home/mobile/heroImage.svg")] bg-no-repeat h-[600px]'>
      <div id="newProductWrapper" className='px-6 pt-[198px] pb-[112px]'>
        <NewProduct />
      </div>
    </div>
    </>
  )
}

export default Hero




// function Hero() {
//   return (
//     <>
//     <div id="maskUp" className='absolute left-0 right-0 top-0 bottom-0 bg-maskBlack z-20'/>
//     <div id="heroContainer" className='absolute w-[577.6px] h-[722px] left-[50%] top-[50%] translate-x-[50%] translate-y-[50%] mix-blend-normal opacity-50 z-10 bg-[url("assets/home/mobile/image-header.jpg")] bg-no-repeat'>
//       <div id="newProductWrapper" className='px-6 pt-[198px] pb-[112px] max-w-[375px]'>
//         <NewProduct />
//       </div>
//     </div>
//     </>
//   )
// }

// export default Hero