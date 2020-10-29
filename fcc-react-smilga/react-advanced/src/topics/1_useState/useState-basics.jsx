import React, { useState } from 'react'
import TextButtonCombo from '../../shared/ui/text-button-combo'

const UseStateBasics = () => {
    const [ value, setValue ] = useState('Title 1')
    const clickHandler = () => {
        setValue(`Title 2 with random val: ${ Math.random() }`)
    }

    return (
        <>
            <h3>useState basic example</h3>

            <TextButtonCombo text={ value } clickHandler={ clickHandler } />
        </>
    )
}

export default UseStateBasics
