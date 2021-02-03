import React, { useState } from 'react'
import TextButtonCombo from '../../shared/ui/text-button-combo'

// all hooks start with "use"
// the component that uses hook/s, its name must be camel-case
// hook/s must be used from a function/component body
// cannot call a hook conditionally
const UseStateBasics = () => {
    const [ value, setValue ] = useState('Title 1')
    let [counter, setCounter] = useState(1)

    const clickHandler = () => {
        setCounter(++counter)
        setValue(`Title ${counter} with random val: ${ (Math.random() * 100) / 100 }`)
    }

    return (
        <>
            <h3>useState basic example</h3>

            <TextButtonCombo text={ value } clickHandler={ clickHandler } />
        </>
    )
}

export default UseStateBasics
