import React from 'react'
import Hero from './home/Hero'

function Home() {
  return (
    <>
        <div id="homeContainer" className='flex justify-center max-w-[375px]'>
            <div id="heroWrapper" className='relative w-full h-screen overflow-hidden'>
              <Hero />
            </div>
        </div>
    </>
  )
}

export default Home