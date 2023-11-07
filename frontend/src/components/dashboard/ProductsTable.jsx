import React from 'react'
import { useMain } from '../../context/mainContext'
import { useEdit } from '../../context/editContext'

function ProductsTable() {

    const { products, inventoryClick } = useMain()
    const { deleteProduct } = useEdit()

    // need to create single product route to go to the view details / edit page for the product
    const handleClick = (e) => {        
        let id = e.target.parentElement.parentElement.id
        inventoryClick(id)
    }

    // need to create delete product route / use again on the single product page
    const handleDelete = (e) => {
        let id = e.target.parentElement.parentElement.id
        deleteProduct(id)
    }
    
  return (
    <>
        {
        products ? 
            (
                <div id="productsTableContainer">
                    <table className='min-w-full border-collapse block md:table'>
                        <thead className='block md:table-header-group'>
                            <tr className='border border-deepOrange md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative'>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Product</th>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Name</th>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Price</th>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Category</th>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Image</th>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Inventory</th>
                                <th className='bg-black p-2 md:text-center text-white font-bold md:border-deepOrange text-left block md:table-cell'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='block md:table-row-group'>
                            {products.map((product) => (
                                <tr key={product.id} id={product.id} className={`${product.id % 2 === 0 ? 'bg-almostWhite text-black' : 'bg-charcoal text-offWhite'} border border-deepOrange md:border-none block md:table-row`}>
                                    <td onClick={handleClick} className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Product</span><span className='cursor-pointer hover:text-deepOrange'>{product.id}</span></td>
                                    <td className='p-2 text-left md:text-center flex items-center md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Name</span><span>{product.name}</span></td>
                                    <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Price</span>${product.price.toLocaleString()}</td>
                                    <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Category</span>{product.category_name}</td>
                                    <td className='p-2 text-left md:text-center flex items-center md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Image</span><img className='w-16' src={product.main_image_mobile} alt={product.name} /></td>
                                    <td className='p-2 text-left md:text-center block md:table-cell'><span className='inline-block w-1/3 md:hidden font-bold'>Inventory</span>{product.inventory}</td>
                                    
                                    <td className='p-2 text-left md:text-center block md:flex md:items-center md:h-[72px]'>
                                        <span className='inline-block w-1/3 md:hidden font-bold'>Actions</span>
                                        <button onClick={handleClick} id={`${product.id}_edit`} className='text-white font-bold py-1 px-2 rounded border border-deepOrange bg-deepOrange hover:bg-lightOrange mr-2'>Edit</button>
                                        <button id={`${product.id}_delete`} onClick={handleDelete} className='text-white font-bold py-1 px-2 rounded border border-black bg-black hover:bg-offWhite hover:text-black'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : []   
        }
    </>
  )
}

export default ProductsTable

