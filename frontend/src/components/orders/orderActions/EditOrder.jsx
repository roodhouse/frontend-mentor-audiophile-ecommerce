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

  const { register, handleSubmit, formState: {errors} } = useForm()

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
            <div id="editOrderCustomerDetailsWrapper" className='pb-6 md:flex md:flex-wrap md:justify-between'>
                <EditOrderCustomerDetails />
              </div>
              <div id="editOrderItemDetailsWrapper" className='pb-6'>
                <EditOrderItemDetails register={register} />
              </div>
              <div id="TotalSubmitContainer" className='md:flex md:items-center md:justify-between'>
                <div id="editOrderTotalWrapper" className='pb-6 md:pb-0'>
                  <ViewOrderTotal />
                </div>
                <div id="submitWrapper" className='pb-6 flex justify-center md:pb-0'>
                  <Submit />
                </div>
              </div>
          </div>
      </form>
        <div id="editCloseButtonWrapper" data-menu="edit" className='flex justify-center md:pt-6'>
          <CloseButton view={edit} closeMenu={closeMenu} />
        </div>
    </>
  )
}

export default EditOrder