import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMoviesData } from 'services/api';
import {
  TrendingItem,
  TrendingGallery,
  ImgBox,
  TitleMovieBox,
} from './Home.styled';
import { PosterImg } from 'pages/Movies/Movies.styled';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

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
        setPopularMovies(filteredData);
      };
      getTrendingMovies();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <TrendingGallery>
      {popularMovies.map(({ id, poster_path, title }) => {
        return (
          <Link to={`/movies/${id}`} key={id}>
            <TrendingItem>
              <ImgBox>
                <PosterImg
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : `https://as1.ftcdn.net/v2/jpg/01/41/48/32/1000_F_141483247_cvrudefB00p8qNxoapWW54jjm3LzXFgz.jpg`
                  }
                  alt={title}
                  width="352"
                />
              </ImgBox>
              <TitleMovieBox>
                <h2>{title}</h2>
              </TitleMovieBox>
            </TrendingItem>
          </Link>
        );
      })}
    </TrendingGallery>
  );
};

export default Home;