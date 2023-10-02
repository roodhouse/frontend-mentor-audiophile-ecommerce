import React from 'react'
import Speaker from '../../../assets/home/mobile/image-speaker-zx9.svg'
import Button from '../../shared/buttons/SeeProductBlack'

function Zx9Promotion() {
  return (
    <>
        <div id="zx9PromotionContainer" className='bg-deepOrange bg-[url("assets/home/mobile/circles.svg")] md:bg-[url("assets/home/tablet/circles.svg")] xl:md:bg-[url("assets/home/desktop/circles.svg")] bg-no-repeat rounded-lg w-[327px] md:w-[689px] xl:w-[1110px] h-[600px] md:h-[720px] xl:h-[560px] flex flex-col items-center'>
                <div id="zx9PromotionImageContainer" className='w-[172px] md:w-[197px] pt-[55px] mb-8 md:mb-[90px] xl:w-[410px]'>
                    <img src={Speaker} alt="Speaker" className='w-full' />
                </div>
                <div id="zx9PromotionTitleContainer" className='text-white text-center text-4xl md:text-[56px] md:leading-[58px] tracking-[1.286px] md:tracking-[2px] font-bold w-[250px] md:w-[261px] uppercase mb-6'>
                    <p>ZX9 Speaker</p>
                </div>
                <div id="zx9PromotionCopyContainer" className='text-white text-center text-[15px] font-medium leading-[25px] opacity-[0.75] px-6 mb-6 md:px-[171px] md:mb-10'>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                </div>
                <div id="zx9PromotionActionContainer">
                    <Button />
                </div>
            </div>
        
    </>
  )
}

export default Zx9Promotion