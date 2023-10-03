import React from 'react'

function CategoryTitle({ item, id }) {
  return (
    <>
        <div id={`product_item${id}_TitleContainer`} className='text-black text-center xl:text-left text-[28px] md:text-[40px] leading-normal md:leading-[44px] font-bold tracking-[1px] md:tracking-[1.429px] uppercase w-[192px] md:w-[291px]'>
            <p>{item}</p>
        </div>
    </>
  )
}

export default CategoryTitle