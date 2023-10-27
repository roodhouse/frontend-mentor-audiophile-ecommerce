import React from 'react'
import { useForm } from 'react-hook-form';
import { title, label } from '../../checkout/checkoutForm/styles'
import { useEdit } from '../../../context/editContext'
import Send from '../../shared/buttons/Send'
import CloseButton from './viewOrder/CloseButton'

function EmailOrder({ email, closeMenu }) {

  const { currentOrder } = useEdit()

  const sendEmail = new title(`Send an email message to ${currentOrder.order_name}`)
  const toEmail = new label(`Send to: ${currentOrder.order_email}`)
  const subject = new label(`Subject: `)
  const message = new label('Message:')

  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    
    const emailData = {
      to_email: currentOrder.order_email,
      subject: data.subject,
      body: data.message
    }

    fetch('/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
  }

  const onError = () => {
    console.log(errors)
  }

  return (
    <>
      <div id="emailOrderContainer">
        <div id="emailTitleContainer" className={`${sendEmail.styles} text-left`}>
          <p>{sendEmail.text}</p>
        </div>
        <div id="emailFormContainer">
          <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
            <div id="toContainer" className={toEmail.styles}>
              <p>{toEmail.text}</p>
            </div>
            <div id="subjectContainer" className={`${subject.styles} flex items-center justify-start`}>
              <div id="subjectInputContainer" className='w-full'>
                <input 
                      name='subjectInput' 
                      placeholder='What is this about?'
                      className='w-full h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange'
                      {...register('subject')}
                />
              </div>
            </div>
            <div id="messageContainer" className={`${message.styles} flex items-center justify-start !mb-0`}>
              <div id="messageTextContainer" className='w-full pb-6'>
                <textarea 
                  className={`w-full mb-0 text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange`} 
                  name="message" 
                  id="message" 
                  cols="21" 
                  rows="10"
                  placeholder='Compose message here'
                  {...register('message')}
                >
                </textarea>
              </div>
            </div>
            <div id="sendButtonWrapper" className='flex justify-center pb-6'>
              <Send />
            </div>
          </form>
          <div id="emailCloseButtonWrapper" data-menu="email" className='flex justify-center'>
            <CloseButton view={email} closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailOrder