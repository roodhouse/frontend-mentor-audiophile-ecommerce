import React from 'react'

function CloseButton({ view, closeMenu }) {
  
  const handleClick = (e) => {
    closeMenu(e)
  }

  return (
    <>
      <div id="closeButtonContainer" onClick={handleClick} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[279px] md:w-[444px] h-[48px] flex justify-center cursor-pointer'>
        <button>CLOSE</button>
      </div>
    </>
  )
}

export default CloseButton