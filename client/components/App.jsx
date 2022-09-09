import React, { useEffect } from 'react'
import { getRams } from '../apiClient'
import Map from './Map'
import Form from './Form'
import Fake from './Fake'

function App() {
  useEffect(() => {
    getRams()
      .then((rams) => {
        console.log(rams.body)
      })
      .catch((err) => console.err(err.message))
  })
  return (
    <div>
      <h1>This is a template for Rams!</h1>
      <Map />
      <Fake />
      <Form />
    </div>
  )
}

export default App
