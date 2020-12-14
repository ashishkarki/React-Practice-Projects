import React from 'react'

function CustomButton({ label, clickHandler }) {
    return (
        <button className="btn" type="button" onClick={ clickHandler }>
            {
                !!label ? label : 'Click here to update'
            }
        </button>
    )
}

export default CustomButton
