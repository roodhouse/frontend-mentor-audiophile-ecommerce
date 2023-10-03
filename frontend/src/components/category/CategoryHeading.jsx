import React from 'react'
import { useMain } from '../../context/mainContext'

function CategoryHeading() {

    const { categoryPage } = useMain()
  return (
    <>
        <div id="categoryHeadingContainer" className='py-8 flex justify-center text-white text-center text-[28px] leading-normal tracking-[2px] font-bold uppercase bg-black'>
            <p>{categoryPage}</p>
        </div>
    </>
  )
}

export default CategoryHeading