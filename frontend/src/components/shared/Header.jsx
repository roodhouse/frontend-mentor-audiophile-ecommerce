import React from 'react'
import { useMain } from '../../context/mainContext'
import HamburgerIcon from './header/HamburgerIcon'
import DesktopMenu from './header/DesktopMenu'
import Logo from './header/Logo'
import CartIcon from './header/CartIcon'
import MobileMenu from './header/MobileMenu'
import Cart from './Cart'
import ThankYou from './header/ThankYou'

function Header() {

  const { home, mobileMenu, cartMenu, thankYouMenu, thankYou } = useMain()

  return (
    <>
      <div id="headerContainer">
          <div id="headerContentContainer" style={home ? {backgroundColor: '#131313'} : {backgroundColor: '#000'}} className='w-full h-[76px] flex px-6 items-center justify-between md:h-[90px] md:px-10 xl:px-[12%] xl:h-24'>
            <div id="hamburgerWrapper" className='xl:hidden'>
              <HamburgerIcon />
            </div>
            <div id="logoWrapper" className='md:ml-[-67%] xl:ml-0 cursor-pointer'>
              <Logo />
            </div>
            <div id='desktopMenuWrapper' className='hidden xl:block'>
              <DesktopMenu />
            </div>
            <div id="cartIconWrapper" className='cursor-pointer'>
              <CartIcon />
            </div>
          </div>
          <div id='headerLine' className='w-full h-[1px] bg-white opacity-[0.104] md:w-auto md:mx-10 xl:mx-[12%]' />
          <div id="mobileMenuWrapper" style={mobileMenu ? {display:'block'} : {display: 'none'}}>
              <MobileMenu />
          </div>
          <div id="cartMenuWrapper" style={cartMenu ? {display:'block'} : {display: 'none'}}>
              <Cart />
          </div>
          <div id="ThankYouWrapper" style={thankYou ? {display:'block'} : {display: 'none'}} className='bg-white'>
              <ThankYou />
          </div>
      </div>
    </>
  )
}

export default Header