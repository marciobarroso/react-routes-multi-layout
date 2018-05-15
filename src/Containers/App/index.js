import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import AuthAction from '../../Actions/AuthAction'
import Header from '../Header'
import Main from '../Main'
import Notification from '../../Components/Notification'

import './app.scss'

const App = () => {
  // load user data if token is defined

  try {
    const action = new AuthAction()
    action.getUser()
  } catch(e) {
    console.log('Error no home : ')
    console.error(e)
  }

  return (
    <div className='app'>
      <Notification />
      <Header />
      <Main />
    </div>
  )
}

// when use connected redux components that wrappes route
// you must use withRouter
export default withRouter(connect()(App))
