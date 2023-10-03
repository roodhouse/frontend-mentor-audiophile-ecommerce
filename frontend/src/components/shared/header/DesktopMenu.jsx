import React from 'react'
import { useMain } from '../../../context/mainContext'

function DesktopMenu() {

  const { homeClick, categoryClick } = useMain()

  const handleClick = (e) => {
    const category = e.target.innerHTML
    categoryClick(category.toLowerCase())
  }

  return (
    <>
        <div id="desktopMenuContainer">
            <ul className='text-white text-[13px] font-bold leading-[25px] tracking-[2px] uppercase flex'>
                <li onClick={homeClick} className='cursor-pointer hover:text-deepOrange mr-[34px]'>HOME</li>
                <li onClick={handleClick} className='cursor-pointer hover:text-deepOrange mr-[34px]'>HEADPHONES</li>
                <li onClick={handleClick} className='cursor-pointer hover:text-deepOrange mr-[34px]'>SPEAKERS</li>
                <li onClick={handleClick} className='cursor-pointer hover:text-deepOrange mr-[34px]'>EARPHONES</li>
            </ul>
        </div>
    </>
  )
}

export default DesktopMenu