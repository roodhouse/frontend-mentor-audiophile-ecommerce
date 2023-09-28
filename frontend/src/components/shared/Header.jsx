import React from 'react'
import { useMain } from '../../context/mainContext'
import HamburgerIcon from './header/HamburgerIcon'
import Logo from './header/Logo'
import CartIcon from './header/CartIcon'

function Header() {

  const { home } = useMain()

  // on header full screen

  return (
    <>
      <div id="headerContainer">
          <div id="headerContentContainer" className='w-full h-[76px] bg-black flex px-6 items-center justify-between md:h-[90px] md:px-10'>
            <div id="hamburgerWrapper" className=''>
              <HamburgerIcon />
            </div>
            <div id="logoWrapper" className='md:ml-[-67%]'>
              <Logo />
            </div>
            <div id="cartIconWrapper">
              <CartIcon />
            </div>
          </div>
          <div id='headerLine' className='w-full h-[1px] bg-white opacity-[0.104]' />
      </div>
    </>
  )
}

export default Header