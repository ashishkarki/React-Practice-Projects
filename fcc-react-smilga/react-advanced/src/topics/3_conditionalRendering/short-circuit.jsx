import React, { useState } from "react"

// short-circuit evaluation
// ternary operator
// we use the above two features in react since every component should return an expression
const ShortCircuit = () => {
    const [ text, setText ] = useState('')
    const firstValue = text || 'hello world'
    const secondValue = text && 'hello world'

    return (
        <>
            <h3>Short Circuit evaluation</h3>

            <h4>firstValue: { firstValue }</h4>
            <h4>secondValue: { secondValue }</h4>

            <h3>Ternary Operation</h3>
            { firstValue && secondValue ?
                `Showing firstValue: ${ firstValue }` :
                `Showing secondValue: ${ secondValue }`
            }
        </>
    )
}

export default ShortCircuit
