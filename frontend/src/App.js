import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [singleCategory, setSingleCategory] = useState(null)
  const [singleProduct, setSingleProduct] = useState(null)
  const [categories, setCategories] = useState(null)
  const [products, setProducts] = useState(null)

  useEffect(() => {

    fetch('http://127.0.0.1:5000/api/category/')
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })

    fetch('http://127.0.0.1:5000/api/category/1')
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSingleCategory(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })

    fetch('http://127.0.0.1:5000/api/product/')
      .then((response) => response.json())
      .then((data) => {
        
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })

    fetch('http://127.0.0.1:5000/api/product/1')
      .then((response) => response.json())
      .then((data) => {
        
        setSingleProduct(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  },[])
    
  return (
    <div id='app' className="App">
      <h1>hello world res</h1>
    </div>
  );
}

export default App;
