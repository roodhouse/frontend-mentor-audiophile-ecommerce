import React from 'react'
import ThankItems from './thankYou/ThankItems'

function ThankYou() {
  return (
    <>
        <div id='thanksMenuContainer' className='w-full absolute top-0 left-0 mt-[114px] z-30 flex justify-center'>
            <div id="thankItmesWrapper">
              <ThankItems />
            </div>
        </div>
        <div id="cartMenuMask" className='h-screen bg-black opacity-[0.4] absolute top-0 left-0 w-full z-20'/>
    </>
  )
}

export default ThankYou