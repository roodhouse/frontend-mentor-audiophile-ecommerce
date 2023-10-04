import React from 'react'
import { useMain } from '../../context/mainContext'

function CategorySection() {
  const { categories, categoryClick, home } = useMain()

  const handleClick = (e) => {
    const containerDiv = e.currentTarget
    const categoryName = containerDiv.getAttribute('data-name')
    categoryClick(categoryName)
  }

  return (
    <>
      <div id="categorySectionContainer" className='px-6 flex flex-col items-center md:w-full md:max-w-[768px] xl:max-w-full md:flex-row md:justify-between md:px-10 xl:px-[0]'>
        
        { categories ? (
          categories.map((category) => (
            <div key={category.category_id} onClick={handleClick} data-name={category.category_name} id={`${category.category_name}SectionContainer`} className='bg-offWhite rounded-lg mb-[68px] md:mb-0 flex flex-col items-center h-[165px] xl:h-[204px] w-[327px] cursor-pointer group md:w-[223px] xl:w-[350px] xl:mr-[30px] xl:last:mr-0'>
              <div id={`${category.category_name}SectionImage`} className='w-[80px] xl:w-[178px] h-[104px] xl:h-full mt-[-40px] xl:mt-[-75px] xl:mb-[-50px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${category.category_thumbnail})`}} />
              <div id={`${category.category_name}SectionTitle`} className='mb-[17px] text-black text-center text-[15px] font-bold leading-normal tracking-[1.071px] uppercase xl:text-[18px] xl:leading-normal xl:tracking-[1.286px] xl:mt-[36px]'>
                <p>{category.category_name}</p>
              </div>
              <div id={`${category.category_name}ShopContainer`} className='flex items-center text-center justify-center mb-[22px] xl:mb-[30px]'>
                <div id={`${category.category_name}Shop`} className='mr-[13px] text-[13px] font-bold leading-normal tracking-[1px] text-black uppercase opacity-50 group-hover:opacity-[100]'>
                  <p className='group-hover:text-deepOrange'>Shop</p>
                </div>
                <div id={`${category.category_name}ShopArrow`}>
                  <div id={`${category.category_name}Arrow`} className='w-2 h-[10px] bg-[url("./assets/shared/desktop/icon-arrow-right.svg")]' />
                </div>
              </div>
            </div>
          ))
        ) : '' }
      </div>
    </>
  )
}

export default CategorySection

// 3 * 350 = 1050
// 2 * 30 = 60
// 165 * 2 = 330