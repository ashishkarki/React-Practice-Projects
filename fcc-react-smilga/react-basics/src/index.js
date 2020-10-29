import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// variables
const books = [
  {
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/51x8WaTt84L._AC_SX368_.jpg',
    bookName: 'First Booke',
    author: 'First Authore',
  },
  {
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/41rbthdtokL._AC_SX368_.jpg',
    bookName: 'Second Booke',
    author: 'Second Authore',
  }
]

// stateless functional component
function BookList() {
  return (
    <section className='bookList'>
      {
        books.map((book, index) =>
          <Book
            key={ index }
            // imgSrc={ book.imgSrc }
            // bookName={ book.bookName }
            // author={ book.author }
            // book={ book }
            { ...book }
          />
        )
      }
    </section>
  )
}

const Book = ({ imgSrc, bookName, author }) => { //props
  // const { imgSrc, bookName, author } = props.book
  // const { imgSrc, bookName, author } = props

  return (
    <article className='book'>
      <img src={ imgSrc } height='90px' />
      <h1 style={ { color: 'silver' } }>{ bookName }</h1>
      <h4 className='author'>{ author }</h4>
      {/* <p>
        { props.children }
      </p> */}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
