import './App.css';
import { useMain } from './context/mainContext';

function App() {

  const { categories, products, singleProduct, singleCategory } = useMain()

  // home page
    // header
    // category
    // product
    // copy
    // footer
  // category page
  // product page
  // checkout page
  // cart module
    
  return (
    <div id='app' className="App font-display">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
