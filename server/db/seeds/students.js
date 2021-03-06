exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Angela', photo: '1.jpeg', paired: 'False' },
        { id: 2, name: 'Ben Daniels', photo: '2.jpeg', paired: 'False' },
        { id: 3, name: 'Campbell', photo: '3.jpeg', paired: 'False' },
        { id: 4, name: 'Chihiro', photo: '4.jpeg', paired: 'False' },
        { id: 5, name: 'Claire', photo: '5.jpeg', paired: 'False' },
        { id: 6, name: 'Gus', photo: '6.jpeg', paired: 'False' },
        { id: 7, name: 'Isabella', photo: '7.jpeg', paired: 'False' },
        { id: 8, name: 'Jake', photo: '8jpeg', paired: 'False' },
        { id: 9, name: 'Jinny', photo: '9.jpeg', paired: 'False' },
        { id: 10, name: 'Joanne', photo: '10.jpeg', paired: 'False' },
        { id: 11, name: 'Kate Han', photo: '11.jpeg', paired: 'False' },
        { id: 12, name: 'Kate Turnbull', photo: '12.jpeg', paired: 'False' },
        { id: 13, name: 'Nikhita', photo: '13.jpeg', paired: 'False' },
        { id: 14, name: 'Ningyi', photo: '14.jpeg', paired: 'False' },
        { id: 15, name: 'Ryan', photo: '15.jpeg', paired: 'False' },
        { id: 16, name: 'Sadie', photo: '16.jpeg', paired: 'False' },
        { id: 17, name: 'Sam Drumm', photo: '17.jpeg', paired: 'False' },
        { id: 18, name: 'Sam Wylie', photo: '18.jpeg', paired: 'False' },
        { id: 19, name: 'Tarek', photo: '19.jpeg', paired: 'False' },
        { id: 20, name: 'Jerry', photo: '20.jpeg', paired: 'False' }

      ])
    })
}
