import { useEffect, useState } from 'react';
import { fetchTrendingMoviesData } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
// import { Link, useLocation } from 'react-router-dom';
// import { TrendingGallery, 
//   TrendingItem, 
//   ImgBox, 
//   PosterImg,
//   TitleMovieBox } from 'components/MovieList/MovieList.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();

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
  //   <TrendingGallery>
  //   {movies.map(({ id, poster_path, original_title }) => {
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
        
  );
};

export default Home;