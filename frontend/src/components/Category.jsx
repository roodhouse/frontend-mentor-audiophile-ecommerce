import React from 'react'
import CategoryHeading from './category/CategoryHeading'
import CategoryDetails from './category/CategoryDetails'
import { useMain } from '../context/mainContext'
import CategorySection from './shared/CategorySection'
import Copy from './shared/Copy'

function Category() {
    
    const { categoryPage, categories, singleCategory, products } = useMain()
    console.log(products)

    // const currentCategory = () => {
    //   products.filter((item) => item.category_name === categoryPage)
    // }

    const currentCategory = products 
      ? products
          .filter((item) => item.category_name === categoryPage)
          .sort((a,b) => (a.new === b.new ? 0 : a.new ? -1: 1))
      : []

    console.log(currentCategory)

  return (
    <>
      <div id="categoryContainer">
        <div id="categoryHeadingWrapper" className='mb-16'>
          <CategoryHeading />
        </div>
        <div id="categoryContent" className='bg-white px-6'>
          <div id="categoryProductDetailsWrapper">
            {currentCategory.map((item) => (
              <CategoryDetails key={item.id} item={item} />
            ))}
          </div>
          <div id='categoryCategoriesSectionWrapper' className='pt-10 mb-[52px]'>
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