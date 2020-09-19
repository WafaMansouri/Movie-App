import React from 'react';
import './App.css'
function MovieList({movies, searchByName, searchByRate}) {
    return (
        <div>
        <div className="scroller" style={{minWidth:300, height:"320px", border:'4px solid black', margin:10}}>
            <input type="text" placeholder="Search by name &#xF002;" className="search" 
            style={{fontFamily:'Arial, FontAwesome'}} 
            onChange={e=>searchByName(e.target.value)}></input>
            <ul>
                {movies.map(el=><li><a href={el.link} target="_blank">{el.name}</a></li>)}
            </ul>
        </div>
        <div className="scroller" style={{minWidth:300, height:"300px", border:'4px solid black', margin:10}}>
            <input type="number" placeholder="Search by rate &nbsp; &#xF002;" className="search" 
            style={{fontFamily:'Arial, FontAwesome'}}
            onChange={e=>searchByRate(e.target.value)}></input>
        </div>
        </div>
    ) 
}
export default MovieList;