import React from 'react'
import { useMain } from '../../../context/mainContext'

function AddToCart({ product }) {

  const { addToCart } = useMain()

  const handleClick = () => {
    addToCart(product.name, product.price)
  }
  
  return (
    <>
      <div id="addToCartContainer" onClick={handleClick} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[160px] h-[48px] flex justify-center'>
        <button>ADD TO CART</button>
      </div>
    </>
  )
}

export default AddToCart