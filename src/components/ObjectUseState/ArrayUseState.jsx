import React, { useState } from 'react'

const initialValues = ['Bruce','Wayne']

const ArrayUseState = () => {
    const [persons, setPerson] = useState(initialValues)

    const changeName = () => {
        setPerson([...persons, 'John', 'Doe'])
    }

    console.log('rendering ArrayUseState')

  return (
    <div>
    <button onClick={changeName}>Click to add more</button>
    { persons.map((person) => (
      <li key={person}>{person}</li>
    ))}
    </div>
  )
}

export default ArrayUseState