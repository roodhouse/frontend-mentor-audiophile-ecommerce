import React from 'react'
import Logo from './header/Logo'
import FooterMenu from './footer/FooterMenu'
import FooterText from './footer/FooterText'
import FooterCopyright from './footer/FooterCopyright'
import FooterSocial from './footer/FooterSocial'

function Footer() {
  return (
    <>
      <div id="footerContainer" className='flex flex-col items-center md:items-start md:px-10 xl:p-0 xl:w-[1110px]'>
        <div id='barContainer' className='w-full flex justify-center md:justify-normal mb-12 md:mb-14'>
          <div id="orangeBar" className='bg-deepOrange w-[101px] h-1' />
        </div>
        <div id="footerLogoAndMenu" className='flex flex-col md:flex-row md:justify-between items-center md:items-start mb-12 md:mb-8 xl:mb-9 md:w-full'>
          <div id="footerLogoWrapper" className='mb-12 md:mb-8'>
            <Logo />
          </div>
          <div id="footerMenuWrapper">
            <FooterMenu />
          </div>
        </div>
        <div id="textCopyrightSocial" className='px-6 md:px-0 w-full flex flex-col items-center md:items-start'>
          <div id="footerTextWrapper" className='mb-12 md:mb-[80px] w-[327px] md:w-[689px] xl:w-[540px] xl:mb-0'>
            <FooterText />
          </div>
          <div id="copyrightSocial" className='md:w-full md:flex md:flex-row md:justify-between md:items-center md:mb-[46px] xl:h-[81px]'>
            <div id="footerCopyrightWrapper" className='mb-12 md:mb-0 xl:self-end'>
              <FooterCopyright />
            </div>
            <div id="footerSocialWrapper" className='mb-[38px] md:mb-0 flex justify-center xl:self-start xl:mt-[-27px]'>
              <FooterSocial />
            </div>
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