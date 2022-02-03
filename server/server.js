const path = require('path')
const express = require('express')
const routes = require('./routes/index')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/example', routes)

// server.get('*', (req, res) => {
//   // res.send('Hello')
// })

module.exports = server
