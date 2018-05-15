import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
// import reducers
import reducers from '../Reducers'

// combine middlewares
const middleware = applyMiddleware(
  logger, // log messages
  promise(), thunk, // to do asynch calls
)

// compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
const Store = createStore(
  reducers,
  composeEnhancers(middleware)
)

// export
export default Store
