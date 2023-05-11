import { useEffect, useState } from 'react';
import { fetchTrendingMoviesData } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchTrendingMoviesData();

        const filteredData = results.map(({ id, poster_path, title }) => ({
          id,
          poster_path,
          title,
        }));
        setMovies(filteredData);
      };
      getTrendingMovies();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <MovieList movies={movies}/>
  );
};

export default Home;