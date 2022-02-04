import React, { useState, useEffect } from 'react'

import studentData from '../../server/db/data.json'

const App = () => {
  const newData = studentData.Students
  console.log(newData)

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
          <h1>Not Paired Yet</h1>
          {newData.map(element => {
            return <li><button>{element.name}</button></li>
          })}

        </div>
        <div className='divThree'>
          <h1>Paired</h1>
          {newData.map(element => {
            return <li><button>{element.name}</button></li>
          })}
        </div>
      </div>
    </>
  )
}

export default App
