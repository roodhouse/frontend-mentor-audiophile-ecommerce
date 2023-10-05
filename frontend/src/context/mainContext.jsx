import React, { useContext, createContext, useState, useEffect } from "react";

// create context
const MainContext = createContext();

// define a provider component to wrap
const MainProvider = ({ children }) => {
  const [ singleCategory, setSingleCategory ] = useState(null);
  const [ singleProduct, setSingleProduct ] = useState(null);
  const [ categories, setCategories ] = useState(null);
  const [ products, setProducts ] = useState(null);
  const [ home, setHome ] = useState('home')
  const [ mobileMenu, setMobileMenu ] = useState(false)
  const [ categoryPage, setCategoryPage ] = useState('')
  const [ productPage, setProductPage ] = useState('')
  const [ history, setHistory ] = useState([])
  const [ quantity, setQuantity ] = useState(1)

  // Fetch requests
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/category/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("http://127.0.0.1:5000/api/category/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSingleCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("http://127.0.0.1:5000/api/product/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("http://127.0.0.1:5000/api/product/1")
      .then((response) => response.json())
      .then((data) => {
        setSingleProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Functions

  // **** misc ****

      // enable scroll
  function enableScroll() {
    window.onscroll = function() {};
  }

      // disable scroll
  function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        // if any scroll is attempted, set this to the previous value
          window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
        };
  };

  // **** State changes ****

  function currentState() {
    if (home) {
      return home
    } else if (categoryPage) {
      return categoryPage
    } else if (productPage) {
      return productPage
    }
  }

  // Home state
  const homeClick = () => {
    navigate(currentState())
    setHome('home')
    setQuantity(1)
    setMobileMenu(false)
    setProductPage('')
    setCategoryPage('')
    window.scrollTo(0,0)
    enableScroll()
  }

  // Category state
  const categoryClick = (categoryName) => {
    navigate(currentState())
    setHome('')
    setQuantity(1)
    setMobileMenu(false)
    setProductPage('')
    setCategoryPage(categoryName)
    window.scrollTo(0,0)
    enableScroll()
    
  }

  // Product state
  const productClick = (productName) => {
    navigate(currentState())
    setHome('')
    setQuantity(1)
    setMobileMenu(false)
    setCategoryPage('')
    setProductPage(productName)
    window.scrollTo(0,0)
    enableScroll()
  }

  // save a navigation history so 'go back' works
  const navigate = (pageName)=> {
    setHistory((prevHistory) => [...prevHistory, pageName])
  }

  // Go back from product page
  const goBack = () => {
    if (history.length >= 1) {
      const newHistory = [...history]
      let previousPage = newHistory.pop()
      if ( previousPage === 'home' ) {
        setHome(previousPage)
        setCategoryPage('')
        setProductPage('')
        setMobileMenu(false)
      } else if ( previousPage === 'headphones' || previousPage === 'speakers' || previousPage === 'earphones' ) {
        setCategoryPage(previousPage)
        setHome('')
        setProductPage('')
        setMobileMenu(false)
      } else if ( previousPage === 'YX1 Wireless Earphones' || previousPage === 'XX59 Headphones' || previousPage === 'XX99 Mark I Headphones' || previousPage === 'XX99 Mark II Headphones' || previousPage === 'ZX7 Speaker' || previousPage === 'ZX9 Speaker' ) {
        setProductPage(previousPage)
        setHome('')
        setCategoryPage('')
        setMobileMenu(false)
      }
      setHistory(newHistory)
    }
  }

  // Display the mobile menu
  const mobileMenuOn = () => {
    setMobileMenu(true)
    disableScroll()
  }

  // Hide the mobile menu
  const mobileMenuOff = () => {
    setMobileMenu(false)
    enableScroll()
  }

  // Add quantity
  const addOne = () => {
    let newQuan = quantity + 1
    setQuantity(newQuan)
  }
  
  // Reduce quantity
  const reduceOne = () => {
    let newQuan = quantity - 1
    if (newQuan < 1) {
      setQuantity(1)
    } else {
      setQuantity(newQuan)
    }
  }

  return <MainContext.Provider value=
    {
      { 
        singleCategory, singleProduct, categories, products, home, categoryPage, productPage, mobileMenu, 
        mobileMenuOn, mobileMenuOff, homeClick, categoryClick, productClick, goBack, history, quantity, addOne, reduceOne
      }
    }>
    {children}
  </MainContext.Provider>;
};

// create custom hook for using the context
const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain must be used within a MainProvider");
  }
  return context;
};

export { MainProvider, useMain };
