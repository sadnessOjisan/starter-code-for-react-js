import axios from 'axios'
import getURL from '../helpers/urlHelper'

const sampleAPI = {
  fetchSample(test) {
    return axios
      .get(getURL('/api/v1/sample'), {
        params: {
          test,
        },
      })
      .then(response => ({
        payload: response,
      }))
      .catch(error => ({
        error,
      }))
  },
}

export default sampleAPI
