import React, { useState, useEffect } from 'react'


function CategoryImage({item}) {

    const [ background, setBackground ] = useState('')

    useEffect(() => {
        // condition here to set different size of background images
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
          setBackground(item.category_image_mobile)
        }
        else if (screenWidth >= 768 && screenWidth < 1280) {
          setBackground(item.category_image_tablet)   
        }
        else if (screenWidth >= 1280) {
          setBackground(item.category_image_desktop)   
        }

    },[])


  return (
    <>
        <div id={`categoryProductImageContainer_item${item.id}`}>
            <div id={`categoryImage_item${item.id}`} className='w-[327px] md:w-[689px] xl:w-[540px] h-[352px] xl:h-[560px] bg-cover bg-no-repeat rounded-lg' style={{backgroundImage: `url(${background})`}}/>
        </div>
    </>
  )
}

export default CategoryImage