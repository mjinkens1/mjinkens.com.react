import React from 'react'
import { ContactPopup } from './ContactPopup'
import ContactForm from './ContactForm'
import './styles.css'

export const Contact = ({
    closePopup,
    didSubmit,
    didRecieve,
    contactSubmit,
    formData,
    formStatus,
    showPopup
}) => {
  return (
    <div className='contact'>
      <div className='comets-bg' />
      <ContactPopup
        closePopup={closePopup}
        didSubmit={didSubmit}
        didRecieve={didRecieve}
        formData={formData}
        formStatus={formStatus}
        showPopup={showPopup}
            />
      <div className='contact-container'>
        <div className='header-wrapper'>
          <h3>(FIRST)</h3>
          <h1>CONTACT</h1>
        </div>
        <embed className='spock' src='/images/hand-spock.svg' alt='spock' />
      </div>
      <div className='contact-container'>
        <ContactForm onSubmit={contactSubmit} didRecieve={didRecieve} />
        <div className='contact-links'>
          <a
            href='https://www.linkedin.com/in/matt-jinkens-391a8061'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-lg social mx-1'
                    >
            <i className='fab fa-linkedin-in' />
          </a>
          <a
            href='https://twitter.com/RB_24K'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-lg social mx-1'
                    >
            <i className='fab fa-twitter' />
          </a>
          <a
            href='https://codepen.io/MJ87/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-lg social mx-1'
                    >
            <i className='fab fa-codepen' />
          </a>
          <a
            href='https://github.com/mjinkens1'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-lg social mx-1'
                    >
            <i className='fab fa-github' />
          </a>
        </div>
      </div>
    </div>
  )
}
