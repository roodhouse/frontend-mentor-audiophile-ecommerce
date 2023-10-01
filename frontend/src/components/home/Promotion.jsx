import React from 'react'
import Zx9Promotion from './promotion/Zx9Promotion'
import Zx7Promotion from './promotion/Zx7Promotion'
import Yx1Promotion from './promotion/Yx1Promotion'

function Promotion() {
  return (
    <>
      <div id="promotionSectionContainer" className='mx-6'>
        <div id="zx9PromotionWrapper" className='mb-6'>
          <Zx9Promotion />
        </div>
        <div id="zx9PromotionWrapper" className='mb-6'>
          <Zx7Promotion />
        </div>
        <div id="yx1PromotionWrapper">
          <Yx1Promotion />
        </div>
      </div>
    </>
  )
}

export default Promotion