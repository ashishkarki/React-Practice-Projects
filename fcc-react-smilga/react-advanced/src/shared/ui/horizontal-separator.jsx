import React from 'react'

const HorizontalSeparator = (props) => {
    const style = {
        'margin': '1rem auto',
        'border': '1px groove salmon',
        'backgroundColor': 'salmon',
        'height': !!props.thick && props.thick ? '5px' : '2px'
    }

    return (
        <hr style={ style } />
    )
}

export default HorizontalSeparator
