import React from 'react'
import { useEdit } from '../../../context/editContext'

function Confirm({ closeMenu }) {

    const { statusMenuChange } = useEdit()
  
  const handleClick = (e) => {
    statusMenuChange()
    closeMenu(e)
  }

  return (
    <>
      <div id="confirmButtonContainer" onClick={handleClick} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[271px] md:w-[444px] h-[48px] flex justify-center cursor-pointer'>
        <button>CONFIRM</button>
      </div>
    </>
  )
}

export default Confirm