import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'

import './signInForm.scss'

const SignInForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className='sign-in-form'>
        <h3>Login</h3>
        <label htmlFor='username'>
          Username: <Field name='username' component='input' type='text' placeholder='username'/>
        </label>
        <label htmlFor='password'>
          Password: <Field name='password' component='input' type='password' placeholder='password'/>
        </label>
        <button type='submit'>submit</button>
      </div>
    </form>
  )
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'sign-in'
})(SignInForm)
