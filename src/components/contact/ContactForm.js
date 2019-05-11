import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './styles.css'

const validate = values => {
  const errors = {}

  if (!values.name) errors.name = 'Please enter your name'

  if (!values.email) {
    errors.email = 'Please enter an email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!values.message) {
    errors.message = 'Please enter a message'
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

const formField = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error, warning, submitting },
    className,
    isTextArea
}) =>
  <div>
    <label className='contact-label'>
      {label}
    </label>
    <div className='contact-input-wrapper'>
      {isTextArea
                ? <textarea
                  className='contact-input'
                  {...input}
                  placeholder={placeholder}
                  type={type}
                  />
                : <input
                  className='contact-input'
                  {...input}
                  placeholder={placeholder}
                  type={type}
                  />}
      {touched &&
                ((error &&
                <span>
                  {error}
                </span>) ||
                    (warning &&
                    <span>
                      {warning}
                    </span>))}
    </div>
  </div>

const ContactForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='name' type='text' component={formField} label='Name' />
      <Field name='email' type='email' component={formField} label='Email' />
      <Field
        name='message'
        type='message'
        component={formField}
        isTextArea
        label='Message'
        placeholder='Live long and prosper'
            />
      <div>
        <button type='submit' disabled={props.invalid || props.submitting}>
                    Send Message
                </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contactSubmit',
  validate
})(ContactForm)
