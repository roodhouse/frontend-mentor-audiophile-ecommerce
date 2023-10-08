import './App.css';
import { useEffect } from 'react';
import { useMain } from './context/mainContext';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

function App() {

  const { categories, products, singleProduct, singleCategory, mobileMenu, home, categoryPage, productPage, history, total, checkout, checkoutPage } = useMain()

  // checkout page
    // populate checkout page with cart items


  return (
    <div id='app' className="App font-display">
      <div id='mainWrapper'>
        <div id='mainContainer' className=''>
          <div id='headerWrapper' className='absolute w-full z-30'>
              <Header />
            </div>
            <div id='homeWrapper' className='mb-[120px] md:mb-[96px] xl:mb-[200px]' style={home ? {display: 'block'} : {display: 'none'}}>
              <Home />
            </div>
            <div id='categoryWrapper' style={categoryPage ? {display: 'block'} : {display: 'none'}} className='pt-[76px] mb-[120px] xl:mb-[160px]'>
              <Category />
            </div>
            <div id='productWrapper' style={productPage ? {display: 'flex'} : {display: 'none'}} className='justify-center pt-[76px] md:pt-[90px] xl:pt-[96px] px-6 md:px-10 xl:px-[165px] mb-[120px] xl:mb-[160px]'>
              <Products />
            </div>
            <div id='checkoutWrapper' style={checkoutPage ? {display: 'flex'} : {display: 'none'}} className='justify-start pt-[76px] md:pt-[90px] xl:pt-[96px] px-6 md:px-10 xl:px-[165px] mb-[120px] xl:mb-[160px] bg-offWhite'>
              <Checkout />
            </div>
            <div id='footerWrapper' className='bg-almostBlack w-full xl:flex xl:justify-center'>
              <Footer />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
