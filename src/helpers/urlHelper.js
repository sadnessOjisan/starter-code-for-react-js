// @flow

import HOST_URL from '../constants/url'

const getURL = (path: string): string => `${HOST_URL}${path}`

export default getURL
