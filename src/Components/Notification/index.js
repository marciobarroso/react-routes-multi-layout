import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NotificationAction from '../../Actions/NotificationAction'
import './notification.scss'

const Notification = props => {

  const action = new NotificationAction()

  if( props.notifications.length === 0 ) return null

  if( props.dismiss > 0 ) {
    window.setTimeout(() => {
      console.log('dismiss')
      action.reset()
    }, props.dismiss)
  }

  return (
    <div className='notification'>
      <div className='messages'>
        <a href='' onClick={() => action.reset()}>
          <i className='fa fa-window-close' />
        </a>
        <ul>
          {props.notifications.map((notification,i) => <li key={() => 'index-' + i}>{notification}</li>)}
        </ul>
      </div>
    </div>
  )
}

Notification.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  dismiss: PropTypes.number.isRequired
}

export default connect(store => ({
  notifications: store.notification.messages,
  dismiss: store.notification.dismiss
}))(Notification)
