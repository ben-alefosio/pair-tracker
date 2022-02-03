const path = require('path')
const express = require('express')
const students = require('./routes/students')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/students', students)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
