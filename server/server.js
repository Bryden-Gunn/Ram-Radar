const path = require('path')
const express = require('express')

const rams = require('./routes/rams')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/rams', rams)

module.exports = server
