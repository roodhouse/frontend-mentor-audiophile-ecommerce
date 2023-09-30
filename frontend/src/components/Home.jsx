import React from 'react'
import Hero from './home/Hero'
import CategorySection from './shared/CategorySection'

function Home() {
  return (
    <>
        <div id="homeContainer" className='flex flex-col items-center justify-center max-w-[100%] md:max-w-[768px] xl:max-w-[100%]'>
            <div id="heroWrapper" className='relative w-full max-w-[375px] h-[600px] overflow-hidden md:h-[729px]'>
              <Hero />
            </div>
            <div id='categorySectionWrapper' className='bg-white pt-[92px] w-full'>
              <CategorySection />
            </div>
        </div>
    </>
  )
}

export default Home