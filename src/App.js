import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import MoviesContainer from './MoviesContainer';
//import images
import avatar from "./movies photos/avatar.jpg";
import blackWidow from "./movies photos/black widow.jpg";
import darkCrimes from "./movies photos/dark crimes.jpg";
import dora from "./movies photos/dora.jpg";
import ema from "./movies photos/ema.jpg";
import papillon from "./movies photos/papillon.jpg";
import splice from "./movies photos/splice.jpg";
import timeOut from "./movies photos/time out.jpg";
import tunisianHorror from "./movies photos/tunisian horror.jpg";
import AddModal from './AddModal';
function App() {
  const [movies, setMovies]=useState(
    [
    {name:"Avatar", date:2009, image:avatar, rate:4, link:"https://www.pinterest.fr/pin/75998312446035114/?autologin=true"},
    {name:"Black Widow", date:2020, image:blackWidow, rate:4, link:"https://wvwv.vfilms.me/4449-black-widow.html"},
    {name:"Dark Crimes", date:2018, image:darkCrimes, rate:5, link:"https://ww.filmstoon.icu/film/drame/245013-dark-crimes.html"},
    {name:"Dora", date:2019, image:dora, rate:3, link:"https://wvwv.vfilms.me/665-dora-et-la-cite-perdue-2019.html"},
    {name:"Ema Y Gaston", date:2019, image:ema, rate:4, link:"https://fr-grutli.cinefile.ch/movie/24601-ema-y-gaston#"},
    {name:"Papillon", date:2017, image:papillon, rate:5, link:"https://wvw.film-streamingy.com/films/papillon-en-streaming-7.html"},
    {name:"Splice", date:2010, image:splice, rate:5, link:"https://wwv.films-en-streaming.org/films/splice"},
    {name:"Time Out", date:2011, image:timeOut, rate:2, link:"#"},
    {name:"Tunisian Horror", date:2019, image:tunisianHorror, rate:4, link:"#"}
    ]
)
const [test, setTest]=useState(true);
const [testSearch, setTestSearch]=useState(false);
const [searchList, setSearchList]=useState(movies);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
    setTestSearch(false);
  }

  function handleFunction() { setTest(!test); }

  function searchByName(movieSearch) {
    setSearchList(movies.filter(el => el.name.toUpperCase().startsWith(movieSearch.toUpperCase())));
    setTestSearch(true);
  }

  function searchByRate(rateSearch) {
    setSearchList(movies.filter(el => el.rate == rateSearch));
    setTestSearch(true);
    rateSearch=="" && setTestSearch(false);
  }
  return (
    <div >
      {test? <div className="App"><MovieList movies={!testSearch? movies: searchList} 
      searchByName={searchByName} searchByRate={searchByRate}/>
      <MoviesContainer movies={!testSearch? movies: searchList} handleFunction={handleFunction}/> </div>
      :<AddModal addMovie={addMovie} handleFunction={handleFunction}/>}
    </div>
  )}
export default App;