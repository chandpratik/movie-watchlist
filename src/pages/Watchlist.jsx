import React, { useContext } from 'react';
import { MovieCard } from '../components/MovieCard';

import { GlobalContext } from '../context/GlobalState';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length}
            {watchlist.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In The List</h2>
        )}
      </div>
    </div>
  );
};
