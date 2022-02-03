import React from 'react'

// Student Data
import studentData from '../../server/db/db.json'

function Students (studentData) {
  // This will access the student data and return student info with button
  const data = studentData
  const studData = Object.keys(data)
  const newData = studentData.Students

  console.log(studData)
  return (
    <div>
      <p>{studData}</p>
    </div>
  )
}

export default Students
