import React, { useEffect } from 'react'
import { getRams } from '../apiClient'
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

      <Fake />
      <Form />
    </div>
  )
}

export default App
