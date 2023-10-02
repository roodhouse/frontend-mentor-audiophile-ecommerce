import React from 'react'
import Hamburger from '../../../assets/shared/tablet/icon-hamburger.svg'
import { useMain } from '../../../context/mainContext'

function HamburgerIcon() {

  const { mobileMenuOn, mobileMenuOff, mobileMenu } = useMain()
  return (

    <>
      <div id="hamburgerIconContainer" onClick={!mobileMenu ? mobileMenuOn : mobileMenuOff }>
        <img src={Hamburger} alt="Hamburger" />
      </div>
    </>
  )
}

export default HamburgerIcon