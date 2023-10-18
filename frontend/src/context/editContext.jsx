import React, { useContext, createContext, useState, useEffect } from "react";
import { useMain } from "./mainContext";

// move handle remove to this file and test...
// fix other input fields
// update total in edit view
// submit button
// update db table and view order fields based on new data

// create context
const EditContext = createContext()

// define a provider component to wrap
const EditProvider = ({ children }) => {

    const { products, orderPage, orders } = useMain()
    const [ orderedProducts, setOrderedProducts ] = useState([])
    const [ currentOrder, setCurrentOrder ] = useState([])


    useEffect(() => {
        const theCurrentOrder = orders ? orders.filter((item) => item.order_id === parseInt(orderPage)) : []
        console.log(theCurrentOrder[0])
        setCurrentOrder(theCurrentOrder[0])
    },[orderPage, orders])

    useEffect(() => {
        if(orderPage && currentOrder) {
            const items = currentOrder.order_items.split(', ')
            console.log(items)
            const result = []

            items.forEach(item => {
                const parts = item.split('(')
                if (parts.length === 2) {
                    const name = parts[0].trim()
                    const qty = parseInt(parts[1].replace(')',''), 10)
                    if (!isNaN(qty)) {
                        result.push({ name, qty })
                    }
                }
            })
         
            const finalResult = result.map(item => {
                const product = products.find(product => product.name === item.name)
                if (product) {
                    return { ...product, qty: item.qty}
                }
                return item
            })

            setOrderedProducts(finalResult)
            
        }
    },[orderPage, products, currentOrder])

    function handleQtyChange(event, index) {
        const newQty = parseInt(event.target.value, 10)
        const updatedOrderedProducts = [...orderedProducts]
        if(!isNaN(newQty)) {
            updatedOrderedProducts[index].qty = newQty
        } else {
            updatedOrderedProducts[index].qty = ''
        }
        setOrderedProducts(updatedOrderedProducts)
    }


    return <EditContext.Provider value=
    {
        {
            orderedProducts, currentOrder, handleQtyChange
        }
    }>
        {children}
    </EditContext.Provider>
}

// create custom hook for using the context
const useEdit = () => {
    const context = useContext(EditContext);
    if (!context) {
        throw new Error('useEdit must be used within a EditProvider')
    }
    return context
};

export { EditProvider, useEdit }