import React, { useState, useEffect } from 'react'
import { useMain } from '../../../context/mainContext'

function CheckoutSummaryTotals() {

    const { total, theGrandTotal } = useMain()

    const [ finalCost, setFinalCost ] = useState(0)

        console.log(total)
        useEffect(() => {
             setFinalCost(total + 50 + 1079)
            // theGrandTotal(finalCost)
            theGrandTotal(total + 50 + 1079)
           
        },[total])
    
  return (
    <>
        <div id="checkoutSummaryTotalsContainer">
            <div id="totalContainer" className='mb-2 flex justify-between items-center'>
                <div id="totalTextContainer" className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                    <p>TOTAL</p>
                </div>
                <div id="totalAMTcontainer" className='text-black text-[18px] font-bold leading-normal uppercase'>
                    <p>${total.toLocaleString()}</p>
                </div>
            </div>
            <div id="totalShippingContainer" className='mb-2 flex justify-between items-center'>
                <div id="totalShippingTextContainer" className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                    <p>SHIPPING</p>
                </div>
                <div id="totalShippingAMTcontainer" className='text-black text-[18px] font-bold leading-normal uppercase'>
                    <p>$50</p>
                </div>
            </div>
            <div id="totalVATContainer" className='mb-6 flex justify-between items-center'>
                <div id="totalVATTextContainer" className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                    <p>VAT (INCLUDED)</p>
                </div>
                <div id="totalVATAMTcontainer" className='text-black text-[18px] font-bold leading-normal uppercase'>
                    <p>$1,079</p>
                </div>
            </div>
            <div id="totalGrandContainer" className='flex justify-between items-center'>
                <div id="totalGrandTextContainer" className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                    <p>GRAND TOTAL</p>
                </div>
                <div id="totalGrandAMTcontainer" className='text-deepOrange text-[18px] font-bold leading-normal uppercase'>
                    <p>${finalCost.toLocaleString()}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CheckoutSummaryTotals
