import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import AuthAction from '../../Actions/AuthAction'

import Home from '../../Components/Home'
import SignIn from '../SignIn'

import './main.scss'

const Main = () => {

  const signOut = () => {
    const auth = new AuthAction()
    auth.signOut()
    return <Redirect to='/' />
  }

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sign-in' render={() => <SignIn />} />
        <Route exact path='/sign-out' render={() => signOut()} />
        <Route exact path='/private/user' render={() => 'User Page'} />
        <Route exact path='/private/admin' render={() => 'Admin Page'} />
      </Switch>
    </main>
  )
}

export default Main
