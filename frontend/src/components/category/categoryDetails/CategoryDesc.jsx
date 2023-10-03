import React from 'react'

function CategoryDesc({ item, id }) {
  return (
    <>
        <div id={`product_item${id}_DescContainer`} className='text-black text-center xl:text-left text-[15px] leading-[25px] font-medium opacity-50 md:w-[572px] xl:w-[445px]'>
            <p>{item}</p>
        </div>
    </>
  )
}

export default CategoryDesc