import React from 'react'
import { useMain } from '../../../../../context/mainContext'

function CartItems() {

    const { cart } = useMain()
    console.log(cart)
  return (
    <div>CartItems</div>
  )
}

export default CartItems