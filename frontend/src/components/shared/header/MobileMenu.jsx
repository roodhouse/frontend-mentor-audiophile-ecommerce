import React from 'react'
import CategorySection from '../CategorySection'
import { useMain } from '../../../context/mainContext'

function MobileMenu() {

    const { mobileMenuOff } = useMain()
  return (
    <>
        <div id="mobileMenuContainer" className='bg-white pt-[72px] h-[737px] md:h-[340px] rounded-[0_0_8px_8px]'>
            <CategorySection />
        </div>
        <div id="mobileMenuMask" onClick={mobileMenuOff} className='h-screen bg-black opacity-[0.4]'/>
    </>
  )
}

export default MobileMenu