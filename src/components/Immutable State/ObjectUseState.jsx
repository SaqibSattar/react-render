import React, { useState } from 'react'

const initialValues = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

const ObjectUseState = () => {
    const [person, setPerson] = useState(initialValues)

    const changeName = () => {
        let newPerson = {...person}
        newPerson.firstName = 'John'
        newPerson.lastName = 'Doe'
        setPerson(newPerson)
    }

    console.log('rendering ObjectUseState')

  return (
    <div>
    <button onClick={changeName}>{person.firstName} - {person.lastName}</button>
    </div>
  )
}

export default ObjectUseState