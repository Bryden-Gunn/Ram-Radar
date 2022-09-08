const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRams,
  addRams,
}

function getRams(db = connection) {
  return db('rams').select()
}

// function to add rams to the database.

function addRams(rams, db = connection) {
  const { plate, latitude, longitude, month, goods } = rams
  console.log(rams)
  return db('rams').insert({ plate, latitude, longitude, month, goods })
}
