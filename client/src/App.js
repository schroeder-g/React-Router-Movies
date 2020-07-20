import React, { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div className="App">

      <SavedList list={[ /* This is stretch */]} />
      <Link to="/"></Link>
      <Link to="/Movie-List">Filmography</Link>

    <Switch>
      <Route path="/movie-list/:id">
        <Movie movies = {movieList}/>
      </Route>
      <Route path="/movie-list">
        <MovieList movies = {movieList}/>
      </Route>
  </Switch>
    </div>

  );
};

export default App;
