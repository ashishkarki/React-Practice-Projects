import React from 'react'

// Show cases how view state cannot be updated without some react state
const ErrorExample = () => {
    let title = 'Title 1'
    const clickHandler = () => {
        title = 'Title 2'
    }


    return (
        <>
            <h3>
                Error Example: without useState the view doesn't update.
            </h3>

            <h4>Title is { title }</h4>
            <button className="btn" type="button" onClick={ clickHandler }>
                Click to change title
            </button>
        </>
    )
}

export default ErrorExample
