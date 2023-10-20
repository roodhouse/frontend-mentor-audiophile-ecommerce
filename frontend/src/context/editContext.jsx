import React, { useContext, createContext, useState, useEffect } from "react";
import { useMain } from "./mainContext";

// update total in edit view
// submit button
// update db table and view order fields based on new data

// create context
const EditContext = createContext()

// define a provider component to wrap
const EditProvider = ({ children }) => {

    const { products, orderPage, orders, orderDeleted, orderUpdated } = useMain()
    const [ orderedProducts, setOrderedProducts ] = useState([])
    const [ currentOrder, setCurrentOrder ] = useState([])
    const [ id, setId ] = useState('')
    const [ date, setDate ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ name, setName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ city, setCity ] = useState('')
    const [ state, setState ] = useState('')
    const [ zip, setZip ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ items, setItems ] = useState('')
    const [ eMoney, setEmoney ] = useState(true)
    const [ cash, setCash ] = useState(false)
    const [ total, setTotal ] = useState('')
    const [ convertedDate, setConvertedDate ] = useState('')
    


    useEffect(() => {
        const theCurrentOrder = orders ? orders.filter((item) => item.order_id === parseInt(orderPage)) : []
        setCurrentOrder(theCurrentOrder[0])
        setName(currentOrder ? currentOrder.order_name : '')
        setId(currentOrder ? currentOrder.order_id : '')
        setStatus(currentOrder ? currentOrder.order_status : '')
        setAddress(currentOrder ? currentOrder.order_address : '')
        setCity(currentOrder ? currentOrder.order_city : '')
        setState(currentOrder ? currentOrder.order_state : '')
        setZip(currentOrder ? currentOrder.order_zip : '')
        setEmail(currentOrder ? currentOrder.order_email : '')
        setPhone(currentOrder ? currentOrder.order_phone : '')
        setItems(currentOrder ? currentOrder.order_items : '')
        setEmoney(currentOrder ? currentOrder.order_emoney : '')
        setCash(currentOrder ? currentOrder.order_cash : '')
        setTotal(currentOrder ? currentOrder.order_total : '')
        
        if (orderPage && currentOrder) {
                const orderDate = new Date(currentOrder.order_date)
                setConvertedDate(orderDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }))

                const newDate = new Date(currentOrder.order_date)
                const serverDate = newDate.toISOString().split('T')[0]
                setDate(serverDate)

            } else {
                setConvertedDate('')
                setDate('')
            }
        
    },[orderPage, orders, currentOrder])

    useEffect(() => {
        if(orderPage && currentOrder) {
            const items = currentOrder.order_items.split(', ')
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

    function updateItemQuantity(itemToUpdate, newQuantity) {
         const updatedProducts = orderedProducts.map((product) => {
            if (product.name === itemToUpdate) {
                return { ...product, qty: newQuantity }
            }
            return product
         })

         setOrderedProducts(updatedProducts)
         
        
         console.log(updatedProducts[0].name)

         let newItems = []

         updatedProducts.forEach((item) => {
            newItems.push(`${item.name}(${item.qty})`)
         })

         console.log(newItems)
         let newStringOfItems = newItems.join(', ')
         setItems(newStringOfItems)
    }

    // change status
    const statusChange = (e) => {
        setStatus(e.target.value)
    }

    // change date
    const dateChange = (e) => {
        const newDate = new Date(e.target.value)
        const serverDate = newDate.toISOString().split('T')[0]
        setDate(serverDate)
        setConvertedDate(e.target.value)
    }

    // change customer name
    const customerNameChange = (e) => {
        setName(e.target.value)
    }

    // change street address
    const stAddressChange = (e) => {
        setAddress(e.target.value)
    }

    // change city 
    const cityChange = (e) => {
        setCity(e.target.value)
    }

    // change state
    const stateChange = (e) => {
        setState(e.target.value)
    }

    // change zip
    const zipChange = (e) => {
        setZip(e.target.value)
    }

    // change email
    const emailChange = (e) => {
        setEmail(e.target.value)
    }

     // change phone
     const phoneChange = (e) => {
        setPhone(e.target.value)
    }

    // change id
    const idChange = (e) => {
        console.log('no id change')
    }

    // update order
    async function updateOrder() {
        if ( name && email && phone && address && zip && state  && city && total && items) {
            
            const response = await fetch(`http://127.0.0.1:5000/api/orders/${currentOrder.order_id}`, {
                method: 'put',
                body: JSON.stringify({
                    date,
                    name,
                    email,
                    phone,
                    address,
                    zip,
                    city,
                    state,
                    cash,
                    eMoney,
                    status,
                    total,
                    items
                }),
                headers: {'Content-Type': 'application/json'}
            })

            if (response.ok) {
                console.log('updated')
                setTimeout(() => {
                    orderUpdated()
                },1000)
            } else {
                alert(response.statusText)
            }
        } else {
            console.log('error')
        }
    }

     // remove button click
     const handleRemove = (e) => {
        // update order items
        const removedName = e.currentTarget.getAttribute('data-item')
        let removedQty = e.currentTarget.parentElement.parentElement.previousSibling.lastChild.value
        const removedItem = removedName + '(' + removedQty +')'
        const updatedOrder = {...currentOrder}
        updatedOrder.order_items = updatedOrder.order_items.replace(removedItem, '')
        if (updatedOrder.order_items.startsWith(', ')) {
            updatedOrder.order_items = updatedOrder.order_items.slice(2)
        } else if (updatedOrder.order_items.endsWith(', ')) {
            updatedOrder.order_items = updatedOrder.order_items.slice(0, -2)
        }

        // update order total
        let removedProductCost = orderedProducts.filter((item) => item.name === removedName)
        removedProductCost = removedProductCost[0].price
        removedQty = parseInt(removedQty)
        let currentTotal = currentOrder.order_total
        let newTotal = currentTotal - (removedProductCost * removedQty)
        updatedOrder.order_total = newTotal

        if ( !updatedOrder.order_items) {
            deleteOrder()
            orderDeleted()
        } else {
            setItems(updatedOrder.order_items)
        }
    }

    // delete order
    async function deleteOrder() {
        if (window.confirm('Deleting this item will delete the entire order. Are you sure you want to proceed?') === true) {
            const response = await fetch(`http://127.0.0.1:5000/api/orders/${currentOrder.order_id}`, {
                method: 'DELETE',
            })
            if(response.ok) {
                console.log('order deleted')
                orderDeleted()
            } else {
                alert(response.statusText)
                console.log('Error deleting order')
            }
        }
    }

    return <EditContext.Provider value=
    {
        {
            orderedProducts, currentOrder, name, address, city, state, zip, email, phone, id, convertedDate,
            updateItemQuantity, handleRemove, statusChange, dateChange, customerNameChange, stAddressChange, cityChange, stateChange, zipChange, emailChange, phoneChange, idChange,
            updateOrder
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