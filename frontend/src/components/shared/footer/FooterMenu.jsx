import React from 'react'
import { useMain } from '../../../context/mainContext'

function FooterMenu() {

  const { homeClick, categoryClick } = useMain()

  const handleClick = (e) => {
    const category = e.target.innerHTML
    categoryClick(category.toLowerCase())
  }
  return (
    <>
        <div id="footerMenuContainer">
            <ul className='text-white text-[13px] font-bold leading-[25px] tracking-[2px] uppercase flex flex-col md:flex-row items-center'>
                <li onClick={homeClick} className='cursor-pointer hover:text-deepOrange mb-4 md:mb-0 md:mr-[34px]'>HOME</li>
                <li onClick={handleClick} className='cursor-pointer hover:text-deepOrange mb-4 md:mb-0 md:mr-[34px]'>HEADPHONES</li>
                <li onClick={handleClick} className='cursor-pointer hover:text-deepOrange mb-4 md:mb-0 md:mr-[34px]'>SPEAKERS</li>
                <li onClick={handleClick} className='cursor-pointer hover:text-deepOrange'>EARPHONES</li>
            </ul>
        </div>
    </>
  )
}

export default FooterMenu