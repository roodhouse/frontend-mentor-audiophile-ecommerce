import React from 'react'
import { useMain } from '../../../context/mainContext'
import LogoImage from '../../../assets/shared/desktop/logo.svg'

function Logo() {

  const { homeClick } = useMain()

  return (
    <>
        <div id="logoContainer" onClick={homeClick}>
            <img src={LogoImage} alt="Logo" />
        </div>
    </>
  )
}

export default Logo