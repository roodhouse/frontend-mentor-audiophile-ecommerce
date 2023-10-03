import './App.css';
import { useMain } from './context/mainContext';
import Home from './components/Home';
import Category from './components/Category';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

function App() {

  const { categories, products, singleProduct, singleCategory, mobileMenu, home, categoryPage } = useMain()

  // category page
  // product page
  // checkout page
  // cart module

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
            <div id='categoryWrapper' style={categoryPage ? {display: 'block'} : {display: 'none'}} className='pt-[76px] mb-[120px]'>
              <Category />
            </div>
            
            {/* <div id='productWrapper'>
              <Product />
            </div> */}
            {/* <div id='checkoutWrapper'>
              <Checkout />
            </div> */}
            <div id='footerWrapper' className='bg-almostBlack w-full xl:flex xl:justify-center'>
              <Footer />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
