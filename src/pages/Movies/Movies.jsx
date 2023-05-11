import { useEffect, useState } from 'react';
import {  useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { fetchMoviesBySearchWord } from 'services/api';

import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchForm/SearchForm';

const Movies = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryFromParams = searchParams.get('query');

  useEffect(() => {
    if (searchQueryFromParams === null) {
      return;
    }

    try {
      const getFilteredMovies = async () => {
        const {
          data: { results },
        } = await fetchMoviesBySearchWord(searchQueryFromParams);

        if (!results.length) {
          Notiflix.Notify.warning(
            'Oops, there are no movies by this search, try another title'
          );
        }
        const filteredData = results.map(
          ({ id, poster_path, original_title }) => ({
            id,
            poster_path,
            original_title,
          })
        );
        setMovies(filteredData);
      };

      getFilteredMovies();
    } catch (err) {
      console.log(err.message);
    }
  }, [searchQueryFromParams, searchParams]);

  const handleSubmit = query => {
     setSearchParams({query});
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      {movies && (
        <MovieList movies={movies}/>       
      )}
    </div>
  );
};

export default Movies;