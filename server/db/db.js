const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStudents
}

function getStudents (db = connection) {
  return db('students')
    .select()
}

// function createLanguage (languageName, db = connection) {
//   const newLangaugeToAdd = { name: languageName }
//   return db('languages')
//     .insert(newLangaugeToAdd)
//     .then(ids => ids[0])
// }
