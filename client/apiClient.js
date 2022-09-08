// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const widgetUrl = '/api/v1/rams/'

export function getRams() {
  return request.get('/api/v1/rams/')
}
