import React from 'react'
import NewProductHeader from './newProduct/NewProductHeader'
import NewProductTitle from './newProduct/NewProductTitle'
import NewProductCopy from './newProduct/NewProductCopy'
import SeeProductOrange from '../../shared/buttons/SeeProductOrange'

function NewProduct() {
  return (
    <>
        <div id="newProductContainer" className='flex flex-col items-center'>
            <div id="newProductHeaderWrapper" className='mb-4'>
                <NewProductHeader />
            </div>
            <div id="newProductTitleWrapper" className='mb-6'>
                <NewProductTitle />
            </div>
            <div id="newProductCopyWrapper" className='mb-[28px]'>
                <NewProductCopy />
            </div>
            <div id="newProductButtonWrapper">
                <SeeProductOrange />
            </div>
        </div>
    </>
  )
}

export default NewProduct