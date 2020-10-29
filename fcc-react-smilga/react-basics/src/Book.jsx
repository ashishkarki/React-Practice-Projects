import React from 'react'

const Book = ({ imgSrc, bookName, author }) => {

    return (
        <article className='book'>
            <img src={ imgSrc } height='90px' />
            <h1 style={ { color: 'silver' } }>{ bookName }</h1>
            <h4 className='author'>{ author }</h4>
        </article>
    )
}

export default Book
