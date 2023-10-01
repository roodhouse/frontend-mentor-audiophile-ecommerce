import React from 'react'
import Speaker from '../../../assets/home/mobile/image-speaker-zx9.svg'
import Button from '../../shared/buttons/SeeProductBlack'

function Zx9Promotion() {
  return (
    <>
        <div id="zx9PromotionContainer" className='bg-deepOrange bg-[url("assets/home/desktop/circles.svg")] bg-no-repeat rounded-lg w-[327px] h-[600px] flex flex-col items-center'>
                <div id="zx9PromotionImageContainer" className='w-[172px] pt-[55px] mb-8'>
                    <img src={Speaker} alt="Speaker" />
                </div>
                <div id="zx9PromotionTitleContainer" className='text-white text-center text-4xl tracking-[1.286px] font-bold w-[250px] uppercase mb-6'>
                    <p>ZX9 Speaker</p>
                </div>
                <div id="zx9PromotionCopyContainer" className='text-white text-center text-[15px] font-medium leading-[25px] opacity-[0.75] px-6 mb-6'>
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