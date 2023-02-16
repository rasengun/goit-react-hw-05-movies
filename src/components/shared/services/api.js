import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '78817c69ceeb2b190f57a1a13eaf9936',
  },
});

export const getSearchMovie = async (query = '') => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });

  return data.results;
};

export const getTrendingMovies = async () => {
  const { data } = await instance.get(`/trending/movie/week`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
