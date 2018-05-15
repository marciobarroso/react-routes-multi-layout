import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import App from './Containers/App'
import Store from './Commons/Store'

const root = document.getElementById('root')

ReactDom.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root
)
