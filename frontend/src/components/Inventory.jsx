import React from 'react'
import InventoryHeading from './inventory/InventoryHeading'
import InventoryActions from './inventory/InventoryActions'

function Inventory() {

  return (
    <>
        <div id="inventoryContainer" className='flex flex-col'>
            <div id="inventoryHeadingWrapper" className='mb-16 md:mb-[120px] xl:mb-[160px]'>
                <InventoryHeading />
            </div>
            <div id="inventoryContent" className='flex justify-center self-center bg-white px-6 md:0 md:w-[768px]'>
                <div id="inventoryActionsWrapper" className='md:w-full'>
                    <InventoryActions />
                </div>
            </div>
        </div>
    </>
  )
}

export default Inventory