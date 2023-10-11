import React from 'react'
import { useMain } from '../../../context/mainContext'

function BackHome() {

  const { backHome } = useMain()
  
  return (
    <>
      <div id="backHomeContainer" onClick={backHome} className='text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase bg-deepOrange hover:bg-lightOrange w-[271px] md:w-[444px] h-[48px] flex justify-center'>
        <button>BACK TO HOME</button>
      </div>
    </>
  )
}

export default BackHome