import React, { useState } from 'react'
import Select from 'react-select'

// ADD SLICE...

function Month(props) {
  const options = [
    { value: 'none', label: 'none' },
    { value: 'all', label: 'all' },
    { value: 'january', label: 'january' },
    { value: 'feburary', label: 'feburary' },
    { value: 'march', label: 'march' },
    { value: 'april', label: 'april' },
    { value: 'may', label: 'may' },
    { value: 'june', label: 'june' },
    { value: 'july', label: 'july' },
    { value: 'august', label: 'august' },
    { value: 'september', label: 'september' },
    { value: 'october', label: 'october' },
    { value: 'november', label: 'november' },
    { value: 'december', label: 'december' },
  ]

  const [selectValue, setSelectValue] = useState('')
  const selectRef = React.useRef()

  const handleChange = (selectValue) => {
    // SelectValue.value is the parameter you consume for the month
    setSelectValue(selectValue)
    props.setMonth(selectValue.value)
  }

  return (
    <div className="month">
      <h1>Month</h1>
      <Select
        options={options}
        onChange={handleChange}
        value={selectValue}
        ref={selectRef}
      ></Select>
    </div>
  )
}
export default Month
