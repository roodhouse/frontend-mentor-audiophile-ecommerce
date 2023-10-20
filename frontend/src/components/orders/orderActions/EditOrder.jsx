import React from 'react'
import EditOrderCustomerDetails from './editOrder/EditOrderCustomerDetails.jsx'
import EditOrderItemDetails from './editOrder/EditOrderItemDetails'
import ViewOrderTotal from './viewOrder/ViewOrderTotal'
import CloseButton from './viewOrder/CloseButton'
import Submit from '../../shared/buttons/Submit.jsx'
import { useForm } from 'react-hook-form';
import { useEdit } from '../../../context/editContext.jsx'


function EditOrder({ edit, closeMenu }) {

  const { updateOrder } = useEdit()

  const { handleSubmit, formState: {errors} } = useForm()

  const onSubmit = () => {
    updateOrder()
  }

  const onError = () => {
    console.log(errors)
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
          <div id="editOrderContainer">
            <div id="editOrderCustomerDetailsWrapper" className='pb-6'>
                <EditOrderCustomerDetails />
              </div>
              <div id="editOrderItemDetailsWrapper" className='pb-6'>
                <EditOrderItemDetails />
              </div>
              <div id="editOrderTotalWrapper" className='pb-6'>
                <ViewOrderTotal />
              </div>
              <div id="submitWrapper" className='pb-6 flex justify-center'>
                <Submit />
              </div>
          </div>
      </form>
        <div id="editCloseButtonWrapper" data-menu="edit" className='flex justify-center'>
          <CloseButton view={edit} closeMenu={closeMenu} />
        </div>
    </>
  )
}

export default EditOrder