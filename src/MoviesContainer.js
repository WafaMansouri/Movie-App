import React from 'react';
import MovieCard from './MovieCard';
const styleContainer={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    }
function MoviesContainer({movies, handleFunction}) {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:'center'}}>
            <button onClick={handleFunction}>Add New Movie</button>
            <div style={styleContainer}>
                {movies.map(el=> <MovieCard movie={el}/>)}       
            </div>
        </div> 
    )
}
export default MoviesContainer;