import React from 'react'
import CheckoutHeading from './checkout/CheckoutHeading'
import CheckoutForm from './checkout/CheckoutForm'
import CheckoutSummary from './checkout/CheckoutSummary'
import { useForm } from 'react-hook-form';
import { useMain } from '../context/mainContext';

function Checkout() {

    const { thankYouMenu, grandTotal, cart } = useMain()

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
        
        let allItemNames = []
        cart.forEach((item) => {
            allItemNames.push(item.name)
        })

        allItemNames = allItemNames.join(', ')

        const name = data.name
        const email = data.email
        const phone = data.phone
        const address = data.address
        const zip = data.zip
        const city = data.city
        const country = data.country
        // const paymentMethod = data.paymentMethod
        const cash = true
        const eMoney = false
        const status = 'Processing'
        const total = grandTotal
        const items = allItemNames
        
        if ( name && email && phone && address && zip && country  && city && total && items) {
            const response = await fetch('http://127.0.0.1:5000/api/orders', {
                method: 'post',
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    zip,
                    city,
                    country,
                    cash,
                    eMoney,
                    status,
                    total,
                    items
                }),
                headers: {'Content-Type': 'application/json'}
            })

            if (response.ok) {
                resetField('name')
                resetField('email')
                resetField('phone')
                resetField('address')
                resetField('zip')
                resetField('country')
                resetField('paymentMethod')
                resetField('eMoneyNumber')
                resetField('eMoneyPin')
                thankYouMenu()
            } else {
                alert(response.statusText)
            }
        } else {
            console.log('error')
        }
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
                    <CheckoutForm register={register} errors={errors} />
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