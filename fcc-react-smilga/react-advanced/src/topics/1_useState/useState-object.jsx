import React, { useState } from 'react'
import CustomButton from '../../shared/ui/custom-button'

function UseStateObject() {
    const [ person, setPerson ] = useState({
        name: 'ashish', age: 24, message: 'random message'
    })
    const changeMessage = () => {
        console.log('changing message!!!')

        // setPerson({ message: 'this is new message' })
        setPerson({
            ...person,
            age: person.age + 1,
            message: `New message with current age: ${ person.age }`
        })
    }

    return (
        <>
            <h3>{ person.name }</h3>
            <h3>{ person.age }</h3>
            <h3>{ person.message }</h3>

            <CustomButton clickHandler={ changeMessage } label='Change the Message' />
        </>
    )
}

export default UseStateObject
