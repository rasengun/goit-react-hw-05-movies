import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';

import { fetchTrending } from 'components/shared/services/api';

import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrending();
        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendingMoviesList results={items} />

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
