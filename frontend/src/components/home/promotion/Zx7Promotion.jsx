import React from 'react'
import SeeProductTransparent from '../../shared/buttons/SeeProductTransparent'

function Zx7Promotion() {
  return (
    <>
        <div id="zx7PromotionContainer" className='w-[327px] h-[320px] bg-[url("assets/home/mobile/image-speaker-zx7.jpg")] bg-contain rounded-lg'>
            <div id="zx7PromotionTitle" className='text-black text-[28px] leading-normal tracking-[2px] font-bold uppercase pt-[101px] pl-6 mb-8'>
                <p>ZX7 Speaker</p>
            </div>
            <div id="zx7PromotionSeeProductTransparentWrapper" className='pl-6'>
                <SeeProductTransparent />
            </div>
        </div>
    </>
  )
}

export default Zx7Promotion