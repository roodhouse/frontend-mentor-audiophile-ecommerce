import React from 'react'
import CartImage from '../../../assets/shared/desktop/icon-cart.svg'
import { useMain } from '../../../context/mainContext'

function CartIcon() {

  const { cartMenuOn, cartMenuOff, cartMenu } = useMain()

  console.log(cartMenu)
  return (
    <>
        <div id="cartIconContainer" onClick={!cartMenu ? cartMenuOn : cartMenuOff} >
            <img src={CartImage} alt="Cart" />
        </div>
    </>
  )
}

export default CartIcon