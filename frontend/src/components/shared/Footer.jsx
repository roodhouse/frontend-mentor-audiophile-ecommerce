import React from 'react'
import Logo from './header/Logo'
import FooterMenu from './footer/FooterMenu'
import FooterText from './footer/FooterText'
import FooterCopyright from './footer/FooterCopyright'
import FooterSocial from './footer/FooterSocial'

function Footer() {
  return (
    <>
      <div id="footerContainer" className='flex flex-col items-center'>
        <div id='barContainer' className='w-full flex justify-center mb-12'>
          <div id="orangeBar" className='bg-deepOrange w-[101px] h-1' />
        </div>
        <div id="footerLogoAndMenu" className='flex flex-col items-center mb-12'>
          <div id="footerLogoWrapper" className='mb-12'>
            <Logo />
          </div>
          <div id="footerMenuWrapper">
            <FooterMenu />
          </div>
        </div>
        <div id="textCopyrightSocial" className='px-6'>
          <div id="footerTextWrapper" className='mb-12'>
            <FooterText />
          </div>
          <div id="footerCopyrightWrapper" className='mb-12'>
            <FooterCopyright />
          </div>
          <div id="footerSocialWrapper" className='mb-[38px] flex justify-center'>
            <FooterSocial />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

// bar
// logo and menu
// text/copyright/social media