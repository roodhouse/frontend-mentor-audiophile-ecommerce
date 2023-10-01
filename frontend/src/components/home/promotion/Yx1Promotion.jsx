import React from 'react'
import SeeProductTransparent from '../../shared/buttons/SeeProductTransparent'

function Yx1Promotion() {
  return (
    <>
        <div id="Yx1PromotionContainer">
            <div id="yx1PromotionImage" className='w-[327px] h-[200px] bg-[url("assets/home/mobile/image-earphones-yx1.jpg")] bg-contain rounded-lg mb-6'/>
            <div id="yx1PromotionDetails" className='bg-offWhite rounded-lg'>
                <div id="yx1PromoDetailsTitle" className='text-black text-[28px] leading-normal tracking-[2px] font-bold uppercase pt-[41px] pl-6 mb-8 '>
                    <p>YX1 Earphones</p>
                </div>
                <div id="yx1PromoSeeProduct" className='pl-6 pb-[41px]'>
                    <SeeProductTransparent />
                </div>
            </div>
        </div>
    </>
  )
}

export default Yx1Promotion