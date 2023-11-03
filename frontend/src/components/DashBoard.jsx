import React, { useState } from 'react'
import DashboardHeading from './dashboard/DashboardHeading'
import OrdersTable from './dashboard/OrdersTable'
import { label } from './checkout/checkoutForm/styles'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi'
import ProductsTable from './dashboard/ProductsTable'
import CloseButton from './orders/orderActions/viewOrder/CloseButton'

const allOrders = new label('All Orders')
const products = new label('Products')

function DashBoard() {

    const [ openOrderMenu, setOpenOrderMenu ] = useState(false)
    const [ openProductMenu, setOpenProductMenu ] = useState(false)

    const handleOrderClick = () => {
        openOrderMenu ? setOpenOrderMenu(false) : setOpenOrderMenu(true)
        setOpenProductMenu(false)
    }

    const handleProductClick = () => {
        openProductMenu ? setOpenProductMenu(false) : setOpenProductMenu(true)
        setOpenOrderMenu(false)
    }

    const closeMenuItem = (e) => {
            let closeSelected = e.currentTarget.parentElement.getAttribute('data-menu')
            switch (closeSelected) {
                case 'orderMenu':
                    setOpenOrderMenu(false)
                    window.scrollTo(0,0)
                    break
                case 'productMenu':
                    setOpenProductMenu(false)
                    window.scrollTo(0,0)
                    break
                default:
                    console.log('go')
            }
    }
    
  return (
    <>
        <div id="dashboardContainer" className='flex flex-col items-center'>
            <div id="dashboardHeadingWrapper" className='w-full mb-16 md:mb-[120px] xl:mb-[160px]'>
                <DashboardHeading />
            </div>
            <div id="dashMenuOptionsContainer" className='md:w-full md:max-w-[768px]'>
                <div id="dashMenuOrderOptions" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg mb-16'>
                    <div id="dashOrderOption" className='flex flex-col justify-between items-center'>
                        <div id="dashOrderOptionHeader" className={`${openOrderMenu ? 'mb-4' : 'mb-0'} flex w-full justify-between items-center`}>
                            <div id="dashOrderOptionText" className={`${allOrders.styles} !mb-0 text-[28px] underline decoration-deepOrange`}>
                                <p>{allOrders.text}</p>
                            </div>
                            <div id="dashOrderOptionIcon" onClick={handleOrderClick} className='cursor-pointer text-[28px]'>
                                <p>{ !openOrderMenu ? <HiMenu /> : <HiMenuAlt3 /> }</p>
                            </div>
                        </div>
                        { openOrderMenu ? (
                            <div id="ordersContainer" className='bg-white w-full'>
                                <div id="ordersTableWrapper">
                                    <OrdersTable />
                                </div>
                                <div id="orderMenuCloseButtonWrapper" data-menu="orderMenu" className='flex justify-center pt-6 bg-offWhite'>
                                    <CloseButton view={openOrderMenu} closeMenu={closeMenuItem} />
                                </div>
                            </div>
                            
                        ): '' }
                    </div>
                </div>

                <div id="dashMenuProductOptions" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg'>
                    <div id="dashProductOption" className='flex flex-col justify-between items-center'>
                        <div id="dashProductOptionHeader" className={`${openProductMenu ? 'mb-4' : 'mb-0'} flex w-full justify-between items-center`}>
                            <div id="dashProductOptionText" className={`${products.styles} !mb-0 text-[28px] underline decoration-deepOrange`}>
                                <p>{products.text}</p>
                            </div>
                            <div id="dashProductOptionIcon" onClick={handleProductClick} className='cursor-pointer text-[28px]'>
                                <p>{ !openProductMenu ? <HiMenu /> : <HiMenuAlt3 /> }</p>
                            </div>
                        </div>
                        { openProductMenu ? (
                            <div id="productsContainer" className='bg-white w-full'>
                                <div id="productsTableWrapper">
                                    <ProductsTable />
                                </div>
                                <div id="productsMenuCloseButtonWrapper" data-menu="productMenu" className='flex justify-center pt-6 bg-offWhite'>
                                    <CloseButton view={openProductMenu} closeMenu={closeMenuItem} />
                                </div>
                            </div>
                        ): '' }
                    </div>
                </div>
            </div>

            
        </div>
    </>
  )
}

export default DashBoard