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

  return <MainContext.Provider value={{ singleCategory, singleProduct, categories, products, home}}>{children}</MainContext.Provider>;
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
