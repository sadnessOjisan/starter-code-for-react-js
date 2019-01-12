// @flow

import ENV from './env'

let URL: string

const currentEnv = process.env.REACT_APP_ENV

switch (currentEnv) {
  case ENV.prd:
    URL = 'https://sample.com'
    break
  case ENV.stg:
    URL = 'https://sample.com'
    break
  case ENV.dev:
    URL = 'https://sample.com'
    break
  case ENV.local:
    URL = 'http://localhost:3001'
    break
  default:
    URL = 'http://localhost:3001'
    break
}

const HOST_URL = URL

export default HOST_URL
