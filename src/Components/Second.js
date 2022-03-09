import React from 'react'
import "./Second.css";
import SearchIcon from '@mui/icons-material/Search';

function Second() {
  return (
    <div className='header_search'>
      <SearchIcon/>
      <input type="text" />

      <div className='hello'>
        <h1>Hello Chinmay</h1>
      </div>

    </div>
    
  )
}

export default Second