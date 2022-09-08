const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRams,
}

function getRams(db = connection) {
  return db('rams').select()
}


