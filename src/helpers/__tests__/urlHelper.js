import HOST_URL from '../../constants/url'
import getURL from '../urlHelper'

describe('get url', () => {
  it('HOSTの後にPATHが付く', () => {
    expect(getURL('/api/v1/users')).toBe(`${HOST_URL}/api/v1/users`)
  })
})
