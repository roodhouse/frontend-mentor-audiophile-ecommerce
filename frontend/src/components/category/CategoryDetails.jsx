import React from 'react'
import CategoryImage from './categoryDetails/CategoryImage'
import CategoryNewProduct from './categoryDetails/CategoryNewProduct'
import CategoryTitle from './categoryDetails/CategoryTitle'
import CategoryDesc from './categoryDetails/CategoryDesc'
import SeeProductOrange from '../shared/buttons/SeeProductOrange'

function CategoryDetails({item}) {
  return (
    <>
        <div id={`categoryProductDetailsContainer_item${item.id}`} className='mb-[120px] xl:mb-[160px] flex flex-col items-center xl:flex-row'>
            <div id={`categoryProductImageWrapper_item${item.id}`} className='mb-8 md:mb-[52px] xl:mb-0'>
                <CategoryImage item={item} />
            </div>
            <div id={`productDetails_item${item.id}`} className='flex flex-col items-center xl:items-start xl:w-[445px]'>
                {item.new ? (
                    <div id={`newProduct_item${item.id}_Wrapper`} className='mb-6 md:mb-4'>
                        <CategoryNewProduct item={item.id} />
                    </div>
                ): ''}
                <div id={`product_item${item.id}_TitleWrapper`} className='mb-6 md:mb-8'>
                    <CategoryTitle item={item.name} id={item.id} />
                </div>
                <div id={`product_item${item.id}_DescWrapper`} className='mb-6'>
                    <CategoryDesc item={item.description} id={item.id} />
                </div>
                <div id={`product_item${item.id}_ButtonWrapper`}>
                    <SeeProductOrange name={item.name} />
                </div>
            </div>
            </div>
    </>
  )
}

export default CategoryDetails