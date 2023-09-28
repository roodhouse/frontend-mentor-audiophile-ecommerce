import './App.css';
import { useMain } from './context/mainContext';
import Home from './components/Home';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

function App() {

  const { categories, products, singleProduct, singleCategory } = useMain()

  // header - shared
  // home page
    // hero
    // category - shared
    // promotion  
    // copy - shared
  // footer - shared
  // category page
  // product page
  // checkout page
  // cart module
    
  return (
    <div id='app' className="App font-display">
      <div id='mainWrapper'>
        <div id='mainContainer'>
        <div id='headerWrapper'>
            <Header />
          </div>
          <div id='homeWrapper'>
            <Home />
          </div>
          {/* <div id='categoryWrapper'>
            <Category />
          </div> */}
          {/* <div id='productWrapper'>
            <Product />
          </div> */}
          {/* <div id='checkoutWrapper'>
            <Checkout />
          </div> */}
          <div id='footerWrapper'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
