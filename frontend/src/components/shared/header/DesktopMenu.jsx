import React from 'react'

function DesktopMenu() {
  return (
    <>
        <div id="desktopMenuContainer">
            <ul className='text-white text-[13px] font-bold leading-[25px] tracking-[2px] uppercase flex'>
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