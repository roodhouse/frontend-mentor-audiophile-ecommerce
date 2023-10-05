import React, { useEffect } from 'react'
import CategoryHeading from './category/CategoryHeading'
import CategoryDetails from './category/CategoryDetails'
import { useMain } from '../context/mainContext'
import CategorySection from './shared/CategorySection'
import Copy from './shared/Copy'

function Category() {
    
    const { categoryPage, categories, singleCategory, products } = useMain()

    const currentCategory = products 
      ? products
          .filter((item) => item.category_name === categoryPage)
          .sort((a,b) => (a.new === b.new ? 0 : a.new ? -1: 1))
      : []

      useEffect(() => {
        const categoryGroup = document.getElementById('categoryProductDetailsWrapper')
        if (categoryGroup.children.length > 1) {
          const newOrder = categoryGroup.children[1]
          newOrder.firstChild.classList.add('xl:order-2')

        }
      },[categoryPage])

  return (
    <>
      <div id="categoryContainer">
        <div id="categoryHeadingWrapper" className='mb-16 md:mb-[120px] xl:mb-[160px]'>
          <CategoryHeading />
        </div>
        <div id="categoryContent" className='bg-white px-6 md:px-10 xl:px-[5%] custom:px-[165px]'>
          <div id="categoryProductDetailsWrapper">
            {currentCategory.map((item) => (
              <CategoryDetails key={item.id} item={item} />
            ))}
          </div>
          <div id='categoryCategoriesSectionWrapper' className='pt-10 mb-[120px] xl:pt-[75px] xl:mb-[160px]'>
            <CategorySection />
          </div>
          <div id='categoryCopyWrapper'>
            <Copy />
          </div>
        </div>
      </div>
    </>
  )
}

export default Category