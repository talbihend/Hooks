import React from 'react'
import StarRating from './StarRating'

const Filter = ({searchValue, handleSearch, searchRating, handleRating}) => {
  return (
    <div className="div-research">
      
      <h1 className="welcome">Welcome to Movie App</h1>
      <input value={searchValue} onChange={handleSearch}  type="text" placeholder="search here..." className="research"/>

       <div style={{marginTop:"40px", marginLeft:"30px"}} ><StarRating handleRating={handleRating} rate={searchRating} /></div>
    </div>
  )
}

export default Filter