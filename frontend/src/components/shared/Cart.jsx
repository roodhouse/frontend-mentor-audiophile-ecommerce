import React from 'react'
import CartMenu from './header/cart/CartMenu'
import { useMain } from '../../context/mainContext'

function Cart() {

    const { cartMenuOff } = useMain()

  return (
    <>
        <div id='cartMenuContainer' className='w-full absolute top-0 left-0 md:left-[-50px] xl:left-[-165px] mt-[114px] z-30 flex justify-center md:justify-end'>
            <CartMenu />
        </div>
        <div id="cartMenuMask" onClick={cartMenuOff} className='h-screen bg-black opacity-[0.4] absolute top-0 left-0 w-full z-20'/>
    </>
  )
}

export default Cart