import React from 'react'
import CustomButton from './custom-button'

const TextButtonCombo = ({ text, label, clickHandler }) => {
    return (
        <div>
            {
                !!text ?
                    <h4>Title is { text } </h4> :
                    '' }

            <CustomButton label={ label } clickHandler={ clickHandler } />
        </div>
    )
}

export default TextButtonCombo
