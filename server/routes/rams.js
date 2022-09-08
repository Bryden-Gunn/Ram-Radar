const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getRams()
    .then((rams) => {
      res.json(rams)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const { plate, latitude, longitude, month, goods } = req.body

  db.addRams({ plate, latitude, longitude, month, goods })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

module.exports = router
