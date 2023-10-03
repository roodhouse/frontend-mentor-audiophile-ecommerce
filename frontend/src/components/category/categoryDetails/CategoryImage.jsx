import React, { useState, useEffect } from 'react'


function CategoryImage({item}) {

    const [ background, setBackground ] = useState('')

    useEffect(() => {
        // condition here to set different size of background images
        setBackground(item.main_image_mobile)
    })


  return (
    <>
        <div id={`categoryProductImageContainer_item${item.id}`}>
            <div id={`categoryImage_item${item.id}`} className='w-[327px] h-[352px] bg-cover bg-no-repeat rounded-lg' style={{backgroundImage: `url(${background})`}}/>
        </div>
    </>
  )
}

export default CategoryImage