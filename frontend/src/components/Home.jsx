import React from 'react'
import Hero from './home/Hero'
import CategorySection from './shared/CategorySection'
import PromotionSection from './home/Promotion'
import Copy from './shared/Copy'

function Home() {
  return (
    <>
        <div id="homeContainer" className='flex flex-col items-center justify-center max-w-[100%] bg-[#131313]'>
            <div id="heroWrapper" className='relative w-full max-w-[375px] md:max-w-[768px] xl:max-w-[100%] h-[600px] overflow-hidden md:h-[729px]'>
              <Hero />
            </div>
            <div id='categorySectionWrapper' className='bg-white pt-[92px] w-full md:pt-[148px] xl:pt-[200px]'>
              <CategorySection />
            </div>
            <div id="promotionSectionWrapper" className='w-full pt-[120px] md:pt-[96px] xl:pt-[168px] bg-white'>
              <PromotionSection />
            </div>
            <div id="copySectionWrapper" className='w-full pt-[120px] md:pt-[96px] xl:pt-[200px] bg-white xl:flex xl:justify-center'>
              <Copy />
            </div>
        </div>
    </>
  )
}

export default Home