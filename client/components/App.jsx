import React, { useEffect, useState } from 'react'
import { getRams } from '../apiClient'
import Form from './Form'
import Fake from './Fake'
import Month from './Month'

function App() {
  const [month, setMonth] = useState('')

  useEffect(() => {
    getRams()
      .then((rams) => {
        console.log(rams.body)
      })
      .catch((err) => console.err(err.message))
  })
  return (
    <div>
      <Fake month={month} />
      <Month setMonth={setMonth} />
      <Form />
    </div>
  )
}

export default App
