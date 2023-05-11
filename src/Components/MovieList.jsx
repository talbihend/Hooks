import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list, handleDelete, handleEdit }) => {
  return (
    <div  className='list-form'>
      {list.map((el)=> (<div><MovieCard card={el} handleDelete={handleDelete } handleEdit={handleEdit}/></div>))
      }

    </div>
    
  )
}

export default MovieList