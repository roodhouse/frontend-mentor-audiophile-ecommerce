import React from 'react'
import { title, label, input } from '../../checkout/checkoutForm/styles'
import { useEdit } from '../../../context/editContext'


/// sample to send over on submit of form:
// const emailData = {
//   to_email: 'recipient@example.com',
//   subject: 'Your Subject',
//   body: 'Email body content here',
// };

// fetch('/send_email', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(emailData),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

function EmailOrder({ email, closeMenu }) {

  const { currentOrder } = useEdit()
  const sendEmail = new title(`Send an email message to ${currentOrder.order_name}`)
  const toEmail = new label(`Send to: ${currentOrder.order_email}`)
  const subject = new label(`Subject: `)

  return (
    <>
      <div id="emailOrderContainer">
        <div id="emailTitleContainer" className={`${sendEmail.styles} text-center`}>
          <p>{sendEmail.text}</p>
        </div>
        <div id="emailFormContainer">
          <form noValidate>
            <div id="toContainer" className={toEmail.styles}>
              <p>{toEmail.text}</p>
            </div>
            <div id="subjectContainer" className={`${subject.styles} flex items-center justify-start`}>
              <div id="subjectLabelContainer" className='mr-1'>
                <p>{subject.text}</p>
              </div>
              <div id="subjectInputContainer">
                <input 
                      name='subjectInput' 
                      placeholder='What is this about?'
                      className='h-[33px] text-xs text-deepOrange font-bold bg-offWhite caret-deepOrange rounded-lg border-borderWhite focus:border-deepOrange focus:outline-none focus:ring-0 hover:border-deepOrange' 
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EmailOrder