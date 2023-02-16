import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';

import { getTrendingMovies } from 'components/shared/services/api';

import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setItems([...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={items} />

      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      )}

      {error && <p>Error :C</p>}
    </>
  );
};

export default HomePage;
