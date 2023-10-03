import React from 'react'
import { useMain } from '../../context/mainContext'

function CategoryHeading() {

    const { categoryPage } = useMain()
  return (
    <>
        <div id="categoryHeadingContainer" className='py-8 md:pt-[105px] xl:pt-[98px] md:pb-[97px] flex justify-center text-white text-center text-[28px] md:text-[40px] leading-normal md:leading-[44px] tracking-[2px] md:tracking-[1.429px] font-bold uppercase bg-black'>
            <p>{categoryPage}</p>
        </div>
    </>
  )
}

export default CategoryHeading