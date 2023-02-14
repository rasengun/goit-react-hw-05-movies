import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '78817c69ceeb2b190f57a1a13eaf9936',
  },
});

export const fetchTrending = async () => {
  const { data } = await instance.get(`/trending/movie/week`);
  return data;
};

export const fechMovie = async (page = 1, query = '') => {
  const { data } = await instance.get(`/search/movie/`, {
    params: {
      page,
      query,
    },
  });
  return data.results;
};
