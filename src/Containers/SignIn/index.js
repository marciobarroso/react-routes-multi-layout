import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import AuthAction from '../../Actions/AuthAction'
import SignInForm from '../../Components/SignInForm'

class SignIn extends Component {

  constructor(props) {
    super(props)

    this.action = new AuthAction()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.action.signIn(values)
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/'/>
    } else {
      return <SignInForm onSubmit={this.onSubmit} />
    }
  }
}

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default connect(store => ({
  isAuthenticated: store.auth.token !== undefined
}))(SignIn)
