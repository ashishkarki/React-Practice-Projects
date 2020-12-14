import React, { useState } from 'react'
import TextButtonCombo from '../../shared/ui/text-button-combo'
import ComponentTitle from '../../shared/ui/component-title'

// all hooks start with "use"
// the component that uses hook/s, its name must be camel-case
// hook/s must be used from a function/component body
// cannot call a hook conditionally
const UseStateBasics = () => {
    const [ value, setValue ] = useState('Title 1')
    const clickHandler = () => {
        setValue(`Title 2 with random val: ${ (Math.random() * 100) / 100 }`)
    }

    return (
        <>
            <ComponentTitle title='useState basic example' />

            <TextButtonCombo text={ value } clickHandler={ clickHandler } />
        </>
    )
}

export default UseStateBasics
