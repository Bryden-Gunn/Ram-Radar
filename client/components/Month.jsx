import React, { useState } from 'react'
import Select from 'react-select'

// ADD SLICE...

function Month() {
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
    console.log(selectValue.value)
    setSelectValue(selectValue)
  }

  // const onClick = () => {
  //   if (selectRef.current) {
  //     selectRef.current.focus()
  //     console.log(selectRef.current)
  //   }
  // }

  return (
    <div className="month">
      <h1>Month</h1>

      <Select
        options={options}
        onChange={handleChange}
        value={selectValue}
        ref={selectRef}
      ></Select>
      {/* <button type="button" onClick={onClick}>
        Submit
      </button> */}
    </div>
  )
}
export default Month

// async function handleSubmit(event) {
//   event.preventDefault()
//   console.log(options.value)

// getRamsByMonth(form)
//   .then(() => {
//     console.log()
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// setForm({
//   month: '',
// })
// }

/* <form>
        <div>
          <label htmlFor="month">Month</label>
          <input
            type="text"
            name="month"
            placeholder="Enter month"
            onChange={handleChange}
            value={form.month}
          />
        </div>

        <div>
         
        </div>
      </form> */

// function handleChange(event) {
//   setForm({
//     ...form,
//     [event.target.name]: event.target.value,
//   })
// }
