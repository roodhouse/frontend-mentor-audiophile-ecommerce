import React from 'react'

function FooterSocial() {
  return (
    <>
        <div id="footerSocialContainer" className='flex justify-between w-[104px]'>
            <div id="facebook" className='w-6 h-6 bg-[url("assets/shared/desktop/icon-facebook.svg")] hover:bg-[url("assets/shared/desktop/icon-facebook-hover.svg")] bg-no-repeat cursor-pointer'/>
            <div id="twitter" className='w-6 h-6 bg-[url("assets/shared/desktop/icon-twitter.svg")] hover:bg-[url("assets/shared/desktop/icon-twitter-hover.svg")] bg-no-repeat cursor-pointer mt-[2px]'/>
            <div id="instagram" className='w-6 h-6 bg-[url("assets/shared/desktop/icon-instagram.svg")] hover:bg-[url("assets/shared/desktop/icon-instagram-hover.svg")] bg-no-repeat cursor-pointer'/>
        </div>
    </>
  )
}

export default FooterSocial