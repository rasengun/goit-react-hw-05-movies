import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getMovieById } from 'components/shared/services/api';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
      <img
        alt=""
        src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
      />
      <h1>{movie?.title}</h1>
      <p>User Score: {(movie?.vote_average * 10).toFixed(2)}%</p>
      <h2>Overview</h2>
      <p>{movie?.overview}</p>
      <h2>Genres</h2>
      <ul>
        {movie?.genres !== undefined
          ? movie?.genres.map(({ id, name }) => <li key={id}>{name}</li>)
          : `No genres`}
      </ul>
      <p>Additional information</p>

      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default SingleMoviePage;
