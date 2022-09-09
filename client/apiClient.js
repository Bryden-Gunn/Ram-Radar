// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const widgetUrl = '/api/v1/rams/'

export function getRams() {
  return request.get('/api/v1/rams/')
}

export function addRams(rams) {
  console.log('hits the api')
  const { plate, latitude, longitude, month, goods } = rams

  return request
    .post('/api/v1/rams/')
    .send({ plate, latitude, longitude, month, goods })
    .then((response) => response.body)
}
