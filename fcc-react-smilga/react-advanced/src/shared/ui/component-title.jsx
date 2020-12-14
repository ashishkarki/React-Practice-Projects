import React from 'react'

function ComponentTitle(props) {
    const style = {
        fontStyle: 'italic',
        fontSize: '1.5rem',
        color: 'blueviolet'
    }

    return (
        <>
            <h3 style={ style }>{ props.title }</h3>
            <hr style={ { marginBottom: '0.7rem' } } />
        </>
    )
}

export default ComponentTitle
