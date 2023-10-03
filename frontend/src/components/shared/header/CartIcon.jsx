import React from 'react'
import CartImage from '../../../assets/shared/desktop/icon-cart.svg'

function CartIcon() {

  return (
    <>
        <div id="cartIconContainer" >
            <img src={CartImage} alt="Cart" />
        </div>
    </>
  )
}

export default CartIcon