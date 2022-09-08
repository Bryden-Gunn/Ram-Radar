import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// ADD SLICE...

function Form() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    numberPlate: '',
    latitude: '',
    longitude: '',
    month: '',
    goods: '',
  })

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    // DISPATCH SLICES...
  }

  return (
    <div>
      <h1>Ram Radar Submissions</h1>
      <form>
        <div>
          <label htmlFor="goods">Goods</label>
          <input
            type="text"
            name="goods"
            placeholder="Enter Goods stolen.."
            onChange={handleChange}
            value={form.goods}
          />
        </div>

        <div>
          <label htmlFor="numberplate">Number Plate</label>
          <input
            type="text"
            name="numberplate"
            placeholder="Enter Number plate.."
            onChange={handleChange}
            value={form.numberPlate}
          />
        </div>

        <div>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            name="latitude"
            placeholder="Enter Latitude.."
            onChange={handleChange}
            value={form.latitude}
          />
        </div>

        <div>
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            name="longitude"
            placeholder="Enter Longitude.."
            onChange={handleChange}
            value={form.longitude}
          />
        </div>

        <div>
          <label htmlFor="month">Month</label>
          <input
            type="month"
            name="month"
            placeholder=""
            onChange={handleChange}
            value={form.month}
          />
        </div>

        <div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Form
