import axios from "axios";

export const KEY = 'dafb4cf758741e9fd84f5c71b8506454';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMoviesData = async () => {
    try {
      return await axios.get(
        `${BASE_URL}trending/movie/week?api_key=${KEY}`
      );
    } catch (err) {
      console.log(err);
    }
};

export const fetchMovieInfo = async movieId => {
    try {
      return await axios.get(
        `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
      );
    } catch (err) {
      console.log(err);
    }
};

export const fetchMoviesBySearchWord = async searchWord => {
    try {
      return await axios.get(
        `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${searchWord}&page=1`
      );
    } catch (err) {
      console.log(err);
    }
};

export const fetchMovieCast = async movieId => {
    try {
      return await axios.get(
        `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
      );
    } catch (err) {
      console.log(err);
    }
};
  
export const fetchMovieReviews = async movieId => {
    try {
      return await axios.get(
        `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
      );
    } catch (err) {
      console.log(err);
    }
};

  