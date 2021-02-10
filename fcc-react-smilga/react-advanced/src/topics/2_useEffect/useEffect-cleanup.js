import React, {useEffect, useState} from 'react'

// 3. UseEffect cleanup example
const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth)

    console.log(`outside useEffect inner width is ${size}`)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log(`new useEffect call`)
        window.addEventListener('resize', checkSize)

        // cleaning up logic below
        return () => {
            console.log(`cleaning up..right before new useEffect call`)
            window.removeEventListener('resize', checkSize)
        }
    }) // could also do , [] as second parameter instead of cleanup fxn above

    console.log(`rendering or re-rendering!!!`)

    return (
        <>
            <h2>useEffect Cleanup Example</h2>

            <h3>window size: {size} px</h3>
        </>
    )
}

export default UseEffectCleanup