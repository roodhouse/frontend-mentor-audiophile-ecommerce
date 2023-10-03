import React from 'react'
import CategoryImage from './categoryDetails/CategoryImage'
import CategoryNewProduct from './categoryDetails/CategoryNewProduct'
import CategoryTitle from './categoryDetails/CategoryTitle'
import CategoryDesc from './categoryDetails/CategoryDesc'
import SeeProductOrange from '../shared/buttons/SeeProductOrange'

function CategoryDetails({item}) {
    console.log(item)
  return (
    <>
        <div id={`categoryProductDetailsContainer_item${item.id}`} className='mb-[120px] flex flex-col items-center'>
            <div id={`categoryProductImageWrapper_item${item.id}`} className='mb-8'>
                <CategoryImage item={item} />
            </div>
            {item.new ? (
                <div id={`newProduct_item${item.id}_Wrapper`} className='mb-6'>
                    <CategoryNewProduct item={item.id} />
                </div>
            ): ''}
            <div id={`product_item${item.id}_TitleWrapper`} className='mb-6'>
                <CategoryTitle item={item.name} id={item.id} />
            </div>
            <div id={`product_item${item.id}_DescWrapper`} className='mb-6'>
                <CategoryDesc item={item.description} id={item.id} />
            </div>
            <div id={`product_item${item.id}_ButtonWrapper`}>
                <SeeProductOrange name={item.name} />
            </div>
        </div>
    </>
  )
}

export default CategoryDetails