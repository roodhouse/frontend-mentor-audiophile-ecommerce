import React, { useState, useEffect } from 'react'
import { useMain } from '../../context/mainContext'

function InventoryHeading() {

  const { products, inventoryPage } = useMain()

  const [ matchingProduct, setMatchingProduct ] = useState('')

  useEffect(() => {
    if (products) {
         setMatchingProduct(products.find(product => product.id === parseInt(inventoryPage)))
    }    
  },[inventoryPage, products])

  return (
    <>
        <div id="inventoryHeadingContainer" className='py-8 md:pt-[105px] xl:pt-[98px] md:pb-[97px] flex justify-center text-white text-center text-[28px] md:text-[40px] leading-normal md:leading-[44px] tracking-[2px] md:tracking-[1.429px] font-bold uppercase bg-black'>
            {matchingProduct ? (
              <p>Product #{matchingProduct.id} Details</p>
            ) : ' '}
        </div>
    </>
  )
}

export default InventoryHeading