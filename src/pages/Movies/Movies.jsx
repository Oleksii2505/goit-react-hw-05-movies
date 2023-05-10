import { useEffect, useState } from 'react';
import {  useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { FaSistrix } from 'react-icons/fa';
import { fetchMoviesBySearchWord } from 'services/api';
import {
  SearchBarHeader,
  SearchForm,
  SearchInput,
  SearchFormBtn,
  SearchFormBtnLabel,
} from './Movies.styled';

import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryFromParams = searchParams.get('query');
  // const location = useLocation();

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

  const onChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { value } = event.target.elements.search;

    setSearchQuery(value.toLowerCase().trim());
    setSearchParams({ query: value.toLowerCase().trim() });

    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Enter title of movie to search');
      value = '';
      return;
    }
    setSearchQuery('');
  };

  return (
    <div>
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormBtn type="submit" className="button">
            <FaSistrix size="24px" fill="#fff" />
            <SearchFormBtnLabel className="button-label">
              Search
            </SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchInput
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={onChange}
          />
        </SearchForm>
      </SearchBarHeader>

      {movies && (
        <MovieList movies={movies}/>
        // <TrendingGallery>
        //   {filteredMovies.map(({ id, poster_path, original_title }) => {
        //     return (
        //       <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
        //         <TrendingItem>
        //           <ImgBox>
        //             <PosterImg
        //               src={
        //                 poster_path
        //                   ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        //                   : `https://as1.ftcdn.net/v2/jpg/01/41/48/32/1000_F_141483247_cvrudefB00p8qNxoapWW54jjm3LzXFgz.jpg`
        //               }
        //               alt={original_title}
        //               width="352"
        //               height="400"
        //             />
        //           </ImgBox>
        //           <TitleMovieBox>
        //             <h2>{original_title}</h2>
        //           </TitleMovieBox>
        //         </TrendingItem>
        //       </Link>
        //     );
        //   })}
        // </TrendingGallery>

      )}
    </div>
  );
};

export default Movies;