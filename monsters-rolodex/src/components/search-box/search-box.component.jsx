import React from 'react'

import './search-box.styles.css'

const SearchBox = ({ placeholder, handleChange }) => (
  <div className='search-container'>
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
    <img src='https://img.icons8.com/officexs/16/000000/search.png' />
  </div>
)

export default SearchBox
