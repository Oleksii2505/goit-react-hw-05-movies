import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { fetchMovieInfo } from 'services/api';
import { FaAngleLeft } from 'react-icons/fa';
import {
  MovieDetailsBlock,
  BackLink,
  MovieInfoSection,
  TextContentThumb,
  OverviewBox,
  GenresBox,
  AdditionalInfoBox,
  AdditionalInfoList,
  AdditionalItemLink,
} from './MovieInfo.styled';
import { LoaderContainer } from 'components/Layout/Layout.styled';

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getInfo = async () => {
        const { data } = await fetchMovieInfo(movieId);
        setMovieDetails(data);
      };
      getInfo();
    } catch (err) {
      console.log(err.message);
      setMovieDetails({});
    }
  }, [movieId]);

  return (
    <MovieDetailsBlock>
      <BackLink to={pathToBack.current}>
        <FaAngleLeft />
        Back
      </BackLink>
      {Boolean(Object.keys(movieDetails).length) && (
        <div>
          <MovieInfoSection>
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : `https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=`
                }
                alt={movieDetails.title}
                width="352"
              />
            </div>
            <TextContentThumb>
              <h1>{movieDetails.title}</h1>
              <p>Average score: {movieDetails.vote_average}</p>
              <OverviewBox>
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
              </OverviewBox>
              <GenresBox>
                <h3>Genres</h3>
                {movieDetails.genres.map(({ name }) => name).join(', ')}
              </GenresBox>
              <AdditionalInfoBox>
                <h3>Additional Information</h3>
                <AdditionalInfoList>
                  <li>
                    <AdditionalItemLink to="cast">Cast</AdditionalItemLink>
                  </li>

                  <li>
                    <AdditionalItemLink to="reviews">
                      Reviews
                    </AdditionalItemLink>
                  </li>
                </AdditionalInfoList>
              </AdditionalInfoBox>
            </TextContentThumb>
          </MovieInfoSection>

          <Suspense
            fallback={
              <LoaderContainer>
                <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
              </LoaderContainer>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </MovieDetailsBlock>
  );
};

export default MovieInfo;