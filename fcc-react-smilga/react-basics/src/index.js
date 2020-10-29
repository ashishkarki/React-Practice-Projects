import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
import { books } from './books-data'
import Book from './Book'

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

ReactDom.render(<BookList />, document.getElementById('root'))
