import React from 'react'
import LogoImage from '../../../assets/shared/desktop/logo.svg'

function Logo() {
  return (
    <>
        <div id="logoContainer">
            <img src={LogoImage} alt="Logo" />
        </div>
    </>
  )
}

export default Logo