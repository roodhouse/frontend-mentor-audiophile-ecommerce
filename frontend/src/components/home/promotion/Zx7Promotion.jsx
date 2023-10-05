import React from 'react'
import SeeProductTransparent from '../../shared/buttons/SeeProductTransparent'
import { useMain } from '../../../context/mainContext'

function Zx7Promotion() {

  const { productClick } = useMain()

    const handleClick = (e) => {
        const containerDiv = e.currentTarget
        const productName = containerDiv.getAttribute('data-name')
        productClick(productName)
    }

  return (
    <>
        <div id="zx7PromotionContainer" className='w-[327px] md:w-[689px] xl:w-[1110px] h-[320px] bg-[url("assets/home/mobile/image-speaker-zx7.jpg")] md:bg-[url("assets/home/tablet/image-speaker-zx7.svg")] xl:bg-[url("assets/home/desktop/image-speaker-zx7.svg")] bg-contain bg-no-repeat rounded-lg'>
            <div id="zx7PromotionTitle" className='text-black text-[28px] leading-normal tracking-[2px] font-bold uppercase pt-[101px] pl-6 mb-8 xl:pl-[95px]'>
                <p>ZX7 Speaker</p>
            </div>
            <div id="zx7PromotionSeeProductTransparentWrapper" onClick={handleClick} data-name='ZX7 Speaker' className='pl-6 xl:pl-[95px]'>
                <SeeProductTransparent />
            </div>
        </div>
    </>
  )
}

export default Zx7Promotion