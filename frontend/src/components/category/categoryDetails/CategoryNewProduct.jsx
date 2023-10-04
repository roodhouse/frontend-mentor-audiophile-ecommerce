import React from 'react'

function CategoryNewProduct({item}) {
  return (
    <>
        <div id={`newProduct_item${item}_Container`} className='text-deepOrange text-center text-sm leading-normal font-normal tracking-[10px] uppercase'>
            <p>New Product</p>
        </div>
    </>
  )
}

export default CategoryNewProduct