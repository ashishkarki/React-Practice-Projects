import React from 'react'

const TextButtonCombo = ({ text, clickHandler }) => {
    return (
        <div>
            <h4>Title is { text }</h4>
            <button className="btn" type="button" onClick={ clickHandler }>
                Click to change title
            </button>
        </div>
    )
}

export default TextButtonCombo
