import React from 'react'

function ThankHeader() {
  return (
    <>
        <div id="thankHeaderContainer">
            <div id="thankYouText" className='text-black text-2xl md:text-[32px] leading-[28px] md:leading-[36px] tracking-[0.857px] md:tracking-[1.143px] font-bold uppercase'>
                <p>THANK YOU</p>
            </div>
            <div id="thankYouTextTwo" className='text-black text-2xl md:text-[32px] leading-[28px] md:leading-[36px] tracking-[0.857px] md:tracking-[1.143px] font-bold uppercase'>
                <p>FOR YOUR ORDER</p>
            </div>
        </div>
    </>
  )
}

export default ThankHeader
