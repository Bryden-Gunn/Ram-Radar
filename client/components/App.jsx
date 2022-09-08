import React, { useEffect } from 'react'
import { getRams } from '../apiClient'

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
    </div>
  )
}

export default App
