import React from 'react'

function CategoryDesc({ item, id }) {
  return (
    <>
        <div id={`product_item${id}_DescContainer`} className='text-black text-center text-[15px] leading-[25px] font-medium opacity-50'>
            <p>{item}</p>
        </div>
    </>
  )
}

export default CategoryDesc