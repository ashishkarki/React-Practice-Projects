import React, { useState } from 'react'
import CustomButton from '../../shared/ui/custom-button'

function UseStateCounter() {
    const [ value, setValue ] = useState(0)

    return (
        <>
            <section style={ { margin: '4rem 0' } }>
                <h2>Regular Counter</h2>
                <h1>{ value }</h1>

                <CustomButton label='Decrease' />
                <CustomButton label='Increase' />
                <CustomButton label='Reset' />
            </section>
        </>
    )
}

export default UseStateCounter
