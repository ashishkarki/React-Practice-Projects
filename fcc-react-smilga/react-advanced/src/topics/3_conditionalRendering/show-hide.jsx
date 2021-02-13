import React, { useEffect, useState } from "react"

const ShowHide = () => {
    const [ show, setShow ] = useState(false)

    return (
        <>
            <h3>ShortCircuit's show/hide example</h3>

            <button className="btn" onClick={ () => setShow(!show) }>
                Toggle Show/Hide
            </button>

            {show && <Item /> }
        </>
    )
}

const Item = () => {
    const [ size, setSize ] = useState(window.innerWidth)

    const checkSize = () => setSize(window.innerWidth)

    useEffect(() => {
        console.log('new useEffect call with Item component');
        window.addEventListener('resize', checkSize)

        return () => {
            console.log('cleaning up right before new useEffect call');
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return <div style={ { marginTop: '2rem' } }>
        <h3>Window</h3>
        <h4>size: { size }</h4>
    </div>
}

export default ShowHide