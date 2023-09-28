import React from 'react'
import { useMain } from '../../context/mainContext'
import HamburgerIcon from './header/HamburgerIcon'
import DesktopMenu from './header/DesktopMenu'
import Logo from './header/Logo'
import CartIcon from './header/CartIcon'

function Header() {

  const { home } = useMain()

  return (
    <>
      <div id="headerContainer">
          <div id="headerContentContainer" style={home ? {backgroundColor: '#131313'} : {backgroundColor: '#000'}} className='w-full h-[76px] flex px-6 items-center justify-between md:h-[90px] md:px-10 xl:px-[12%] xl:h-24'>
            <div id="hamburgerWrapper" className='xl:hidden'>
              <HamburgerIcon />
            </div>
            <div id="logoWrapper" className='md:ml-[-67%] xl:ml-0'>
              <Logo />
            </div>
            <div id='desktopMenuWrapper' className='hidden xl:block'>
              <DesktopMenu />
            </div>
            <div id="cartIconWrapper">
              <CartIcon />
            </div>
          </div>
          <div id='headerLine' className='w-full h-[1px] bg-white opacity-[0.104] md:w-auto md:mx-10' />
      </div>
    </>
  )
}

export default Header