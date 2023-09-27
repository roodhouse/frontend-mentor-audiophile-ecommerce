import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [category, setCategory] = useState(null)
  
  useEffect(() => {
    fetch('/api/category/1')
      .then((response) => response.json())
      .then((data) => {
        // set the retrieved shows data in the state
        setCategory(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  },[])
    // fetch data from flask api endpoint

      console.log(category)
  
  return (
    <div id='app' className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
