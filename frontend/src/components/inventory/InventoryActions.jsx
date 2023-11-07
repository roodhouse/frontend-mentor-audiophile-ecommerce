import React, { useState, useEffect } from 'react'
import { label } from '../checkout/checkoutForm/styles'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi'
import { useMain } from '../../context/mainContext'
import { useEdit } from '../../context/editContext'
import ViewProduct from './inventoryActions/ViewProduct'
import EditProduct from './inventoryActions/EditProduct'
import DeleteProduct from './inventoryActions/DeleteProduct'

// actions I want are:
// view the product as is -- here
// edit the product with updated info
// add or reduce inventory
// delete the product entirely

const inventoryActions = new label('Product Actions')

function InventoryActions() {

    const { products, productDelete, inventoryPage } = useMain()
    const { updatedOccured, confirmUpdate, matchingProduct } = useEdit()

    const [ openMenu, setOpenMenu ] = useState(false)
    const [ viewProduct, setViewProduct ] = useState('')
    const [ editProduct, setEditProduct ] = useState('')
    const [ deleteProduct, setDeleteProduct ] = useState('')

    const handleClick = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }


    const menuItemClick = (e) => {
        const selectedView = e.target.getAttribute('data-menu')
        switch (selectedView) {
            case 'viewProduct':
                viewProduct ? setViewProduct(false) : setViewProduct(true)
                setOpenMenu(false)
                break
            case 'editProduct':
                editProduct ? setEditProduct(false) : setEditProduct(true)
                setOpenMenu(false)
                break
            case 'deleteProduct':
                deleteProduct ? setDeleteProduct(false) : setDeleteProduct(true)
                setOpenMenu(false)
                break
            default:
                console.log('failed')
        }
    }

    const closeMenuItem = (e) => {
       
            let closeSelected = e.currentTarget.parentElement.getAttribute('data-menu')
            switch (closeSelected) {
                case 'viewProduct':
                    setViewProduct(false)
                    break
                case 'editProduct':
                    setEditProduct(false)
                    break
                case 'deleteProduct':
                    setDeleteProduct(false)
                    break
                default:
                    console.log('go')
            }  
    }

  return (
    <>
        <div id="inventoryActionsContainer" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg'>
            <div id="inventoryActionsHeader" className='flex justify-between items-center'>
                <div id="inventoryActionText" className={`${inventoryActions.styles} mb-4 text-[28px] underline decoration-deepOrange`}>
                    <p>{inventoryActions.text}</p>
                </div>
                <div id="inventoryActionIcon" onClick={handleClick} className='cursor-pointer text-[28px]'>
                    <p>{ !openMenu ? <HiMenu /> : <HiMenuAlt3 /> }</p>
                </div>
            </div>

            { openMenu ? (
                <div id="inventoryActionSelectionContainer">
                <ul className={`${inventoryActions.styles} flex flex-col justify-center items-center text-[18px] mb-0`}>
                    <li data-menu='viewProduct' onClick={menuItemClick} className={`${viewProduct ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>View Product</li>
                    <li data-menu='editProduct' onClick={menuItemClick} className={`${editProduct ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>Edit Product</li>
                    <li data-menu='deleteProduct' onClick={menuItemClick} className={`${deleteProduct ? 'bg-charcoal text-deepOrange hover:bg-deepOrange hover:text-offWhite' : 'bg-deepOrange text-offWhite hover:bg-charcoal hover:text-deepOrange'} m-2 cursor-pointer w-full text-center py-5 rounded-lg`}>Delete Product</li>
                </ul>
            </div>
            ) : '' }  
        </div>
        {viewProduct || editProduct || deleteProduct ? (
            <div id="inventoryActionOptionsContainer" >
                {viewProduct ? (
                    <div id="viewProductWrapper" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg mt-6'>
                        <ViewProduct view={viewProduct} closeMenu={closeMenuItem} />
                    </div>
                ) : ''}
                {editProduct ? (
                    <div id="editProductWrapper" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg mt-6'>
                        <EditProduct edit={editProduct} closeMenu={closeMenuItem} />
                    </div>
                ) : ''}
                {deleteProduct ? (
                    <div id="deleteProductWrapper" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg mt-6'>
                        <DeleteProduct deleteItem={deleteProduct} closeMenu={closeMenuItem} />
                    </div>
                ) : ''}
            </div>
        ) : ''}
    </>
  )
}

export default InventoryActions