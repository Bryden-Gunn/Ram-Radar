import React, { useState } from 'react'
import Form from './Form'
import Home from './Home'
import Month from './Month'

function App() {
  const [month, setMonth] = useState('')

  return (
    <div>
      <Home month={month} />
      <Month setMonth={setMonth} month={month}/>
      <Form setMonth={setMonth} />
    </div>
  )
}

export default App
