import React, { useState, useEffect } from 'react'
import Student from './Students'
import studentData from '../../server/db/db.json'

const App = () => {
  const studData = Object.keys(studentData)
  const newData = studentData.Students

  console.log(studData)
  console.log(newData)
  return (
    <><div className='container'>
      <div className='divOne'>
        <img src='/images/ben.jpeg'></img>
        <h1>Ben Alefosio</h1>
      </div>
      <div className='divTwo'>
        {newData.map(element => {
          return <li><button>{element.name}</button></li>
        })}
        {/* Map students filter by pairing false,
if false display /li */}
      </div>
      <div className='divThree'>
        {/* Map students filter by pairing true,
if true display /li */}
      </div>
    </div>
    </>
  )
}

export default App
