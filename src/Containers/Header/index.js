import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './header.scss'

const Header = props => {

  const userLink = () => {
    if (props.user) {
      return <Link className='nav-item nav-link' to={'/private/user'}>{props.user.name}</Link>
    }
  }

  const adminLink = () => {
    if(props.user && props.user.roles && props.user.roles.includes('admin')) {
      return <Link className='nav-item nav-link' to={'/private/admin'}>Administration Panel</Link>
    }
  }

  const signLink = () => {
    if (props.user) {
      return (
        <Link className='nav-item nav-link' to={'/sign-out'}>Sign-Out</Link>
      )
    } else {
      return (
        <Link className='nav-item nav-link' to={'/sign-in'}>Sign-in</Link>
      )
    }
  }

  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <Link to='/'><i className='fas fa-code' /></Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'/>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>Home <span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
              { adminLink() }
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              { userLink() }
            </li>
            <li className='nav-item'>
              { signLink() }
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.shape()
}

Header.defaultProps = {
  user: undefined
}

export default connect(store => ({
  user: store.auth.user
}))(Header)
