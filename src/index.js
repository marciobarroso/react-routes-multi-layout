import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './Containers/App'

const routes = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

const root = document.getElementById('root')
ReactDOM.render(routes, root)