exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Angela', photo: '1.jpeg', paired: 'False' },
        { id: 2, name: 'Ben Daniels', photo: '2.jpeg', paired: 'False' },
        { id: 3, name: 'Campbell', photo: '3.jpeg', paired: 'False' }
      ])
    })
}
