import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'components/shared/services/api';

const Cast = () => {
  const { id } = useParams();
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getMovieCredits(id);
        setCastMovie(cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCast();
  }, [id]);

  const elements = castMovie.map(({ id, name, profile_path, character }) => (
    <li key={id}>
      {profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt="poster"
          width="200"
        />
      ) : (
        `No image`
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      {elements.length > 0 ? (
        <ul>{elements}</ul>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
