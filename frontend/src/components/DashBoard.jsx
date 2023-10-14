import React from 'react'
import DashboardHeading from './dashboard/DashboardHeading'
import OrdersTable from './dashboard/OrdersTable'

function DashBoard() {
    
  return (
    <>
        <div id="dashboardContainer">
            <div id="dashboardHeadingWrapper" className='mb-16 md:mb-[120px] xl:mb-[160px]'>
                <DashboardHeading />
            </div>
            <div id="ordersContainer" className='bg-white px-6 md:px-10 xl:px-[165px] custom:px-[165px]'>
                <div id="ordersTableWrapper">
                    <OrdersTable />
                </div>
            </div>
        </div>
    </>
  )
}

export default DashBoard