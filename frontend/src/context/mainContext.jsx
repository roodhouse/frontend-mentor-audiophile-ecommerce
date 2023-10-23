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
  const [ checkoutPage, setCheckoutPage ] = useState('')
  const [ dashboardPage, setDashboardPage ] = useState('')
  const [ orderPage, setOrderPage ] = useState('')
  const [ cartMenu, setCartMenu ] = useState(false)
  const [ thankYou, setThankYou ] = useState(false)
  const [ cart, setCart ] = useState([])
  const [ history, setHistory ] = useState([])
  const [ quantity, setQuantity ] = useState(1)
  const [ cartActivity, setCartActvity ] = useState(0)
  const [ total, setTotal ] = useState(0)
  const [ grandTotal, setGrandTotal ] = useState(0)
  const [ orders, setOrders ] = useState([])
  const [ orderUpdate, setOrderUpdate ] = useState(false)
  const [ orderDelete, setOrderDelete ] = useState(false)

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

      fetch("http://127.0.0.1:5000/api/orders/")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log('no orders found')
        } else {
          setOrders(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

      setOrderUpdate(false)
      setOrderDelete(false)
      
  }, [cart, orderUpdate, orderDelete]);

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
    setCartMenu(false)
    setThankYou(false)
    setProductPage('')
    setCategoryPage('')
    setCheckoutPage('')
    setDashboardPage('')
    setOrderPage('')
    window.scrollTo(0,0)
    enableScroll()
  }

  // Category state
  const categoryClick = (categoryName) => {
    navigate(currentState())
    setHome('')
    setQuantity(1)
    setMobileMenu(false)
    setCartMenu(false)
    setThankYou(false)
    setProductPage('')
    setCheckoutPage('')
    setDashboardPage('')
    setOrderPage('')
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
    setCartMenu(false)
    setThankYou(false)
    setCategoryPage('')
    setCheckoutPage('')
    setDashboardPage('')
    setOrderPage('')
    setProductPage(productName)
    window.scrollTo(0,0)
    enableScroll()
  }

  // Order state
  const orderClick = (orderNumber) => {
    navigate(currentState())
    setHome('')
    setMobileMenu(false)
    setCartMenu(false)
    setThankYou(false)
    setCategoryPage('')
    setCheckoutPage('')
    setDashboardPage('')
    setProductPage('')
    setOrderPage(orderNumber)
    window.scrollTo(0,0)
    enableScroll()
  }

  // checkout 
  const checkout = () => {
    navigate(currentState())
    setHome('')
    setMobileMenu(false)
    setCartMenu(false)
    setThankYou(false)
    setProductPage('')
    setCategoryPage('')
    setDashboardPage('')
    setOrderPage('')
    setCheckoutPage('checkout')
    window.scrollTo(0,0)
    enableScroll()
  }

  // dashboard
  const dashboard = () => {
    setHome('')
    setMobileMenu(false)
    setCartMenu(false)
    setThankYou(false)
    setProductPage('')
    setCategoryPage('')
    setDashboardPage('')
    setCheckoutPage('')
    setOrderPage('')
    setOrderDelete(false)
    setDashboardPage('dash')
    window.scrollTo(0,0)
    enableScroll()
  }

  const theGrandTotal = (amount) => {
    console.log(amount)
    setGrandTotal(amount)
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
        setThankYou(false)
      } else if ( previousPage === 'headphones' || previousPage === 'speakers' || previousPage === 'earphones' ) {
        setCategoryPage(previousPage)
        setHome('')
        setProductPage('')
        setMobileMenu(false)
        setThankYou(false)
      } else if ( previousPage === 'YX1 Wireless Earphones' || previousPage === 'XX59 Headphones' || previousPage === 'XX99 Mark I Headphones' || previousPage === 'XX99 Mark II Headphones' || previousPage === 'ZX7 Speaker' || previousPage === 'ZX9 Speaker' ) {
        setProductPage(previousPage)
        setHome('')
        setCategoryPage('')
        setMobileMenu(false)
        setThankYou(false)
      }
      setHistory(newHistory)
    }
  }

  // Display the mobile menu
  const mobileMenuOn = () => {
    setMobileMenu(true)
    setCartMenu(false)
    setThankYou(false)
    disableScroll()
  }

  // Hide the mobile menu
  const mobileMenuOff = () => {
    setMobileMenu(false)
    enableScroll()
  }

  const thankYouMenu = () => {
    window.scrollTo(0,0)
    setThankYou(true)
    setMobileMenu(false)
    setCartMenu(false)
    disableScroll()
  }

  const backHome = () => {
    setThankYou(false)
    setCheckoutPage('')
    setHome('home')
    enableScroll()
    clearCart()
    setCart([])
    window.scrollTo(0,0)
  }

  const orderUpdated = () => {
    setOrderUpdate(true)
  }

  const orderDeleted = () => {
    setOrderPage('')
    setOrderDelete(true)
    setDashboardPage('dash')
  }
  // **** Cart fucntionality **** // 

  // add item items to cart // 
  const addToCart = (itemName, productPrice) => {
    if( typeof localStorage !== 'undefined' ) {
      if ( localStorage.length === 0 ) {
          let cartItem = [
            {
              name: itemName,
              quantity: quantity,
              price: productPrice
            }
          ]
          localStorage.setItem('cart', JSON.stringify(cartItem))
      } else {
          let currentCart = JSON.parse(localStorage.getItem('cart'))
          const itemIndex = currentCart.findIndex((item) => item.name === itemName)
          if (itemIndex != -1){
            currentCart[itemIndex].quantity += quantity
          } else {
            currentCart.push({
              name: itemName,
              quantity: quantity,
              price: productPrice
            })
          }
          localStorage.setItem('cart', JSON.stringify(currentCart))
      }
    }
    setQuantity(1)
    setCartActvity(cartActivity + 1)
  }

  // clear cart
  const clearCart = () => {
    if ( typeof localStorage !== undefined ) {
      if ( localStorage.length > 0 ) {
        localStorage.clear()
        setCart([])
        setCartActvity(cartActivity + 1)
      }
    }
  }

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem('cart'))
    if (localCart === null) {
      setCart([])
    } else {
      setCart(localCart)
    }
  },[cartActivity])

  // Cart Current total
  const totalCart = (all) => {
    setTotal(all)
  }
  //
  const updateCartActivity = () => {
    setCartActvity(cartActivity + 1)
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
  
  // Show cart menu
  const cartMenuOn = () => {
    setMobileMenu(false)
    setCartMenu(true)
    setThankYou(false)
    disableScroll()
  }

  // Hide cart menu
  const cartMenuOff = () => {
    setCartMenu(false)
    enableScroll()
  }


  return <MainContext.Provider value=
    {
      { 
        singleCategory, singleProduct, categories, products, home, categoryPage, productPage, checkoutPage, mobileMenu, addToCart, 
        mobileMenuOn, mobileMenuOff, homeClick, categoryClick, productClick, goBack, history, quantity, addOne, reduceOne,
        cartMenuOn, cartMenuOff, cartMenu, cart, clearCart, updateCartActivity, totalCart, total, checkout, thankYou, thankYouMenu, 
        theGrandTotal, grandTotal, backHome, orders, dashboard, dashboardPage, orderPage, orderClick, orderUpdated, orderDelete, orderDeleted
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
