import React from 'react'
import { useMain } from '../../context/mainContext'

function CategorySection() {
  const { categories } = useMain()
  console.log(categories)
  return (
    <>
      <div id="categorySectionContainer" className='px-6'>
        <img src="/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg" alt="test" />
        { categories ? (
          categories.map((category) => (
            <div key={category.category_id} id={`${category.category_name}SectionContainer`} className='bg-offWhite rounded-lg mb-[68px] flex flex-col items-center h-[165px]'>
              <div id={`${category.category_name}SectionImage`} className='w-[80px] h-[104px] mb-9 mt-[-52px]' />
              <div id={`${category.category_name}SectionTitle`} className='mb-[17px] text-black text-center text-[15px] font-bold leading-normal tracking-[1.071px] uppercase'>
                <p>{category.category_name}</p>
              </div>
              <div id={`${category.category_name}ShopContainer`} className='flex items-center text-center justify-center'>
                <div id={`${category.category_name}Shop`} className='mr-[13px] text-[13px] font-bold leading-normal tracking-[1px] text-black uppercase opacity-50'>
                  <p>Shop</p>
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