import React from 'react'

function Confirm() {
  
  const handleClick = (e) => {
    console.log(e)
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