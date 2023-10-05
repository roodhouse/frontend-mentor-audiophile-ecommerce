import React from 'react'

function InTheBox({ product }) {
  return (
    <>
        <div id={`product_${product.id}_BoxContainer`} className='md:flex xl:flex-col'>
            <div id={`product_${product.id}_BoxTitleContainer`} className='md:w-[339px] text-black text-2xl md:text-[32px] leading-9 tracking-[0.857px] md:tracking-[1.143px] font-bold uppercase mb-6 md:mb-0 xl:mb-8 md:mr-[11px] xl:mr-0'>
                <p>In The Box</p>
            </div>
            <div id={`product_${product.id}_BoxContentsContainer`}>
                <div id={`product_${product.id}_BoxItemOneContainer`} className='flex mb-2'>
                    <div id={`product_${product.id}_BoxItemOneQuan`} className='mr-6 text-deepOrange text-[15px] font-bold leading-[25px]'>
                        <p>{product.incl_one_quan}x</p>
                    </div>
                    <div id={`product_${product.id}_BoxItemOneDesc`} className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                        <p>{product.incl_one}</p>
                    </div>
                </div>
                <div id={`product_${product.id}_BoxItemTwoContainer`} className='flex mb-2'>
                    <div id={`product_${product.id}_BoxItemTwoQuan`} className='mr-6 text-deepOrange text-[15px] font-bold leading-[25px]'>
                        <p>{product.incl_two_quan}x</p>
                    </div>
                    <div id={`product_${product.id}_BoxItemTwoDesc`} className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                        <p>{product.incl_two}</p>
                    </div>
                </div>
                <div id={`product_${product.id}_BoxItemThreeContainer`} className='flex mb-2'>
                    <div id={`product_${product.id}_BoxItemThreeQuan`} className='mr-6 text-deepOrange text-[15px] font-bold leading-[25px]'>
                        <p>{product.incl_three_quan}x</p>
                    </div>
                    <div id={`product_${product.id}_BoxItemThreeDesc`} className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                        <p>{product.incl_three}</p>
                    </div>
                </div>
                <div id={`product_${product.id}_BoxItemFourContainer`} className='flex'>
                    <div id={`product_${product.id}_BoxItemFourQuan`} className='mr-6 text-deepOrange text-[15px] font-bold leading-[25px]'>
                        <p>{product.incl_four_quan}x</p>
                    </div>
                    <div id={`product_${product.id}_BoxItemFourDesc`} className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                        <p>{product.incl_four}</p>
                    </div>
                </div>

                {
                    product.incl_five ? (
                        <div id={`product_${product.id}_BoxItemFiveContainer`} className='flex mt-2'>
                            <div id={`product_${product.id}_BoxItemFiveQuan`} className='mr-6 text-deepOrange text-[15px] font-bold leading-[25px]'>
                                <p>{product.incl_five_quan}x</p>
                            </div>
                            <div id={`product_${product.id}_BoxItemFiveDesc`} className='text-black text-[15px] font-medium leading-[25px] opacity-50'>
                                <p>{product.incl_five}</p>
                            </div>
                        </div>
                    ) : ''
                }

            </div>
        </div>
    </>
  )
}

export default InTheBox