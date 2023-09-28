import React from 'react'
import Hero from './home/Hero'

function Home() {
  return (
    <>
        <div id="homeContainer" className='flex justify-center max-w-[375px] md:max-w-[768px] xl:max-w-[100%]'>
            <div id="heroWrapper" className='relative w-full h-screen overflow-hidden md:h-[729px]'>
              <Hero />
            </div>
        </div>
    </>
  )
}

export default Home