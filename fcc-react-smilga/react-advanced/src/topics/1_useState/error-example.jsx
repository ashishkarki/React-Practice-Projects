import React from 'react'
import ComponentTitle from '../../shared/ui/component-title'
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
            <ComponentTitle title='ErrorExample: without useState the view does not update' />

            <TextButtonCombo text={ title } clickHandler={ clickHandler } />
        </>
    )
}

export default ErrorExample
