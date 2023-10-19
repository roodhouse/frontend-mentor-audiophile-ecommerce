import React, { useContext, createContext, useState, useEffect } from "react";
import { useMain } from "./mainContext";

// fix other input fields
    // create state for each field, then pull from those fields when sending put requests, then only have to call on the single put request per need
        // break pull request out of remove button function then all it where needed
            // time to test...
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
    


    useEffect(() => {
        const theCurrentOrder = orders ? orders.filter((item) => item.order_id === parseInt(orderPage)) : []
        console.log(theCurrentOrder[0])
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
                setDate(orderDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }))
            } else {
                setDate('')
            }
        
    },[orderPage, orders, currentOrder])

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

    // change quantity
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

    // change status
    const statusChange = (e) => {
        setStatus(e.target.value)
    }

    // change date
    const dateChange = (e) => {
        setDate(e.target.value)
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
                orderUpdated()
            } else {
                alert(response.statusText)
            }
        } else {
            console.log('error')
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

    // remove button click
    const handleRemove = async (e) => {
        // update order items
        const removedName = e.currentTarget.getAttribute('data-item')
        let removedQty = e.currentTarget.parentElement.parentElement.previousSibling.lastChild.value
        const removedItem = removedName + '(' + removedQty +')'
        console.log(removedItem)
        console.log(currentOrder)
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

        // correct date
        const updateDate = new Date(updatedOrder.order_date)
        const updateDateFormatted = updateDate.toISOString().split('T')[0]
        console.log(updateDateFormatted)
        console.log(updatedOrder.order_items)
       
        const name = updatedOrder.order_name
        const email = updatedOrder.order_email
        const phone = updatedOrder.order_phone
        const address = updatedOrder.order_address
        const zip = updatedOrder.order_zip
        const city = updatedOrder.order_city
        const state = updatedOrder.order_state
        const date = updateDateFormatted
        const cash = updatedOrder.order_cash
        const eMoney = updatedOrder.order_emoney
        const status = updatedOrder.order_status
        const total = updatedOrder.order_total
        const items = updatedOrder.order_items

        if ( !updatedOrder.order_items) {
            deleteOrder()
            orderDeleted()
        } else {
                // if ( name && email && phone && address && zip && state  && city && total && items) {
                //     const response = await fetch(`http://127.0.0.1:5000/api/orders/${updatedOrder.order_id}`, {
                //         method: 'put',
                //         body: JSON.stringify({
                //             date,
                //             name,
                //             email,
                //             phone,
                //             address,
                //             zip,
                //             city,
                //             state,
                //             cash,
                //             eMoney,
                //             status,
                //             total,
                //             items
                //         }),
                //         headers: {'Content-Type': 'application/json'}
                //     })
        
                //     if (response.ok) {
                //         console.log('updated')
                //         orderUpdated()
                //     } else {
                //         alert(response.statusText)
                //     }
                // } else {
                //     console.log('error')
                // }
                updateOrder()
        }
    }


    return <EditContext.Provider value=
    {
        {
            orderedProducts, currentOrder, date, name, address, city, state, zip, email, phone, id,
            handleQtyChange, handleRemove, statusChange, dateChange, customerNameChange, stAddressChange, cityChange, stateChange, zipChange, emailChange, phoneChange, idChange
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