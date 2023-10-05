import React from 'react'
import { useMain } from '../../../context/mainContext'

function SeeProductOrange({ name }) {

  const { productClick } = useMain()

  const handleClick = (e) => {
    const containerDiv = e.currentTarget 
    const productName = containerDiv.getAttribute('data-name')
    productClick(productName)
  }

  return (
    <>
      <div id="seeProductOrangeContainer" data-name={name} onClick={handleClick} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[160px] h-[48px] flex justify-center'>
        <button>SEE PRODUCT</button>
      </div>
    </>
  )
}

export default SeeProductOrange