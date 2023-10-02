import React from 'react'
import SeeProductTransparent from '../../shared/buttons/SeeProductTransparent'

function Yx1Promotion() {
  return (
    <>
        <div id="Yx1PromotionContainer" className='w-[327px] md:w-[689px] md:flex md:justify-between'>
            <div id="yx1PromotionImage" className='w-[327px] md:w-[339px] h-[200px] md:h-[320px] bg-[url("assets/home/mobile/image-earphones-yx1.jpg")] md:bg-[url("assets/home/tablet/image-earphones-yx1.jpg")] bg-contain bg-no-repeat rounded-lg mb-6'/>
            <div id="yx1PromotionDetails" className='bg-offWhite rounded-lg md:w-[339px] md:h-[320px]'>
                <div id="yx1PromoDetailsTitle" className='text-black text-[28px] leading-normal tracking-[2px] font-bold uppercase pt-[41px] md:pt-[101px] pl-6 md:pl-[41px] mb-8'>
                    <p>YX1 Earphones</p>
                </div>
                <div id="yx1PromoSeeProduct" className='pl-6 pb-[41px] md:pl-[41px]'>
                    <SeeProductTransparent />
                </div>
            </div>
        </div>
    </>
  )
}

export default Yx1Promotion