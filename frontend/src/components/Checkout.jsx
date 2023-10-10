import React from 'react'
import CheckoutHeading from './checkout/CheckoutHeading'
import CheckoutForm from './checkout/CheckoutForm'
import CheckoutSummary from './checkout/CheckoutSummary'
import { useForm } from 'react-hook-form';
import { useMain } from '../context/mainContext';

function Checkout() {

    const { thankYouMenu } = useMain()

    const { register, resetField, handleSubmit, watch, formState: {errors} } = useForm({defaultValues: {
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        paymentMethod: '',
        eMoneyNumber: '',
        eMoneyPin: ''
    }})

    const onSubmit = async (data) => {
        console.log(data)
        thankYouMenu()
    }

    const onError = (data) => {
        console.log(data)
    }

  return (
    <>
        <div id="checkoutContainer">
            <div id="checkoutHeadingWrapper" className='pt-4 mb-6'>
                <CheckoutHeading />
            </div>
            <form noValidate onSubmit={handleSubmit(onSubmit, onError)} className='xl:flex'>
                <div id="checkoutFormWrapper" className='pt-6 px-6 pb-2 mb-8 bg-white rounded-lg w-[327px] md:w-[689px] xl:w-[730px]'>
                    <CheckoutForm register={register} />
                </div>
                <div id="checkoutSummaryWrapper" className='pt-6 px-6 mb-[97px] bg-white rounded-lg w-[327px] md:w-[689px] xl:w-[350px] xl:ml-[30px]'>
                    <CheckoutSummary />
                </div>
            </form>
        </div>
    </>
  )
}

export default Checkout