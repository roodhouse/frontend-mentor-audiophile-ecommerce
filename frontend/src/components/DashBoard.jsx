import React, { useState, useEffect } from 'react'
import DashboardHeading from './dashboard/DashboardHeading'
import OrdersTable from './dashboard/OrdersTable'
import { label } from './checkout/checkoutForm/styles'
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi'

const allOrders = new label('All Orders')

function DashBoard() {

    const [ openMenu, setOpenMenu ] = useState(false)

    const handleClick = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }
    
  return (
    <>
        <div id="dashboardContainer" className='flex flex-col items-center'>
            <div id="dashboardHeadingWrapper" className='w-full mb-16 md:mb-[120px] xl:mb-[160px]'>
                <DashboardHeading />
            </div>
            <div id="dashMenuOptionsContainer" className='md:w-full md:max-w-[768px]'>
                <div id="dashMenuOptions" className='w-[327px] md:w-full bg-offWhite p-6 rounded-lg'>
                    <div id="dashOrderOption" className='flex flex-col justify-between items-center'>
                        <div id="dashOrderOptionHeader" className={`${openMenu ? 'mb-4' : 'mb-0'} flex w-full justify-between items-center`}>
                            <div id="dashOrderOptionText" className={`${allOrders.styles} !mb-0 text-[28px] underline decoration-deepOrange`}>
                                <p>{allOrders.text}</p>
                            </div>
                            <div id="dashOrderOptionIcon" onClick={handleClick} className='cursor-pointer text-[28px]'>
                                <p>{ !openMenu ? <HiMenu /> : <HiMenuAlt3 /> }</p>
                            </div>
                        </div>
                        { openMenu ? (
                            <div id="ordersContainer" className='bg-white w-full'>
                                <div id="ordersTableWrapper">
                                    <OrdersTable />
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