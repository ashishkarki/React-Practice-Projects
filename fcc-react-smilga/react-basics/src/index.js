import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// variables
const imgSrc =
  'https://images-na.ssl-images-amazon.com/images/I/51x8WaTt84L._AC_SX368_.jpg'

// stateless functional component
function BookList() {
  return (
    <section className='bookList'>
      <Book bookName='First Booke' author='First Authore' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, necessitatibus soluta amet impedit perspiciatis ipsum perferendis modi rem, velit fugit natus enim quas, deserunt exercitationem atque? Repellendus ab porro at!
      </Book>

      <Book bookName='Second Booke' author='Second Authore' />
    </section>
  )
}

const Book = ({ bookName, author, children }) => {
  return (
    <article className='book'>
      <img src={ imgSrc } alt='image' height='90px' />
      <h1 style={ { color: 'silver' } }>{ bookName }</h1>
      <h4 className='author'>{ author }</h4>
      <p>
        { children }
      </p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
