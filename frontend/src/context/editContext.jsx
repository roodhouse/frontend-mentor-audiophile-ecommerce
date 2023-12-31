import React, { useContext, createContext, useState, useEffect } from "react";
import { useMain } from "./mainContext";

// create context
const EditContext = createContext()

// define a provider component to wrap
const EditProvider = ({ children }) => {

    const { products, orderPage, orders, orderDeleted, orderUpdated, productDeleted, inventoryPage } = useMain()
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
    const [ confirmUpdate, setConfirmUpdate ] = useState(false)
    const [ matchingProduct, setMatchingProduct ] = useState('')
    
    useEffect(() => {
        const theCurrentOrder = orders ? orders.filter((item) => item.order_id === parseInt(orderPage)) : []
        setCurrentOrder(theCurrentOrder[0])
        setName(currentOrder ? currentOrder.order_name : '')
        setId(currentOrder ? currentOrder.order_id : '')
        setStatus(currentOrder && status === '' ? currentOrder.order_status : status)
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
        
    },[orderPage, orders, currentOrder, status])

    useEffect(() => {
        if(orderPage && currentOrder) {
            const items = currentOrder.order_items
            const result = []
            items.forEach(item => {
                result.push(item)
            })
            const finalResult = result.map(item => {
                const product = products.find(product => product.name === item.item_name)
                if (product) {
                    return { ...product, qty: item.item_qty, price: item.item_price }
                }
                return item
            })

            setOrderedProducts(finalResult)
            
        }
    },[orderPage, products, currentOrder])

    function updateItemQuantity(itemToUpdate, newQuantity) {
        if (newQuantity <= 0 ) {
            console.log('invalid qty')
        } else {
            const updatedProducts = orderedProducts.map((product) => { 
               if (product.name === itemToUpdate) {
                   let quanInt = parseInt(newQuantity)
                   let updateTotal = (product.price / product.qty)
                   // here!
                   updateTotal = quanInt * updateTotal
                   return { ...product, qty: newQuantity }
               }
               return product
            })
   
            let newPrices = [50, 1079]
   
            updatedProducts.forEach((product) => {
               newPrices.push(product.price * product.qty)
            })
   
            setOrderedProducts(updatedProducts)
            
            let newTotal = newPrices.reduce((partialSum, a) => partialSum + a, 0)
            currentOrder.order_total = newTotal
            setTotal(currentOrder.order_total)

            let newItems = []
            updatedProducts.forEach((item) => {
               newItems.push({
                "item_name": item.name,
                "item_qty": parseInt(item.qty),
                "item_price": item.price
               })
            })
            setItems(newItems)
        }
    }

    useEffect(() => {
        if (products && inventoryPage) {
             setMatchingProduct(products.find(product => product.id === parseInt(inventoryPage)))
        }    
      },[inventoryPage, products])

    // change status
    const statusChange = (e) => {
        setStatus(e.target.value)
    }

    // status menu button click
    const statusMenuChange = () => {
        setStatus('Completed')
    }

    useEffect(() => {
        if (status === 'Completed') {
            updateOrder()
            setStatus('')
        }
    },[status])

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
        if ( name && email && phone && address && zip && state && city && total && items) {        
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
                alert('Order updated!')
                setConfirmUpdate(true)
            } else {
                alert(response.statusText)
            }
        } else {
            if (!name) {
                console.log('name is missing')
            }
            if (!email) {
                console.log('email is missing')
            }
            if (!phone) {
                console.log('phone is missing')
            }
            if (!address) {
                console.log('address is missing')
            }
            if (!zip) {
                console.log('zip is missing')
            }
            if (!state) {
                console.log('state is missing')
            }
            if (!city) {
                console.log('city is missing')
            }
            if (!items) {
                console.log('items is missing')
            }
            if (!total) {
                console.log('total is missing')
            }
            if (!status) {
                console.log('status is missing')
            }
            console.log(` error in update function error`)
        }
    }

    const updatedOccured = () => {
        window.scrollTo(0,0)
        setConfirmUpdate(false)
    }

    // remove button click
    const handleRemove = (e) => {
        const removedName = e.currentTarget.getAttribute('data-item');
        const removedQty = parseInt(e.currentTarget.parentElement.parentElement.previousSibling.lastChild.value);
        let removedProductCost = currentOrder.order_items
            .filter((item) => item.item_name === removedName)
            .map((item) => item.item_price * removedQty)
            .reduce((total, cost) => total + cost, 0);

        currentOrder.order_items = currentOrder.order_items.filter((item) => item.item_name !== removedName);
        
        const currentTotal = currentOrder.order_total;
        const newTotal = currentTotal - removedProductCost;
        currentOrder.order_total = newTotal;
        setTotal(currentOrder.order_total)
    
        if (currentOrder.order_items.length === 0) {
            // Handle case when the order is empty
            deleteOrder(currentOrder.order_id);
            orderDeleted();
        } else {
            setItems(currentOrder.order_items.map((item) => ({
                "item_name": item.item_name,
                "item_qty": item.item_qty,
                "item_price": item.item_price
            })));
        }
    }

    // delete order
    async function deleteOrder(id) {
        console.log(id)
    
        if (window.confirm('Deleting this item will delete the entire order. Are you sure you want to proceed?') === true) {
            const response = await fetch(`http://127.0.0.1:5000/api/orders/${id}`, {
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

    // delete product
    async function deleteProduct(id) {
        console.log(id)

        if (window.confirm('This will delete the product. Are you sure you want to proceed?') === true) {
            const response = await fetch(`http://127.0.0.1:5000/api/product/${id}`, {
                method: 'DELETE',
            })
            if(response.ok) {
                console.log('product deleted')
                productDeleted()
            } else {
                alert(response.statusText)
                console.log('Error deleting product')
            }
        }

    }

    return <EditContext.Provider value=
    {
        {
            orderedProducts, currentOrder, name, address, city, state, zip, email, phone, id, convertedDate, confirmUpdate,
            updateItemQuantity, handleRemove, statusChange, dateChange, customerNameChange, stAddressChange, cityChange, stateChange, zipChange, emailChange, phoneChange, idChange,
            updateOrder, updatedOccured, statusMenuChange, deleteOrder, deleteProduct, matchingProduct
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