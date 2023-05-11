import React, { useState } from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import AddNewMovie from './Components/AddNewMovie';
import { moviesData } from './Components/Data';
import Detail from './Components/Detail';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const handleAdd = (NewMovie) => setMovies([...movies, NewMovie]); 
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => setSearchValue(e.target.value);
  const [searchRating, setSearchRating] = useState(0);
  const handleRating = (rate)=> setSearchRating(rate);
  const handleDelete = (id) =>{ const delArr = [...movies].filter((film)=> film.id !== id); setMovies(delArr);}
  const handleEdit = (em)=>setMovies(movies.map(el=>el.id===em.id?em:el))
  return (
    <div>
      <Router>
      
       <Routes>
        <Route path="/" element={
          <div>
            <Filter handleSearch={handleSearch} handleRating={handleRating} searchValue={searchValue} searchRating={searchRating}/>
            <MovieList handleEdit={handleEdit} handleDelete={handleDelete } list={movies.filter((mv)=> mv.title.toLowerCase().includes(searchValue.toLowerCase().trim()) && searchRating <= mv.rate)}/>
            <AddNewMovie handleAdd={handleAdd} />
          </div>
        }/>
         {/* <Route path="/info/:id" element={<Detail list={movies}/>}/> */}
       </Routes>
       
      </Router>
        
    </div>
  )
}

export default App

