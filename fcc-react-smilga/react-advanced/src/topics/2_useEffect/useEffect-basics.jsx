import React, {useEffect, useState} from 'react';

// 1. UseEffect, by default, runs after every re-render
// 2. UseEffect's second parameter:
// => [] - an empty second parameter means only call useEffect on initial render
// => [value] - means this useEffect is dependent on `value' change and runs with it
// 3. Cleanup function
const UseEffectBasics = (props) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log(`use effect fxn called`)
        // conditionally executing logic within useEffect
        if(value > 1) {
            document.title = `Title Num: ${value}`
        }
    }, [value])

    // can have multiple useEffect
    useEffect(() => {
        console.log('second useEffect')
    }, []) // this one just runs on initial render

    console.log(`render component`)

    return (
        <>
            <h2>useEffect Basics Example</h2>

            <h3>{value}</h3>
            <button className="btn" onClick={() => setValue(value + 1)}>
                Increase
            </button>
        </>
    );
}

export default UseEffectBasics;