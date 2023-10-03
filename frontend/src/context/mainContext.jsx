import React, { useContext, createContext, useState, useEffect } from "react";

// create context
const MainContext = createContext();

// define a provider component to wrap
const MainProvider = ({ children }) => {
  const [ singleCategory, setSingleCategory ] = useState(null);
  const [ singleProduct, setSingleProduct ] = useState(null);
  const [ categories, setCategories ] = useState(null);
  const [ products, setProducts ] = useState(null);
  const [ home, setHome ] = useState(true)
  const [ mobileMenu, setMobileMenu ] = useState(false)

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

  // Display the mobile menu
  const mobileMenuOn = () => {
    setMobileMenu(true)
    
    console.log('on')

    function disableScroll() {
      // Get the current page scroll position
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
          // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
          };
  };
  disableScroll()
  
  }
  // Hide the mobile menu
  const mobileMenuOff = () => {
    setMobileMenu(false)
    function enableScroll() {
      window.onscroll = function() {};
  }
  enableScroll()
    console.log('off')
  }


  return <MainContext.Provider value={{ singleCategory, singleProduct, categories, products, home, mobileMenu, mobileMenuOn, mobileMenuOff}}>{children}</MainContext.Provider>;
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
