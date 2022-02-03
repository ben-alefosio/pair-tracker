const express = require('express')
const router = express.Router()
const db = require('../db/db')

// GET /api/v1/students/
router.get('/', (req, res) => {
  db.getStudents()
    .then(result => {
      console.log(result)
      res.json(result)
      return null
    })
    .catch(error => {
      res.status(500).json('insert operation has failed')
      console.error(error)
    })
})

// POST /api/v1/students/
router.post('/', (req, res) => {
  const { name } = req.body // { name: 'value'}
  // or
  // const name = req.body.name

  db.createStudents(name)
    .then(id => {
      res.json(id)
      return null
    })
    .catch(error => {
      res.status(500).json('insert operation has failed')
      console.error(error)
    })
})

module.exports = router
