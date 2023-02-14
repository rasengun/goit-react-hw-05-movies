import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'components/shared/services/api';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(id);
        setCast(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCast();
  }, [id]);
  console.log(cast);

  return (
    <>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt="poster"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;