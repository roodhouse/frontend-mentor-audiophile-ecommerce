import React from 'react'

function CategoryTitle({ item, id }) {
  return (
    <>
        <div id={`product_item${id}_TitleContainer`} className='text-black text-center text-[28px] leading-normal font-bold tracking-[1px] uppercase w-[275px]'>
            <p>{item}</p>
        </div>
    </>
  )
}

export default CategoryTitle