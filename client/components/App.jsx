import React, { useState, useEffect } from 'react'

import studentData from '../../server/db/data.json'

const App = () => {
  const [state, setState] = useState(studentData.Students)
  function handleClick (id) {
    const updatedState = state
      .map(item => item.id === id
        ? ({ ...item, paired: !item.paired })
        : item)
    setState(updatedState)
  }

  // const newData = studentData.Students

  const paired = state.filter(item => item.paired === true)
  const notPaired = state.filter(item => item.paired === false)
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
          <h1 id="abc">Paired</h1>
          {paired.map(element => {
            return <ul><img className='images'src={`/images/${element.photo}`}></img><button onClick = {() => handleClick(element.id)}>{element.name}</button></ul>
          })}
        </div>
        <div className='divThree'>
          <h1>Not Paired Yet</h1>
          {notPaired.map(element => {
            return <ul><img className='images'src={`/images/${element.photo}`}></img><button onClick = {() => handleClick(element.id)}>{element.name}</button>
            </ul>
          })}
        </div>
      </div>
    </>
  )
}

export default App
