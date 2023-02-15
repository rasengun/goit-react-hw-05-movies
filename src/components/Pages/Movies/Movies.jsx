import { useState, useEffect } from 'react';

import { getSearchMovie } from 'components/shared/services/api';

import MoviesList from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchPosts = async () => {
      try {
        const data = await getSearchMovie(search, page);

        setMovies([...data]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, [search, page]);
  console.log(movies);

  // const searchImages = ({ search }) => {
  //   setSearch(search);
  //   setMovies([]);
  //   setPage(1);
  // };

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  // const handleChange = ({ target }) => {
  //   const { value } = target;
  //   setSearch(value.toLowerCase());
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setSearch({ search });
  //   setSearch('');
  // };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} /> */}
    </>
  );
};

export default MoviesPage;
