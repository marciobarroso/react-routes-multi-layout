import axios from 'axios'
import Store from '../Store'

// axios
axios.interceptors.request.use(config => {
  if (config !== null && Store.getState().auth.token !== undefined) {
    config.headers = {
      Authorization: Store.getState().auth.token
    }
  }

  return {
    ...config,
    baseURL: 'http://127.0.0.1:8080/'
  }
})

axios.interceptors.response.use((response) => {
    return response
  }, function (error) {

  return Promise.reject(error.response)
})

export default axios
