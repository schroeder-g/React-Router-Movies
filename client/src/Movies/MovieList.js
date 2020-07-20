import React from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom'

const MovieList = ({movies}) => {
  const history = useHistory()

  const routeToMovies = () => {
    console.log(history)
    history.push('')
  }
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { url } = useRouteMatch()
  const { title, director, metascore } = movie;
  
  return (
    <Link to={`${url}/${movie.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}

export default MovieList;
