import React from 'react'

function DesktopMenu() {
  return (
    <>
        <div id="desktopMenuContainer">
            <ul className='text-white font-bold leading-[25px] tracking-[2px] uppercase flex'>
                <li className='cursor-pointer hover:text-deepOrange mr-[34px]'>HOME</li>
                <li className='cursor-pointer hover:text-deepOrange mr-[34px]'>HEADPHONES</li>
                <li className='cursor-pointer hover:text-deepOrange mr-[34px]'>SPEAKERS</li>
                <li className='cursor-pointer hover:text-deepOrange mr-[34px]'>EARPHONES</li>
            </ul>
        </div>
    </>
  )
}

export default DesktopMenu

// color: #FFF;
// font-family: Manrope;
// font-size: 13px;
// font-style: normal;
// font-weight: 700;
// line-height: 25px; /* 192.308% */
// letter-spacing: 2px;
// text-transform: uppercase;