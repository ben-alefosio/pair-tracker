import React, { useState, useEffect } from 'react'

import studentData from '../../server/db/data.json'

const App = () => {
  const newData = studentData.Students

  const paired = newData.filter(item => item.paired === true)
  const notPaired = newData.filter(item => item.paired === false)
  console.log(paired)
  console.log(notPaired)

  // Function

  return (
    <>
      <nav className='title'>
        <h1>Pair Programming Buddy Tracker</h1>
      </nav>
      <div className='container'>
        <div className='divOne'>
          <img className='userPhoto' src='/images/ben.jpeg'></img>
          <h1>BEN ALEFOSIO</h1>
        </div>
        <div className='divTwo'>
          <h1>Paired</h1>
          {paired.map(element => {
            return <li><button>{element.name}</button></li>
          })}
        </div>
        <div className='divThree'>
          <h1>Not Paired Yet</h1>
          {notPaired.map(element => {
            return <li><button>{element.name}</button></li>
          })}
        </div>
      </div>
    </>
  )
}

export default App
