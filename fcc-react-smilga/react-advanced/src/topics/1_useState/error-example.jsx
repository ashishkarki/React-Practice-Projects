import React from 'react'

import TextButtonCombo from '../../shared/ui/text-button-combo'

// Show cases how view state cannot be updated without some react state
const ErrorExample = () => {
    let title = 'Title 1'
    const clickHandler = () => {
        console.log('clickHandler in useState/ErrorExample clicked')
        title = 'Title 2'
    }


    return (
        <>
            <h3>
                Error Example: without useState the view doesn't update.
            </h3>

            {/* <h4>Title is { title }</h4>
            <button className="btn" type="button" onClick={ clickHandler }>
                Click to change title
            </button> */}

            <TextButtonCombo text={ title } clickHandler={ clickHandler } />
        </>
    )
}

export default ErrorExample
