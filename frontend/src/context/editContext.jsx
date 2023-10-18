import React, { useContext, createContext, useState, useEffect } from "react";
import { useMain } from "./mainContext";

// fix other input fields
    // create state for each field, then pull from those fields when sending put requests, then only have to call on the single put request per need

    // need to fix the status field ... 
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
    const [ currentOrderId, setCurrentOrderId ] = useState('')
    const [ currentOrderDate, setCurrentOrderDate ] = useState('')
    const [ currentOrderStatus, setCurrentOrderStatus ] = useState('')
    const [ currentOrderName, setCurrentOrderName ] = useState('')
    const [ currentOrderAddress, setCurrentOrderAddress ] = useState('')
    const [ currentOrderCity, setCurrentOrderCity ] = useState('')
    const [ currentOrderState, setCurrentOrderState ] = useState('')
    const [ currentOrderZip, setCurrentOrderZip ] = useState('')
    const [ currentOrderEmail, setCurrentOrderEmail ] = useState('')
    const [ currentOrderPhone, setCurrentOrderPhone ] = useState('')
    const [ currentOrderItems, setCurrentOrderItems ] = useState('')
    const [ currentOrderEmoney, setCurrentOrderEmoney ] = useState(true)
    const [ currentOrderCash, setCurrentOrderCash ] = useState(false)
    const [ currentOrderTotal, setCurrentOrderTotal ] = useState('')
    


    useEffect(() => {
        const theCurrentOrder = orders ? orders.filter((item) => item.order_id === parseInt(orderPage)) : []
        console.log(theCurrentOrder[0])
        setCurrentOrder(theCurrentOrder[0])
        setCurrentOrderName(currentOrder ? currentOrder.order_name : '')
        setCurrentOrderId(currentOrder ? currentOrder.order_id : '')
        setCurrentOrderStatus(currentOrder ? currentOrder.order_status : '')
        setCurrentOrderAddress(currentOrder ? currentOrder.order_address : '')
        setCurrentOrderCity(currentOrder ? currentOrder.order_city : '')
        setCurrentOrderState(currentOrder ? currentOrder.order_state : '')
        setCurrentOrderZip(currentOrder ? currentOrder.order_zip : '')
        setCurrentOrderEmail(currentOrder ? currentOrder.order_email : '')
        setCurrentOrderPhone(currentOrder ? currentOrder.order_phone : '')
        setCurrentOrderItems(currentOrder ? currentOrder.order_items : '')
        setCurrentOrderEmoney(currentOrder ? currentOrder.order_emoney : '')
        setCurrentOrderCash(currentOrder ? currentOrder.order_cash : '')
        setCurrentOrderTotal(currentOrder ? currentOrder.order_total : '')

        if (orderPage && currentOrder) {
                const orderDate = new Date(currentOrder.order_date)
                setCurrentOrderDate(orderDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }))
            } else {
                setCurrentOrderDate('')
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
        setCurrentOrderStatus(e.target.value)
    }

    // change date
    const dateChange = (e) => {
        setCurrentOrderDate(e.target.value)
    }

    // change customer name
    const customerNameChange = (e) => {
        setCurrentOrderName(e.target.value)
    }

    // change street address
    const stAddressChange = (e) => {
        setCurrentOrderAddress(e.target.value)
    }

    // change city 
    const cityChange = (e) => {
        setCurrentOrderCity(e.target.value)
    }

    // change state
    const stateChange = (e) => {
        setCurrentOrderState(e.target.value)
    }

    // change zip
    const zipChange = (e) => {
        setCurrentOrderZip(e.target.value)
    }

    // change email
    const emailChange = (e) => {
        setCurrentOrderEmail(e.target.value)
    }

     // change phone
     const phoneChange = (e) => {
        setCurrentOrderPhone(e.target.value)
    }

    // change id
    const idChange = (e) => {
        console.log('no id change')
    }

    // delete order
    async function deleteOrder () {
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
                if ( name && email && phone && address && zip && state  && city && total && items) {
                    const response = await fetch(`http://127.0.0.1:5000/api/orders/${updatedOrder.order_id}`, {
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
    }


    return <EditContext.Provider value=
    {
        {
            orderedProducts, currentOrder, currentOrderDate, currentOrderName, currentOrderAddress, currentOrderCity, currentOrderState, currentOrderZip, currentOrderEmail, currentOrderPhone, currentOrderId,
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