import React from 'react'

function FooterMenu() {
  return (
    <>
        <div id="footerMenuContainer">
            <ul className='text-white text-[13px] font-bold leading-[25px] tracking-[2px] uppercase flex flex-col items-center'>
                <li className='cursor-pointer hover:text-deepOrange mb-4'>HOME</li>
                <li className='cursor-pointer hover:text-deepOrange mb-4'>HEADPHONES</li>
                <li className='cursor-pointer hover:text-deepOrange mb-4'>SPEAKERS</li>
                <li className='cursor-pointer hover:text-deepOrange'>EARPHONES</li>
            </ul>
        </div>
    </>
  )
}

export default FooterMenu